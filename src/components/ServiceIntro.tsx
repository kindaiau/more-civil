import React from "react";
import { Button } from "@/components/ui/button";
import AnimatedLogo from "./AnimatedLogo";
const ServiceIntro = () => {
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left side - Water truck icon and video */}
          <div className="relative flex flex-col gap-8">
            {/* Water truck image */}
            <div className="relative flex justify-center">
              <AnimatedLogo className="w-80" />
            </div>

            {/* Video */}
            <div className="relative flex justify-center">
              <video autoPlay loop muted playsInline className="w-full max-w-md rounded-xl shadow-lg object-cover aspect-video mx-0 px-[21px] py-0 my-0">
                <source src="/water-delivery-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 text-center">
            <div className="space-y-4">
              <h2 className="reveal font-extrabold text-4xl md:text-5xl lg:text-6xl text-center leading-tight text-foreground" style={{
              fontFamily: 'Montserrat'
            }}>
                Reliable Water Delivery & Civil Services
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                More Civil provides trusted water cartage, dust suppression, and civil works across Adelaide. 
                Professional service, modern fleet, and results you can depend on.
              </p>
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-[#00B4D8] hover:bg-[#00A3C4] text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300" onClick={() => window.location.href = '/contact'}>
                Get A Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServiceIntro;