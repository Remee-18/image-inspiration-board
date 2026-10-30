import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/components/contact-form";

// jsdom cannot navigate, so capture the mailto target the form writes to.
function captureLocationHref() {
  const setter = vi.fn();
  const fake = { assign: vi.fn(), replace: vi.fn(), reload: vi.fn() };
  Object.defineProperty(fake, "href", { set: setter, get: () => "", configurable: true });
  Object.defineProperty(window, "location", { value: fake, configurable: true, writable: true });
  return setter;
}

function submit() {
  fireEvent.click(screen.getByRole("button", { name: /send message/i }));
}

describe("Contact form validation", () => {
  it("blocks an empty submission and names every missing field", () => {
    render(<ContactForm />);
    submit();

    expect(screen.getByText("Please enter your full name.")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email address.")).toBeInTheDocument();
    expect(screen.getByText("Please enter a subject.")).toBeInTheDocument();
    expect(screen.getByText("Please write a short message.")).toBeInTheDocument();
  });

  it("rejects a malformed email address", () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText("Email Address"), { target: { value: "not-an-email" } });
    submit();

    expect(screen.getByText("Please enter a valid email address.")).toBeInTheDocument();
  });

  it("accepts a complete entry and hands the message to the email app", () => {
    const setHref = captureLocationHref();
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText("Full Name"), { target: { value: "Asha Verma" } });
    fireEvent.change(screen.getByLabelText("Email Address"), { target: { value: "asha@example.com" } });
    fireEvent.change(screen.getByLabelText("Subject"), { target: { value: "HRBP role" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hello Remee, we have a role for you." } });
    submit();

    expect(screen.queryByText("Please enter a valid email address.")).toBeNull();
    expect(setHref).toHaveBeenCalledTimes(1);
    const href = String(setHref.mock.calls[0]?.[0]);
    expect(href).toContain("mailto:rajremee2000@gmail.com");
    expect(href).toContain("subject=HRBP%20role");
    expect(href).toContain("Hello%20Remee");
    expect(screen.getByText("Your email app has opened with the message ready to send.")).toBeInTheDocument();
  });
});
