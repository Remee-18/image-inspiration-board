import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { Card, CTA, PageHero, Section, meta } from "@/components/site";
import { ProjectPhoto } from "@/components/project-photo";
import type { InternshipPhoto } from "@/components/internship-gallery";
import zimyoCertificate from "@/assets/zimyo-recruit-hrms-certificate.jpeg.asset.json";
import kpmgCertificate from "@/assets/lean-six-sigma-green-belt-kpmg-certificate.jpeg.asset.json";
import marketingCertificate from "@/assets/marketing-strategy-masterclass-certificate.jpeg.asset.json";

export const Route = createFileRoute("/skills")({
  head: () => meta("Skills & Certifications — Remee", "Recruitment, HR operations and training coordination skills, plus ZIMYO, Lean Six Sigma and marketing certifications."),
  component: Skills,
});

const groups: [string, string[]][] = [
  ["Recruitment", ["Recruitment Coordination", "Resume Screening", "Candidate Screening", "Interview Coordination", "Candidate Pipeline Management", "Candidate Tracking", "Recruitment Documentation", "Hiring Support", "Onboarding Coordination"]],
  ["HR Tools & Data", ["ZIMYO HRMS/HRIS", "Microsoft Excel", "MS Office", "Outlook", "Data Management", "HR Documentation", "Employee Data Updates", "Data Accuracy"]],
  ["Employee Experience", ["Onboarding Feedback", "Attrition and Retention Analysis", "Employee Engagement", "Training Coordination", "Training Trackers", "Program Calendars", "Scoring Sheets", "Attendance Records"]],
  ["Professional", ["Stakeholder Management", "Communication", "Attention to Detail", "Confidentiality", "Teamwork", "Organisation", "Problem-solving", "Adaptability"]],
];

export const certificateCards: { title: string; description: string; year: string; photo: InternshipPhoto }[] = [
  {
    title: "ZIMYO Recruit & HRMS",
    description: "Two-day ATS and HRMS/HRIS workshop",
    year: "September 2026",
    photo: {
      src: zimyoCertificate.url,
      caption: "Certificate of Completion — Zimyo Recruit and HRMS Products",
      alt: "Certificate of Completion presented to Remee for successfully completing a two-day offline workshop on Zimyo Recruit and HRMS Products, conducted on 8th and 9th September 2026 at IILM University, Greater Noida, with Zimyo Consulting Pvt. Ltd",
    },
  },
  {
    title: "Lean Six Sigma Green Belt",
    description: "KPMG India Services LLP · four days, 32 learning hours",
    year: "January 2026",
    photo: {
      src: kpmgCertificate.url,
      caption: "Certificate of Completion — Lean Six Sigma Green Belt Certification Programme",
      alt: "KPMG Certificate of Completion issued to Remee for completing the Lean Six Sigma Green Belt Certification Programme dated 28.01.2026, duration four days and 32 learning hours, signed by Vijay Gogoi, Partner, Learning Services, KPMG India Services LLP",
    },
  },
  {
    title: "Marketing Strategy",
    description: "STP analysis, go-to-market planning, email marketing",
    year: "April 2024",
    photo: {
      src: marketingCertificate.url,
      caption: "Certificate of Participation — Developing Marketing Strategy Masterclass",
      alt: "CATKing Certificate of Participation certifying Remee for participating in the Developing Marketing Strategy Masterclass on 28th April, Sunday 09 pm, with Dr Pratik Modi of BML Munjal University",
    },
  },
];

function Skills() {
  return (
    <>
      <PageHero eyebrow="Skills & Certifications" title="Skills I'm building, step by step." intro="A working toolkit from internships and campus roles — still growing, not yet mastered." />
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map(([g, list]) => (
            <Card key={g}>
              <h3 className="text-xl text-primary">{g}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {list.map((s) => <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{s}</span>)}
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Section tone="beige" eyebrow="Certifications" title="Learning credentials">
        <div className="grid gap-6 md:grid-cols-3">
          {certificateCards.map((c) => (
            <Card key={c.title}>
              <ProjectPhoto photo={c.photo} showCaption={false} />
              <Award className="mt-4 h-6 w-6 text-gold" />
              <h3 className="mt-2 text-xl text-primary">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.description}</p>
              <p className="eyebrow mt-2">{c.year}</p>
            </Card>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
