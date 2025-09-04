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
            <div className="bg-green-50 border border-green-200 rounded-lg p-3 mt-3 mb-3">
              <div className="flex items-center gap-2 text-green-700 font-bold text-sm">
                <span>✅</span>
                <span>Available Today • Same-day delivery</span>
              </div>
            </div>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>2,000 L trailer (Toyota HiLux) - Tight access</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>8,000 L truck (Isuzu FRR) - Standard delivery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>13,000 L truck (Isuzu FVR) - Bulk orders</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>17,500 L road-ready units - Large sites</span>
              </li>
            </ul>
            <div className="mt-3 text-sm text-slate-600 bg-slate-50 p-2 rounded">
              <strong>Safety:</strong> Zero incidents in 5+ years • Daily tank cleaning
            </div>
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
                <span>20T Excavator (Doosan DX225LC) - Heavy earthworks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Bobcat S650 - Precision work & tight spaces</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Site cuts, drainage, house pads, driveways</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Council-approved for road works</span>
              </li>
            </ul>
            <div className="mt-3 text-sm text-slate-600 bg-slate-50 p-2 rounded">
              <strong>Equipment:</strong> Modern fleet serviced monthly • GPS tracking
            </div>
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
                <span>$20M Public Liability Insurance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>SWMS for all high-risk activities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>Plant risk assessments available</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">✓</span>
                <span>SA WorkSafe compliant operations</span>
              </li>
            </ul>
            <div className="mt-3 text-sm text-slate-600 bg-slate-50 p-2 rounded">
              <strong>Documentation:</strong> Insurance certificates • Safety reports downloadable
            </div>
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
