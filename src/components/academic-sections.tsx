import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import type { ExperienceStory, cafeCaseStudy } from "@/lib/academic-content";
import { InternshipGallery, type InternshipPhoto } from "@/components/internship-gallery";

const STORY_PHOTO_CLASS = "h-[280px] sm:h-[320px] lg:h-[380px]";


function LearningList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
      {items.map((item) => <li key={item} className="flex gap-3"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" /><span>{item}</span></li>)}
    </ul>
  );
}

export function ExperienceGallery({ title }: { title: string }) {
  return (
    <div className="mt-12 border-t pt-8">
      <h3 className="text-2xl text-primary">{title} · Photographs</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((number) => (
          <figure key={number} className="min-w-0">
            <div className="flex aspect-[3/2] items-center justify-center rounded-lg border border-dashed border-gold/60 bg-muted px-6 text-center">
              <p className="max-w-48 text-xs leading-relaxed text-muted-foreground">Photo placeholder<br />{title} · {number.toString().padStart(2, "0")}</p>
            </div>
            <figcaption className="mt-2 text-xs text-muted-foreground">Personal photograph · Awaiting upload</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function AcademicExperience({ story, index, photos }: { story: ExperienceStory; index: number; photos?: InternshipPhoto[] }) {
  return (
    <section className={index % 2 === 0 ? "border-t bg-beige/45" : "border-t bg-background"}>
      <article className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <header className="max-w-3xl">
          <p className="eyebrow">{story.category}</p>
          <h2 className="mt-3 text-3xl leading-tight text-primary md:text-4xl">{story.title}</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">{story.subtitle}</p>
        </header>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h3 className="text-2xl text-primary">Project Overview</h3>
            {story.overview.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-relaxed text-muted-foreground">{paragraph}</p>)}
          </div>
          <div>
            <h3 className="mb-5 text-2xl text-primary">Activities & Experience</h3>
            <div className="space-y-3">
              {story.highlights.map((highlight) => (
                <div key={highlight.title} className="rounded-lg border bg-card p-5 transition-shadow hover:shadow-sm">
                  <h4 className="text-sm font-semibold text-primary">{highlight.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-8 border-y py-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <aside className="border-l-2 border-gold pl-5 md:pl-7">
            <h3 className="text-2xl text-primary">{story.reflection.title}</h3>
            {story.reflection.quote && <blockquote className="mt-4 font-display text-3xl leading-snug text-primary">“{story.reflection.quote}”</blockquote>}
            {story.reflection.paragraphs.map((paragraph) => <p key={paragraph} className="mt-4 text-sm leading-relaxed text-muted-foreground">{paragraph}</p>)}
          </aside>
          <div>
            <h3 className="mb-4 text-2xl text-primary">Key Learning</h3>
            <LearningList items={story.learning} />
          </div>
        </div>
        {story.culturalNote && <aside className="mt-6 max-w-3xl"><h4 className="text-sm font-semibold text-primary">Cultural Experience</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{story.culturalNote}</p></aside>}
        {photos && photos.length > 0
          ? <InternshipGallery title={story.gallery} photos={photos} photoClassName={STORY_PHOTO_CLASS} />
          : <ExperienceGallery title={story.gallery} />}

      </article>
    </section>
  );
}

function CaseChapter({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <section className="min-w-0 border-t pt-7">
      <div className="mb-5 flex items-baseline gap-3"><span className="text-xs font-semibold text-gold">{number}</span><h3 className="text-2xl text-primary">{title}</h3></div>
      {children}
    </section>
  );
}

export function CafeCaseStudy({ study }: { study: typeof cafeCaseStudy }) {
  return (
    <section className="border-t bg-beige/45">
      <article className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <header className="max-w-3xl">
          <p className="eyebrow">DTEM · Field Research · {study.location}</p>
          <h2 className="mt-3 text-3xl leading-tight text-primary md:text-4xl">{study.title}</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">{study.subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-primary"><span>{study.teamSize} students · Team project</span><span>{study.fieldworkWeeks}-week field visit</span></div>
        </header>
        <div className="mt-10 space-y-10">
          <CaseChapter number="01" title="Project Overview"><p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{study.overview}</p></CaseChapter>
          <div className="grid gap-10 md:grid-cols-2">
            <CaseChapter number="02" title="The Challenge"><LearningList items={study.challenge} /><p className="mt-5 text-sm leading-relaxed text-muted-foreground">{study.objective}</p></CaseChapter>
            <CaseChapter number="03" title="Research & Insights"><LearningList items={study.research} /><p className="mt-5 border-l-2 border-gold pl-4 text-sm leading-relaxed text-primary">{study.insight}</p></CaseChapter>
          </div>
          <CaseChapter number="04" title="Our Recommendations">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.recommendations.map((recommendation) => <div key={recommendation.title} className="rounded-lg border bg-card p-5 transition-shadow hover:shadow-sm"><h4 className="text-sm font-semibold text-primary">{recommendation.title}</h4><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{recommendation.description}</p></div>)}
            </div>
          </CaseChapter>
          <CaseChapter number="05" title="My Contribution"><div className="max-w-3xl"><LearningList items={study.contribution} /></div></CaseChapter>
          <CaseChapter number="06" title="Outcome & Impact">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{study.outcome.intro}</p>
            <div className="mt-6 bg-primary px-6 py-8 text-primary-foreground md:px-9">
              <p className="text-xs font-semibold opacity-80">Observed Instagram following</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-display text-4xl sm:text-5xl"><span>{study.outcome.before.min}–{study.outcome.before.max}</span><ArrowRight aria-label="grew to" className="h-7 w-7 shrink-0 text-gold" /><span className="text-gold">{new Intl.NumberFormat("en-US").format(study.outcome.after)}+</span></div>
              <p className="mt-3 text-sm opacity-80">Instagram followers</p>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed">{study.outcome.explanation}</p>
            </div>
            <p className="mt-4 max-w-3xl text-xs leading-relaxed text-muted-foreground">{study.outcome.caveat}</p>
          </CaseChapter>
          <CaseChapter number="07" title="Key Learning"><div className="max-w-3xl"><LearningList items={study.learning} /></div></CaseChapter>
        </div>
        <ExperienceGallery title="Cafe NIFRAAM Case Study" />
      </article>
    </section>
  );
}