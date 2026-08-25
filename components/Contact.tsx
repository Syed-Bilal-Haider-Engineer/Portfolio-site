"use client";

import { useState, FormEvent } from "react";
import { profile } from "@/data/content";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section
      id="contact"
      className="border-t border-border px-6 py-10 dark:border-white/10 scroll-mt-20"
    >
      <div className="mx-auto max-w-page">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-wide text-muted-2 dark:text-muted">
          contact
        </p>

        <p className="mb-6 max-w-[54ch] text-sm leading-relaxed text-muted dark:text-muted-2">
          The best way to reach me is email or X. I&apos;m usually happy to
          talk about design systems, developer tools, and serious
          collaboration. Send context, links, or a rough problem — the more
          specific, the better I can respond.
        </p>

        <form onSubmit={handleSubmit} className="grid max-w-[380px] gap-3.5">
          <div className="grid gap-1.5">
            <label
              htmlFor="name"
              className="font-mono text-[11px] uppercase tracking-wide text-muted dark:text-muted-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-ink outline-none focus:border-muted-2 dark:border-white/15 dark:bg-white/5 dark:text-paper"
            />
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="email"
              className="font-mono text-[11px] uppercase tracking-wide text-muted dark:text-muted-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-ink outline-none focus:border-muted-2 dark:border-white/15 dark:bg-white/5 dark:text-paper"
            />
          </div>

          <div className="grid gap-1.5">
            <label
              htmlFor="message"
              className="font-mono text-[11px] uppercase tracking-wide text-muted dark:text-muted-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="resize-none rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-ink outline-none focus:border-muted-2 dark:border-white/15 dark:bg-white/5 dark:text-paper"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-fit rounded-lg border border-ink bg-ink px-4 py-2.5 text-sm text-paper transition-opacity hover:opacity-85 disabled:opacity-50 dark:border-paper dark:bg-paper dark:text-ink"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-accent">
              Thanks — your message is in. I&apos;ll reply by email soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
