import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { Card, CTA, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/achievements")({
  head: () => meta("Achievements — Remee", "Competition wins and recognitions: MBA Orientation, Startup Pitch and university dance."),
  component: Achievements,
});

const items = [
  ["First position", "MBA Orientation Programme", "Led a team of six."],
  ["First position", "Startup Pitch Competition", "Led the team through ideation and pitch."],
  ["Runner-up", "University dance competition", "Performed at the university level."],
];

function Achievements() {
  return (
    <>
      <PageHero eyebrow="Achievements" title="Moments I'm proud of." />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(([r, t, d], i) => (
            <Card key={t} className={i === 0 ? "bg-primary text-primary-foreground" : ""}>
              <Trophy className="h-8 w-8 text-gold" />
              <p className="eyebrow mt-4">{r}</p>
              <h3 className="mt-1 text-2xl">{t}</h3>
              <p className={`mt-2 text-sm ${i === 0 ? "opacity-80" : "text-muted-foreground"}`}>{d}</p>
            </Card>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
