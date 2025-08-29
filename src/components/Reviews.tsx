// TODO: Replace placeholder reviews with actual content.
const reviews = [
  { author: 'Reviewer 1', text: 'Placeholder review text.' },
  { author: 'Reviewer 2', text: 'Placeholder review text.' },
  { author: 'Reviewer 3', text: 'Placeholder review text.' },
  { author: 'Reviewer 4', text: 'Placeholder review text.' },
  { author: 'Reviewer 5', text: 'Placeholder review text.' },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="reveal font-extrabold text-3xl mb-8 text-center" style={{fontFamily:'Montserrat'}}>What our customers say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="reveal rounded-2xl border border-slate-200 bg-white shadow-lg p-8">
              <p className="italic mb-4 text-slate-700">"{review.text}"</p>
              <p className="font-bold text-slate-900">{review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
