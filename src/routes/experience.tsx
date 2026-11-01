import { createFileRoute } from "@tanstack/react-router";
import { Card, CTA, PageHero, Placeholder, Section, meta } from "@/components/site";
import { AcademicExperience } from "@/components/academic-sections";
import { academicExperiences } from "@/lib/academic-content";

export const Route = createFileRoute("/experience")({
  head: () => meta("Experience — Remee | HR, Academic & Community Learning", "Airtel HRBP internship, campus leadership, academic immersion at IIM Sirmaur and rural community engagement through DTEM."),
  component: Experience,
});

const airtel = [
  "Supported capability-building for 40+ D2C operations employees across five cohorts",
  "Maintained training trackers, scoring sheets, attendance records and calendars",
  "Conducted 50+ onboarding feedback interviews and attrition calls",
  "Updated employee data and reporting-manager mapping",
];

const leadership = [
  ["HR Head & Chief Coordinator", "IILM University Incubation Lab · Dec 2025–Feb 2026", "Screened 60+ resumes, conducted 40+ interviews, supported onboarding of 30+ students, supported five incubated startups and helped coordinate an Internship Fair."],
  ["Head Girl", "School leadership", "Coordinated 10+ events for 500+ students and supported student–faculty communication."],
  ["Social Media Coordinator", "Connectors HR Club", "Created 5+ promotional posters."],
  ["Event Anchor", "IILM University", "Anchored five university events for audiences of 300+."],
];

function Experience() {
  return (
    <>
      <PageHero eyebrow="Experience" title="Learning by doing, across corporate and campus." />
      <Section>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow">May – July 2026</p>
            <h2 className="mt-2 text-3xl text-primary">HRBP Intern · Bharti Airtel</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">I completed a three-month internship at Airtel, working under the Human Resource Business Partnering (HRBP) team. I supported Airtel's DTC capability-building programme by coordinating training sessions, preparing learning materials and attendance records, managing schedules, and communicating with managers and employees to ensure smooth execution. This strengthened my organisational, communication, teamwork and stakeholder-management skills.</p>
            <ul className="mt-6 space-y-3">
              {airtel.map((a) => <li key={a} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold" />{a}</li>)}
            </ul>
          </div>
          <div className="space-y-4">
            <Placeholder label="approved, redacted Airtel internship screenshot" />
            <p className="text-xs text-muted-foreground">No confidential employee information or unapproved internal materials are shown.</p>
          </div>
        </div>
      </Section>
      <Section tone="beige" eyebrow="Leadership" title="Leading people and events">
        <div className="grid gap-6 md:grid-cols-2">
          {leadership.map(([t, o, d]) => (
            <Card key={t}><h3 className="text-xl text-primary">{t}</h3><p className="eyebrow mt-1">{o}</p><p className="mt-3 text-sm text-muted-foreground">{d}</p></Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="Reflection" title="What these roles taught me">
        <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-muted-foreground">Coordinating training showed me how much good HR depends on accuracy and follow-through. Recruiting for the Incubation Lab taught me to listen carefully and judge fit beyond a resume. I'm still developing these skills — and they're why I want to grow in Talent Acquisition and HR Business Partnering.</p>
      </Section>
      {academicExperiences.map((story, index) => <AcademicExperience key={story.title} story={story} index={index} />)}
      <CTA />
    </>
  );
}
