import { useEffect } from "react";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog – More Civil | Earthmoving & Water Delivery Services South Australia";
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "Expert insights on earthmoving equipment hire and water delivery services in South Australia. Read updates, project highlights, and industry expertise from More Civil's experienced team.";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <h1>More Civil Blog</h1>
          <p className="text-lg text-muted-foreground mb-12">Insights and updates from More Civil</p>

          <article className="space-y-4 max-w-3xl mx-auto">
            <h2>Building with Confidence: Insights from More Civil’s Director</h2>
            <p className="text-sm text-muted-foreground italic">
              By Shaun Reid, Director of More Civil – May 16, 2024
            </p>
            <p>
              Welcome to the first post on the More Civil blog. I’m Shaun Reid, and after more than three decades in
              South Australia’s earthmoving and construction scene, I’m proud to share our story and the knowledge
              we’ve gained along the way. Since founding More Civil in 2018, our goal has been simple: provide reliable
              earthmoving equipment hire and experienced operators who treat every project as if it were their own.
            </p>
            <p>
              Over the past few years we have rapidly grown into a trusted name for machinery hire across Adelaide and
              regional communities. Clients tell us they value our attention to safety, our transparent communication,
              and the way we deliver results without surprises. One recent review summed it up perfectly: our team
              “went above and beyond to ensure the project ran smoothly,” and that is exactly the standard we aim for
              every day.
            </p>
            <h3>Our Mission</h3>
            <p>
              The civil construction industry is always evolving, and with over 30 years of hands-on experience I’ve
              learned the importance of staying adaptable while never compromising on quality. More Civil has been
              proudly serving South Australia since 2018, and we’re committed to combining modern equipment with old-
              fashioned service. Whether it’s a small residential excavation or a large infrastructure project, our
              focus remains on safety, reliability and customer satisfaction.
            </p>
            <h3>What to Expect from This Blog</h3>
            <p>
              This space will feature practical tips for planning construction projects, news about our latest work, and
              insights into best practices for earthmoving and machinery hire in South Australia. We’ll highlight how
              to get the most from equipment on site, explain regulatory updates, and showcase the projects that make
              us proud to be part of the local industry. My hope is that these articles will help builders, developers,
              and property owners make informed decisions when it comes to earthworks and water services.
            </p>
            <p>
              Thank you for taking the time to read our inaugural post. I’m excited to share more stories and expertise
              in the months ahead. If there’s a topic you’d like us to cover or a question about our services, please
              don’t hesitate to <a href="/contact" className="underline hover:text-[#00B4D8]">get in touch</a>. Stay
              tuned for more updates from the team at More Civil.
            </p>
          </article>

          <hr className="my-16 border-muted-foreground/20" />

          <article className="space-y-4 max-w-3xl mx-auto">
            <h2>Water Delivery Service South Australia: Your Complete Guide to Reliable Water Supply</h2>
            <p className="text-sm text-muted-foreground italic">
              By Shaun Reid, Director of More Civil Water – September 13, 2025
            </p>
            <p>
              When your project needs reliable water delivery in South Australia, choosing the right partner can make 
              all the difference. After expanding More Civil's services to include <a href="/water" className="underline hover:text-[#00B4D8]">water delivery</a> across 
              SA, I've seen firsthand how critical dependable water supply is for construction sites, civil earthworks, 
              and emergency situations. Here's everything you need to know about professional water delivery services 
              in South Australia.
            </p>

            <h3>Understanding Water Delivery Needs in South Australia</h3>
            <p>
              South Australia's diverse landscape presents unique challenges for water access. From remote construction 
              sites in the Riverland to major infrastructure projects in Adelaide's growing suburbs, reliable water 
              delivery is essential. Whether you're managing a civil earthworks project, running a construction site, 
              or dealing with an emergency water shortage, having a trusted water delivery service can keep your 
              project on schedule and compliant with safety regulations.
            </p>

            <h3>Types of Water Delivery Services We Provide</h3>
            <p>
              Our <a href="/water" className="underline hover:text-[#00B4D8]">water delivery fleet</a> serves various industries across South Australia. Construction site water delivery 
              includes potable water for drinking and washing facilities, as well as non-potable water for dust 
              suppression and concrete mixing. For civil earthworks projects, we provide bulk water delivery for 
              compaction, road construction, and environmental compliance. Farm water supply and emergency water 
              delivery round out our comprehensive service offering, ensuring South Australian communities and 
              businesses have access to clean, reliable water when they need it most.
            </p>

            <h3>Benefits of Bulk Water Delivery</h3>
            <p>
              Bulk water delivery offers significant advantages over smaller, more frequent deliveries. Our water 
              trucks can deliver up to 32,000 litres in a single trip, reducing both costs and site disruption. 
              For projects requiring consistent water supply, bulk delivery ensures you have adequate reserves 
              on-site, eliminating delays caused by waiting for water deliveries. This approach is particularly 
              effective for large construction projects, mining operations, and agricultural applications where 
              water usage is predictable and substantial.
            </p>

            <h3>Choosing the Right Water Delivery Partner</h3>
            <p>
              Not all water delivery services are created equal. When selecting a water delivery company in South 
              Australia, consider their track record, fleet capacity, and commitment to quality. At More Civil Water, 
              our 30+ years in the construction industry means we understand project timelines and the critical nature 
              of reliable water supply. Our drivers are experienced professionals who know South Australian roads and 
              can navigate to remote sites safely and efficiently.
            </p>

            <h3>Water Quality and Compliance Standards</h3>
            <p>
              All water delivered by More Civil Water meets Australian drinking water standards when potable water 
              is required. Our water sources are regularly tested, and we maintain detailed records for compliance 
              purposes. For non-potable applications, we ensure water quality is appropriate for the intended use, 
              whether that's dust suppression, concrete mixing, or environmental applications. This attention to 
              quality gives our clients confidence that their projects will meet all regulatory requirements.
            </p>

            <h3>Regional Coverage Across South Australia</h3>
            <p>
              Our water delivery service covers metropolitan Adelaide and extends throughout regional South Australia. 
              From the Adelaide Hills to the Barossa Valley, Riverland to the Limestone Coast, we've built our 
              service network to reach projects wherever they're located. For Metro Adelaide, we offer same-day 
              delivery and emergency response services. Regional deliveries are scheduled efficiently to minimise 
              costs while ensuring reliable supply to remote locations.
            </p>

            <h3>Cost-Effective Water Solutions</h3>
            <p>
              Professional water delivery offers excellent value when you consider the total cost of water supply 
              for your project. Beyond the obvious savings from bulk delivery discounts, professional water delivery 
              eliminates the need for on-site water storage infrastructure, reduces labour costs associated with 
              managing water supply, and provides reliable scheduling that keeps projects on track. Our transparent 
              pricing structure means no surprises – you'll know exactly what water delivery costs before we arrive 
              on site.
            </p>

            <h3>Emergency Water Supply When You Need It</h3>
            <p>
              Emergencies don't wait for business hours. That's why More Civil Water offers 24/7 emergency water 
              delivery across Metro Adelaide. Whether it's a burst main affecting your construction site, equipment 
              failure disrupting your water supply, or an unexpected compliance requirement, our emergency response 
              team can deliver water quickly to keep your project running. For regional South Australia, we maintain 
              rapid response capabilities during business hours and emergency callout services after hours.
            </p>

            <h3>Water Truck Hire Options</h3>
            <p>
              Our modern water truck fleet includes vehicles ranging from 10,000 to 32,000 litre capacity, allowing 
              us to match the right truck to your specific delivery requirements. All trucks are equipped with 
              high-capacity pumps for efficient unloading and GPS tracking for accurate delivery confirmation. 
              Our drivers carry mobile communication equipment to coordinate deliveries and provide real-time 
              updates on delivery status.
            </p>

            <h3>Getting Started with Water Delivery</h3>
            <p>
              Ready to arrange reliable water delivery for your South Australian project? Our <a href="/water" className="underline hover:text-[#00B4D8]">online booking system</a> 
              makes it easy to request quotes and schedule deliveries. Simply specify your location, water type 
              requirements, delivery schedule, and volume needs. Our team will provide a detailed quote and confirm 
              delivery arrangements that work with your project timeline. For complex projects or ongoing water 
              supply needs, we're happy to discuss customised delivery schedules that ensure consistent water 
              availability without the premium cost of emergency deliveries.
            </p>

            <p>
              If you have questions about water delivery services in South Australia or need to discuss specific 
              project requirements, don't hesitate to <a href="/contact" className="underline hover:text-[#00B4D8]">contact our team</a>. We're here to ensure your project 
              has the reliable water supply it needs to succeed.
            </p>
          </article>
        </div>
      </section>
      <Footer />
      <style>{`
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.25rem; }
        .section { padding: 4rem 0; }
      `}</style>
    </Layout>
  );
};

export default Blog;
