import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <section className="bg-night">
        <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-48 lg:px-12 lg:pb-28 lg:pt-56">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="eyebrow !text-white/50"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-4xl text-[2.4rem] font-bold text-white sm:text-[3.2rem] lg:text-[4rem]"
          >
            {title}
          </motion.h1>
          {intro && (
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-3xl text-[1rem] leading-relaxed text-white/65 lg:text-[1.1rem]"
            >
              {intro}
            </motion.p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-6 py-20 lg:px-12 lg:py-28">
        <div className="legal-body space-y-10 text-justify text-[1rem] leading-[1.85] text-ink-soft [hyphens:auto]">{children}</div>
      </section>
    </div>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-left text-[1.35rem] font-bold text-ink">{heading}</h2>
      <div className="mt-5 space-y-5">{children}</div>
    </div>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 marker:text-brand-violet">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
