import Layout from "@/components/Layout";

const Water = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <h1>Professional Water Services</h1>
              <p className="text-lg mb-6 opacity-90">
                Reliable potable and non-potable water delivery across South Australia. 
                Licensed carrier with emergency response capability.
              </p>
              
              <div className="flex gap-4 mb-6">
                <a href="/contact" className="btn btn-primary">
                  Get Quote
                </a>
                <a href="tel:+61800000000" className="btn btn-outline">
                  Emergency: 24/7
                </a>
              </div>
            </div>
            
            <div className="media">
              <img
                src="/water-truck.webp"
                alt="MORECIVIL water delivery truck"
                className="max-w-full h-auto reveal tilt float"
                width="800"
                height="600"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Water Delivery Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From construction sites to emergency supply, we deliver clean, quality water when and where you need it.
            </p>
          </div>
          
          <div className="grid grid-2">
            <div className="card">
              <h3>Potable Water Delivery</h3>
              <ul className="space-y-2 mb-6">
                <li>✓ Drinking water quality certified</li>
                <li>✓ Tank fills and top-ups</li>
                <li>✓ Emergency household supply</li>
                <li>✓ Event and festival supply</li>
                <li>✓ Remote location delivery</li>
              </ul>
              <div className="pricing-info">
                <span className="price">From $180</span>
                <span className="unit">per 10,000L load</span>
              </div>
            </div>
            
            <div className="card">
              <h3>Non-Potable Water</h3>
              <ul className="space-y-2 mb-6">
                <li>✓ Construction & dust suppression</li>
                <li>✓ Irrigation and landscaping</li>
                <li>✓ Pool filling services</li>
                <li>✓ Industrial process water</li>
                <li>✓ Cleaning and washing</li>
              </ul>
              <div className="pricing-info">
                <span className="price">From $120</span>
                <span className="unit">per 10,000L load</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section alt">
        <div className="container">
          <h2 className="text-center mb-12">Why Choose Our Water Services?</h2>
          
          <div className="grid grid-3">
            <div className="feature">
              <div className="feature-icon">🚛</div>
              <h3>Modern Fleet</h3>
              <p>Clean, well-maintained trucks with GPS tracking and real-time delivery updates.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Fast Response</h3>
              <p>Same-day delivery available. Emergency callouts within 2 hours across metro Adelaide.</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Quality Assured</h3>
              <p>All water tested and certified. Licensed carrier with full insurance coverage.</p>
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
        
        .pricing-info {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        
        .price {
          font-size: 1.5rem;
          font-weight: 800;
          color: hsl(var(--primary));
        }
        
        .unit {
          color: hsl(var(--muted-foreground));
          font-size: 0.9rem;
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

export default Water;