import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AnchoringShowcase, anchoringPhotos } from "@/routes/achievements";
import podiumSession from "@/assets/university-anchoring-podium-session.jpg.asset.json";
import stageHosting from "@/assets/university-anchoring-stage-hosting.jpg.asset.json";

const description = "Had the opportunity to anchor university events and be part of the on-stage experience. This experience helped me build confidence, improve my communication and presentation skills, and become more comfortable engaging with an audience.";

const firstPhoto = anchoringPhotos[0]!;

function showsSource(src: string) {
  return screen.getAllByRole("img", { hidden: false }).some((img) => img.getAttribute("src") === src);
}

describe("University anchoring subsection", () => {
  it("adds the subsection with its own title and the supplied description", () => {
    render(<AnchoringShowcase photos={anchoringPhotos} />);
    expect(screen.getByRole("heading", { name: "University Anchoring & Event Hosting", level: 2 })).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it("shows both uploaded photographs and no placeholder", () => {
    render(<AnchoringShowcase photos={anchoringPhotos} />);
    expect(anchoringPhotos.map((photo) => photo.src)).toEqual([podiumSession.url, stageHosting.url]);
    for (const src of [podiumSession.url, stageHosting.url]) expect(showsSource(src)).toBe(true);
    expect(screen.getAllByRole("img", { hidden: false })).toHaveLength(2);
    expect(screen.queryByText(/photo placeholder/i)).toBeNull();
    expect(screen.queryByText(/awaiting upload/i)).toBeNull();
  });

  it("opens a larger view of the clicked photograph", () => {
    render(<AnchoringShowcase photos={anchoringPhotos} />);
    fireEvent.click(screen.getByRole("button", { name: `View ${firstPhoto.caption}` }));
    const enlarged = screen.getByRole("dialog").querySelector("img")!;
    expect(enlarged.getAttribute("src")).toBe(firstPhoto.src);
    expect(screen.getByText(`1 / ${anchoringPhotos.length}`)).toBeInTheDocument();
  });
});
