import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Users, Sparkles } from "lucide-react";
import { meta } from "@/components/site";
import { Hero } from "@/components/hero";
import { CareerRoadmap, ExperienceHighlights, HomeInvitation, PersonalQuote } from "@/components/home-sections";

export const Route = createFileRoute("/")({
  head: () =>
    meta(
      "Remee — Aspiring HR Professional | Talent Acquisition & HRBP",
      "MBA (HR & Marketing) student at IILM University with an Airtel HRBP internship and recruitment leadership experience.",
      "https://i.postimg.cc/W3xG6KsX/Remee-Photograph.jpg",
    ),
  component: Index,
});

const highlights = [
  { icon: Briefcase, title: "HRBP Intern, Airtel", text: "Three months supporting capability-building for 40+ D2C employees across five cohorts.", to: "/experience" },
  { icon: Users, title: "HR Head, Incubation Lab", text: "Screened 60+ resumes, ran 40+ interviews and onboarded 30+ students.", to: "/experience" },
  { icon: Sparkles, title: "Creative Projects", text: "Brand and marketing concepts blending storytelling, audio and visual design.", to: "/projects" },
] as const;

const steps = [
  { n: "01", title: "Recruitment foundations", text: "Screening, interviewing and candidate pipelines." },
  { n: "02", title: "Employee experience", text: "Onboarding, engagement and HR data." },
  { n: "03", title: "Strategic HRBP", text: "Partnering with business on people decisions." },
];

function Index() {
  return (
    <>
      <Hero />

      <ExperienceHighlights highlights={[...highlights]} />
      <CareerRoadmap steps={steps} />
      <PersonalQuote quote="Every experience is an opportunity to learn, contribute, and become a better version of myself." />
      <HomeInvitation />
    </>
  );
}
