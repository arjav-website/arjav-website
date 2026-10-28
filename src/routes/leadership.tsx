import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";

const akshayaPhoto = "/team/akshaya-prasad-2.jpg";
const anubhavPhoto = "/team/anubhav-gupta-2.png";
const apoorvPhoto = "/team/apoorv-somani.png";
const sanjayNayarPhoto = "/team/sanjay-nayar-2.png";
const akhilGuptaPhoto = "/team/akhil-gupta-2.png";
const yogeshPhoto = "/team/yogesh-mahansaria.png";
const nileshPhoto = "/team/nilesh-ved.png";
const angadPhoto = "/team/angad-banga-2.png";
const johannesPhoto = "/team/johannes-huth.png";

export const Route = createFileRoute("/leadership")({
  head: () => ({
    meta: [
      { title: "Leadership — Arjav Capital" },
      {
        name: "description",
        content:
          "Institutional investing expertise combined with the operating experience of entrepreneurs, industrial families and seasoned executives.",
      },
      { property: "og:title", content: "Value Beyond Capital — Arjav Capital" },
      {
        property: "og:description",
        content:
          "Meet the investment team, sponsor families and operating partners behind Arjav Capital.",
      },
    ],
  }),
  component: Leadership,
});

const team: { initials: string; name: string; role: string; bio: string; photo?: string }[] = [
  {
    initials: "AP",
    photo: akshayaPhoto,
    name: "Akshaya Prasad",
    role: "Founder & Managing Partner",
    bio: "Akshaya is the Managing Partner of Arjav Investment Advisors LLP and leads the investment team at the firm. Prior to joining Arjav, Akshaya was a Partner and Managing Director at Greater Pacific Capital, and headed the firm\u2019s India office. He led the team that was responsible for origination, portfolio management and exits for the firm\u2019s investments. Prior to joining Greater Pacific Capital, Akshaya was the Head of Infrastructure Investing at Goldman Sachs, where he was based in London and Mumbai and was part of the senior team that managed Goldman Sachs\u2019 US$6.5 bn Infrastructure Fund. Formerly, Akshaya was an Executive Director in the Investment Banking Division of Goldman Sachs based in London, where he specialised in cross-border Mergers and Acquisitions. Akshaya has an MBA from the Indian Institute of Management, Bangalore and a BA from St Stephen\u2019s College, New Delhi.",
  },
  {
    initials: "AG",
    photo: anubhavPhoto,
    name: "Anubhav Gupta",
    role: "Co-Founder & Managing Director",
    bio: "Anubhav is the Co-Founder & Managing Director of Arjav Investment Advisors LLP, and is a key part of the investment and operating team. Anubhav has over 16 years of entrepreneurial and operating experience across waste management, hospitality and turnaround consulting. Most recently, he was the Co-Founder & CEO at Dodo Skills India, a financial learning & gaming startup. Anubhav holds a MBA from London Business School, a Bachelor of Science with Merit (Life Sciences) from National University of Singapore and is a CFA Charterholder.",
  },
  {
    initials: "AS",
    photo: apoorvPhoto,
    name: "Apoorv Somani",
    role: "Vice President",
    bio: "Apoorv is a Vice President at Arjav Investment Advisors LLP and has over 10 years of M&A, Private Equity, IPO and fundraising experience across industrial, consumer and auto sectors. Apoorv holds a MBA from Goa Institute of Management and a BMS from Syndenham.",
  },
];


const sponsors = [
  {
    name: "Sanjay Nayar",
    photo: sanjayNayarPhoto,
    sector:
      "ex-CEO, KKR India; Founder, Sorin Investments; Promoter & Non-Executive Director, Nykaa; ex-CEO, Citigroup India",
  },
  {
    name: "Akhil Gupta",
    photo: akhilGuptaPhoto,
    sector:
      "ex-Vice Chairman, Bharti Enterprises; Chairman, 360One WAM",
  },
  {
    name: "Yogesh Mahansaria",
    photo: yogeshPhoto,
    sector: "Managing Director, Mahansaria Tyres; ex-Promoter, Alliance Tyres",
  },
  {
    name: "Johannes Huth",
    photo: johannesPhoto,
    sector: "CEO, Groupe Bruxelles Lambert; ex-Partner & Chairman, KKR EMEA",
  },
  {
    name: "Nilesh Ved",
    photo: nileshPhoto,
    sector: "Founder and Chairman, AppCorp Holding Global",
  },
  {
    name: "Angad Banga",
    photo: angadPhoto,
    sector: "Chief Executive Officer, The Caravel Group",
  },
];

