import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { removeBackground } from "@/lib/backgroundRemoval";
const waterTruckIcon = "/lovable-uploads/b2ca26f9-7f6c-4049-a235-e22644292355.png";
const ServiceIntro = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  useEffect(() => {
    const processImage = async () => {
      setIsProcessing(true);
      try {
        // Load the original image
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = async () => {
          try {
            const blob = await removeBackground(img);
            const url = URL.createObjectURL(blob);
            setProcessedImageUrl(url);
          } catch (error) {
            console.error('Failed to remove background:', error);
            setProcessedImageUrl(waterTruckIcon); // Fallback to original
          } finally {
            setIsProcessing(false);
          }
        };
        img.onerror = () => {
          console.error('Failed to load image');
          setProcessedImageUrl(waterTruckIcon); // Fallback to original
          setIsProcessing(false);
        };
        img.src = waterTruckIcon;
      } catch (error) {
        console.error('Error processing image:', error);
        setProcessedImageUrl(waterTruckIcon); // Fallback to original
        setIsProcessing(false);
      }
    };
    processImage();
  }, []);
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          {/* Left side - Water truck icon and video */}
          <div className="relative flex flex-col gap-8">
            {/* Water truck image */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Water truck icon */}
                <img src={processedImageUrl || waterTruckIcon} alt="Water delivery truck" className="w-80 h-80 object-contain" style={{
                opacity: isProcessing ? 0.7 : 1
              }} />
                
                {/* Animated water drops */}
                <div className="absolute top-32 left-44 w-2 h-2 bg-primary rounded-full animate-bounce" style={{
                animationDelay: "0s",
                animationDuration: "2s"
              }}></div>
                <div className="absolute top-36 left-48 w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{
                animationDelay: "0.5s",
                animationDuration: "2.5s"
              }}></div>
                <div className="absolute top-40 left-52 w-1 h-1 bg-primary rounded-full animate-bounce" style={{
                animationDelay: "1s",
                animationDuration: "3s"
              }}></div>
                
                {/* Subtle water flow effect */}
                <div className="absolute top-44 left-44 w-20 h-2 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Video */}
            <div className="relative flex justify-center">
              <video autoPlay loop muted playsInline className="w-full max-w-md rounded-xl shadow-lg object-cover aspect-video mx-0 px-[23px]">
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