import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import abbottLogo from '@assets/stock_images/abbott_cardiac_rhythm_mgmt.jpg';
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
    id: 'abbott',
    company: 'Abbott',
    role: 'Project Manager',
    location: 'Sylmar, CA',
    period: 'March 2026 - Present',
    logo: abbottLogo,
    highlights: [
      'Managing medical device programs within the Cardiac Rhythm Management division, driving pacemaker and implantable device development',
      'Led rollout of a device hardware update across 5 regions, parsing 70,000+ serial numbers and coordinating 11,000 device reps to ensure EMI compliance',
      'Operating within Abbott\'s quality system, ensuring deliverables comply with FDA design controls, CAPA processes, and DHF documentation'
    ],
    allResponsibilities: [
      'Managing medical device programs within the Cardiac Rhythm Management division, developing project plans, schedules, and resource estimates using MS Project to drive pacemaker and implantable device development',
      'Led rollout of a device hardware update across 5 regions, parsing 70,000+ serial numbers and coordinating 11,000 device reps to ensure EMI compliance of Merlin 2 Interrogators',
      'Operating within Abbott\'s quality system environment, ensuring all project deliverables comply with FDA design controls, CAPA processes, and Design History File (DHF) documentation requirements',
      'Utilizing Power BI, Power Apps, and Excel to analyze representative data and track program metrics for the Merlin 2 program'
    ]
  },
  {
    id: 'epic',
    company: 'Epic Systems',
    role: 'Project Manager',
    location: 'Madison, WI',
    period: 'September 2024 - August 2025',
    logo: epicLogo,
    highlights: [
      'Coordinated cross-functional teams of 18 IT analysts on a $2M EHR implementation, delivering all milestones on schedule',
      'Designed statistical analysis framework for perioperative workflows, increasing First Case On-Time Starts by 15%',
      'Led root cause analysis investigations on 9 device interface failures, validating corrective actions through regression testing'
    ],
    allResponsibilities: [
      'Coordinated cross-functional teams of 18 IT analysts on a $2M EHR implementation using Agile and Waterfall methodologies, delivering all project milestones on schedule while managing competing priorities in MS Project',
      'Designed statistical analysis framework to identify integration bottlenecks in perioperative workflows, implementing process improvements that increased First Case On-Time Starts by 15%',
      'Led root cause analysis (5-Why, Fishbone) investigations on 9 device interface failures, collaborating with vendors to resolve data transmission errors and validating corrective actions through regression testing protocols',
      'Maintained Systems Integration Testing documentation per FDA 21 CFR Part 11 requirements in SharePoint, supporting 3 regulatory audits with complete traceability records',
      'Created Visio workflow diagrams and technical documentation to support client presentations, facilitating stakeholder alignment across 26 clinical leaders and 3 workgroups'
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
      'Executed Design Verification testing for 50+ Omnipod 5 system requirements, maintaining traceability to ISO 14971 and FDA 21 CFR Part 820.30',
      'Led end-to-end Systems Integration Testing for device-to-cloud telemetry protocols, validating data integrity within regulated QMS',
      'Investigated product anomalies through root cause analysis and FMEA, presenting corrective action recommendations to engineering leadership'
    ],
    allResponsibilities: [
      'Executed Design Verification testing for 50+ system requirements of the Omnipod 5 insulin delivery device, maintaining traceability matrices in electronic QMS linking test cases to ISO 14971 risk controls, IEC 62304 software standards, and FDA 21 CFR Part 820.30 Design Control requirements',
      'Led end-to-end Systems Integration Testing for device-to-cloud telemetry protocols, validating data integrity of insulin delivery logs transmitted between PDM and secure cloud backend within regulated QMS environment',
      'Investigated product anomalies through structured root cause analysis and FMEA methodologies, documenting findings and presenting corrective action recommendations to engineering leadership'
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
      'Validated 5 drug formulations using HPLC and UPLC analytical methods, executing 85+ sample runs per ICH Q2(R1) standards',
      'Executed biocompatibility testing of spray-dried formulations using ACI-8, validating particle size distributions met target specifications',
      'Maintained GMP/GDP compliance across 60+ laboratory test runs, documenting results per ISO 10993 standards'
    ],
    allResponsibilities: [
      'Validated 5 drug formulations using HPLC and UPLC analytical methods, executing 85+ sample runs per ICH Q2(R1) standards',
      'Executed biocompatibility testing of spray-dried drug formulations using Andersen Cascade Impaction (ACI-8), validating particle size distributions met target MMAD specifications of 1–5 µm with under 5% standard deviation',
      'Maintained GMP/GDP compliance across 60+ laboratory test runs, documenting results in accordance with ISO 10993 biocompatibility standards',
      'Compiled particle dispersion data in Excel and authored presentation reports for cross-functional stakeholders'
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
      'Created clean reference database of international ticker suffixes, standardizing symbol formats across markets',
      'Wrote AWS Lambda job for CSV validation and ingestion to S3 for automated lookup',
      'Mapped database service connections in AWS architecture (Lambda → S3 → CloudWatch)'
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
