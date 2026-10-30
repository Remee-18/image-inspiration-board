import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/achievements", label: "Achievements" },
  { to: "/career", label: "Career Direction" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export const EMAIL = "rajremee2000@gmail.com";
export const LINKEDIN = "https://www.linkedin.com/in/remee-04347227a/";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="font-display text-2xl text-primary">Remee<span className="text-gold">.</span></Link>
        <nav className="hidden items-center gap-5 text-sm lg:flex">
          {NAV.slice(1, -1).map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "text-primary font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contact" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 lg:inline-flex">
          Let's connect
        </Link>
        <button className="lg:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t px-5 py-3 lg:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-muted-foreground" activeProps={{ className: "text-primary font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">Remee<span className="text-gold">.</span></p>
          <p className="mt-2 text-sm opacity-75">People First. Purpose Driven. Always Learning.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm opacity-85">
          {NAV.map((n) => <Link key={n.to} to={n.to} className="hover:text-gold">{n.label}</Link>)}
        </div>
        <div className="space-y-3 text-xs opacity-70">
          <p><strong>Privacy:</strong> This site may use Google Analytics to understand visits in aggregate. No personal data is sold or shared.</p>
          <p><strong>AI disclosure:</strong> AI tools helped draft and structure this content. All facts, experiences and evidence were supplied and verified by Remee.</p>
        </div>
      </div>
      <p className="border-t border-primary-foreground/15 py-4 text-center text-xs opacity-60">© 2026 Remee · Greater Noida, India</p>
    </footer>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <section className="bg-beige">
      <div className="fade-up mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl text-primary md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, children, tone = "plain" }: { eyebrow?: string; title?: string; children: ReactNode; tone?: "plain" | "beige" }) {
  return (
    <section className={tone === "beige" ? "bg-beige" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-16">
        {eyebrow && <p className="eyebrow text-center">{eyebrow}</p>}
        {title && <h2 className="mb-10 mt-2 text-center text-3xl text-primary md:text-4xl">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${className}`}>{children}</div>;
}

export function Placeholder({ label }: { label: string }) {
  return (
    <div className="grid aspect-video place-items-center rounded-xl border-2 border-dashed border-gold/60 bg-muted p-4 text-center text-xs text-muted-foreground">
      Evidence placeholder — {label}
    </div>
  );
}

export function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-10 text-primary-foreground md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl md:text-4xl">Hiring for HR or Talent Acquisition?</h2>
          <p className="mt-2 opacity-80">I'd love to hear about entry-level HR, TA and HRBP opportunities.</p>
        </div>
        <Link to="/contact" className="rounded-full bg-accent px-6 py-3 font-semibold text-accent-foreground transition hover:opacity-90">Get in touch</Link>
      </div>
    </section>
  );
}

export function meta(title: string, description: string, image?: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(image
        ? [
            { property: "og:image", content: image },
            { name: "twitter:image", content: image },
          ]
        : []),
    ],
  };
}
