import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Briefcase, Users, Sparkles, Quote } from "lucide-react";
import { Card, CTA, Section, meta } from "@/components/site";

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
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div className="fade-up">
            <p className="eyebrow">People First · Purpose Driven · Always Learning</p>
            <h1 className="mt-4 text-5xl leading-tight md:text-6xl">Hello, I'm Remee —<br /><span className="text-accent">aspiring HR professional.</span></h1>
            <p className="mt-6 max-w-xl text-lg opacity-80">
              MBA student at IILM University, Greater Noida (HR & Marketing, 2025–2027). I completed a three-month HRBP internship at Airtel and led recruitment at the IILM University Incubation Lab.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90">View projects <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/resume" className="rounded-full border border-primary-foreground/40 px-6 py-3 font-semibold transition hover:bg-primary-foreground/10">Resume</Link>
              <Link to="/contact" className="rounded-full px-6 py-3 font-semibold underline-offset-4 hover:underline">Contact</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm fade-up">
            <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gold/70" />
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full border-4 border-accent" />
            <div className="relative grid aspect-[4/5] place-items-center rounded-[2rem] bg-beige text-center text-primary">
              <div>
                <p className="font-display text-7xl">R</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">Profile photo placeholder</p>
              </div>
            </div>
            <div className="absolute -left-4 top-10 rounded-xl bg-card px-4 py-3 text-sm text-foreground shadow-lg">
              <p className="font-display text-2xl text-primary">50+</p>
              <p className="text-xs text-muted-foreground">feedback interviews</p>
            </div>
          </div>
        </div>
      </section>

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
