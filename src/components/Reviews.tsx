import { useEffect, useState } from "react";
import { Star } from "lucide-react";

interface Review {
  author_name: string;
  rating: number;
  text: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) return;

    fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&reviews_no_translations=true&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        const fiveStarReviews: Review[] =
          data.result?.reviews?.filter((r: Review) => r.rating === 5) || [];
        setReviews(fiveStarReviews);
      })
      .catch(() => {
        // silently fail
      });
  }, []);

  if (reviews.length === 0) return null;

  return (
    <section id="reviews" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <h2
          className="reveal font-extrabold mb-8 text-4xl text-center"
          style={{ fontFamily: "Montserrat" }}
        >
          What our customers say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white shadow-lg p-6"
            >
              <div className="flex mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p
                className="font-bold"
                style={{ fontFamily: "Montserrat" }}
              >
                {review.author_name}
              </p>
              <p className="text-slate-700 mt-2">
                {review.text.length > 120
                  ? review.text.slice(0, 120) + "..."
                  : review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
