import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
const logoDark = "/arjav-logo-dark.png";
const logoWhite = "/arjav-logo-white.png";


const links = [
  { to: "/", label: "Home" },
  { to: "/investment-strategy", label: "Investment Strategy" },
  { to: "/leadership", label: "Leadership" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || !overHero || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/92 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link to="/" className="flex items-center">
          <img
            src={solid ? logoDark : logoWhite}
            alt="Arjav Capital"
            className="h-[22px] w-auto transition-opacity duration-300"
            width={520}
            height={140}
          />
        </Link>


        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={`text-[0.9rem] font-medium transition-colors ${
                solid ? "text-ink-soft hover:text-ink" : "text-white/75 hover:text-white"
              }`}
              activeProps={{
                className: solid ? "!text-ink font-semibold" : "!text-white font-semibold",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${solid ? "text-ink" : "text-white"}`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 pb-8 pt-4 lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block border-b border-border py-4 text-base font-medium text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
