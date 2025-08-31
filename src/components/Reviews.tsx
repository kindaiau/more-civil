const reviews = [
  {
    author: 'Karen B.',
    text: 'Excellent service and very professional from start to finish. Highly recommend More Civil!',
  },
  {
    author: 'Michael T.',
    text: 'Reliable, efficient and easy to work with – the team delivered exactly what we needed.',
  },
  {
    author: 'Sophie L.',
    text: 'Great communication and quality equipment. Will be using More Civil again.',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <h2
          className="reveal font-extrabold text-3xl mb-8 text-center"
          style={{ fontFamily: 'Montserrat' }}
        >
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="reveal rounded-2xl border border-slate-200 bg-white shadow-lg p-8"
            >
              <p className="italic mb-4 text-slate-700">"{review.text}"</p>
              <p className="font-bold text-slate-900">
                &ndash; {review.author}, <span className="text-yellow-500" aria-hidden="true">★★★★★</span> Google review
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://share.google/LBMsDS1gd4AzBJGTh"
            target="_blank"
            rel="nofollow noopener"
            className="text-[#00B4D8] hover:underline"
          >
            Read more reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
