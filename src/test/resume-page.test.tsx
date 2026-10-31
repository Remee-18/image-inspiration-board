import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import resumeAsset from "@/assets/Remee_Resume.pdf.asset.json";
import { routeTree } from "@/routeTree.gen";

function renderResume() {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: ["/resume"] }),
    context: { queryClient: new QueryClient() },
  });
  return render(<RouterProvider router={router} />);
}

describe("Resume page", () => {
  it("shows the heading and description", () => {
    renderResume();
    expect(screen.getByRole("heading", { name: "My Resume", level: 1 })).toBeInTheDocument();
    expect(
      screen.getByText("Explore my academic background, HR experience, professional skills and achievements."),
    ).toBeInTheDocument();
  });

  it("opens the uploaded PDF in a new tab", () => {
    renderResume();
    const view = screen.getByRole("link", { name: /view my resume pdf/i });
    expect(view).toHaveAttribute("href", resumeAsset.url);
    expect(view).toHaveAttribute("target", "_blank");
    expect(view).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("downloads the original PDF under its own filename", () => {
    renderResume();
    const download = screen.getByRole("link", { name: /download my resume pdf/i });
    expect(download).toHaveAttribute("href", resumeAsset.url);
    expect(download).toHaveAttribute("download", "Remee_Resume.pdf");
  });
});
