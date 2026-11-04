import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProjectPhoto } from "@/components/project-photo";
import { CafeCaseStudy } from "@/components/academic-sections";
import { cafeCaseStudy } from "@/lib/academic-content";
import { cafeNifraamPhotos } from "@/routes/projects";
import airtelReception from "@/assets/airtel-reception-dtc.jpeg.asset.json";
import bellavitaBoard from "@/assets/bellavita-brand-identity-board.jpeg.asset.json";
import tretelleLogo from "@/assets/tretelle-homemade-bakes-logo.png.asset.json";

const dtcPhoto = {
  src: airtelReception.url,
  caption: "Airtel office reception during the internship",
  alt: "Airtel office reception desk with the Airtel logo on the wall and a safety-rules standee",
};

describe("Project card photographs", () => {
  it("shows the uploaded photograph with its caption", () => {
    render(<ProjectPhoto photo={dtcPhoto} />);
    expect(screen.getByRole("img").getAttribute("src")).toBe(airtelReception.url);
    expect(screen.getByText(dtcPhoto.caption)).toBeInTheDocument();
  });

  it("opens a larger view of the clicked photograph", () => {
    render(<ProjectPhoto photo={dtcPhoto} />);
    fireEvent.click(screen.getByRole("button", { name: `View ${dtcPhoto.caption}` }));
    const enlarged = screen.getByRole("dialog").querySelector("img")!;
    expect(enlarged.getAttribute("src")).toBe(airtelReception.url);
  });

  it("keeps each project's photograph distinct", () => {
    expect(new Set([airtelReception.url, bellavitaBoard.url, tretelleLogo.url]).size).toBe(3);
  });
});

describe("Tretelle project", () => {
  it("uses the privacy-edited logo and the updated description", () => {
    render(<ProjectPhoto photo={{
      src: tretelleLogo.url,
      caption: "Tretelle logo — homemade bakes and sweet treats by Suman Srivastava",
      alt: "Circular sage green and cream Tretelle logo for homemade bakes and sweet treats with the Instagram handle @treatelle_by_suman",
    }} />);
    expect(screen.getByRole("img").getAttribute("src")).toBe(tretelleLogo.url);
    expect(tretelleLogo.url).toContain("tretelle-homemade-bakes-logo.png");
  });
});

describe("Cafe NIFRAAM photograph gallery", () => {
  it("shows all three uploaded photographs and no placeholder", () => {
    render(<CafeCaseStudy study={cafeCaseStudy} photos={cafeNifraamPhotos} />);
    for (const photo of cafeNifraamPhotos) {
      expect(screen.getAllByRole("img", { hidden: false }).some((img) => img.getAttribute("src") === photo.src)).toBe(true);
    }
    expect(screen.queryByText(/photo placeholder/i)).toBeNull();
    expect(screen.queryByText(/awaiting upload/i)).toBeNull();
  });

  it("keeps the case study gallery heading and one gallery only", () => {
    render(<CafeCaseStudy study={cafeCaseStudy} photos={cafeNifraamPhotos} />);
    expect(screen.getByRole("heading", { name: "Cafe NIFRAAM Case Study · Photographs" })).toBeInTheDocument();
    expect(screen.getAllByText(/photographs$/i)).toHaveLength(1);
  });

  it("keeps the existing case study content intact", () => {
    render(<CafeCaseStudy study={cafeCaseStudy} photos={cafeNifraamPhotos} />);
    expect(screen.getByRole("heading", { name: "Outcome & Impact" })).toBeInTheDocument();
    expect(screen.getByText(/Instagram followers/)).toBeInTheDocument();
  });
});
