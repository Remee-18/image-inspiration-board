import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Briefcase, Quote, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Highlight = { icon: LucideIcon; title: string; text: string; to: "/experience" | "/projects" };
type CareerStep = { n: string; title: string; text: string };

export function ExperienceHighlights({ highlights }: { highlights: Highlight[] }) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Highlights</p>
            <h2 className="mt-3 text-3xl text-primary md:text-5xl">Experience at a glance<span className="text-gold">.</span></h2>
          </div>
          <Button asChild variant="link" className="group h-auto self-start px-0 md:self-auto">
            <Link to="/experience">Explore my experience <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
          </Button>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((highlight, index) => (
            <article key={highlight.title} className={`group relative flex min-h-80 flex-col overflow-hidden rounded-lg border p-7 transition duration-300 hover:-translate-y-1 ${index === 1 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-card-foreground"}`}>
              <div className="flex items-center justify-between">
                <span className={`grid size-12 place-items-center rounded-lg border ${index === 1 ? "border-primary-foreground/20 bg-primary-foreground/10" : "border-gold/25 bg-accent/15"}`}>
                  <highlight.icon className="size-5 text-gold" strokeWidth={1.5} />
                </span>
                <span aria-hidden className={`font-display text-3xl ${index === 1 ? "text-primary-foreground/25" : "text-primary/20"}`}>0{index + 1}</span>
              </div>
              <h3 className="mb-3 mt-8 text-2xl leading-tight">{highlight.title}</h3>
              <p className={`mb-7 text-sm leading-relaxed ${index === 1 ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{highlight.text}</p>
              <Button asChild variant="ghost" className={`mt-auto h-auto justify-between rounded-none border-t px-0 pb-0 pt-5 hover:bg-transparent ${index === 1 ? "border-primary-foreground/20 hover:text-accent" : "border-border hover:text-primary"}`}>
                <Link to={highlight.to}>{highlight.to === "/projects" ? "View projects" : "View experience"}<ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CareerRoadmap({ steps }: { steps: CareerStep[] }) {
  return (
    <section className="section-surface relative overflow-hidden bg-muted">
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="mb-14 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="eyebrow">Roadmap</p><h2 className="mt-3 text-3xl text-primary md:text-5xl">Where I&rsquo;m heading<span className="text-gold">.</span></h2></div>
          <span aria-hidden className="hidden size-12 place-items-center rounded-full border border-gold/40 text-primary md:grid"><ArrowDown className="size-5" strokeWidth={1.5} /></span>
        </div>
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <li key={step.n} className="relative border-l border-gold/40 pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-7">
              <span aria-hidden className="absolute -left-1.5 top-2 size-3 rounded-full border-2 border-muted bg-gold md:-top-1.5 md:left-0" />
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-5xl text-primary/25">{step.n}</span>
                {index < steps.length - 1 && <ArrowRight aria-hidden className="hidden size-5 text-gold md:block" strokeWidth={1.5} />}
                {index === steps.length - 1 && <Briefcase aria-hidden className="size-5 text-gold" strokeWidth={1.5} />}
              </div>
              <h3 className="text-2xl text-primary">{step.title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 border-t border-gold/20 pt-6">
          <Button asChild variant="link" className="h-auto px-0"><Link to="/career">Read my career direction <ArrowUpRight /></Link></Button>
        </div>
      </div>
    </section>
  );
}

export function PersonalQuote({ quote }: { quote: string }) {
  return (
    <section className="border-y border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 md:grid-cols-[0.3fr_1fr] md:gap-16 md:py-24">
        <div className="flex items-center gap-5 md:block">
          <Quote aria-hidden className="size-12 text-gold md:size-16" strokeWidth={1} />
          <div aria-hidden className="h-px w-14 bg-gold md:mt-8" />
        </div>
        <figure>
          <blockquote className="max-w-3xl font-display text-3xl leading-snug text-primary md:text-4xl">“{quote}”</blockquote>
          <figcaption className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"><span aria-hidden className="h-px w-8 bg-gold" /><span className="font-semibold text-primary">Remee</span></figcaption>
        </figure>
      </div>
    </section>
  );
}

export function HomeInvitation() {
  return (
    <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-9 px-5 py-20 md:py-24 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="eyebrow">Let&rsquo;s connect</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-5xl">Hiring for HR or<br className="hidden sm:block" /> <span className="text-accent">Talent Acquisition?</span></h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/75">I&rsquo;d love to hear about entry-level HR, TA and HRBP opportunities.</p>
        </div>
        <Button asChild variant="secondary" size="lg" className="group h-14 w-full shrink-0 gap-6 rounded-full bg-accent px-7 text-accent-foreground hover:bg-gold sm:w-auto">
          <Link to="/contact">Get in touch <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
        </Button>
      </div>
    </section>
  );
}