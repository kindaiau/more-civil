import Layout from "@/components/Layout";
import accreditations from "@/assets/accreditations.png";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <h1>About MORECIVIL</h1>
              <p className="text-lg mb-6 opacity-90">
                A South Australian family business delivering professional water and civil engineering 
                solutions across the state for over a decade. Licensed, certified, and trusted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2 items-center">
            <div>
              <h2>Our Story</h2>
              <p className="text-lg mb-6">
                Founded in 2010, MORECIVIL began as a small water delivery service and has grown 
                into one of South Australia's most trusted civil engineering contractors.
              </p>
              <p className="mb-6">
                Our journey started with a single water truck and a commitment to reliable service. 
                Today, we operate a modern fleet and have completed hundreds of projects across 
                residential, commercial, and infrastructure sectors.
              </p>
              <p className="mb-6">
                What sets us apart is our combination of local knowledge, modern equipment, 
                and unwavering commitment to quality and safety in everything we do.
              </p>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Emergency Service</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Licensed & Insured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Our Values & Commitment</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values guide every project we undertake and every relationship we build.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Quality First</h3>
              <p>
                Every project is completed to the highest standards using modern equipment 
                and proven techniques. We don't compromise on quality.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Reliability</h3>
              <p>
                When we commit to a timeline or service level, you can count on us. 
                Our reputation is built on consistent, dependable delivery.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Safety & Compliance</h3>
              <p>
                Full licensing, comprehensive insurance, and rigorous safety protocols 
                ensure peace of mind for every client and project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals who bring expertise, dedication, and local knowledge to every project.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="team-card">
              <div className="team-image">👨‍💼</div>
              <h3>Operations Manager</h3>
              <p className="title">15+ Years Industry Experience</p>
              <p>
                Oversees all projects and ensures delivery to specification and timeline. 
                Licensed civil contractor with extensive South Australian experience.
              </p>
            </div>
            
            <div className="team-card">
              <div className="team-image">👨‍🔧</div>
              <h3>Fleet Supervisor</h3>
              <p className="title">Equipment & Safety Specialist</p>
              <p>
                Manages our modern equipment fleet and ensures all safety protocols 
                are followed. Certified in heavy machinery operation and maintenance.
              </p>
            </div>
            
            <div className="team-card">
              <div className="team-image">👩‍💼</div>
              <h3>Project Coordinator</h3>
              <p className="title">Client Relations & Scheduling</p>
              <p>
                Your main point of contact for project coordination, scheduling, 
                and ensuring smooth communication throughout every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="section alt">
        <div className="container text-center">
          <h2 className="mb-8">Certifications & Accreditations</h2>
          <img
            src={accreditations}
            alt="MORECIVIL accreditations - South Australia, AWA, Department for Environment and Water"
            className="mx-auto max-w-full h-auto opacity-80 mb-8"
            width="800"
            height="512"
            loading="lazy"
            decoding="async"
          />
          <div className="grid grid-2">
            <div className="cert-list">
              <h3>Water Services</h3>
              <ul>
                <li>✓ Licensed Water Carrier (SA)</li>
                <li>✓ AWA Membership</li>
                <li>✓ Water Quality Certified</li>
                <li>✓ Emergency Response Approved</li>
              </ul>
            </div>
            <div className="cert-list">
              <h3>Civil Works</h3>
              <ul>
                <li>✓ Civil Contractor License</li>
                <li>✓ Government Approved Contractor</li>
                <li>✓ OH&S Certified</li>
                <li>✓ $5M Public Liability Insurance</li>
              </ul>
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

        .section {
          padding: 4rem 0;
        }
        
        .section.alt {
          background: hsl(var(--muted));
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        
        .stat-card {
          background: white;
          border: 1px solid hsl(var(--border));
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: hsl(var(--primary));
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          color: hsl(var(--muted-foreground));
          font-weight: 600;
        }
        
        .value-card {
          background: white;
          border: 1px solid hsl(var(--border));
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
        }
        
        .value-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .team-card {
          background: white;
          border: 1px solid hsl(var(--border));
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
        }
        
        .team-image {
          font-size: 4rem;
          margin-bottom: 1rem;
        }
        
        .title {
          color: hsl(var(--primary));
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .cert-list {
          background: white;
          border: 1px solid hsl(var(--border));
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,.12);
        }
        
        ul {
          list-style: none;
          padding: 0;
          margin: 1rem 0 0 0;
        }
        
        li {
          color: hsl(var(--muted-foreground));
          margin-bottom: 0.5rem;
          text-align: left;
        }
        
        .items-center { align-items: center; }
        .text-center { text-align: center; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-12 { margin-bottom: 3rem; }
        .max-w-2xl { max-width: 42rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-lg { font-size: 1.125rem; }
        .opacity-90 { opacity: 0.9; }
        .opacity-80 { opacity: 0.8; }
      `}</style>
    </Layout>
  );
};

export default About;