const operating = [
  "Manufacturing",
  "Supply Chain",
  "Technology",
  "Finance",
  "Marketing",
  "Human Resources",
  "Corporate Governance",
];

function Leadership() {
  return (
    <div>
      <section className="bg-night">
        <div className="mx-auto max-w-[1400px] px-6 pb-28 pt-48 lg:px-12 lg:pb-36 lg:pt-56">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="eyebrow !text-white"
          >
            Leadership
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-4xl text-[2.9rem] font-bold text-white sm:text-[4rem] lg:text-[5rem]"
          >
            Value Beyond Capital
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-2xl text-[1.05rem] leading-relaxed text-white lg:text-[1.2rem]"
          >
            Arjav combines institutional investing expertise with the operating experience of
            entrepreneurs, industrial families and seasoned executives.
          </motion.p>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
        <Reveal>
          <h2 className="eyebrow">Investment Team</h2>
        </Reveal>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="card-soft h-full p-10 lg:p-12">
                <div className="flex items-center gap-6">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={`${m.name}, ${m.role} at Arjav Capital`}
                      className="h-20 w-20 shrink-0 object-cover object-top"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center text-[1.05rem] font-semibold text-white"
                      style={{ backgroundImage: "var(--gradient-brand)" }}
                    >
                      {m.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="text-[1.5rem] font-semibold leading-tight">{m.name}</h3>
                    <p className="mt-1 text-[0.95rem] text-ink-muted">{m.role}</p>
                  </div>
                </div>

                <p className="mt-8 border-t border-border pt-8 text-[0.98rem] leading-[1.85] text-ink-soft">
                  {m.bio}
                </p>
              </div>
            </Reveal>
          ))}

        </div>
      </section>

      {/* SPONSORS */}
      <section className="bg-surface">
        <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-12 lg:py-40">
          <Reveal>
            <p className="eyebrow">Sponsors</p>
            <h2 className="mt-8 max-w-3xl text-[2.2rem] font-semibold sm:text-[3rem]">
              Arjav is anchored by leading industrialists and their family offices
            </h2>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
              Fund is anchored by leading industrialists and their family offices
            </p>
          </Reveal>
          <div className="mt-20 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05} className="bg-background">
                <div className="group h-full bg-background px-10 py-14 transition-colors hover:bg-surface">
                  {s.photo ? (
                    <img
                      src={s.photo}
                      alt={s.name}
                      loading="lazy"
                      className="h-28 w-auto max-w-full object-contain object-left"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center border border-border text-[0.85rem] font-bold text-ink-muted grayscale transition-all duration-500 group-hover:grayscale-0">
                      {s.name
                        .split(/\s+/)
                        .slice(0, 2)
                        .map((w) => w[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                  )}
                  <p className="mt-8 text-[1.15rem] font-semibold leading-snug">{s.name}</p>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-muted">{s.sector}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATING PARTNERS — hidden for now
      <section className="py-28 lg:py-40">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <Reveal>
            <p className="eyebrow">Operating Partners</p>
            <h2 className="mt-8 max-w-3xl text-[2.2rem] font-semibold sm:text-[3rem]">
              Operational Expertise Creates Value
            </h2>
          </Reveal>
        </div>
        <div className="no-scrollbar mt-16 flex snap-x gap-6 overflow-x-auto px-6 pb-6 lg:px-12">
          {operating.map((o, i) => (
            <div
              key={o}
              className="card-soft flex min-w-[260px] snap-start flex-col justify-between p-10 lg:min-w-[320px]"
            >
              <span className="gradient-text text-[0.9rem] font-bold tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-24 text-[1.45rem] font-semibold leading-snug">{o}</p>
            </div>
          ))}
        </div>
      </section>
      */}

    </div>
  );
}
