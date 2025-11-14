import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import epicLogo from '@assets/stock_images/epic_systems_ehr_hos_e9dba9e1.jpg';
import insuletLogo from '@assets/stock_images/omnipod_insulin_pump_a5291a49.jpg';
import acordaLogo from '@assets/stock_images/acorda_therapeutics__252e6aef.jpg';
import cscLogo from '@assets/stock_images/csc_corporation_serv_644898ce.jpg';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  allResponsibilities: string[];
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 'epic',
    company: 'Epic Systems',
    role: 'Project Manager',
    location: 'Madison, WI',
    period: 'September 2024 - August 2025',
    logo: epicLogo,
    highlights: [
      'Managed 18 IT analysts across four teams to support Beebe Healthcare\'s EHR implementation',
      'Guided 26 clinical leaders through 300+ workflow optimization decisions',
      'Collaborated with 5 cross-functional teams to reduce average surgery time by 3 minutes'
    ],
    allResponsibilities: [
      'Managed 18 IT analysts across four teams to support Beebe Healthcare\'s EHR implementation',
      'Guided 26 clinical leaders through 300+ workflow optimization decisions for surgery, anesthesia, and perfusion',
      'Demoed client-facing product presentations to clinical stakeholders, facilitating consensus on key design decisions',
      'Co-led a committee of 30+ anesthesiologists to finalize product optimization opportunities through market analysis',
      'Collaborated with 5 cross-functional teams to finalize hybrid workflows, reducing average surgery time by 3 minutes',
      'Utilized agile and waterfall methodologies to manage project and sprint timelines'
    ]
  },
  {
    id: 'insulet',
    company: 'Insulet Corporation',
    role: 'Systems Engineering Design Verification Co-op',
    location: 'Acton, MA',
    period: 'July 2023 - December 2023',
    logo: insuletLogo,
    highlights: [
      'Executed QA tests for 50+ Omnipod performance specifications, ensuring FDA compliance',
      'Led end-to-end systems integration testing for device-to-cloud protocols',
      'Directed capacity optimization project streamlining 70+ test specifications'
    ],
    allResponsibilities: [
      'Executed QA tests for 50+ Omnipod performance specifications, ensuring product reliability and FDA compliance',
      'Led end-to-end systems integration testing for device-to-cloud and cloud-to-cloud data transfer protocols',
      'Directed a capacity optimization project that streamlined resource usage across 70+ test specifications',
      'Investigated Omnipod test anomalies via root cause analysis and implemented corrective design changes'
    ]
  },
  {
    id: 'acorda',
    company: 'Acorda Therapeutics',
    role: 'Analytical Development Co-op',
    location: 'Waltham, MA',
    period: 'July 2022 - December 2022',
    logo: acordaLogo,
    highlights: [
      'Conducted market validation studies on powder stability for pharmaceutical launch',
      'Assessed biocompatibility of spray-dried drug formulations',
      'Managed analytical testing using UPLC/HPLC for drug formulation characterization'
    ],
    allResponsibilities: [
      'Conducted market validation studies on powder stability and compatibility for a pharmaceutical launch',
      'Assessed biocompatibility of spray-dried drug formulations for a MannKind–Acorda collaboration',
      'Followed GMP and GDP guidelines in lab setting for all test runs including ACI-8 analysis',
      'Managed analytical testing of a patented drug portfolio using UPLC/HPLC, characterizing formulation properties to guide development decisions'
    ]
  },
  {
    id: 'csc',
    company: 'CSC',
    role: 'DBS Intern',
    location: 'Wilmington, DE',
    period: 'June 2020 - September 2020',
    logo: cscLogo,
    highlights: [
      'Created clean reference database of international ticker suffixes',
      'Wrote AWS Lambda job for CSV validation and ingestion to S3',
      'Mapped database service connections in AWS architecture'
    ],
    allResponsibilities: [
      'Created a clean reference database of international ticker suffixes (e.g., .US, .IN, .CA, .HK), standardized symbol formats, and wrote a small AWS Lambda job to validate/ingest CSVs to storage (S3) for easy lookup',
      'Mapped how database services connect in AWS (Lambda → S3 → CloudWatch)'
    ]
  }
];

function ExperienceCard({ exp, index }: { exp: ExperienceItem; index: number }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.2);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'active' : ''}`}
      style={{
        transitionDelay: `${index * 150}ms`
      }}
    >
      <Card
        className="p-6 md:p-8 overflow-visible hover:shadow-2xl transition-all duration-500 hover-elevate card-3d group"
        data-testid={`card-experience-${exp.id}`}
      >
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex items-center justify-center md:w-24 md:h-24 w-20 h-20 flex-shrink-0 bg-white dark:bg-muted rounded-md p-2 border border-border group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
            <img
              src={exp.logo}
              alt={`${exp.company} logo`}
              className="w-full h-full object-contain"
              data-testid={`img-logo-${exp.id}`}
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {exp.role}
                </h3>
                <p className="text-lg font-semibold text-primary">
                  {exp.company}
                </p>
                <p className="text-sm text-muted-foreground">
                  {exp.location} • {exp.period}
                </p>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {(expandedId === exp.id ? exp.allResponsibilities : exp.highlights).map(
                (item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-foreground"
                    data-testid={`text-responsibility-${exp.id}-${i}`}
                  >
                    <span className="text-accent font-bold mt-1">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                )
              )}
            </ul>

            {exp.allResponsibilities.length > exp.highlights.length && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleExpand(exp.id)}
                className="gap-2"
                data-testid={`button-expand-${exp.id}`}
              >
                {expandedId === exp.id ? (
                  <>
                    <ChevronUp size={16} />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} />
                    Read More
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.3);

  return (
    <section id="experience" className="py-20 md:py-32 px-6 bg-background relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-reveal ${headerVisible ? 'active' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving innovation across healthcare technology, medical devices, and bioengineering
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
