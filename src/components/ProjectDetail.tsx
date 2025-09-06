import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Truck } from 'lucide-react';
import Layout from '@/components/Layout';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Import project images
import bobcatImage from '@/assets/projects/morecivilbobcat.webp';
import tipperImage from '@/assets/projects/more-civil-tipper.webp';
import pipelineImage from '@/assets/projects/more-civil-nairne-pipeline-project.webp';
import semiTipperImage from '@/assets/projects/semi-and-tipper.webp';

const projectData = {
  'nairne-pipeline': {
    title: 'Water Cart Services',
    summary: 'Residential Streetscape Dust Control',
    image: pipelineImage,
    alt: 'Water cart providing dust control for residential streetscape in Nairne pipeline project',
    description: 'Our water cart services provided essential dust control for the Nairne pipeline project, ensuring minimal disruption to residential areas. Our team delivered consistent, reliable water application to keep dust levels manageable during construction activities.',
    details: {
      location: 'Nairne, SA',
      duration: '3 weeks',
      service: 'Water delivery & dust control',
      equipment: 'Water cart, 15,000L capacity'
    },
    features: [
      'Scheduled dust suppression',
      'Residential area protection',
      'Environmental compliance',
      '24/7 availability during construction'
    ]
  },
  'bobcat-excavators': {
    title: 'Trenching and Services',
    summary: 'Bobcat + Excavators',
    image: bobcatImage,
    alt: 'Bobcat and excavators performing trenching and utility services',
    description: 'Precision trenching and utility installation using our fleet of Bobcats and excavators. This project required careful excavation around existing infrastructure while maintaining access for residents and businesses.',
    details: {
      location: 'Adelaide Hills, SA',
      duration: '6 weeks',
      service: 'Excavation & trenching',
      equipment: 'Bobcat S650, 8T excavator'
    },
    features: [
      'Precision trenching',
      'Utility installation',
      'Minimal site disruption',
      'Safe work method statements'
    ]
  },
  'tipper-bulk-haul': {
    title: '6-Wheel Tipper',
    summary: 'Bulk Haul and Spoil',
    image: tipperImage,
    alt: '6-wheel tipper truck for bulk hauling and spoil removal',
    description: 'Efficient bulk hauling and spoil removal using our 6-wheel tipper trucks. This project required careful coordination to ensure continuous material flow while maintaining site safety and minimizing traffic disruption.',
    details: {
      location: 'Murray Bridge, SA',
      duration: '4 weeks',
      service: 'Bulk haul & spoil removal',
      equipment: '6-wheel tipper, 12 tonne capacity'
    },
    features: [
      'Continuous material flow',
      'Efficient spoil removal',
      'Traffic management',
      'Environmental protection'
    ]
  },
  'heavy-haul': {
    title: 'Prime Mover + Tipper',
    summary: 'Heavy Haul',
    image: semiTipperImage,
    alt: 'Prime mover with tipper for heavy haul operations',
    description: 'Heavy haul operations using our prime mover and tipper combination for large-scale material transport. This project required specialized equipment and experienced operators to handle oversized loads safely.',
    details: {
      location: 'Port Augusta, SA',
      duration: '2 weeks',
      service: 'Heavy haul transport',
      equipment: 'Prime mover + 25T tipper'
    },
    features: [
      'Oversized load transport',
      'Specialized equipment',
      'Route planning',
      'Safety compliance'
    ]
  },
  'plant-loading': {
    title: 'Plant Loading',
    summary: 'On/Ramp Safety',
    image: '/src/assets/projects/plant-loading-safety.jpg',
    alt: 'Plant loading with on-ramp safety protocols',
    description: 'Specialized plant loading operations with comprehensive on-ramp safety protocols. Our team ensures all heavy machinery is safely loaded and transported according to industry best practices.',
    details: {
      location: 'Whyalla, SA',
      duration: '1 week',
      service: 'Plant loading & transport',
      equipment: 'Low loader, crane assistance'
    },
    features: [
      'Safety-first approach',
      'Certified operators',
      'Equipment inspection',
      'Transport compliance'
    ]
  }
};

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  
  if (!projectId || !projectData[projectId as keyof typeof projectData]) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects" className="text-primary hover:underline">
              Return to Projects
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const project = projectData[projectId as keyof typeof projectData];

  return (
    <Layout>
      <article className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>

          {/* Hero image */}
          <AspectRatio ratio={16 / 9} className="mb-8 overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.alt}
              className="w-full h-full object-cover"
            />
          </AspectRatio>

          {/* Project header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground" style={{fontFamily:'Montserrat'}}>
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {project.summary}
            </p>
            
            {/* Project details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>{project.details.location}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar size={16} />
                <span>{project.details.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Truck size={16} />
                <span>{project.details.service}</span>
              </div>
              <div className="text-muted-foreground">
                <strong>Equipment:</strong> {project.details.equipment}
              </div>
            </div>
          </header>

          {/* Project content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </p>
              
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-lg font-bold mb-4">Need Similar Services?</h3>
                <p className="text-muted-foreground mb-4">
                  Get in touch to discuss your project requirements and receive a custom quote.
                </p>
                <Link
                  to="/contact"
                  className="block w-full bg-primary hover:bg-primary/90 text-primary-foreground text-center font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}