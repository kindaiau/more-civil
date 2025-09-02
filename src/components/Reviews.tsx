import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface Review {
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

const truncate = (text: string) =>
  text.length > 140 ? `${text.slice(0, 140)}…` : text;

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [meta, setMeta] = useState<{ rating?: number; total?: number }>({});

  useEffect(() => {
    fetch('/api/reviews')
      .then((res) => res.json())
      .then((data) => {
        if (data?.reviews) setReviews(data.reviews);
        if (data?.rating) setMeta({ rating: data.rating, total: data.user_ratings_total });
        if (data?.error) console.warn('Reviews API fallback', data.error);
      })
      .catch((err) => console.warn('Reviews API fallback', err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (reviews.length && meta.rating) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'More Civil',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: meta.rating,
          reviewCount: meta.total,
        },
        review: reviews.map((r) => ({
          '@type': 'Review',
          author: r.author_name,
          reviewBody: r.text,
          reviewRating: { '@type': 'Rating', ratingValue: r.rating },
        })),
      });
      document.head.appendChild(script);
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [reviews, meta]);

  if (!loading && reviews.length === 0) return null;

  return (
    <section id="reviews" className="mt-12" aria-labelledby="reviews-title">
      <div className="max-w-7xl mx-auto px-10">
        <h2
          id="reviews-title"
          className="text-3xl font-extrabold text-center mb-8"
          style={{ fontFamily: 'Montserrat' }}
        >
          Customer Reviews
        </h2>
        {loading ? (
          <div className="grid gap-8 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-48 bg-white border border-[#E5E7EB] rounded-lg shadow-sm animate-pulse p-5"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-3">
            {reviews.map((review, idx) => (
              <article
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm p-5"
              >
                <div className="flex items-center mb-4">
                  {review.profile_photo_url && (
                    <img
                      src={review.profile_photo_url}
                      alt={`${review.author_name}'s profile photo`}
                      className="w-14 h-14 rounded-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="ml-4">
                    <p className="font-semibold">{review.author_name}</p>
                    <div className="flex" aria-label="5 star rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-[#00B4D8] fill-[#00B4D8]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p
                  className="text-sm text-slate-700"
                  style={{
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {truncate(review.text)}
                </p>
                {review.photo && (
                  <a
                    href={review.photo.full}
                    target="_blank"
                    rel="noopener"
                    className="mt-4 block w-[120px] h-[120px]"
                  >
                    <img
                      src={review.photo.thumb}
                      alt="Customer submitted photo"
                      className="w-[120px] h-[120px] object-cover rounded"
                      loading="lazy"
                    />
                  </a>
                )}
                {review.original_url_to_review && (
                  <a
                    href={review.original_url_to_review}
                    target="_blank"
                    rel="noopener"
                    className="mt-4 inline-block text-sm text-[#00B4D8]"
                  >
                    Read on Google
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
        <div className="text-center mt-8">
          <a
            href="https://share.google/5FTrL7ap7qMBWKyVz"
            target="_blank"
            rel="noopener"
            className="text-sm text-[#00B4D8]"
          >
            See all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
