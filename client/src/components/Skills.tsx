import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface Skill {
  name: string;
  level: number;
}

const technicalTools: string[] = [
  'Hyperspace',
  'Excel Modeling',
  'Tableau',
  'Python',
  'MATLAB',
  'SolidWorks',
  'PowerPoint',
  'AWS'
];

const healthcareSkills: Skill[] = [
  { name: 'Quality Assurance Testing', level: 95 },
  { name: 'Verification & Validation', level: 90 },
  { name: 'ISO Standards', level: 85 },
  { name: 'Biocompatibility Testing', level: 88 },
  { name: 'UPLC/HPLC', level: 82 },
  { name: 'Bioimaging', level: 80 },
  { name: 'Technology Consulting', level: 92 }
];

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical capabilities and healthcare domain expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Technical Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalTools.map((tool) => (
                <Badge
                  key={tool}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-mono font-medium hover-elevate cursor-default"
                  data-testid={`badge-skill-${tool.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Healthcare Expertise
            </h3>
            <div className="space-y-4">
              {healthcareSkills.map((skill) => (
                <div key={skill.name} data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm font-semibold text-primary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
