import { Download, Eye, FileText } from "lucide-react";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

/**
 * Presentation-only resume panel: the two actions a visitor can take on the PDF.
 * The route owns the copy, the file location and any follow-up links.
 */
export function ResumePanel({
  url,
  filename,
  heading,
  blurb,
  facts,
  footer,
}: {
  url: string;
  filename: string;
  heading: string;
  blurb: string;
  facts: string[];
  footer?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border bg-card shadow-sm">
      <div className="grid gap-10 p-8 md:grid-cols-[1.25fr_1fr] md:items-center md:gap-12 md:p-12">
        <div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <FileText className="h-6 w-6" />
          </div>
          <h2 className="mt-5 text-3xl text-primary">{heading}</h2>
          <p className="mt-3 max-w-md text-muted-foreground">{blurb}</p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <Button asChild size="lg" className="h-12 w-full rounded-full px-7 text-base sm:w-auto">
            <a href={url} target="_blank" rel="noopener noreferrer" aria-label="View my resume PDF in a new browser tab">
              <Eye />
              View Resume
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 w-full rounded-full border-primary/25 px-7 text-base hover:border-primary/45 sm:w-auto">
            <a href={url} download={filename} aria-label="Download my resume PDF">
              <Download />
              Download Resume
            </a>
          </Button>
          <p className="mt-1 text-xs text-muted-foreground">
            On iPhone, choose <strong>Share → Save to Files</strong> once the preview opens.
          </p>
          {footer}
        </div>
      </div>
    </div>
  );
}
