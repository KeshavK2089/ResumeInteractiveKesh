import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Microscope, Wrench, Clock } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  icon: typeof Microscope;
  link?: string;
  additionalLinks?: {
    label: string;
    href: string;
  }[];
}

const projects: Project[] = [
  {
    id: 'capstone',
    title: 'Capstone: Modifying NIH 3T3 Cells',
    subtitle: 'Northeastern University',
    location: 'Boston, MA',
    period: 'May 2023 - April 2024',
    description: [
      'Developed a protocol for modifying and testing NIH 3T3 fibroblasts to optimize fibroblast migration for wound healing',
      'Designed and executed comprehensive experimental framework using PDGFR gene transfection and chemotactic analysis',
      'Applied statistical modeling to validate 25% improvement in cellular mobility'
    ],
    technologies: [
      'Cell Biology',
      'Gene Transfection',
      'PDGFR',
      'Statistical Analysis',
      'Wound Healing',
      'Microscopy'
    ],
    icon: Microscope
  },
  {
    id: 'cornerstone',
    title: 'Cornerstone Engineering Project',
    subtitle: 'Northeastern University',
    location: 'Boston, MA',
    period: 'September 2021 - June 2022',
    description: [
      'Constructed a hands-free water fountain modifier using Arduino sensors and SolidWorks 3D-printed components',
      'Conducted prototyping and testing cycles to refine sensor calibration, water flow efficiency, and component durability',
      'Collaborated in a team of 4 to manage project timeline, divide tasks, and integrate hardware/software components'
    ],
    technologies: [
      'Arduino',
      'SolidWorks',
      '3D Printing',
      'Sensor Integration',
      'Prototyping',
      'Team Collaboration'
    ],
    icon: Wrench
  },
  {
    id: 'side-projects',
    title: 'Side Projects',
    subtitle: 'Interactive Web & Mobile Applications',
    location: 'Personal Projects',
    period: '2025',
    description: [
      'Built Prep Flow and MedLearn - interactive applications solving real-world problems',
      'Received feedback from real users to optimize workflow and UI',
      'Deployed modern React-based web experiences and native iOS applications'
    ],
    technologies: [
      'React',
      'TypeScript',
      'Swift',
      'iOS Development',
      'UX Design',
      'GitHub Pages'
    ],
    icon: Clock,
    link: 'https://interviewaid.xyz/',
    additionalLinks: [
      {
        label: 'Try MedLearn Online',
        href: 'https://www.cocomed.app/'
      },
      {
        label: 'Download MedLearn',
        href: 'https://apps.apple.com/us/app/medscanai/id6755940417'
      }
    ]
  }
];

export function Projects() {
  const scrollToResearch = () => {
    const element = document.getElementById('research');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Research & Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic research and engineering projects advancing biomedical innovation
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <Card
                key={project.id}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-project-${project.id}`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                      {project.title}
                    </h3>
                    <p className="text-base font-semibold text-primary mb-1">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {project.location} • {project.period}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {project.description.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-sm text-foreground"
                      data-testid={`text-description-${project.id}-${index}`}
                    >
                      <span className="text-accent font-bold mt-1">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-mono"
                      data-testid={`badge-tech-${project.id}-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  {project.id === 'capstone' && (
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={scrollToResearch}
                      data-testid="button-view-full-paper"
                    >
                      <ExternalLink size={16} />
                      View Full Paper
                    </Button>
                  )}

                  {/* Primary Link (Prep Flow) */}
                  {project.link && (
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => window.open(project.link, '_blank')}
                      data-testid={`button-view-project-${project.id}`}
                    >
                      <ExternalLink size={16} />
                      Try Prep Flow
                    </Button>
                  )}

                  {/* Additional links (CocoMed & MedScanAI) */}
                  {project.additionalLinks?.map((link, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => window.open(link.href, '_blank')}
                    >
                      <ExternalLink size={16} />
                      {link.label}
                    </Button>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
