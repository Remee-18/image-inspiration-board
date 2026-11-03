import { createFileRoute } from "@tanstack/react-router";
import { CTA, PageHero, Section, meta } from "@/components/site";
import { CafeCaseStudy } from "@/components/academic-sections";
import { ProjectPhoto } from "@/components/project-photo";
import type { InternshipPhoto } from "@/components/internship-gallery";
import { cafeCaseStudy } from "@/lib/academic-content";
import airtelReception from "@/assets/airtel-reception-dtc.jpeg.asset.json";
import bellavitaBoard from "@/assets/bellavita-brand-identity-board.jpeg.asset.json";
import tretelleLogo from "@/assets/tretelle-instagram-logo.jpeg.asset.json";
import cafeExterior from "@/assets/cafe-nifraam-exterior-night.webp.asset.json";
import cafePoster from "@/assets/cafe-nifraam-journey-poster.webp.asset.json";
import cafeInterior from "@/assets/cafe-nifraam-interior-seating.jpg.asset.json";

export const Route = createFileRoute("/projects")({
  head: () => meta("Projects — Remee | HR & Business Case Studies", "Airtel capability-building support, BellaVita and Tretelle concepts, and Cafe NIFRAAM field research and business recommendations."),
  component: Projects,
});

export const cafeNifraamPhotos: InternshipPhoto[] = [
  {
    src: cafeExterior.url,
    caption: "Cafe NIFRAAM entrance and outdoor seating in the evening",
    alt: "Cafe NIFRAAM entrance at night with its illuminated sign and lantern-lit outdoor seating",
  },
  {
    src: cafeInterior.url,
    caption: "Cafe NIFRAAM indoor seating area",
    alt: "Cafe NIFRAAM indoor seating with wooden tables, black chairs and a chequered floor",
  },
  {
    src: cafePoster.url,
    caption: "Hand-drawn “Journey of Cafe NIFRAAM” poster from the project",
    alt: "Hand-drawn poster titled Journey of Cafe NIFRAAM showing the big question, before and after sketches, solutions and reflections",
  },
];

const projects: { tag: string; title: string; context: string; role: string; outcome: string; skills: string[]; photo: InternshipPhoto }[] = [
  {
    tag: "Internship · Airtel",
    title: "DTC Capability-Building Programme",
    context: "Airtel's HRBP team ran a training programme for D2C operations employees across five cohorts.",
    role: "Coordinated training sessions and schedules, tracked attendance and scores, and communicated with managers and employees.",
    outcome: "Learned how structured trackers and clear stakeholder communication keep a learning programme running smoothly.",
    skills: ["Training Coordination", "Stakeholder Management", "Excel", "Data Accuracy"],
    photo: {
      src: airtelReception.url,
      caption: "Airtel office reception during the internship",
      alt: "Airtel office reception desk with the Airtel logo on the wall and a safety-rules standee",
    },
  },
  {
    tag: "Academic concept",
    title: "BellaVita Luxury Restaurant Branding",
    context: "An academic exercise imagining a luxury restaurant as an unrelated brand extension of the BellaVita perfume brand — not a real business venture.",
    role: "Created the “From Fragrance to Flavour” radio-ad concept and prototype/report, using ElevenLabs for voice, Audacity for audio editing and InShot for editing.",
    outcome: "Practised brand storytelling and translating a brand's identity into a new category.",
    skills: ["Brand Strategy", "Audio Production", "Storytelling"],
    photo: {
      src: bellavitaBoard.url,
      caption: "BellaVita Luxury Restaurant brand identity board",
      alt: "BellaVita Luxury Restaurant brand identity board with logo, brand description, tagline, jingle, typography and colour palette",
    },
  },
  {
    tag: "Business concept",
    title: "Tretelle Homemade Baking App",
    context: "A concept built around my sister's homemade cakes, muffins and chocolates business.",
    role: "Proposed an app idea for ordering and showcasing products, and supported Instagram visuals. The app is a proposal, not a live product.",
    outcome: "Learned to connect customer needs with a simple digital experience for a small business.",
    skills: ["Digital Marketing", "Concept Design", "Social Media"],
    photo: {
      src: tretelleLogo.url,
      caption: "Tretelle Instagram page logo — homemade bakes by Suman Srivastava",
      alt: "Circular Tretelle logo for homemade bakes and sweet treats with the Instagram handle @treatelle_by_suman",
    },
  },
];

function Projects() {
  return (
    <>
      <PageHero eyebrow="Projects" title="Work that blends people, brand and process." />
      {projects.map((p, i) => (
        <Section key={p.title} tone={i % 2 ? "beige" : "plain"}>
          <div className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <ProjectPhoto photo={p.photo} />
            <div>
              <p className="eyebrow">{p.tag}</p>
              <h2 className="mt-2 text-3xl text-primary">{p.title}</h2>
              <dl className="mt-5 space-y-3 text-sm">
                <div><dt className="font-semibold text-primary">Context</dt><dd className="text-muted-foreground">{p.context}</dd></div>
                <div><dt className="font-semibold text-primary">My contribution</dt><dd className="text-muted-foreground">{p.role}</dd></div>
                <div><dt className="font-semibold text-primary">Learning</dt><dd className="text-muted-foreground">{p.outcome}</dd></div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.skills.map((s) => <span key={s} className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">{s}</span>)}
              </div>
            </div>
          </div>
        </Section>
      ))}
      <CafeCaseStudy study={cafeCaseStudy} photos={cafeNifraamPhotos} />
      <CTA />
    </>
  );
}
