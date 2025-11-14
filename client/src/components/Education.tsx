import { Card } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Degree {
  id: string;
  level: string;
  field: string;
  university: string;
  location: string;
  gpa: string;
  graduationDate: string;
  details: string[];
}

const degrees: Degree[] = [
  {
    id: 'ms',
    level: 'M.S.',
    field: 'Bioengineering',
    university: 'Northeastern University',
    location: 'Boston, MA',
    gpa: '3.76/4.00',
    graduationDate: 'December 2025',
    details: [
      'Concentration in Biomedical Devices and Bioimaging',
      'Nanomedicine Graduate Certificate'
    ]
  },
  {
    id: 'bs',
    level: 'B.S.',
    field: 'Bioengineering',
    university: 'Northeastern University',
    location: 'Boston, MA',
    gpa: '3.56/4.00',
    graduationDate: 'May 2024',
    details: [
      'Concentration in Biomedical Devices and Bioimaging',
      'Minor in Business Administration'
    ]
  }
];

function DegreeCard({ degree, index }: { degree: Degree; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <div
      ref={ref}
      className={`scroll-scale ${isVisible ? 'active' : ''}`}
      style={{
        transitionDelay: `${index * 200}ms`
      }}
    >
      <Card
        className="p-8 hover:shadow-2xl transition-all duration-500 hover-elevate card-3d group"
        data-testid={`card-education-${degree.id}`}
      >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {degree.level} in {degree.field}
                  </h3>
                  <p className="text-lg font-semibold text-primary mb-1">
                    {degree.university}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {degree.location} • {degree.graduationDate}
                  </p>
                </div>
              </div>

              <div className="mb-4 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">GPA</p>
                <p className="text-3xl font-bold text-foreground" data-testid={`text-gpa-${degree.id}`}>
                  {degree.gpa}
                </p>
              </div>

        <ul className="space-y-2">
          {degree.details.map((detail, index) => (
            <li
              key={index}
              className="flex gap-3 text-foreground"
              data-testid={`text-detail-${degree.id}-${index}`}
            >
              <span className="text-accent font-bold mt-1">•</span>
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export function Education() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  return (
    <section id="education" className="py-20 md:py-32 px-6 bg-background relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-accent/5 to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-reveal ${headerVisible ? 'active' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced training in bioengineering and biomedical device development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {degrees.map((degree, index) => (
            <DegreeCard key={degree.id} degree={degree} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
