import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Banknote, Cog, Target, KeyRound } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import engineeringImg from "@/assets/engineering.jpg";

export const Route = createFileRoute("/investment-strategy")({
  head: () => ({
    meta: [
      { title: "Investment Strategy — Arjav Capital" },
      {
        name: "description",
        content:
          "Control buyouts of profitable, founder-led Indian businesses, transformed through governance, leadership and operational excellence.",
      },
      {
        property: "og:title",
        content: "Ownership Transition Unlocks Opportunities — Arjav Capital",
      },
      {
        property: "og:description",
        content:
          "How Arjav Capital acquires control, institutionalises governance and builds exit-ready Indian businesses.",
      },
    ],
  }),
  component: Strategy,
});


const valueCreation = [
  {
    title: "Operations",
    body: "Transition ownership smoothly, respect the franchise and make necessary improvements",
  },
  {
    title: "Growth",
    body: "Deliver revenue growth through access to new markets, products and exports",
  },
  {
    title: "Technology & AI",
    body: "Upgrade technology, employ AI-first approach to increase productivity",
  },
  {
    title: "Governance",
    body: "Deepen institutionalisation and governance",
  },
];

const filters = [
  { icon: Banknote, label: "Profitable & Cash Generative" },
  { icon: Target, label: "Strong Market Position" },
  { icon: Cog, label: "Mid-Sized Businesses" },
  { icon: KeyRound, label: "Ownership Transition Context" },
];

function Strategy() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <img
          src={engineeringImg}
          alt="Precision engineering machinery"
          width={1400}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-brand-soft)" }} />
        <div className="relative mx-auto max-w-[1400px] px-6 pb-28 pt-48 lg:px-12 lg:pb-40 lg:pt-56">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="eyebrow !text-white/60"
          >
            Investment Strategy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-5xl text-[2.9rem] font-bold text-white sm:text-[4rem] lg:text-[5rem]"
          >
            <span className="block">Ownership Transition</span>
            <span className="block whitespace-nowrap">Unlocks Opportunities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-2xl text-[1.05rem] leading-relaxed text-white/75 lg:text-[1.2rem]"
          >
            Arjav invests in profitable businesses where an ownership transition unlocks
            opportunities for long-term value creation. The owners of these businesses - families,
            corporations or investment firms - are typically looking to crystallise value by selling
            control to a trusted, experienced and capable owner who will build on the existing base
            to create substantial long-term value. Arjav provides this &ldquo;ownership
            transition&rdquo; capital.
          </motion.p>
        </div>
      </section>

      {/* VALUE CREATION */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
          <Reveal>
            <p className="eyebrow">Value Creation</p>
            <h2 className="mt-8 max-w-3xl text-[2.2rem] font-semibold sm:text-[3rem]">
              The Playbook: 4 Levers to Preserve and Build Value
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-8 md:grid-cols-2">
            {valueCreation.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card-soft group relative h-full overflow-hidden p-12">
                  <div
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  />
                  <h3 className="text-[1.6rem] font-semibold">{v.title}</h3>
                  <p className="mt-5 text-[1.02rem] leading-relaxed text-ink-soft">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
        <Reveal>
          <p className="eyebrow">Investment Filters</p>
          <h2 className="mt-8 max-w-3xl text-[2.2rem] font-semibold sm:text-[3rem]">
            Focussed Business Criteria for Partnership
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {filters.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.05} className="bg-background">
              <div className="group h-full bg-background px-8 py-14 transition-colors hover:bg-surface">
                <f.icon size={26} strokeWidth={1.4} className="text-brand-violet" />
                <p className="mt-8 text-[1.1rem] font-medium leading-snug">{f.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
