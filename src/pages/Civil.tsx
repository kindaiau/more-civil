import Layout from "@/components/Layout";

const Civil = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <h1>Civil Engineering & Construction</h1>
              <p className="text-lg mb-6 opacity-90">
                Comprehensive civil works from site preparation to major infrastructure. 
                Experienced team with modern equipment and proven results.
              </p>
              
              <div className="flex gap-4 mb-6">
                <a href="/contact" className="btn btn-primary">
                  Request Quote
                </a>
                <a href="/projects" className="btn btn-outline">
                  View Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Civil Construction Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From small residential projects to major commercial developments, we deliver quality civil works on time and budget.
            </p>
          </div>
          
          <div className="grid grid-2">
            <div className="card">
              <h3>Earthworks & Excavation</h3>
              <ul className="space-y-2 mb-6">
                <li>✓ Site preparation and clearing</li>
                <li>✓ Bulk earthworks and cut/fill</li>
                <li>✓ Trenching and utility installation</li>
                <li>✓ Foundation excavation</li>
                <li>✓ Demolition and removal</li>
              </ul>
            </div>
            
            <div className="card">
              <h3>Infrastructure Development</h3>
              <ul className="space-y-2 mb-6">
                <li>✓ Road construction and maintenance</li>
                <li>✓ Drainage and stormwater systems</li>
                <li>✓ Kerb and gutter installation</li>
                <li>✓ Footpath and paving works</li>
                <li>✓ Retaining walls and structures</li>
              </ul>
            </div>
            
            <div className="card">
              <h3>Residential Projects</h3>
              <ul className="space-y-2 mb-6">
                <li>✓ House pads and driveways</li>
                <li>✓ Swimming pool excavation</li>
                <li>✓ Landscaping preparation</li>
                <li>✓ Septic system installation</li>
                <li>✓ Shed slabs and hardstand</li>
              </ul>
            </div>
            
            <div className="card">
              <h3>Commercial & Industrial</h3>
              <ul className="space-y-2 mb-6">
                <li>✓ Large-scale earthworks</li>
                <li>✓ Industrial site development</li>
                <li>✓ Car park construction</li>
                <li>✓ Warehouse slabs and access</li>
                <li>✓ Utility infrastructure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section alt">
        <div className="container">
          <h2 className="text-center mb-12">Modern Equipment Fleet</h2>
          
          <div className="grid grid-3">
            <div className="feature">
              <div className="feature-icon">🚜</div>
              <h3>Excavators</h3>
              <p>20T to 45T excavators for all excavation needs. GPS equipped for precision work.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🏗️</div>
              <h3>Bobcats & Loaders</h3>
              <p>Compact equipment for tight access areas. Perfect for residential and detail work.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🚛</div>
              <h3>Trucks & Trailers</h3>
              <p>Modern truck fleet for efficient material transport and waste removal.</p>
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
        
        .feature {
          text-align: center;
          padding: 1.5rem;
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
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

export default Civil;