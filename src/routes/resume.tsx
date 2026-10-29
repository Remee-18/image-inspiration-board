import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/resume")({
  head: () => meta("Resume — Remee", "Download the latest resume of Remee, MBA (HR & Marketing) at IILM University."),
  component: Resume,
});

function Resume() {
  return (
    <>
      <PageHero eyebrow="Resume" title="My latest resume." />
      <Section>
        <div className="mx-auto max-w-xl rounded-3xl border-2 border-dashed border-gold/60 bg-muted p-10 text-center">
          <FileText className="mx-auto h-12 w-12 text-gold" />
          <h2 className="mt-4 text-2xl text-primary">Resume PDF coming soon</h2>
          <p className="mt-2 text-sm text-muted-foreground">The download button will appear here once the latest resume is uploaded.</p>
          <span aria-disabled className="mt-6 inline-block cursor-not-allowed rounded-full bg-primary/40 px-6 py-3 font-semibold text-primary-foreground">Download resume</span>
          <p className="mt-6 text-sm">Meanwhile, <Link to="/contact" className="font-semibold text-primary underline">get in touch</Link>.</p>
        </div>
      </Section>
    </>
  );
}
