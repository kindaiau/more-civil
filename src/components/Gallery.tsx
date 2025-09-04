import { useState } from 'react';
import { X } from 'lucide-react';
import waterTruck from '@/assets/water-truck.png';

const projectImages = [
  { id: 1, src: waterTruck, alt: 'More Civil water truck delivering water across South Australia', title: 'Water Delivery Services' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof projectImages[0] | null>(null);

  return (
    <section id="projects" className="py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="reveal font-extrabold text-3xl mb-12 text-center text-foreground" style={{fontFamily:'Montserrat'}}>
          Recent Projects
        </h2>
        
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image)}
              data-tilt
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                aria-label="Close modal"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}