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
  primaryLink?: {
    label: string;
    href: string;
  };
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
@@ -56,51 +63,60 @@ const projects: Project[] = [
      'Prototyping',
      'Team Collaboration'
    ],
    icon: Wrench
  },
  {
    id: 'medical-device-history',
    title: 'Medical Device History Game',
    subtitle: 'Interactive Timeline Project',
    location: 'Personal Project',
    period: '2025',
    description: [
      'Created an interactive timeline exploring the evolution of medical devices throughout history',
      'Developed engaging educational content showcasing key milestones in medical technology',
      'Built with modern web technologies for an intuitive and responsive user experience'
    ],
    technologies: [
      'React',
      'JavaScript',
      'Timeline Visualization',
      'Medical History',
      'Interactive Design',
      'GitHub Pages'
    ],
    icon: Clock,
    primaryLink: {
      label: 'View Interactive Timeline',
      href: 'https://keshavk2089.github.io/MedicalDeviceHistoryGame'
    },
    additionalLinks: [
      {
        label: 'Play Glucose Odyssey',
        href: 'https://keshavk2089.github.io/GlucoseOdyssey/'
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
@@ -146,44 +162,61 @@ export function Projects() {

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

              {(project.primaryLink || project.additionalLinks?.length) && (
                <div className="space-y-3">
                  {project.primaryLink && (
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => window.open(project.primaryLink?.href, '_blank')}
                      data-testid={`button-view-project-${project.id}`}
                    >
                      <ExternalLink size={16} />
                      {project.primaryLink.label}
                    </Button>
                  )}

                  {project.additionalLinks?.map((additionalLink) => (
                    <Button
                      key={additionalLink.href}
                      variant="outline"
                      className="w-full gap-2"
                      onClick={() => window.open(additionalLink.href, '_blank')}
                      data-testid={`button-additional-link-${project.id}-${additionalLink.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <ExternalLink size={16} />
                      {additionalLink.label}
                    </Button>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
