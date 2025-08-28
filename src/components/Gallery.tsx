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
      </div>
    </section>
  );
}