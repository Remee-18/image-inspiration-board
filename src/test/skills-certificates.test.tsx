import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProjectPhoto } from "@/components/project-photo";
import { certificateCards } from "@/routes/skills";
import zimyoCertificate from "@/assets/zimyo-recruit-hrms-certificate.jpeg.asset.json";
import kpmgCertificate from "@/assets/lean-six-sigma-green-belt-kpmg-certificate.jpeg.asset.json";
import marketingCertificate from "@/assets/marketing-strategy-masterclass-certificate.jpeg.asset.json";

const expected: [string, string, string, string][] = [
  ["ZIMYO Recruit & HRMS", "Two-day ATS and HRMS/HRIS workshop", "September 2026", zimyoCertificate.url],
  ["Lean Six Sigma Green Belt", "KPMG India Services LLP · four days, 32 learning hours", "January 2026", kpmgCertificate.url],
  ["Marketing Strategy", "STP analysis, go-to-market planning, email marketing", "April 2024", marketingCertificate.url],
];

describe("Learning credentials certificates", () => {
  it("pairs each certificate card with its uploaded photograph and unchanged copy", () => {
    expect(certificateCards.map((c) => [c.title, c.description, c.year, c.photo.src])).toEqual(expected);
  });

  it("shows the uploaded certificate photograph and opens it larger when clicked", () => {
    for (const card of certificateCards) {
      const { unmount } = render(<ProjectPhoto photo={card.photo} showCaption={false} />);
      expect(screen.getByRole("img").getAttribute("src")).toBe(card.photo.src);
      expect(screen.queryByText(card.photo.caption)).toBeNull();
      fireEvent.click(screen.getByRole("button", { name: `View ${card.photo.caption}` }));
      expect(screen.getByRole("dialog").querySelector("img")!.getAttribute("src")).toBe(card.photo.src);
      unmount();
    }
  });

  it("keeps the three certificates distinct", () => {
    expect(new Set([zimyoCertificate.url, kpmgCertificate.url, marketingCertificate.url]).size).toBe(3);
  });
});
