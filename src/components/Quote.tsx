import ContactForm from "./ContactForm";
import WaterBookingForm from "./WaterBookingForm";

export default function Quote() {
  return (
    <section id="quote" className="py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-10 text-center">
        <h2 className="reveal font-extrabold text-4xl md:text-5xl lg:text-6xl text-center leading-tight text-foreground mb-8" style={{fontFamily: 'Montserrat'}}>Get in Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form for General Inquiries */}
          <ContactForm />

          {/* Water Booking Form */}
          <WaterBookingForm />
        </div>
      </div>
    </section>
  );
}