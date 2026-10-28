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
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12">
        <Link
          to="/"
          className="flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet"
        >
          <img
            src={solid ? logoDark : logoWhite}
            alt="Arjav"
            className="h-[22px] w-auto transition-opacity duration-300"
            width={520}
            height={140}
          />
        </Link>


        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className={`text-[0.9rem] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
                    solid
                      ? "text-ink-soft hover:text-ink focus-visible:outline-brand-violet"
                      : "text-white hover:text-white focus-visible:outline-white"
                  }`}
                  activeProps={{
                    className: solid ? "!text-ink font-semibold" : "!text-white font-semibold",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="primary-mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${
            solid
              ? "text-ink focus-visible:outline-brand-violet"
              : "text-white focus-visible:outline-white"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          id="primary-mobile-nav"
          aria-label="Primary"
          className="border-t border-border bg-background px-6 pb-8 pt-4 lg:hidden"
        >
          <ul>
            {links.map((l) => (
              <li key={l.to} className="border-b border-border">
                <Link
                  to={l.to}
                  className="block py-4 text-base font-medium text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
