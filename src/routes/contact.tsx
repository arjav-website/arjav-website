import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Linkedin } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Arjav Capital" },
      {
        name: "description",
        content:
          "Confidential discussions with institutional investors, family offices and strategic partners. Category II AIF, target corpus ₹20,000 Cr.",
      },
      { property: "og:title", content: "Contact Arjav Capital" },
      {
        property: "og:description",
        content:
          "Request the investor presentation or open a confidential conversation with Arjav Capital.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  organisation: z.string().trim().min(1, "Organisation is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().max(1000).optional(),
});

const fieldClass =
  "w-full border-b border-input bg-transparent py-4 text-[1rem] text-ink outline-none transition-colors placeholder:text-ink-muted focus:border-brand-violet";

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const result = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
    if (!accessKey) {
      console.error("Missing VITE_WEB3FORMS_ACCESS_KEY — enquiry not sent.");
      toast.error("Something went wrong. Please email us directly at info@arjavcapital.com.");
      return;
    }

    setSubmitting(true);
    try {
      fd.append("access_key", accessKey);
      fd.append("subject", "New enquiry — Arjav Capital website");
      fd.append("from_name", "Arjav Capital Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      const json = await response.json();

      if (json.success) {
        form.reset();
        toast.success("Thank you — your enquiry has been received in confidence.");
      } else {
        console.error("Web3Forms error:", json);
        toast.error("Something went wrong. Please email us directly at info@arjavcapital.com.");
      }
    } catch (err) {
      console.error("Enquiry submission failed:", err);
      toast.error("Something went wrong. Please email us directly at info@arjavcapital.com.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-night">
        <div className="mx-auto max-w-[1400px] px-6 pb-28 pt-48 lg:px-12 lg:pb-32 lg:pt-56">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="eyebrow !text-white/50"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-4xl text-[2.6rem] font-bold text-white sm:text-[3.6rem] lg:text-[4.6rem]"
          >
            Let&rsquo;s Build the Next Generation of Indian Businesses Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-2xl text-[1.05rem] leading-relaxed text-white/65 lg:text-[1.2rem]"
          >
            {"\n"}
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-36">
        <div className="grid gap-20 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <p className="eyebrow">Enquiry</p>
            <p className="mt-3 text-[0.85rem] text-ink-muted">* indicates mandatory field</p>
            <form onSubmit={onSubmit} className="mt-12 grid gap-10 sm:grid-cols-2">
              {(
                [
                  ["name", "Name", "text", true, "Jane Doe"],
                  ["organisation", "Organisation", "text", true, "Arjav Capital"],
                  ["email", "Email", "email", true, "name@company.com"],
                  ["phone", "Phone", "tel", false, "+91 98765 43210"],
                ] as const
              ).map(([id, label, type, required, placeholder]) => (
                <div key={id}>
                  <label htmlFor={id} className="eyebrow">
                    {label}
                    {required && "*"}
                  </label>
                  <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    className={fieldClass}
                    maxLength={255}
                  />
                  {errors[id] && (
                    <p className="mt-2 text-[0.8rem] text-destructive">{errors[id]}</p>
                  )}
                </div>
              ))}

              <div className="sm:col-span-2">
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full px-10 py-5 text-[0.95rem] font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  {submitting ? "Sending…" : "Submit Enquiry"}
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="bg-surface p-10 lg:p-12">
              <p className="eyebrow">Office</p>
              <address className="mt-8 not-italic text-[1rem] leading-[1.6] text-ink-soft">
                301, 3rd Floor, Peninsula Chambers,
                <br />
                Ganpatrao Kadam Marg, Lower Parel (W),
                <br />
                Mumbai, Maharashtra - 400013
              </address>

              <div className="mt-10 border-t border-border pt-8">
                <p className="eyebrow">Email</p>
                <a
                  href="mailto:info@arjavcapital.com"
                  className="mt-3 inline-block text-[1.05rem] font-semibold hover:text-brand-violet"
                >
                  info@arjavcapital.com
                </a>
              </div>

              <div className="mt-8 border-t border-border pt-8">
                <a
                  href="https://www.linkedin.com/company/arjavcapital/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-[1rem] font-semibold hover:text-brand-violet"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
