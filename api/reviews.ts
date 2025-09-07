import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const shareLink = 'https://share.google/5FTrL7ap7qMBWKyVz';
const cacheDir = path.join(process.cwd(), '.cache');
const placeIdFile = path.join(cacheDir, 'place-id.json');
const reviewsCacheFile = path.join(cacheDir, 'reviews-cache.json');

async function resolvePlaceId(apiKey: string): Promise<string | undefined> {
  if (process.env.GOOGLE_PLACE_ID) return process.env.GOOGLE_PLACE_ID;
  try {
    if (fs.existsSync(placeIdFile)) {
      return JSON.parse(fs.readFileSync(placeIdFile, 'utf8')).placeId;
    }
    const resp = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURIComponent(
        shareLink
      )}&inputtype=textquery&fields=place_id&key=${apiKey}`
    );
    const data = await resp.json();
    const id = data.candidates?.[0]?.place_id;
    if (id) {
      fs.mkdirSync(cacheDir, { recursive: true });
      fs.writeFileSync(placeIdFile, JSON.stringify({ placeId: id }));
    }
    return id;
  } catch {
    return undefined;
  }
}

interface GoogleReview {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  time: number;
  author_url?: string;
  photos?: { photo_reference: string }[];
}

export interface FormattedReview {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  time: number;
  original_url_to_review?: string;
  photo?: {
    thumb: string;
    full: string;
  };
}

export function filterReviews(
  reviews: GoogleReview[],
  apiKey: string
): FormattedReview[] {
  return reviews
    .filter(
      (r) => r.rating === 5 && (r.profile_photo_url || r.photos?.length)
    )
    .sort((a, b) => b.time - a.time)
    .slice(0, 3)
    .map((r) => {
      const ref = r.photos?.[0]?.photo_reference;
      const photo = ref
        ? {
            thumb: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=120&photoreference=${ref}&key=${apiKey}`,
            full: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photoreference=${ref}&key=${apiKey}`,
          }
        : undefined;
      return {
        author_name: r.author_name,
        profile_photo_url: r.profile_photo_url,
        rating: r.rating,
        text: r.text,
        time: r.time,
        original_url_to_review: r.author_url,
        photo,
      };
    });
}

interface Req {
  headers?: Record<string, string | undefined>;
}

interface Res {
  status: (code: number) => Res;
  json: (data: unknown) => void;
  setHeader: (name: string, value: string) => void;
  end: () => void;
}

export default async function handler(req: Req, res: Res) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey) {
    res.status(200).json({ fallbackReviews: [], error: 'missing api key' });
    return;
  }
  const placeId = await resolvePlaceId(apiKey);
  if (!placeId) {
    res.status(200).json({ fallbackReviews: [], error: 'place id not found' });
    return;
  }
  try {
    if (fs.existsSync(reviewsCacheFile)) {
      const cache = JSON.parse(fs.readFileSync(reviewsCacheFile, 'utf8'));
      if (Date.now() - cache.timestamp < 12 * 60 * 60 * 1000) {
        const etag = cache.etag;
        if (req.headers?.['if-none-match'] === etag) {
          res.status(304).end();
          return;
        }
        res.setHeader('ETag', etag);
        res.setHeader('Cache-Control', 'public, max-age=43200');
        res.status(200).json(cache.data);
        return;
      }
    }
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,user_ratings_total,rating,photos&reviews_no_translations=true&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const reviews = filterReviews(data.result?.reviews || [], apiKey);
    const payload = {
      reviews,
      rating: data.result?.rating,
      user_ratings_total: data.result?.user_ratings_total,
    };
    const etag = crypto
      .createHash('md5')
      .update(JSON.stringify(payload))
      .digest('hex');
    fs.mkdirSync(cacheDir, { recursive: true });
    fs.writeFileSync(
      reviewsCacheFile,
      JSON.stringify({ timestamp: Date.now(), data: payload, etag })
    );
    res.setHeader('ETag', etag);
    res.setHeader('Cache-Control', 'public, max-age=43200');
    res.status(200).json(payload);
  } catch (e) {
    console.error(e);
    res.status(200).json({ fallbackReviews: [], error: true });
  }
}
