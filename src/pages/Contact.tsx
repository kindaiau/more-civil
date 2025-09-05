import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <h1>Get In Touch</h1>
              <p className="text-lg mb-6 opacity-90">
                Ready to start your project? Need emergency water delivery? 
                Contact us today for fast, professional service across South Australia.
              </p>
              
              <div className="contact-highlights">
                <div className="highlight">
                  <span className="icon">⚡</span>
                  <span>2-hour emergency response</span>
                </div>
                <div className="highlight">
                  <span className="icon">📞</span>
                  <span>24/7 phone support</span>
                </div>
                <div className="highlight">
                  <span className="icon">✓</span>
                  <span>Free quotes & consultations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {/* Contact Form */}
            <Card className="p-6">
              <h2 className="mb-6">Request a Quote</h2>
              <form className="space-y-4">
                <div className="grid grid-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Smith" required />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <Input id="phone" type="tel" placeholder="0400 000 000" required />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Required *
                  </label>
                  <select 
                    id="service" 
                    className="w-full p-3 border border-input rounded-lg bg-background"
                    required
                  >
                    <option value="">Select a service...</option>
                    <option value="water-delivery">Water Delivery</option>
                    <option value="civil-works">Civil Works</option>
                    <option value="excavation">Excavation</option>
                    <option value="emergency">Emergency Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-2">
                    Project Location
                  </label>
                  <Input id="location" placeholder="Adelaide, SA" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please describe your project requirements, timeline, and any specific needs..."
                    rows={4}
                  />
                </div>
                
                <Button className="w-full bg-[#00B4D8] hover:bg-[#00A3C4] text-white" size="lg">
                  Send Quote Request
                </Button>
              </form>
            </Card>

            {/* Contact Details */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="contact-item">
                    <span className="icon">📱</span>
                    <div>
                      <strong>Phone (24/7)</strong>
                      <p>0400 MORE CIVIL</p>
                      <p className="text-sm text-muted-foreground">Emergency line available</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <span className="icon">✉️</span>
                    <div>
                      <strong>Email</strong>
                      <p>info@morecivil.com.au</p>
                      <p className="text-sm text-muted-foreground">Response within 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <span className="icon">📍</span>
                    <div>
                      <strong>Service Area</strong>
                      <p>All South Australia</p>
                      <p className="text-sm text-muted-foreground">Metro & regional coverage</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <span className="icon">🕒</span>
                    <div>
                      <strong>Business Hours</strong>
                      <p>Mon-Fri: 7:00 AM - 6:00 PM</p>
                      <p>Sat: 8:00 AM - 4:00 PM</p>
                      <p className="text-sm text-muted-foreground">Emergency service: 24/7</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="mb-4">Emergency Service</h3>
                <p className="mb-4 text-muted-foreground">
                  Need immediate water delivery or urgent civil works? 
                  Our emergency response team is available 24/7.
                </p>
                <Button className="w-full bg-[#00B4D8] hover:bg-[#00A3C4] text-white" size="lg">
                  📞 Emergency Hotline
                </Button>
              </Card>

              <Card className="p-6">
                <h3 className="mb-4">Service Guarantee</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Free, no-obligation quotes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Response within 2 hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Fully licensed & insured</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    <span>Quality workmanship guarantee</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1.25rem; }
        .grid { display: grid; gap: 1.25rem; }
        .grid-2 { grid-template-columns: repeat(2, 1fr); }
        @media (max-width: 980px) { .grid-2 { grid-template-columns: 1fr; } }

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
        
        .contact-highlights {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        
        .highlight {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .icon {
          font-size: 1.2rem;
        }

        .section {
          padding: 4rem 0;
        }
        
        .contact-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        
        .space-y-2 > * + * { margin-top: 0.5rem; }
        .space-y-4 > * + * { margin-top: 1rem; }
        .space-y-6 > * + * { margin-top: 1.5rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .text-lg { font-size: 1.125rem; }
        .text-sm { font-size: 0.875rem; }
        .opacity-90 { opacity: 0.9; }
        .w-full { width: 100%; }
        .block { display: block; }
        .flex { display: flex; }
        .items-center { align-items: center; }
        .gap-2 { gap: 0.5rem; }
      `}</style>
    </Layout>
  );
};

export default Contact;