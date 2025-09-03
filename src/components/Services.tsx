import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const Card = ({
  badge,
  title,
  children,
}: {
  badge: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-white shadow-lg p-10">
    <span className="inline-block bg-[#e0f7ff] text-[#043b4a] px-3 py-1 rounded-full font-bold text-sm mb-3">
      {badge}
    </span>
    <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "Montserrat" }}>
      {title}
    </h3>
    <div className="[&>ul]:list-disc [&>ul]:pl-5 [&>p]:text-slate-700 [&>ul]:text-slate-700">{children}</div>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <Container>
        <h2
          style={{ fontFamily: "Montserrat" }}
          className="reveal font-extrabold mb-8 text-4xl text-center"
        >
          What we do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card badge="Water Delivery" title="Potable & non-potable">
            <p>Bulk deliveries for tanks, pools, events, civil & roadworks.</p>
            <ul className="mt-3">
              <li>2,000 L trailers</li>
              <li>8,000 L & 13,000 L trucks</li>
              <li>17,500 L trucks ready to go</li>
            </ul>
            <div className="mt-4">
              <Button asChild variant="outline" size="sm">
                <a href="#contact">Book Water</a>
              </Button>
            </div>
          </Card>

          <Card badge="Civil Works" title="Earthmoving & site prep">
            <p>Site cuts, trenching, drainage, pads, driveways and tidy handovers.</p>
            <ul className="mt-3">
              <li>Accurate levels & compaction</li>
              <li>Tight-access specialists</li>
              <li>Clean, safe worksites</li>
            </ul>
            <div className="mt-4">
              <Button asChild variant="outline" size="sm">
                <a href="#quote">Request Quote</a>
              </Button>
            </div>
          </Card>

          <Card badge="Compliance" title="Safety & assurance">
            <p>Fully insured. SWMS and plant risk assessments available on request.</p>
            <ul className="mt-3">
              <li>Clear comms & scheduling</li>
              <li>Honest pricing</li>
              <li>Local SA crew</li>
            </ul>
            <div className="mt-4">
              <Button asChild variant="outline" size="sm">
                <a href="#contact">About us</a>
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
}