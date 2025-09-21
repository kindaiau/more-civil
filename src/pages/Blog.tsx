import { useEffect } from "react";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

const Blog = () => {
  useEffect(() => {
    // Enhanced SEO metadata
    document.title = "Blog – More Civil | Expert Water Tank Maintenance & Civil Services Adelaide";
    
    // Remove existing meta tags
    const existingMeta = document.querySelector('meta[name="description"]');
    if (existingMeta) existingMeta.remove();
    
    const existingKeywords = document.querySelector('meta[name="keywords"]');
    if (existingKeywords) existingKeywords.remove();
    
    // Add enhanced meta description
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "Expert insights on rainwater tank maintenance, water delivery, and civil services in Adelaide. Read spring preparation guides, project highlights, and professional expertise from More Civil's experienced team.";
    document.head.appendChild(meta);
    
    // Add keywords for SEO
    const keywords = document.createElement("meta");
    keywords.name = "keywords";
    keywords.content = "rainwater tank cleaning Adelaide, spring tank maintenance, water delivery South Australia, civil earthworks, tank preparation, More Civil Water";
    document.head.appendChild(keywords);
    
    // Add structured data for the blog
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "More Civil Blog",
      "description": "Expert insights on water services, tank maintenance, and civil works in South Australia",
      "url": window.location.href,
      "publisher": {
        "@type": "Organization",
        "name": "More Civil",
        "url": "https://www.morecivil.au",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "South Australia",
          "addressCountry": "AU"
        }
      },
      "mainEntity": [
        {
          "@type": "BlogPosting",
          "headline": "Preparing Your Rainwater Tank for Spring: Insights from Adelaide Expert Shaun Reid",
          "author": {
            "@type": "Person",
            "name": "Shaun Reid",
            "jobTitle": "General Manager",
            "worksFor": {
              "@type": "Organization",
              "name": "More Civil & Water"
            }
          },
          "datePublished": "2025-09-21",
          "image": "https://www.morecivil.au/water-truck.png",
          "articleSection": "Water Tank Maintenance",
          "keywords": "rainwater tank cleaning, spring maintenance, Adelaide water services",
          "about": {
            "@type": "Thing",
            "name": "Rainwater Tank Maintenance"
          }
        }
      ]
    });
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(meta);
      document.head.removeChild(keywords);
      document.head.removeChild(script);
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

          <hr className="my-16 border-muted-foreground/20" />

          <article className="space-y-4 max-w-3xl mx-auto" itemScope itemType="https://schema.org/BlogPosting">
            <header>
              <h2 itemProp="headline">Preparing Your Rainwater Tank for Spring: Insights from Adelaide Expert Shaun Reid</h2>
              <p className="text-sm text-muted-foreground italic" itemProp="author" itemScope itemType="https://schema.org/Person">
                By <span itemProp="name">Shaun Reid</span>, <span itemProp="jobTitle">General Manager at <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization"><span itemProp="name">More Civil & Water</span></span></span> – <time itemProp="datePublished" dateTime="2025-09-21">September 21, 2025</time>
              </p>
            </header>
            
            <section itemProp="articleBody">
              <p>
                As the chill of winter fades and spring blossoms in Adelaide, it's the perfect time to turn our attention to one of the city's most valuable assets: rainwater tanks. With our Mediterranean climate bringing variable rainfall—often drier in spring—ensuring your tank is clean and ready can make all the difference in water quality, efficiency, and longevity. I'm drawing on the expertise of Shaun Reid, General Manager at <a href="/water" className="underline hover:text-[#00B4D8]">More Civil & Water</a>, Adelaide's go-to for reliable water delivery and civil services. Passionate about clean, safe water access, Shaun emphasizes proactive maintenance to avoid common pitfalls like contamination or system failures. Here's a comprehensive guide based on his local insights and best practices tailored to Adelaide's conditions.
              </p>

              <h3>Why Clean Your Rainwater Tank? The Adelaide Perspective</h3>
              <p>
                In Adelaide, where we rely heavily on harvested rainwater for gardens, laundry, and even drinking in some households, tank hygiene isn't just a chore—it's essential for health and sustainability. Shaun Reid points out that sediments, leaves, bird droppings, and even pollutants from urban air can accumulate over winter, leading to bacterial growth or blockages. According to health guidelines, unclean tanks can harbor pathogens like Salmonella, as seen in local studies on tank contamination. Regular cleaning prevents this, ensuring your water remains fresh as spring rains replenish supplies.
              </p>
              <p>
                Shaun advises scheduling maintenance before the warmer months hit, when evaporation increases and demand spikes for irrigation. With projections of decreasing spring rainfall due to climate shifts, a well-prepped tank maximizes every drop, aligning with Adelaide's push for water-sensitive urban design.
              </p>

              <h3>Step-by-Step Guide to Cleaning Your Rainwater Tank</h3>
              <p>
                Shaun recommends a thorough clean at least once a year, ideally in late winter or early spring when tanks are lower on water. Here's how to do it safely and effectively:
              </p>

              <section itemScope itemType="https://schema.org/HowTo">
                <h4 itemProp="name">Professional Tank Cleaning Process</h4>
                
                <div itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                  <h5 itemProp="name">1. Inspect and Prepare the Catchment Area</h5>
                  <div itemProp="text">
                    <p>Start with your roof and gutters. Clear away leaves, twigs, and debris that could wash into the tank during the first spring showers. In Adelaide's leafy suburbs, eucalypts and other natives drop plenty of organic matter—Shaun stresses installing or cleaning leaf guards and first-flush diverters to redirect initial dirty runoff. This simple step can reduce contamination by up to 90%.</p>
                  </div>
                </div>

                <div itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                  <h5 itemProp="name">2. Drain and Access the Tank</h5>
                  <div itemProp="text">
                    <p>Safely drain the tank using a pump or outlet valve. Never enter a confined space without proper ventilation and a spotter—Shaun warns of the risks, echoing national safety guidelines. For larger tanks, consider professional services like those from local specialists who use vacuum systems to remove sludge without full entry.</p>
                  </div>
                </div>

                <div itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                  <h5 itemProp="name">3. Remove Sludge and Scrub</h5>
                  <div itemProp="text">
                    <p>Once accessible, scoop or vacuum out built-up sediment at the bottom. Use a soft brush and mild, non-toxic cleaner (avoid harsh chemicals that could taint the water). Rinse thoroughly with clean water. Shaun notes that in Adelaide's hard water areas, mineral buildup can be an issue—test for this and descale if needed.</p>
                  </div>
                </div>

                <div itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                  <h5 itemProp="name">4. Disinfect if Necessary</h5>
                  <div itemProp="text">
                    <p>For tanks used for potable water, add a chlorine-based disinfectant (following label instructions) and let it sit before rinsing. Shaun advises testing water quality post-clean—kits are available from SA Health or local suppliers—to ensure it's free of bacteria or heavy metals.</p>
                  </div>
                </div>

                <div itemProp="step" itemScope itemType="https://schema.org/HowToStep">
                  <h5 itemProp="name">5. Check Infrastructure</h5>
                  <div itemProp="text">
                    <p>Inspect for cracks, leaks, or rust, especially on older poly or concrete tanks common in Adelaide. Verify pumps, pipes, and overflows are functioning. Shaun recommends UV filters or post-tank filtration for added protection against microbes.</p>
                  </div>
                </div>
              </section>

              <h3>Spring-Specific Preparations: Maximizing Efficiency in Adelaide</h3>
              <p>
                Spring in Adelaide means transitioning from wet winters to drier, warmer days, so preparation focuses on conservation and quality. Shaun Reid highlights these key actions:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Boost Filtration:</strong> Clean or replace inlet screens and filters. With pollen and dust picking up in spring, this prevents clogs and maintains flow.</li>
                <li><strong>Monitor Water Levels:</strong> Top up if low using delivered clean water—services like <a href="/water" className="underline hover:text-[#00B4D8]">More Civil & Water</a> can provide potable options to avoid shortages.</li>
                <li><strong>Pest Prevention:</strong> Seal entry points to keep out insects, rodents, or frogs, which thrive in spring. Shaun suggests mosquito-proof meshes, vital in our warmer climate.</li>
                <li><strong>Seasonal Testing:</strong> As temperatures rise, algal growth can spike. Test pH and clarity early in spring, and aerate if stagnant.</li>
                <li><strong>Sustainable Upgrades:</strong> Consider adding solar pumps or smart monitors for efficiency, aligning with Adelaide's eco-friendly initiatives.</li>
              </ul>

              <h3>Common Mistakes to Avoid, Per Shaun Reid</h3>
              <p>
                Shaun has seen it all in his years managing water services: Don't neglect gutters—clogged ones are the top cause of dirty tanks. Avoid over-chlorinating, which can harm beneficial bacteria in non-potable systems. And always prioritize safety—DIY is fine for small tanks, but pros handle the big jobs to prevent accidents.
              </p>

              <h3>Professional Water Services in Adelaide</h3>
              <p>
                When your tank needs professional attention or emergency water supply, <a href="/water" className="underline hover:text-[#00B4D8]">More Civil & Water</a> provides comprehensive water services across Adelaide and regional South Australia. From tank cleaning to emergency water delivery, our experienced team ensures your water systems operate efficiently year-round.
              </p>

              <section className="bg-muted/50 p-6 rounded-lg my-8">
                <h4 className="font-semibold text-lg mb-3">Need Professional Tank Maintenance?</h4>
                <p className="mb-4">
                  Don't risk contamination or system failure. Our Adelaide-based team provides professional rainwater tank cleaning, maintenance, and emergency water delivery services throughout South Australia.
                </p>
                <a href="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Get Professional Help
                </a>
              </section>
            </section>

            <footer>
              <h3>Final Thoughts</h3>
              <p>
                By following these steps, your rainwater tank will be spring-ready, delivering clean, reliable water throughout Adelaide's variable seasons. As Shaun Reid aptly puts it, "Clean water starts with clean systems—invest a little time now for peace of mind all year." If you're unsure, consult local experts or services for tailored advice. Stay hydrated and sustainable, Adelaide! For more on water solutions, check out <a href="/water" className="underline hover:text-[#00B4D8]">More Civil & Water</a>.
              </p>
            </footer>
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
