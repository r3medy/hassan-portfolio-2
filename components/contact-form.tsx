"use client";

import { FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, CopyIcon } from "./icons";

const email = "hassan0ahmed17@gmail.com";
const serviceOptions = new Set([
  "Data cleaning + simple analysis",
  "Data cleaning + analysis",
  "Data cleaning + analysis + dashboard",
]);

export function ContactForm() {
  const [formError, setFormError] = useState("");
  const [emailOpened, setEmailOpened] = useState(false);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "unavailable">(
    "idle",
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const senderEmail = String(data.get("email") ?? "").trim();
    const description = String(data.get("description") ?? "").trim();
    const selectedService = String(data.get("service") ?? "");
    const service = serviceOptions.has(selectedService) ? selectedService : "";
    const nameControl = form.elements.namedItem("name") as HTMLInputElement;
    const emailControl = form.elements.namedItem("email") as HTMLInputElement;
    const descriptionControl = form.elements.namedItem(
      "description",
    ) as HTMLTextAreaElement;

    if (!name) {
      setFormError("Enter your name.");
      nameControl.focus();
      return;
    }
    if (!senderEmail || !emailControl.validity.valid) {
      setFormError("Enter a valid email address.");
      emailControl.focus();
      emailControl.reportValidity();
      return;
    }
    if (!description) {
      setFormError("Describe your project.");
      descriptionControl.focus();
      return;
    }

    setFormError("");
    const subject = service
      ? `Project inquiry: ${service}`
      : "Project inquiry for Hassan Ahmed";
    const body = [
      `Name: ${name}`,
      `Email: ${senderEmail}`,
      ...(service ? [`Service: ${service}`] : []),
      "",
      "Project description:",
      description,
    ].join("\n");
    setEmailOpened(true);
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("copied");
    } catch {
      setCopyState("unavailable");
    }
  }

  return (
    <div className="contact-form-wrap">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <Suspense fallback={<input name="service" type="hidden" value="" />}>
          <ServiceSelection />
        </Suspense>
        <div className="form-grid">
          <label className="field">
            <span>
              Your name <span aria-hidden="true">*</span>
            </span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Your name"
            />
          </label>
          <label className="field">
            <span>
              Email address <span aria-hidden="true">*</span>
            </span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label className="field">
          <span>
            Project description <span aria-hidden="true">*</span>
          </span>
          <textarea
            name="description"
            required
            rows={5}
            placeholder="Tell me about your data and what you need to learn from it."
          />
        </label>
        {formError ? (
          <p className="form-feedback form-error" role="alert">
            {formError}
          </p>
        ) : null}
        <div className="form-action-row">
          <button className="button button-primary" type="submit">
            Open email draft <ArrowUpRight size={18} />
          </button>
          <p>Your email app opens a draft. Review it and press send there.</p>
        </div>
      </form>
      <div className="contact-fallback">
        <div>
          <span className="eyebrow">Another way to reach me</span>
          <p>
            {emailOpened
              ? "If no email app opened, copy my address and send your message directly."
              : "No email app set up? Copy my address and write to me directly."}
          </p>
          <span className="email-text">{email}</span>
        </div>
        <button type="button" className="copy-button" onClick={copyEmail}>
          <CopyIcon /> {copyState === "copied" ? "Copied" : "Copy email"}
        </button>
        <span className="sr-only" role="status" aria-live="polite">
          {copyState === "copied"
            ? "Email address copied to clipboard."
            : copyState === "unavailable"
              ? "Copy is unavailable. Select the email address to copy it."
              : ""}
        </span>
        {copyState === "unavailable" ? (
          <p className="copy-error" role="status">
            Copy is unavailable. Select the address above to copy it.
          </p>
        ) : null}
      </div>
    </div>
  );
}

function ServiceSelection() {
  const selected = useSearchParams().get("service");
  const service = selected && serviceOptions.has(selected) ? selected : "";

  return (
    <>
      <input name="service" type="hidden" value={service} />
      {service ? (
        <p className="selected-service">
          About: <strong>{service}</strong>
        </p>
      ) : null}
    </>
  );
}
