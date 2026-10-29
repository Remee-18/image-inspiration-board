import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { Card, CTA, PageHero, Placeholder, Section, meta } from "@/components/site";

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

const certs = [
  ["ZIMYO Recruit & HRMS", "Two-day ATS and HRMS/HRIS workshop", "September 2026"],
  ["Lean Six Sigma Green Belt", "KPMG India Services LLP · four days, 32 learning hours", "January 2026"],
  ["Marketing Strategy", "STP analysis, go-to-market planning, email marketing", "April 2024"],
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
          {certs.map(([t, d, y]) => (
            <Card key={t}>
              <Placeholder label={`${t} certificate`} />
              <Award className="mt-4 h-6 w-6 text-gold" />
              <h3 className="mt-2 text-xl text-primary">{t}</h3>
              <p className="text-sm text-muted-foreground">{d}</p>
              <p className="eyebrow mt-2">{y}</p>
            </Card>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
