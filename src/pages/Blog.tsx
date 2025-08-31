import { useEffect } from "react";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog – More Civil | Earthmoving News and Updates";
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = "Read the latest updates, insights, and project highlights from More Civil, a leading earthmoving equipment hire company in South Australia.";
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
