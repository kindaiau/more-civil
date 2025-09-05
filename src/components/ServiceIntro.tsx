import React from "react";
import { Button } from "@/components/ui/button";
import waterTruckIcon from "@/assets/watertruck.webp";

const ServiceIntro = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left side - Water truck icon with animation */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Water truck icon */}
              <img 
                src={waterTruckIcon} 
                alt="Water delivery truck"
                className="w-80 h-80 object-contain"
              />
              
              {/* Animated water drops */}
              <div className="absolute top-32 left-44 w-2 h-2 bg-primary rounded-full animate-bounce" 
                   style={{animationDelay: "0s", animationDuration: "2s"}}></div>
              <div className="absolute top-36 left-48 w-1.5 h-1.5 bg-primary rounded-full animate-bounce" 
                   style={{animationDelay: "0.5s", animationDuration: "2.5s"}}></div>
              <div className="absolute top-40 left-52 w-1 h-1 bg-primary rounded-full animate-bounce" 
                   style={{animationDelay: "1s", animationDuration: "3s"}}></div>
              
              {/* Subtle water flow effect */}
              <div className="absolute top-44 left-44 w-20 h-2 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Reliable Water Delivery & Civil Services
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                More Civil provides trusted water cartage, dust suppression, and civil works across Adelaide. 
                Professional service, modern fleet, and results you can depend on.
              </p>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-xl shadow-lg transition-all duration-300"
                onClick={() => window.location.href = '/contact'}
              >
                Get A Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;