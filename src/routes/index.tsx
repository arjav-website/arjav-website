import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Check, Minus } from "lucide-react";

import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import heroImg from "@/assets/hero-industry.jpg";
import boardroomImg from "@/assets/boardroom.jpg";
import infraImg from "@/assets/infrastructure.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arjav Capital — India Mid-Market Control Buyout Platform" },
      {
        name: "description",
        content:
          "Arjav Capital acquires, transforms and scales founder-led mid-market businesses in India through control investments.",
      },
      { property: "og:title", content: "Arjav Capital — India's Ownership Transition" },
      {
        property: "og:description",
        content:
          "A control-oriented private equity platform investing in India's founder succession opportunity.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: 80, suffix: "%+", label: "Indian companies are mid-market." },
  { value: 85, suffix: "%", label: "Indian family businesses have no succession plan." },
  { value: 3, prefix: "Only ", suffix: "%", label: "Private equity transactions are buyout deals." },
  { value: 2000, prefix: "₹", suffix: " Cr", label: "Target Fund Size." },
];

const comparison = [
  ["Minority ownership", "Control investments"],
  ["Limited operational influence", "Operational transformation"],
  ["Competitive auctions", "Proprietary opportunities"],
  ["Founder-driven execution", "Professional governance"],
  ["Uncertain exits", "Multiple exit pathways"],
];

