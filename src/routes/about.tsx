import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { Card, CTA, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => meta("About Remee — MBA HR & Marketing, IILM University", "Background, values and education of Remee, an aspiring HR and Talent Acquisition professional."),
  component: About,
});

const edu = [
  ["MBA (HR & Marketing)", "IILM University, Greater Noida", "2025–2027"],
  ["B.Sc.", "MS College (Bihar University)", ""],
  ["HSC, CBSE", "The Assembly of God Church School, Bettiah", ""],
  ["SSC, CBSE", "Notre Dame Public School, Bettiah", ""],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About me" title="Curious, motivated and people-focused." />
      <Section>
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div className="grid aspect-square place-items-center rounded-[2rem] bg-beige text-center">
            <div><p className="font-display text-6xl text-primary">R</p><p className="text-xs uppercase tracking-widest text-muted-foreground">Photo placeholder</p></div>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>I am a motivated and curious management student with a strong interest in Human Resources, Talent Acquisition, and people management. Having completed my internship at Airtel, I gained valuable corporate exposure and developed a better understanding of professional work environments, coordination, and organisational processes.</p>
            <p>I enjoy learning new skills, taking on responsibilities, and exploring opportunities that help me grow both personally and professionally. I value continuous learning, teamwork, adaptability, and effective communication.</p>
            <p>My goal is to build a meaningful career where I can contribute to organisational growth, support people, and continue developing into a confident and capable professional.</p>
          </div>
        </div>
      </Section>
      <Section tone="beige" eyebrow="Education" title="Academic journey">
        <div className="grid gap-5 md:grid-cols-2">
          {edu.map(([d, s, y]) => (
            <Card key={d}>
              <GraduationCap className="h-6 w-6 text-gold" />
              <h3 className="mt-3 text-xl text-primary">{d}</h3>
              <p className="text-sm text-muted-foreground">{s}{y && ` · ${y}`}</p>
            </Card>
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
