import { useState } from 'react';

const images = [
  '/water-truck.png', '/water-truck.png', '/water-truck.png',
  '/water-truck.png', '/water-truck.png', '/water-truck.png',
];

export default function Gallery() {
  const [src, setSrc] = useState<string | null>(null);

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="reveal font-extrabold text-3xl mb-8 text-center" style={{fontFamily:'Montserrat'}}>Recent projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((s, i) => (
            <div key={i}
                 className="reveal tilt float w-full h-64 rounded-xl shadow-lg overflow-hidden cursor-pointer bg-gradient-to-br from-slate-200 to-slate-300 grid place-items-center"
                 data-tilt
                 onClick={()=>setSrc(s)}>
              <img src={s} alt={`Project ${i+1}`} className="w-4/5 h-auto object-contain" />
            </div>
          ))}
        </div>

        {/* lightbox */}
        {src && (
          <div className="fixed inset-0 bg-black/80 grid place-items-center z-[60]" onClick={()=>setSrc(null)}>
            <div className="relative">
              <img src={src} alt="Project" className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl" />
              <button 
                onClick={()=>setSrc(null)}
                className="absolute top-4 right-4 bg-[#0B1F2A] text-white px-3 py-2 rounded-lg font-bold hover:bg-[#073042] transition-colors"
                aria-label="Close"
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