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
  // Added this so the code knows about your extra buttons
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
    id: 'side-projects', // Renamed ID to match the new title
    title: 'Side Projects',
    subtitle: 'Interactive Web Applications',
    location: 'Personal Projects',
    period: '2025',
    description: [
      'Built Prep Flow, an interview-prep web app that guides structured practice sessions',
      'Created interactive tools as personal projects to inspire peers and track my own growth',
      'Deployed modern React-based experiences to share learnings quickly with others'
    ],
    technologies: [
      'React',
      'TypeScript',
      'Interview Prep',
      'UX Design',
      'Interactive Design',
      'GitHub Pages'
    ],
    icon: Clock,
    link: 'https://interviewaid.xyz/',
    // This data is now active and will appear as a second button
    additionalLinks: [
      {
        label: 'Play Glucose Odyssey',
        href: 'https://keshavk2089.github.io/GlucoseOdyssey/#/'
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
@@ -160,58 +160,58 @@ export function Projects() {
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

                {/* NEW: Loop through additional links (Glucose Odyssey) */}
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
          ))}
        </div>
      </div>
    </section>
  );
}
