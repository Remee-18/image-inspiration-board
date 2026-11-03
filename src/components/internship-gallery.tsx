import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export type InternshipPhoto = { src: string; caption: string; alt: string };

const DEFAULT_PHOTO_CLASS = "aspect-[4/3] transition-transform duration-300 motion-safe:group-hover:scale-[1.02]";

export function InternshipGallery({
  title,
  photos,
  photoClassName = DEFAULT_PHOTO_CLASS,
}: {
  title: string;
  photos: InternshipPhoto[];
  photoClassName?: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? undefined : photos[selected];

  function move(direction: number) {
    setSelected((current) => current === null ? null : (current + direction + photos.length) % photos.length);
  }

  return (
    <div className="mt-10 border-t pt-8">
      <h3 className="text-2xl text-primary">{title} · Photographs</h3>
      <div className={`mt-5 grid gap-x-5 gap-y-7 sm:grid-cols-2 ${photos.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
        {photos.map((photo, index) => (
          <figure key={photo.src} className="min-w-0">
            <Button variant="ghost" onClick={() => setSelected(index)} aria-label={`View ${photo.caption}`} className="group relative block h-auto w-full overflow-hidden rounded-lg border bg-muted p-0 hover:bg-muted">
              <img src={photo.src} alt={photo.alt} loading="lazy" className={`w-full object-contain ${photoClassName}`} />
              <span className="absolute bottom-3 right-3 rounded-md bg-primary p-2 text-primary-foreground transition-opacity group-hover:opacity-100"><Expand aria-hidden="true" /></span>
            </Button>
            <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      <Dialog.Root open={Boolean(active)} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-primary/80 backdrop-blur-sm" />
          <Dialog.Content onKeyDown={(event) => {
            if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
            if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
          }} aria-describedby={undefined} className="fixed left-1/2 top-1/2 z-50 grid max-h-[94dvh] w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 gap-4 overflow-y-auto rounded-lg border bg-background p-4 shadow-lg sm:p-6">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <Dialog.Title className="min-w-0 text-lg text-primary">{active?.caption}</Dialog.Title>
              <Dialog.Close asChild><Button variant="ghost" size="icon" aria-label="Close photograph"><X /></Button></Dialog.Close>
            </div>
            {active && <img src={active.src} alt={active.alt} className="max-h-[70dvh] w-full object-contain" />}
            <div className="flex items-center justify-between gap-4">
              <Button variant="outline" size="icon" aria-label="Previous photograph" onClick={() => move(-1)}><ArrowLeft /></Button>
              <p className="text-sm text-muted-foreground">{selected === null ? 0 : selected + 1} / {photos.length}</p>
              <Button variant="outline" size="icon" aria-label="Next photograph" onClick={() => move(1)}><ArrowRight /></Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
