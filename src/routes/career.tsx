import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/career")({
  head: () => meta("My Career Direction — Remee | Talent Acquisition & HRBP", "Remee's goals and roadmap toward Talent Acquisition and HR Business Partnering."),
  component: Career,
});

const road = [
  ["Build recruitment foundations", "Screening, interviewing, candidate pipelines and documentation."],
  ["Grow across the employee lifecycle", "Candidate management, onboarding, employee engagement and HR data."],
  ["Develop strategic HRBP skills", "Understanding business needs and partnering on people decisions."],
];

function Career() {
  return (
    <>
      <PageHero eyebrow="My career direction" title="Talent Acquisition today, HR Business Partnering tomorrow." />
      <Section>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">My career goal is to grow in Human Resources, with a focus on Talent Acquisition and HR Business Partnering. I want to develop the ability to identify the right talent, support positive employee experiences, understand business needs, and contribute to people-focused workplace practices. I aim to strengthen my recruitment, communication, analytical, and stakeholder-management skills while learning from experienced HR professionals and taking on meaningful responsibilities.</p>
      </Section>
      <Section tone="beige" eyebrow="Roadmap" title="Three steps forward">
        <ol className="relative mx-auto max-w-2xl space-y-10 border-l-2 border-gold pl-8">
          {road.map(([t, d], i) => (
            <li key={t} className="relative">
              <span className="absolute -left-[3.05rem] grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-primary-foreground">{i + 1}</span>
              <h3 className="text-2xl text-primary">{t}</h3>
              <p className="mt-1 text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
      <CTA />
    </>
  );
}
