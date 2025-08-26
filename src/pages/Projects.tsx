import Layout from "@/components/Layout";

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <h1>Our Project Portfolio</h1>
              <p className="text-lg mb-6 opacity-90">
                Discover our completed projects across South Australia. From residential developments 
                to major infrastructure works, see the quality and scale of our capabilities.
              </p>
              
              <div className="flex gap-4 mb-6">
                <a href="/contact" className="btn btn-primary">
                  Start Your Project
                </a>
                <a href="#gallery" className="btn btn-outline">
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Project Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our diverse portfolio spans residential, commercial, and infrastructure projects throughout South Australia.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card">
              <h3>Residential Projects</h3>
              <ul className="space-y-2 mb-6">
                <li>• New home subdivisions</li>
                <li>• Swimming pool excavations</li>
                <li>• Driveway and landscaping</li>
                <li>• House pad preparation</li>
                <li>• Septic system installation</li>
              </ul>
              <div className="stat">
                <span className="number">150+</span>
                <span className="label">Homes completed</span>
              </div>
            </div>
            
            <div className="card">
              <h3>Commercial Developments</h3>
              <ul className="space-y-2 mb-6">
                <li>• Shopping center infrastructure</li>
                <li>• Industrial site preparation</li>
                <li>• Office building foundations</li>
                <li>• Car park construction</li>
                <li>• Utility installation</li>
              </ul>
              <div className="stat">
                <span className="number">25+</span>
                <span className="label">Commercial projects</span>
              </div>
            </div>
            
            <div className="card">
              <h3>Infrastructure Works</h3>
              <ul className="space-y-2 mb-6">
                <li>• Road construction & repair</li>
                <li>• Stormwater drainage systems</li>
                <li>• Government facility works</li>
                <li>• Public space development</li>
                <li>• Emergency response projects</li>
              </ul>
              <div className="stat">
                <span className="number">50+</span>
                <span className="label">Infrastructure projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="gallery" className="section alt">
        <div className="container">
          <h2 className="text-center mb-12">Featured Projects</h2>
          
          <div className="grid grid-2">
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">🏗️</div>
              </div>
              <div className="project-content">
                <h3>Adelaide Hills Subdivision</h3>
                <p className="text-muted-foreground mb-4">
                  85-lot residential subdivision including all civil works, 
                  road construction, and stormwater management.
                </p>
                <div className="project-details">
                  <span className="detail"><strong>Scope:</strong> Complete civil works</span>
                  <span className="detail"><strong>Duration:</strong> 8 months</span>
                  <span className="detail"><strong>Year:</strong> 2023</span>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">🚛</div>
              </div>
              <div className="project-content">
                <h3>Emergency Water Supply - Bushfire Response</h3>
                <p className="text-muted-foreground mb-4">
                  24/7 emergency water delivery during the 2023 bushfire crisis. 
                  Supplied 500,000L+ to affected communities.
                </p>
                <div className="project-details">
                  <span className="detail"><strong>Scope:</strong> Emergency water delivery</span>
                  <span className="detail"><strong>Response:</strong> Under 2 hours</span>
                  <span className="detail"><strong>Volume:</strong> 500,000L+</span>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">🏪</div>
              </div>
              <div className="project-content">
                <h3>Shopping Centre Expansion</h3>
                <p className="text-muted-foreground mb-4">
                  Major retail development including car park construction, 
                  drainage systems, and utility connections.
                </p>
                <div className="project-details">
                  <span className="detail"><strong>Scope:</strong> Commercial earthworks</span>
                  <span className="detail"><strong>Area:</strong> 5 hectares</span>
                  <span className="detail"><strong>Year:</strong> 2022</span>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <div className="placeholder-image">🏊</div>
              </div>
              <div className="project-content">
                <h3>Aquatic Centre Development</h3>
                <p className="text-muted-foreground mb-4">
                  Pool excavation, surrounding infrastructure, and specialized 
                  drainage for new community aquatic facility.
                </p>
                <div className="project-details">
                  <span className="detail"><strong>Scope:</strong> Pool & infrastructure</span>
                  <span className="detail"><strong>Pools:</strong> 3 competition pools</span>
                  <span className="detail"><strong>Year:</strong> 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.25rem; }
        .grid { display: grid; gap: 1.25rem; }
        .grid-2 { grid-template-columns: repeat(2, 1fr); }
        .grid-3 { grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 980px) { .grid-2, .grid-3 { grid-template-columns: 1fr; } }

        .hero {
          background: linear-gradient(180deg, hsl(var(--navy)), #07161f 60%);
          color: white;
          overflow: hidden;
        }
        
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr;
          text-align: center;
          padding: 4rem 0;
        }

        .btn {
          display: inline-block;
          padding: 0.9rem 1.15rem;
          border-radius: 12px;
          font-weight: 800;
          border: 2px solid transparent;
          transition: transform 0.15s ease;
          text-decoration: none;
        }
        
        .btn:hover {
          transform: translateY(-1px);
          text-decoration: none;
        }
        
        .btn-primary {
          background: hsl(var(--aqua));
          color: hsl(var(--navy));
        }
        
        .btn-outline {
          border-color: hsl(var(--aqua));
          color: white;
          background: transparent;
        }
        
        .btn-outline:hover {
          background: hsl(var(--aqua));
          color: hsl(var(--navy));
        }

        .section {
          padding: 4rem 0;
        }
        
        .section.alt {
          background: hsl(var(--muted));
        }
        
        .card {
          background: white;
          border: 1px solid hsl(var(--border));
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
        }
        
        .project-card {
          background: white;
          border: 1px solid hsl(var(--border));
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
        }
        
        .project-image {
          height: 200px;
          background: linear-gradient(135deg, hsl(var(--muted)), hsl(var(--muted-foreground) / 0.1));
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .placeholder-image {
          font-size: 4rem;
          opacity: 0.3;
        }
        
        .project-content {
          padding: 1.5rem;
        }
        
        .project-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .detail {
          font-size: 0.9rem;
          color: hsl(var(--muted-foreground));
        }
        
        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
          background: hsl(var(--muted));
          border-radius: 12px;
          margin-top: 1rem;
        }
        
        .number {
          font-size: 2rem;
          font-weight: 800;
          color: hsl(var(--primary));
        }
        
        .label {
          font-size: 0.9rem;
          color: hsl(var(--muted-foreground));
        }
        
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        li {
          color: hsl(var(--muted-foreground));
          margin-bottom: 0.5rem;
        }
        
        .text-center { text-align: center; }
        .space-y-2 > * + * { margin-top: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-12 { margin-bottom: 3rem; }
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .flex { display: flex; }
        .gap-4 { gap: 1rem; }
        .text-lg { font-size: 1.125rem; }
        .opacity-90 { opacity: 0.9; }
      `}</style>
    </Layout>
  );
};

export default Projects;