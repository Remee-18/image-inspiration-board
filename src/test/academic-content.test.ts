import { describe, expect, it } from "vitest";
import { cafeCaseStudy } from "@/lib/academic-content";

describe("Cafe NIFRAAM reported facts", () => {
  it("preserves the approximately 500–600 to 5,000+ follower figures", () => {
    expect(cafeCaseStudy.outcome.before).toEqual({ min: 500, max: 600 });
    expect(cafeCaseStudy.outcome.after).toBe(5000);
  });
  it("treats growth as observed after the project, not caused by it", () => {
    expect(cafeCaseStudy.outcome.attribution).toBe("observed-after-project");
  });
  it("preserves the five-student project team", () => {
    expect(cafeCaseStudy.teamSize).toBe(5);
  });
  it("preserves the one-week field visit", () => {
    expect(cafeCaseStudy.fieldworkWeeks).toBe(1);
  });
});