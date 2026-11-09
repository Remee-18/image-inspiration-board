import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { Card, CTA, PageHero, Section, meta } from "@/components/site";
import { InternshipGallery, type InternshipPhoto } from "@/components/internship-gallery";
import podiumSession from "@/assets/university-anchoring-podium-session.jpg.asset.json";
import stageHosting from "@/assets/university-anchoring-stage-hosting.jpg.asset.json";

export const Route = createFileRoute("/achievements")({
  head: () => meta("Achievements — Remee", "Competition wins, recognitions and university anchoring: MBA Orientation, Startup Pitch, dance and event hosting."),
  component: Achievements,
});

const items = [
  ["First position", "MBA Orientation Programme", "Led a team of six."],
  ["First position", "Startup Pitch Competition", "Led the team through ideation and pitch."],
  ["Runner-up", "University dance competition", "Performed at the university level."],
];

export const anchoringPhotos: InternshipPhoto[] = [
  {
    src: podiumSession.url,
    caption: "At the IILM University podium with a co-host for the Go-to-Market Acceleration Program session",
    alt: "Two student hosts standing at the IILM University podium in front of a Go-to-Market Acceleration Program presentation slide",
  },
  {
    src: stageHosting.url,
    caption: "Hosting on stage while guests were felicitated beside the podium",
    alt: "Remee hosting on an IILM University stage with a microphone while two guests stand beside the podium, one holding a small potted plant",
  },
];

// The two uploads have different shapes (a wide stage shot and a tall vertical one), so
// the tiles keep each photo's own proportions and the columns are sized so both tiles
// end up the same height — nothing is cropped or letterboxed.
const ANCHORING_PHOTO_CLASS = "h-auto object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.02]";
const ANCHORING_GRID_CLASS = "lg:grid-cols-[3fr_1fr]";

export function AnchoringShowcase({ photos }: { photos: InternshipPhoto[] }) {
  return (
    <Section tone="beige">
      <div className="max-w-3xl">
        <p className="eyebrow">On stage</p>
        <h2 className="mt-3 text-3xl leading-tight text-primary md:text-4xl">University Anchoring &amp; Event Hosting</h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">Had the opportunity to anchor university events and be part of the on-stage experience. This experience helped me build confidence, improve my communication and presentation skills, and become more comfortable engaging with an audience.</p>
      </div>
      <InternshipGallery photos={photos} photoClassName={ANCHORING_PHOTO_CLASS} gridClassName={ANCHORING_GRID_CLASS} />
    </Section>
  );
}

function Achievements() {
  return (
    <>
      <PageHero eyebrow="Achievements" title="Moments I'm proud of." />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map(([r, t, d], i) => (
            <Card key={t} className={i === 0 ? "bg-primary text-primary-foreground" : ""}>
              <Trophy className="h-8 w-8 text-gold" />
              <p className="eyebrow mt-4">{r}</p>
              <h3 className="mt-1 text-2xl">{t}</h3>
              <p className={`mt-2 text-sm ${i === 0 ? "opacity-80" : "text-muted-foreground"}`}>{d}</p>
            </Card>
          ))}
        </div>
      </Section>
      <AnchoringShowcase photos={anchoringPhotos} />
      <CTA />
    </>
  );
}
