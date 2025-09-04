import { useState } from 'react';
import waterTruck from '@/assets/water-truck.png';

const images = [
  waterTruck, waterTruck, waterTruck,
  waterTruck, waterTruck, waterTruck,
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="reveal font-extrabold text-3xl mb-8 text-center text-foreground" style={{fontFamily:'Montserrat'}}>Recent projects</h2>
        
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-video bg-muted">
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-card">
                <h3 className="font-semibold text-card-foreground">Project {index + 1}</h3>
                <p className="text-sm text-muted-foreground mt-1">Water delivery and civil works project</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Selected project"
                className="max-w-full max-h-full object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}