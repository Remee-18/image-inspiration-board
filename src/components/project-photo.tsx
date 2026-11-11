import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Expand, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { InternshipPhoto } from "@/components/internship-gallery";

export function ProjectPhoto({ photo, showCaption = true }: { photo: InternshipPhoto; showCaption?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <figure className="min-w-0">
      <Button
        variant="ghost"
        onClick={() => setOpen(true)}
        aria-label={`View ${photo.caption}`}
        className="group relative block h-auto w-full overflow-hidden rounded-lg border bg-muted p-0 hover:bg-muted"
      >
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="max-h-[420px] w-full object-contain transition-transform duration-300 motion-safe:group-hover:scale-[1.02]"
        />
        <span className="absolute bottom-3 right-3 rounded-md bg-primary p-2 text-primary-foreground transition-opacity group-hover:opacity-100">
          <Expand aria-hidden="true" />
        </span>
      </Button>
      {showCaption && <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{photo.caption}</figcaption>}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-sm" />
          <Dialog.Content
            aria-describedby={undefined}
            className="fixed left-1/2 top-1/2 z-50 grid max-h-[94dvh] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-lg border bg-background p-4 shadow-lg sm:p-6"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <Dialog.Title className="min-w-0 text-lg text-primary">{photo.caption}</Dialog.Title>
              <Dialog.Close asChild>
                <Button variant="ghost" size="icon" aria-label="Close photograph"><X /></Button>
              </Dialog.Close>
            </div>
            <img src={photo.src} alt={photo.alt} className="max-h-[78dvh] w-full object-contain" />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </figure>
  );
}
