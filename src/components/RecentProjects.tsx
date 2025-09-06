import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Import project images
import bobcatImage from '@/assets/projects/morecivilbobcat.webp';
import tipperImage from '@/assets/projects/more-civil-tipper.webp';
import pipelineImage from '@/assets/projects/more-civil-nairne-pipeline-project.webp';
import semiTipperImage from '@/assets/projects/semi-and-tipper.webp';

const projects = [
  {
    id: 'nairne-pipeline',
    title: 'Water Cart Services',
    summary: 'Residential Streetscape Dust Control',
    image: pipelineImage,
    alt: 'Water cart providing dust control for residential streetscape in Nairne pipeline project'
  },
  {
    id: 'bobcat-excavators',
    title: 'Trenching and Services',
    summary: 'Bobcat + Excavators',
    image: bobcatImage,
    alt: 'Bobcat and excavators performing trenching and utility services'
  },
  {
    id: 'tipper-bulk-haul',
    title: '6-Wheel Tipper',
    summary: 'Bulk Haul and Spoil',
    image: tipperImage,
    alt: '6-wheel tipper truck for bulk hauling and spoil removal'
  },
  {
    id: 'heavy-haul',
    title: 'Prime Mover + Tipper',
    summary: 'Heavy Haul',
    image: semiTipperImage,
    alt: 'Prime mover with tipper for heavy haul operations'
  },
  {
    id: 'plant-loading',
    title: 'Plant Loading',
    summary: 'On/Ramp Safety',
    image: '/placeholder-plant-loading.jpg', // Placeholder until user uploads
    alt: 'Plant loading with on-ramp safety protocols'
  }
];

export default function RecentProjects() {
  return (
    <section id="recent-projects" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-10">
        <div className="text-center mb-16">
          <h2 className="reveal font-extrabold text-3xl mb-4 text-foreground" style={{fontFamily:'Montserrat'}}>
            Recent Projects
          </h2>
          <p className="reveal text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest completed projects showcasing our expertise in civil works, 
            water delivery, and heavy machinery operations across South Australia.
          </p>
        </div>
        
        <div className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              data-tilt
            >
              <AspectRatio ratio={16 / 9} className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </AspectRatio>
              
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-card-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.summary}
                </p>
                
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors group/link"
                >
                  Learn more
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}