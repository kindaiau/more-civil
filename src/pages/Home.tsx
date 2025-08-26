import Layout from "@/components/Layout";
import waterTruck from "@/assets/water-truck.png";
import accreditations from "@/assets/accreditations.png";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <h1>Professional Water & Civil Engineering Solutions</h1>
              <p className="text-lg mb-6 opacity-90">
                Reliable water delivery, civil construction, and excavation services 
                across South Australia. Licensed, certified, and trusted by industry leaders.
              </p>
              
              <div className="flex gap-4 mb-6">
                <a href="#services" className="btn btn-primary">
                  Our Services
                </a>
                <a href="/contact" className="btn btn-outline">
                  Get Quote
                </a>
              </div>
              
              <div className="banner">
                <div className="pill">✓ Licensed</div>
                <span>AWA certified • Government approved • 24/7 emergency service</span>
              </div>
            </div>
            
            <div className="media">
              <img src={waterTruck} alt="MORECIVIL water delivery truck" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From water delivery to major civil works, we provide comprehensive 
              engineering solutions with unmatched reliability and expertise.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="card">
              <div className="badge mb-4">Water Services</div>
              <h3>Water Delivery & Management</h3>
              <p className="text-muted-foreground mb-4">
                Potable and non-potable water delivery, tank filling, 
                emergency water supply, and water quality management.
              </p>
              <a href="/water" className="text-primary font-semibold">
                Learn More →
              </a>
            </div>
            
            <div className="card">
              <div className="badge mb-4">Civil Works</div>
              <h3>Civil Construction</h3>
              <p className="text-muted-foreground mb-4">
                Site preparation, earthworks, drainage systems, road works, 
                and infrastructure development projects.
              </p>
              <a href="/civil" className="text-primary font-semibold">
                Learn More →
              </a>
            </div>
            
            <div className="card">
              <div className="badge mb-4">Equipment</div>
              <h3>Excavation & Plant Hire</h3>
              <p className="text-muted-foreground mb-4">
                Modern excavators, bobcats, compactors, and specialized 
                equipment with experienced operators.
              </p>
              <a href="/projects" className="text-primary font-semibold">
                View Projects →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section alt">
        <div className="container">
          <div className="grid grid-2 items-center">
            <div>
              <h2>Why Choose MORECIVIL?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="mb-2">Licensed & Certified</h3>
                    <p className="text-muted-foreground">
                      Fully licensed water carrier, AWA member, and government approved contractor.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    ⚡
                  </div>
                  <div>
                    <h3 className="mb-2">24/7 Emergency Response</h3>
                    <p className="text-muted-foreground">
                      Round-the-clock availability for urgent water delivery and emergency services.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    🏆
                  </div>
                  <div>
                    <h3 className="mb-2">Proven Track Record</h3>
                    <p className="text-muted-foreground">
                      Over a decade of successful projects across South Australia's major developments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h3 className="mb-4">Get Your Quote Today</h3>
              <p className="text-muted-foreground mb-6">
                Contact us for competitive pricing on water delivery, 
                civil works, or equipment hire.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span className="font-semibold">Within 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Service Area:</span>
                  <span className="font-semibold">All SA</span>
                </div>
                <div className="flex justify-between">
                  <span>Emergency Service:</span>
                  <span className="font-semibold">24/7 Available</span>
                </div>
              </div>
              <a href="/contact" className="btn btn-primary w-full mt-6">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section">
        <div className="container text-center">
          <h2 className="mb-8">Trusted & Accredited</h2>
          <img 
            src={accreditations} 
            alt="MORECIVIL accreditations - South Australia, AWA, Department for Environment and Water" 
            className="mx-auto max-w-full h-auto opacity-80"
          />
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
          position: relative;
          overflow: hidden;
        }
        
        .hero-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2rem;
          align-items: center;
          padding: 4rem 0;
        }
        
        @media (max-width: 980px) {
          .hero-inner { grid-template-columns: 1fr; text-align: center; }
        }
        
        .media {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
          max-height: 520px;
        }
        
        .media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .btn {
          display: inline-block;
          padding: 0.9rem 1.15rem;
          border-radius: 12px;
          font-weight: 800;
          border: 2px solid transparent;
          transition: transform 0.15s ease, filter 0.15s ease;
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

        .banner {
          margin-top: 1rem;
          background: #001b24;
          border: 1px solid #073042;
          color: #cfe8f1;
          padding: 0.9rem 1rem;
          border-radius: 12px;
          display: flex;
          gap: 0.75rem;
          align-items: center;
        }
        
        .pill {
          background: #073042;
          padding: 0.25rem 0.6rem;
          border-radius: 999px;
          color: #9be7ff;
          font-weight: 800;
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
          padding: 1.2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
        }
        
        .badge {
          display: inline-block;
          background: #e0f7ff;
          color: #043b4a;
          padding: 0.2rem 0.5rem;
          border-radius: 999px;
          font-weight: 800;
          font-size: 0.8rem;
        }
        
        .items-center { align-items: center; }
        .text-center { text-align: center; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .space-y-3 > * + * { margin-top: 0.75rem; }
        .w-full { width: 100%; }
        .mt-6 { margin-top: 1.5rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .flex { display: flex; }
        .flex-shrink-0 { flex-shrink: 0; }
        .gap-4 { gap: 1rem; }
        .justify-between { justify-content: space-between; }
        .text-lg { font-size: 1.125rem; }
        .font-semibold { font-weight: 600; }
        .opacity-90 { opacity: 0.9; }
        .opacity-80 { opacity: 0.8; }
      `}</style>
    </Layout>
  );
};

export default Home;