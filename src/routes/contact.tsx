import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Linkedin, MapPin, type LucideIcon } from "lucide-react";
import { Card, EMAIL, LINKEDIN, PageHero, Section, meta } from "@/components/site";
import { ContactForm } from "@/components/contact-form";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Greater Noida, India")}`;

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact Remee — HR & Talent Acquisition", "Connect with Remee about entry-level HR, Talent Acquisition, HRBP and collaboration opportunities."),
  component: Contact,
});

type ContactItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external: boolean;
  hint: string;
};

function Contact() {
  const items: ContactItem[] = [
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
      external: false,
      hint: "Open your email app",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/remee",
      href: LINKEDIN,
      external: true,
      hint: "View my profile",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Greater Noida, India",
      href: MAPS_URL,
      external: true,
      hint: "Open in Google Maps",
    },
  ];

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk." intro="Recruiters and professionals — I'd love to connect about entry-level HR, Talent Acquisition, HRBP, learning and collaboration opportunities." />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <Card key={it.label} className="group relative">
              <a
                href={it.href}
                target={it.external ? "_blank" : undefined}
                rel={it.external ? "noreferrer noopener" : undefined}
                className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`${it.label}: ${it.value}`}
              />
              <it.icon className="h-7 w-7 text-gold" />
              <p className="eyebrow mt-4">{it.label}</p>
              <p className="mt-1 break-all text-lg font-semibold text-primary">{it.value}</p>
              <p className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-colors group-hover:text-primary">
                {it.hint}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </p>
            </Card>
          ))}
        </div>
      </Section>
      <Section tone="beige" eyebrow="Send a message" title="Tell me what you're looking for">
        <div className="mx-auto max-w-3xl">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
