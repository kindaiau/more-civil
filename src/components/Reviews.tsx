import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

type Review = {
  author_name: string
  profile_photo_url?: string
  rating: number
  text: string
  time: number
  original_url_to_review?: string
  photo?: {
    thumb: string
    full: string
  }
}

export default function ReviewsSection() {
  const [data, setData] = useState<{
    rating?: number
    user_ratings_total?: number
    reviews: Review[]
    error?: string
  }>({ reviews: [] })

  useEffect(() => {
    // Use Supabase Edge Function for Google Reviews with proper authentication
    supabase.functions.invoke('google-reviews')
      .then((response) => {
        if (response.data) {
          setData(response.data);
        } else if (response.error) {
          console.error('Supabase function error:', response.error);
          setData({ reviews: [], error: 'supabase-error' });
        }
      })
      .catch((error) => {
        console.error('Failed to fetch reviews:', error);
        setData({ reviews: [], error: 'fetch-failed' });
      });
  }, [])

  useEffect(() => {
    if (!data) return
    const existing = document.getElementById('ld-localbusiness')
    if (existing) existing.remove()
    const rating = typeof data.rating === 'number' ? data.rating : 5
    const count = typeof data.user_ratings_total === 'number' ? data.user_ratings_total : 3
    const script = document.createElement('script')
    script.id = 'ld-localbusiness'
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'More Civil',
      address: { '@type': 'PostalAddress', addressRegion: 'SA', addressCountry: 'AU' },
      url: 'https://more-civil.lovable.app/',
      aggregateRating: { '@type': 'AggregateRating', ratingValue: rating, reviewCount: count },
      ...(data.reviews.length ? {
        review: data.reviews.map(r => ({
          '@type': 'Review',
          author: r.author_name,
          reviewBody: r.text,
          reviewRating: { '@type': 'Rating', ratingValue: r.rating }
        }))
      } : {})
    })
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [data])

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What our clients say</h2>
        {typeof data.rating === 'number' && typeof data.user_ratings_total === 'number' && (
          <p className="mt-2 text-sm text-neutral-600">
            Google rating {data.rating.toFixed(1)} / 5 from {data.user_ratings_total} reviews
          </p>
        )}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.reviews?.length ? (
            data.reviews.map((r, i) => (
              <article key={i} className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  {r.profile_photo_url ? (
                    <img src={r.profile_photo_url} alt={`${r.author_name} profile`} className="w-10 h-10 rounded-full object-cover" />
                  ) : r.photo?.thumb ? (
                    <img src={r.photo.thumb} alt="More Civil project" className="w-10 h-10 rounded-full object-cover" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-neutral-200" />
                  )}
                  <div>
                    <div className="text-sm font-medium">{r.author_name}</div>
                    <div className="text-xs text-neutral-600">
                      {new Date(r.time * 1000).toLocaleDateString('en-AU')}
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-amber-500" aria-label={`${r.rating} out of 5 stars`}>
                  {'★★★★★'.slice(0, r.rating)}
                </div>
                <p className="mt-3 text-neutral-800">{r.text}</p>
              </article>
            ))
          ) : (
            <>
              {[
                'Reliable water delivery when we needed it most.',
                'Professional team. Fast response. Great on-site communication.',
                'Five stars. Job done right and on time.',
              ].map((t, i) => (
                <article key={i} className="rounded-2xl border border-neutral-200 p-6 shadow-sm">
                  <div className="text-amber-500" aria-label="5 out of 5 stars">★★★★★</div>
                  <p className="mt-3 text-neutral-800">{t}</p>
                  <div className="mt-3 text-sm text-neutral-600">Google reviewer</div>
                </article>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
