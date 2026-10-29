import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, GraduationCap, MapPin, Quote } from "lucide-react";
import { useRef, type PointerEvent } from "react";

const TICKER = [
  "Talent Acquisition",
  "Screening & Interviews",
  "Onboarding",
  "Employee Experience",
  "HR Data & MIS",
  "Capability Building",
  "Stakeholder Communication",
  "Employer Branding",
];

const STATS = [
  { value: "40+", label: "employees supported" },
  { value: "60+", label: "resumes screened" },
  { value: "30+", label: "students onboarded" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  function onMove(e: PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    const y = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    el.style.setProperty("--rx", `${((y - 0.5) * -5).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((x - 0.5) * 7).toFixed(2)}deg`);
  }

  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "30%");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative isolate overflow-hidden bg-primary text-primary-foreground"
    >
      {/* Ambient layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-mesh animate-drift absolute inset-[-10%]" />
        <div className="hero-grid absolute inset-0" />
        <div className="spotlight absolute inset-0" />
        <div className="grain absolute inset-0 opacity-[0.06]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary to-transparent" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 pt-16 md:pb-20 md:pt-24 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
        {/* Copy */}
        <div className="fade-up">
          <span className="glass inline-flex items-center gap-2.5 rounded-full py-2 pl-3 pr-4 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-primary-foreground/85">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="animate-ping-soft absolute h-2 w-2 rounded-full bg-gold" />
              <span className="h-2 w-2 rounded-full bg-gold" />
            </span>
            Open to HR &amp; Talent Acquisition roles
          </span>

          <h1 className="mt-7 text-[3.1rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem]">
            <span className="block overflow-hidden pb-1">
              <span className="line-rise block" style={{ animationDelay: "60ms" }}>
                Hello, I&rsquo;m Remee &mdash;
              </span>
            </span>
            <span className="block overflow-hidden pb-3">
              <span className="line-rise text-shine animate-shine block" style={{ animationDelay: "190ms" }}>
                aspiring HR professional.
              </span>
            </span>
          </h1>

          <p
            className="fade-up mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/75"
            style={{ animationDelay: "380ms" }}
          >
            MBA student at IILM University, Greater Noida (HR &amp; Marketing, 2025&ndash;2027). I completed a
            three-month HRBP internship at Airtel and led recruitment at the IILM University Incubation Lab.
          </p>

          <div className="fade-up mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "500ms" }}>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-lg shadow-gold/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gold/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              View projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/resume"
              className="glass rounded-full px-7 py-3.5 font-semibold transition hover:bg-primary-foreground/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
              Resume
            </Link>
            <Link
              to="/contact"
              className="rounded-full px-4 py-3.5 font-semibold text-primary-foreground/80 underline-offset-8 transition hover:text-primary-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60"
            >
              Contact
            </Link>
          </div>

          <dl
            className="fade-up mt-11 flex flex-wrap gap-x-9 gap-y-5 border-t border-primary-foreground/12 pt-7"
            style={{ animationDelay: "620ms" }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl text-primary-foreground">{s.value}</dd>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-primary-foreground/55">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait */}
        <div className="fade-up relative mx-auto w-full max-w-sm" style={{ animationDelay: "300ms" }}>
          <div
            aria-hidden
            className="animate-spin-slow absolute -inset-7 rounded-full bg-[conic-gradient(from_0deg,var(--gold),var(--accent),var(--primary-foreground),var(--gold))] opacity-30 blur-3xl"
          />
          <div className="relative rounded-[2.4rem] bg-gradient-to-b from-primary-foreground/35 via-primary-foreground/10 to-transparent p-px">
            <div className="tilt relative aspect-[4/5] overflow-hidden rounded-[calc(2.4rem-1px)] bg-beige">
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,color-mix(in_oklab,var(--gold)_22%,transparent),transparent_70%)]"
              />
              <div className="relative grid h-full place-items-center text-center text-primary">
                <div>
                  <span className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-gold/40 bg-card/60 shadow-sm">
                    <span className="font-display text-6xl leading-none">R</span>
                  </span>
                  <p className="mt-5 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                    Profile photo placeholder
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground/80">Send your photo and I&rsquo;ll drop it in.</p>
                </div>
              </div>
              <div aria-hidden className="sweep absolute inset-y-0 -left-1/2 w-1/2 opacity-30" />
            </div>
          </div>

          <div className="glass animate-float absolute -left-5 top-12 hidden rounded-2xl px-4 py-3 shadow-xl shadow-primary/40 sm:block">
            <p className="flex items-center gap-2 font-display text-xl text-primary-foreground">
              <BadgeCheck className="h-4 w-4 text-gold" /> 50+
            </p>
            <p className="mt-0.5 text-[0.68rem] uppercase tracking-[0.16em] text-primary-foreground/60">
              feedback interviews
            </p>
          </div>

          <div className="glass animate-float-late absolute -right-4 bottom-14 hidden rounded-2xl px-4 py-3 shadow-xl shadow-primary/40 sm:block">
            <p className="flex items-center gap-2 font-display text-xl text-primary-foreground">
              <GraduationCap className="h-4 w-4 text-gold" /> MBA
            </p>
            <p className="mt-0.5 text-[0.68rem] uppercase tracking-[0.16em] text-primary-foreground/60">
              HR &amp; Marketing
            </p>
          </div>

          <div className="glass absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full px-4 py-2 text-xs text-primary-foreground/80">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            Greater Noida, India
          </div>
        </div>
      </div>

      {/* Keyword ticker */}
      <div className="marquee-mask relative border-t border-primary-foreground/10 py-4">
        <div className="marquee-track flex w-max hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center gap-9 px-5">
              {TICKER.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 whitespace-nowrap text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary-foreground/55"
                >
                  <Quote className="h-3 w-3 shrink-0 text-gold/80" />
                  {t}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
