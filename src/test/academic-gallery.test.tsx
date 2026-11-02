import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { AcademicExperience } from "@/components/academic-sections";
import { academicExperiences } from "@/lib/academic-content";
import { iimSirmaurPhotos } from "@/routes/experience";
import lectureHall from "@/assets/iim-sirmaur-lecture-hall.jpeg.asset.json";
import groupPhoto from "@/assets/iim-sirmaur-group-photo.jpeg.asset.json";
import certificate from "@/assets/iim-sirmaur-certificate.jpeg.asset.json";

const iimStory = academicExperiences.find((story) => story.gallery === "IIM Sirmaur Academic Immersion")!;
const ruralStory = academicExperiences.find((story) => story.gallery === "Rural Community Visit")!;
const firstPhoto = iimSirmaurPhotos[0]!;


function renderIim() {
  return render(<AcademicExperience story={iimStory} index={0} photos={iimSirmaurPhotos} />);
}

describe("IIM Sirmaur photograph gallery", () => {
  it("shows all three uploaded photographs and no placeholder", () => {
    renderIim();
    const sources = iimSirmaurPhotos.map((photo) => photo.src);
    expect(sources).toEqual([groupPhoto.url, lectureHall.url, certificate.url]);
    for (const src of sources) {
      expect(screen.getAllByRole("img", { hidden: false }).some((img) => img.getAttribute("src") === src)).toBe(true);
    }
    expect(screen.queryByText(/photo placeholder/i)).toBeNull();
    expect(screen.queryByText(/awaiting upload/i)).toBeNull();
  });

  it("keeps the section's own gallery heading and one gallery only", () => {
    renderIim();
    expect(screen.getByRole("heading", { name: "IIM Sirmaur Academic Immersion · Photographs" })).toBeInTheDocument();
    expect(screen.getAllByText(/photographs$/i)).toHaveLength(1);
  });

  it("keeps the existing IIM Sirmaur description intact", () => {
    renderIim();
    expect(screen.getByText(/one-week academic immersion programme organised by IILM University at IIM Sirmaur/)).toBeInTheDocument();
    expect(screen.getByText(/Understanding WHY before HOW\./)).toBeInTheDocument();
    expect(screen.getByText(/Swiggy, Zomato and Starbucks/)).toBeInTheDocument();
    expect(screen.getByText(/visited a Gurudwara/)).toBeInTheDocument();
  });

  it("opens a larger view of the clicked photograph", () => {
    renderIim();
    fireEvent.click(screen.getByRole("button", { name: `View ${firstPhoto.caption}` }));
    const enlarged = screen.getByRole("dialog").querySelector("img")!;
    expect(enlarged.getAttribute("src")).toBe(firstPhoto.src);

    expect(screen.getByText(`1 / ${iimSirmaurPhotos.length}`)).toBeInTheDocument();
  });

  it("leaves the rural community visit gallery as labelled placeholders", () => {
    render(<AcademicExperience story={ruralStory} index={1} />);
    expect(screen.getAllByText(/photo placeholder/i)).toHaveLength(3);
    expect(screen.queryByRole("dialog")).toBeNull();
  });
});
