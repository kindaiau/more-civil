export const revalidate = 86400;

interface Req {
  query?: Record<string, string | string[] | undefined>;
}

interface Res {
  status: (code: number) => Res;
  json: (data: unknown) => void;
  setHeader: (name: string, value: string) => void;
}

interface RawReview {
  author_name?: string;
  profile_photo_url?: string;
  relative_time_description?: string;
  text?: string;
  rating?: number;
  time?: number;
}

interface Review {
  author_name: string;
  profile_photo_url?: string;
  relative_time_description?: string;
  text: string;
  rating: number;
  time?: number;
}

function selectFiveStar(reviews: RawReview[]): Review[] {
  return reviews
    .filter((r) => r.rating === 5 && r.text)
    .sort((a, b) => (b.time || 0) - (a.time || 0))
    .slice(0, 3)
    .map((r) => ({
      author_name: r.author_name || '',
      profile_photo_url: r.profile_photo_url,
      relative_time_description: r.relative_time_description,
      text: r.text as string,
      rating: r.rating as number,
      time: r.time,
    }));
}

export { selectFiveStar };

export default async function handler(_req: Req, res: Res) {
  try {
    const key = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;
    if (!key || !placeId) {
      res.status(500).json({ error: 'Missing API config' });
      return;
    }

    const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    url.searchParams.set('place_id', placeId);
    url.searchParams.set('fields', 'rating,user_ratings_total,reviews,photos');
    url.searchParams.set('key', key);

    const fetchRes = await fetch(url.toString());
    const data = await fetchRes.json();

    const status = data?.status;
    if (status !== 'OK' || !data?.result) {
      res.status(502).json({ error: status || 'No result' });
      return;
    }

    const { rating, user_ratings_total, reviews = [], photos = [] } = data.result;
    const fiveStar = selectFiveStar(reviews as RawReview[]);
    const placePhotoRef = photos?.[0]?.photo_reference || null;

    res.setHeader('Cache-Control', 's-maxage=86400');
    res.status(200).json({
      rating,
      user_ratings_total,
      reviews: fiveStar,
      placePhotoRef,
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : 'Proxy error';
    res.status(500).json({ error: message });
  }
}
