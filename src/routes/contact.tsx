import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { Card, EMAIL, LINKEDIN, PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact Remee — HR & Talent Acquisition", "Connect with Remee about entry-level HR, Talent Acquisition, HRBP and collaboration opportunities."),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/remee", href: LINKEDIN },
    { icon: MapPin, label: "Location", value: "Greater Noida, India" },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk." intro="Recruiters and professionals — I'd love to connect about entry-level HR, Talent Acquisition, HRBP, learning and collaboration opportunities." />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <Card key={it.label}>
              <it.icon className="h-7 w-7 text-gold" />
              <p className="eyebrow mt-4">{it.label}</p>
              {it.href ? (
                <a href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-1 block break-all text-lg font-semibold text-primary hover:underline">{it.value}</a>
              ) : (
                <p className="mt-1 text-lg font-semibold text-primary">{it.value}</p>
              )}
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
