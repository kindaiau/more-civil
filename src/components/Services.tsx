import { Card } from "@/components/ui/card";

const ServiceCard = ({
  badge,
  title,
  children,
}: {
  badge: string;
  title: string;
  children: React.ReactNode;
}) => (
  <Card className="reveal rounded-2xl border border-slate-200 bg-white shadow-lg p-10 h-full">
    <span className="inline-block bg-[#e0f7ff] text-[#043b4a] px-3 py-1 rounded-full font-bold text-sm mb-3">
      {badge}
    </span>
    <h3
      className="font-bold text-lg mb-3"
      style={{
        fontFamily: "Montserrat",
      }}
    >
      {title}
    </h3>
    <div className="space-y-3 text-slate-700">{children}</div>
  </Card>
);
export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <h2
          style={{
            fontFamily: "Montserrat",
          }}
          className="reveal font-extrabold mb-8 text-4xl px-0 py-0 my-0 mx-[38px] text-center"
        >
          What we do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <ServiceCard badge="Water Delivery" title="Potable & non-potable">
            <p>Reliable bulk delivery for tanks, pools, events, civil projects and roadworks.</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>2,000 L trailer deliveries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>8,000 L and 13,000 L truck capacities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>17,500 L road-ready units</span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="#contact"
                className="border-2 border-[#00B4D8] text-[#00B4D8] font-extrabold px-4 py-2 rounded-lg text-sm hover:bg-[#00B4D8] hover:text-white transition-colors"
              >
                Book Water
              </a>
            </div>
          </ServiceCard>

          <ServiceCard badge="Civil Works" title="Earthmoving & site prep">
            <p>Precise site cuts, trenching, drainage, pads, driveways and tidy handovers.</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Laser-accurate levels and compaction</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Tight-access specialists</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Clean, safe work sites</span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="#quote"
                className="border-2 border-[#00B4D8] text-[#00B4D8] font-extrabold px-4 py-2 rounded-lg text-sm hover:bg-[#00B4D8] hover:text-white transition-colors"
              >
                Request Quote
              </a>
            </div>
          </ServiceCard>

          <ServiceCard badge="Compliance" title="Safety & assurance">
            <p>Fully insured operations with SWMS and plant risk assessments available on request.</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Clear communication and scheduling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Transparent pricing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Local South Australian crew</span>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="#contact"
                className="border-2 border-[#00B4D8] text-[#00B4D8] font-extrabold px-4 py-2 rounded-lg text-sm hover:bg-[#00B4D8] hover:text-white transition-colors"
              >
                About us
              </a>
            </div>
          </ServiceCard>
        </div>
      </div>
    </section>
  );
}
