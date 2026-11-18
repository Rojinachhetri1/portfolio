"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";
import { validateContactFields } from "@/lib/contact-validation.mjs";

type FieldErrors = ReturnType<typeof validateContactFields>;

export function ContactSection() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors = validateContactFields({
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setNotice("");
      return;
    }
    setNotice(
      "Your details are valid, but this form is not connected to email. No message has been sent.",
    );
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section-wrap grid gap-10 py-20 sm:py-28 md:grid-cols-[0.8fr_1.2fr] md:gap-20"
    >
      <div>
        <p className="eyebrow">04 / Contact</p>
        <h2 id="contact-title" className="section-title">
          Let&apos;s Connect
        </h2>
        <p className="mt-5 max-w-sm leading-7 text-muted">
          I&apos;m always interested in learning, collaborating, and exploring new
          opportunities. Feel free to reach out if you&apos;d like to discuss a
          project or simply connect.
        </p>
        <ul className="mt-8 space-y-4 text-sm">
          <li>
            <a
              className="inline-flex min-h-10 items-center gap-3 text-muted transition-colors hover:text-ink"
              href="mailto:rojinachhetri595@gmail.com"
            >
              <Mail aria-hidden="true" size={17} />
              rojinachhetri595@gmail.com
            </a>
          </li>
          <li>
            <a
              className="inline-flex min-h-10 items-center gap-3 text-muted transition-colors hover:text-ink"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Github aria-hidden="true" size={17} />
              GitHub profile <span className="text-xs">(replace profile URL)</span>
            </a>
          </li>
          <li>
            <a
              className="inline-flex min-h-10 items-center gap-3 text-muted transition-colors hover:text-ink"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin aria-hidden="true" size={17} />
              LinkedIn profile <span className="text-xs">(replace profile URL)</span>
            </a>
          </li>
          <li className="inline-flex min-h-10 items-center gap-3 text-muted">
            <MapPin aria-hidden="true" size={17} /> Nepal
          </li>
        </ul>
      </div>
      <form className="space-y-5" noValidate onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="contact-name">
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            className="min-h-12 w-full rounded-sm border border-line bg-white px-4 text-ink placeholder:text-muted focus:border-accent"
            id="contact-name"
            name="name"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-800" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="contact-email">
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            className="min-h-12 w-full rounded-sm border border-line bg-white px-4 text-ink placeholder:text-muted focus:border-accent"
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-800" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium" htmlFor="contact-message">
            Message <span aria-hidden="true">*</span>
          </label>
          <textarea
            className="min-h-36 w-full resize-y rounded-sm border border-line bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-accent"
            id="contact-message"
            name="message"
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-800" role="alert">
              {errors.message}
            </p>
          )}
        </div>
        <button
          className="inline-flex min-h-12 items-center rounded-sm bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-accent"
          type="submit"
        >
          Send Message
        </button>
        <p className="text-sm leading-6 text-muted" role="status" aria-live="polite">
          {notice ||
            "The form validates your details, but no message will be sent until email delivery is configured."}
        </p>
      </form>
    </section>
  );
}
