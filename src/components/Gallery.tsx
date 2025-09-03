import { useState } from 'react';
import { Container } from "@/components/ui/container";

const images = [
  '/water-truck.png', '/water-truck.png', '/water-truck.png',
  '/water-truck.png', '/water-truck.png', '/water-truck.png',
];

export default function Gallery() {
  const [src, setSrc] = useState<string | null>(null);

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-white">
      <Container>
        <h2
          className="reveal font-extrabold text-3xl mb-8 text-center"
          style={{ fontFamily: 'Montserrat' }}
        >
          Recent projects
        </h2>
      </Container>
    </section>
  );
}