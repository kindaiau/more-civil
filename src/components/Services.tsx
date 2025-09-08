import { Card } from "@/components/ui/card";
const ServiceCard = ({
  badge,
  title,
  children
}: {
  badge: string;
  title: string;
  children: React.ReactNode;
}) => <Card className="reveal rounded-2xl border border-slate-200 bg-white shadow-lg p-10 h-full">
    <span className="inline-block bg-[#e0f7ff] text-[#043b4a] px-3 py-1 rounded-full font-bold text-sm mb-3">
      {badge}
    </span>
    <h3 className="font-bold text-lg mb-3" style={{
    fontFamily: "Montserrat"
  }}>
      {title}
    </h3>
    <div className="space-y-3 text-slate-700">{children}</div>
  </Card>;
export default function Services() {
  return <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="reveal font-extrabold text-4xl md:text-5xl lg:text-6xl text-center leading-tight text-foreground mb-8" style={{fontFamily: "Montserrat"}}>
          What we do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <ServiceCard badge="Water Delivery" title="Reliable water delivery">
            <p>Bulk water delivery for tanks, pools, dust suppression, civil projects and emergency supply across South Australia.</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>2 x 15,000L Isuzu water trucks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Potable and non-potable water</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Tanks, pools, sites, events</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Same-day delivery available</span>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#contact" className="bg-[#00B4D8] hover:bg-[#00A3C4] text-white font-extrabold px-4 py-2 rounded-lg text-sm transition-colors">
                Book Water
              </a>
            </div>
          </ServiceCard>

          <ServiceCard badge="Civil Works" title="Earthmoving & construction">
            <p>Professional earthmoving, site preparation, drainage and construction works across South Australia.</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Site cuts and preparation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Drainage and trenching</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>House pads and driveways</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Fully insured operations</span>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#quote" className="bg-[#00B4D8] hover:bg-[#00A3C4] text-white font-extrabold px-4 py-2 rounded-lg text-sm transition-colors">
                Request Quote
              </a>
            </div>
          </ServiceCard>
        </div>
      </div>
    </section>;
}