// src/components/AboutSection.tsx
export default function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <h2 id="about-title" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          About Us
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg">
          Since 2018, More Civil has delivered reliable gear and experienced operators across South Australia.
          Backed by 30+ years in the field, we keep earthworks moving: 15,000L Isuzu water trucks, tandem tippers,
          skid steers, and semi tippers — wet or dry hire. Based in Adelaide, ready when you are.
        </p>

        <div className="mt-8">
          <a
            href="/contact"
            aria-label="Touch base — contact More Civil"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 bg-gradient-to-r from-[#0B3B8C] to-[#3DA2FF]"
          >
            TOUCH BASE
          </a>
        </div>
      </div>
    </section>
  );
}