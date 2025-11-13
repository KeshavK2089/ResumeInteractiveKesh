import { Badge } from '@/components/ui/badge';

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
  return (
    <section
      id="skills"
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
            <div className="flex flex-wrap gap-3">
              {healthcareSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover-elevate cursor-default"
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
