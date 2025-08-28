export default function HeroImage() {
  return (
    <section className="relative w-full bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <img
          src="/more-civil-hero-image.svg"
          alt="More Civil hero image"
          className="w-full h-auto max-h-[600px] object-cover rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}