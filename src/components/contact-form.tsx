import { useState, type FormEvent } from "react";
import { SendHorizontal } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { EMAIL } from "@/components/site";

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, { message: "Please enter your full name." })
    .max(100, { message: "Name must be less than 100 characters." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email address." })
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be less than 255 characters." }),
  subject: z
    .string()
    .trim()
    .min(1, { message: "Please enter a subject." })
    .max(150, { message: "Subject must be less than 150 characters." }),
  message: z
    .string()
    .trim()
    .min(1, { message: "Please write a short message." })
    .max(2000, { message: "Message must be less than 2000 characters." }),
});

type Field = keyof z.infer<typeof contactSchema>;
type Errors = Partial<Record<Field, string>>;

const EMPTY = { fullName: "", email: "", subject: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (field: Field) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setSent(false);
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as Field;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setSent(false);
      return;
    }
    setErrors({});
    const body = `${result.data.message}\n\n— ${result.data.fullName}\n${result.data.email}`;
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(result.data.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  const fields: {
    name: Field;
    label: string;
    type?: string;
    placeholder: string;
    autoComplete?: string;
  }[] = [
    { name: "fullName", label: "Full Name", placeholder: "Your name", autoComplete: "name" },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "you@example.com",
      autoComplete: "email",
    },
    { name: "subject", label: "Subject", placeholder: "What's this about?" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border bg-card p-6 shadow-sm md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={field.name}>{field.label}</Label>
            <Input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              value={values[field.name]}
              onChange={(e) => update(field.name)(e.target.value)}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              maxLength={field.name === "subject" ? 150 : 255}
            />
            {errors[field.name] && (
              <p id={`${field.name}-error`} className="text-xs text-destructive">
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          maxLength={2000}
          placeholder="Tell me about the role, team or idea you'd like to talk about."
          value={values.message}
          onChange={(e) => update("message")(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" className="group h-12 gap-3 rounded-full px-7">
          Send Message
          <SendHorizontal className="transition-transform group-hover:translate-x-0.5" />
        </Button>
        <p aria-live="polite" className="text-xs text-muted-foreground">
          {sent
            ? "Your email app has opened with the message ready to send."
            : "This opens your email app with the message ready to send."}
        </p>
      </div>
    </form>
  );
}
