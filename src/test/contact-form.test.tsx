import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/components/contact-form";

const send = vi.fn().mockResolvedValue({ status: 200 });
vi.mock("@emailjs/browser", () => ({ default: { send } }));

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

  it("sends a complete entry through EmailJS", async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText("Full Name"), { target: { value: "Asha Verma" } });
    fireEvent.change(screen.getByLabelText("Email Address"), { target: { value: "asha@example.com" } });
    fireEvent.change(screen.getByLabelText("Subject"), { target: { value: "HRBP role" } });
    fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hello Remee" } });
    submit();

    expect(await screen.findByText(/your message has been sent/i)).toBeInTheDocument();
    expect(send).toHaveBeenCalledTimes(1);
    const [service, template, params, opts] = send.mock.calls[0]!;
    expect(service).toBe("service_v6ww0nd");
    expect(template).toBe("template_6qada6a");
    expect(opts).toEqual({ publicKey: "-KyudM2OVSLzT42ZY" });
    expect(params).toMatchObject({ name: "Asha Verma", email: "asha@example.com", subject: "HRBP role", message: "Hello Remee" });
  });
});
