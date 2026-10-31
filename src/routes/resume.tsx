import { createFileRoute, Link } from "@tanstack/react-router";
import { ResumePanel } from "@/components/resume-panel";
import { PageHero, Section, meta } from "@/components/site";

export const RESUME_URL = "/resume/Remee_Resume.pdf";
export const RESUME_FILENAME = "Remee_Resume.pdf";
export const RESUME_HEADING = "My Resume";
export const RESUME_INTRO =
  "Explore my academic background, HR experience, professional skills and achievements.";

export const Route = createFileRoute("/resume")({
  head: () =>
    meta(
      "Resume — Remee",
      `${RESUME_INTRO} View or download the latest resume of Remee, MBA (HR & Marketing) at IILM University.`,
    ),
  component: Resume,
});

function Resume() {
  return (
    <>
      <PageHero eyebrow="Resume" title={RESUME_HEADING} intro={RESUME_INTRO} />
      <Section>
        <ResumePanel
          url={RESUME_URL}
          filename={RESUME_FILENAME}
          heading="One page, ready to read."
          blurb="My latest resume, exactly as I share it with recruiters — academic background, HR experience at Bharti Airtel and IILM Incubation Lab, skills, certifications and achievements."
          facts={["PDF document", "One page", "Updated October 2026"]}
          footer={
            <p className="text-sm text-muted-foreground">
              Prefer to write to me?{" "}
              <Link to="/contact" className="font-semibold text-primary underline underline-offset-4">
                Send a message
              </Link>
              .
            </p>
          }
        />
      </Section>
    </>
  );
}
