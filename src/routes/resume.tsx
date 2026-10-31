import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Eye, FileText } from "lucide-react";
import resume from "@/assets/Remee_Resume.pdf.asset.json";
import { PageHero, Section, meta } from "@/components/site";
import { Button } from "@/components/ui/button";

const RESUME_URL = resume.url;
const RESUME_FILENAME = "Remee_Resume.pdf";

export const Route = createFileRoute("/resume")({
  head: () =>
    meta(
      "Resume — Remee",
      "Explore my academic background, HR experience, professional skills and achievements. View or download the latest resume of Remee, MBA (HR & Marketing) at IILM University.",
    ),
  component: Resume,
});

function Resume() {
  return (
    <>
      <PageHero
        eyebrow="Resume"
        title="My Resume"
        intro="Explore my academic background, HR experience, professional skills and achievements."
      />
      <Section>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border bg-card shadow-sm">
          <div className="grid gap-10 p-8 md:grid-cols-[1.25fr_1fr] md:items-center md:gap-12 md:p-12">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <FileText className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-3xl text-primary">One page, ready to read.</h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                My latest resume, exactly as I share it with recruiters — academic background, HR experience at
                Bharti Airtel and IILM Incubation Lab, skills, certifications and achievements.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <li>PDF document</li>
                <li>One page</li>
                <li>Updated October 2026</li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild size="lg" className="h-12 w-full rounded-full px-7 text-base sm:w-auto">
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" aria-label="View my resume PDF in a new browser tab">
                  <Eye />
                  View Resume
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 w-full rounded-full border-primary/25 px-7 text-base hover:border-primary/45 sm:w-auto">
                <a href={RESUME_URL} download={RESUME_FILENAME} aria-label="Download my resume PDF">
                  <Download />
                  Download Resume
                </a>
              </Button>
              <p className="mt-1 text-xs text-muted-foreground">
                On iPhone, choose <strong>Share → Save to Files</strong> once the preview opens.
              </p>
              <p className="text-sm text-muted-foreground">
                Prefer to write to me?{" "}
                <Link to="/contact" className="font-semibold text-primary underline underline-offset-4">
                  Send a message
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
