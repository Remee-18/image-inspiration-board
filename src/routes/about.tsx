import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { Card, CTA, Section, meta } from "@/components/site";
import portrait from "@/assets/remee-about-portrait.jpeg.asset.json";

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
      <section aria-labelledby="about-heading" className="bg-background">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <header className="fade-up mb-9 border-b pb-7 md:mb-12">
            <p className="text-xs font-bold uppercase text-gold">GET TO KNOW ME</p>
            <h1 id="about-heading" className="mt-3 text-4xl tracking-normal text-primary md:text-6xl">About Me</h1>
          </header>
          <div className="grid items-start gap-9 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] md:gap-12 lg:gap-16">
            <figure className="fade-up mx-auto w-full max-w-[19rem] min-w-0 rounded-lg border bg-beige p-2 md:max-w-none">
              <img src={portrait.url} alt="Remee in professional attire" width={768} height={1444} className="block h-auto w-full rounded-md" loading="eager" decoding="async" />
            </figure>
            <div className="fade-up min-w-0">
              <div className="space-y-5 text-base leading-8 text-muted-foreground lg:text-lg">
                <p>I am an MBA student specialising in Human Resource Management at IILM University, with a background in B.Sc. and a growing interest in building a career in HR.</p>
                <p>My academic journey and corporate exposure, including my three-month internship with Bharti Airtel's HR Business Partnering team, have helped me develop an understanding of people management, coordination and organisational processes.</p>
                <p>I enjoy working with people, taking initiative and bringing structure to ideas. I value continuous learning, teamwork and opportunities that allow me to apply my knowledge in practical situations.</p>
              </div>
              <section aria-labelledby="career-interests-heading" className="mt-9 border-t pt-8">
                <h2 id="career-interests-heading" className="mb-5 text-3xl tracking-normal text-primary">Career Interests</h2>
                <div className="space-y-5 text-base leading-8 text-muted-foreground lg:text-lg">
                  <p>I am keen to explore opportunities across different HR functions, particularly Talent Acquisition, where I can contribute to recruitment activities, candidate engagement and creating positive hiring experiences.</p>
                  <p>I am also interested in HR Business Partnering, an area I was introduced to during my three-month internship with Bharti Airtel. This experience sparked my interest in understanding employee needs, supporting HR initiatives and aligning people practices with organisational goals.</p>
                  <p>I am open to entry-level opportunities across these areas, where I can apply my academic knowledge, build practical skills, learn from experienced professionals and gradually develop into a well-rounded HR professional.</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
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
