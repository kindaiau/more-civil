interface Req {
  query?: Record<string, string | string[] | undefined>;
}

interface Res {
  status: (code: number) => Res;
  setHeader: (name: string, value: string) => void;
  send: (data: Buffer) => void;
}

export default async function handler(req: Req, res: Res) {
  const ref = typeof req.query?.ref === 'string' ? req.query?.ref : undefined;
  const maxwidth = typeof req.query?.maxwidth === 'string' ? req.query?.maxwidth : '600';
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!ref || !key) {
    res.status(400).send('Bad Request');
    return;
  }

  const url = new URL('https://maps.googleapis.com/maps/api/place/photo');
  url.searchParams.set('photo_reference', ref);
  url.searchParams.set('maxwidth', maxwidth);
  url.searchParams.set('key', key);

  const photoRes = await fetch(url.toString(), { redirect: 'follow' });
  const arrayBuffer = await photoRes.arrayBuffer();
  res.setHeader('content-type', photoRes.headers.get('content-type') || 'image/jpeg');
  res.status(200).send(Buffer.from(arrayBuffer));
}