const pillars = [
  {
    n: "01",
    title: "Sponsored by India's Leading Industrial Families",
    body: "Anchored by multi-generational business houses with deep operating credibility across Indian industry.",
  },
  {
    n: "02",
    title: "Professionally Managed Investment Team",
    body: "Institutional investors with global private equity pedigree executing a disciplined control mandate.",
  },
  {
    n: "03",
    title: "Control Buyout Strategy",
    body: "Majority ownership that gives us the mandate to reshape strategy, governance and operations.",
  },
  {
    n: "04",
    title: "Operating Partners Driving Value Creation",
    body: "Seasoned executives embedded in portfolio companies from day one of ownership.",
  },
  {
    n: "05",
    title: "Exit Planning Built Into Every Investment",
    body: "Every acquisition is underwritten backwards from a defined, exit-ready end state.",
  },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden">
        <motion.img
          src={heroImg}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1200}
          style={{ y }}
          className="absolute inset-0 h-[118%] w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(115deg, rgba(10, 11, 28, 0.97) 0%, rgba(20, 22, 56, 0.94) 48%, rgba(36, 18, 64, 0.92) 100%)",
          }}
        />
        <motion.div
          style={{ opacity: fade }}
          className="relative mx-auto w-full max-w-[1400px] px-6 pt-28 lg:px-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-5xl text-[2.9rem] font-bold text-white sm:text-[4rem] lg:text-[5.4rem]"
          >
            Built to Lead India&rsquo;s Ownership Transition
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-2xl text-[1.05rem] leading-relaxed text-white lg:text-[1.2rem]"
          >
            Arjav Capital is a control-oriented private equity platform investing in India&rsquo;s
            ownership transition by acquiring, transforming and scaling founder-led mid-market
            businesses.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-14 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-white px-9 py-5 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Get in Touch
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/leadership"
              className="inline-flex items-center justify-center border border-white px-9 py-5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Meet Our Team
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* THE OPPORTUNITY */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
        <Reveal>
          <p className="eyebrow">The Opportunity</p>
        </Reveal>
        <div className="mt-8 grid items-start gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[2.6rem] lg:text-[3.2rem]">
              India is Entering a
              <br />
              Once-in-a-Generation
              <br />
              Ownership Transition
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-7 text-ink-soft">


            <p>
              India&rsquo;s founder generation is approaching a critical succession point. Thousands
              of profitable mid-market businesses are entering a phase where ownership transfer,
              professional management and institutional governance have become essential.
            </p>
            <p>
              While most private equity firms continue competing for minority growth investments,
              Arjav focuses on acquiring controlling stakes in high-quality businesses where
              operational transformation creates long-term value.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-background">
              <div className="px-2 py-12 lg:px-8">
                <p className="gradient-text text-[2.2rem] font-bold sm:text-[2.6rem] lg:text-[clamp(1.9rem,2.4vw,3.4rem)]">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-4 max-w-[15rem] text-[0.95rem] leading-relaxed text-ink-soft">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY ARJAV */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
          <Reveal>
            <p className="eyebrow">Why Arjav</p>
            <h2 className="mt-8 max-w-3xl text-[2.2rem] font-semibold sm:text-[3rem]">
              A structurally different approach to Indian private equity.
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-16 overflow-hidden border border-border bg-background">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Comparison of traditional private equity and Arjav Capital
                </caption>
                <thead>
                  <tr className="border-b border-border">
                    <th
                      scope="col"
                      className="min-w-0 px-4 py-5 text-left sm:px-8 md:px-12 md:py-6"
                    >
                      <span className="eyebrow !text-[0.6rem] sm:!text-[0.75rem]">
                        Traditional Private Equity
                      </span>
                    </th>
                    <th
                      scope="col"
                      className="relative min-w-0 border-l border-border px-4 py-5 text-left sm:px-8 md:px-12 md:py-6"
                    >
                      <span
                        className="absolute inset-x-0 top-0 h-[3px]"
                        style={{ backgroundImage: "var(--gradient-brand)" }}
                        aria-hidden="true"
                      />
                      <span className="eyebrow gradient-text !text-[0.6rem] sm:!text-[0.75rem]">
                        Arjav Capital
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(([left, right]) => (
                    <tr key={left} className="border-b border-border last:border-0">
                      <td className="min-w-0 px-4 py-5 text-ink-soft sm:px-8 md:px-12 md:py-7">
                        <div className="flex items-start gap-2 sm:gap-4">
                          <Minus
                            size={14}
                            className="mt-1 shrink-0 text-ink-muted"
                            aria-hidden="true"
                          />
                          <span className="text-[0.9rem] leading-relaxed sm:text-[1.05rem]">
                            {left}
                          </span>
                        </div>
                      </td>
                      <td className="min-w-0 border-l border-border bg-surface px-4 py-5 text-ink sm:px-8 md:px-12 md:py-7">
                        <div className="flex items-start gap-2 sm:gap-4">
                          <Check
                            size={14}
                            className="mt-1 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                          <span className="text-[0.9rem] font-medium leading-relaxed sm:text-[1.05rem]">
                            {right}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BUILT DIFFERENTLY */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-end">
          <Reveal>
            <p className="eyebrow">Built Differently</p>
            <h2 className="mt-8 text-[2.2rem] font-semibold leading-[1.08] sm:text-[3rem] lg:text-[3.4rem]">
              Built by Investors.
              <br />
              <span className="gradient-text">Backed by Business Builders.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src={boardroomImg}
              alt="Executive boardroom overlooking a city at dusk"
              loading="lazy"
              width={1600}
              height={1104}
              className="h-[320px] w-full object-cover lg:h-[380px]"
            />
          </Reveal>
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.07}>
              <div className="card-soft h-full p-10">
                <span className="gradient-text text-[0.95rem] font-bold tracking-widest">{p.n}</span>
                <h3 className="mt-6 text-[1.35rem] font-semibold leading-snug">{p.title}</h3>
                <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img
          src={infraImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(115deg, rgba(10, 11, 28, 0.97) 0%, rgba(20, 22, 56, 0.94) 48%, rgba(36, 18, 64, 0.92) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 py-32 lg:px-12 lg:py-44">
          <Reveal>
            <h2 className="max-w-4xl text-[2.2rem] font-semibold text-white sm:text-[3rem] lg:text-[3.6rem]">
              Partner with us
            </h2>
            <Link
              to="/contact"
              className="group mt-14 inline-flex items-center gap-3 bg-white px-9 py-5 text-[0.95rem] font-semibold text-ink transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Get in Touch
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
