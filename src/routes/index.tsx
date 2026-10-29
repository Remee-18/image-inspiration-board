import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, Users, Sparkles, Quote } from "lucide-react";
import { Card, CTA, Section, meta } from "@/components/site";
import { Hero } from "@/components/hero";

export const Route = createFileRoute("/")({
  head: () => meta("Remee — Aspiring HR Professional | Talent Acquisition & HRBP", "MBA (HR & Marketing) student at IILM University with an Airtel HRBP internship and recruitment leadership experience."),
  component: Index,
});

const highlights = [
  { icon: Briefcase, title: "HRBP Intern, Airtel", text: "Three months supporting capability-building for 40+ D2C employees across five cohorts." },
  { icon: Users, title: "HR Head, Incubation Lab", text: "Screened 60+ resumes, ran 40+ interviews and onboarded 30+ students." },
  { icon: Sparkles, title: "Creative Projects", text: "Brand and marketing concepts blending storytelling, audio and visual design." },
];

const steps = [
  { n: "01", title: "Recruitment foundations", text: "Screening, interviewing and candidate pipelines." },
  { n: "02", title: "Employee experience", text: "Onboarding, engagement and HR data." },
  { n: "03", title: "Strategic HRBP", text: "Partnering with business on people decisions." },
];

function Index() {
  return (
    <>
      <Hero />

      <Section eyebrow="Highlights" title="Experience at a glance">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <Card key={h.title} className={i === 1 ? "bg-primary text-primary-foreground" : ""}>
              <h.icon className="h-8 w-8 text-gold" />
              <h3 className="mt-4 text-xl">{h.title}</h3>
              <p className={`mt-2 text-sm ${i === 1 ? "opacity-80" : "text-muted-foreground"}`}>{h.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="beige" eyebrow="Roadmap" title="Where I'm heading">
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary font-display text-xl text-primary-foreground">{s.n}</div>
              <h3 className="mt-4 text-xl text-primary">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center"><Link to="/career" className="font-semibold text-primary underline underline-offset-4">Read my career direction</Link></div>
      </Section>

      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <Quote className="mx-auto h-10 w-10 text-gold" />
        <p className="mt-4 font-display text-3xl text-primary">“Every experience is an opportunity to learn, contribute, and become a better version of myself.”</p>
      </section>
      <CTA />
    </>
  );
}
