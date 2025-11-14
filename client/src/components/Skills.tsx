import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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

const healthcareSkills: string[] = [
  'Quality Assurance Testing',
  'Verification & Validation',
  'ISO Standards',
  'Biocompatibility Testing',
  'UPLC/HPLC',
  'Bioimaging',
  'Technology Consulting'
];

export function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation(0.2);
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-6 bg-muted/30 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10 opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-reveal ${headerVisible ? 'active' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical capabilities and healthcare domain expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            ref={leftRef}
            className={`scroll-slide-left ${leftVisible ? 'active' : ''}`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Technical Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {technicalTools.map((tool, index) => (
                <Badge
                  key={tool}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-mono font-medium hover-elevate cursor-default hover:scale-110 transition-transform duration-300"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                  data-testid={`badge-skill-${tool.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          <div
            ref={rightRef}
            className={`scroll-slide-right ${rightVisible ? 'active' : ''}`}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Healthcare Expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {healthcareSkills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover-elevate cursor-default hover:scale-110 transition-transform duration-300"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                  data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
