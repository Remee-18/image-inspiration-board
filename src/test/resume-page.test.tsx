import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

import { ResumePanel } from "@/components/resume-panel";
import {
  RESUME_FILENAME,
  RESUME_HEADING,
  RESUME_INTRO,
  RESUME_URL,
} from "@/routes/resume";

function panel() {
  return render(
    <ResumePanel url={RESUME_URL} filename={RESUME_FILENAME} heading="h" blurb="b" facts={["PDF document"]} />,
  );
}

describe("Resume page", () => {
  it("keeps the requested heading and description wording", () => {
    expect(RESUME_HEADING).toBe("My Resume");
    expect(RESUME_INTRO).toBe(
      "Explore my academic background, HR experience, professional skills and achievements.",
    );
  });

  it("points both actions at the uploaded PDF, not a placeholder", () => {
    expect(RESUME_URL).toBe("/resume/Remee_Resume.pdf");
    const original = readFileSync(`public${RESUME_URL}`);
    expect(original.subarray(0, 5).toString()).toBe("%PDF-");
    expect(createHash("sha256").update(original).digest("hex")).toBe(
      "ea95121c58cb57126a7bca17ad71964b31ee0b7ac7d1d2925003e40711fed3f6",
    );
  });

  it("opens the PDF in a new tab", () => {
    panel();
    const view = screen.getByRole("link", { name: /view my resume pdf/i });
    expect(view).toHaveAttribute("href", RESUME_URL);
    expect(view).toHaveAttribute("target", "_blank");
    expect(view).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("downloads the original PDF under its own filename", () => {
    panel();
    const download = screen.getByRole("link", { name: /download my resume pdf/i });
    expect(download).toHaveAttribute("href", RESUME_URL);
    expect(download).toHaveAttribute("download", "Remee_Resume.pdf");
  });
});
