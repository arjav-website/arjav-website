import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
const logoWhite = "/arjav-logo-white.png";


export function Footer() {
  return (
    <footer className="bg-night text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center">
              <img
                src={logoWhite}
                alt="Arjav"
                className="h-[25px] w-auto"
                width={520}
                height={140}
              />
            </div>

            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-white">
              A control-oriented private equity platform investing in India&rsquo;s ownership
              transition across founder-led mid-market businesses.
            </p>
            <p className="eyebrow mt-8 !text-white">{"\n"}</p>
          </div>

          <div>
            <p className="eyebrow !text-white">Navigate</p>
            <ul className="mt-6 space-y-3 text-[0.95rem]">
              <li>
                <Link
                  to="/"
                  className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/investment-strategy"
                  className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Investment Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership"
                  className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-white">Contact</p>
            <div className="mt-6 space-y-3 text-[0.95rem]">
              <address className="not-italic leading-[1.6]">
                301, 3rd Floor, Peninsula Chambers,
                <br />
                Ganpatrao Kadam Marg, Lower Parel (W),
                <br />
                Mumbai, Maharashtra - 400013
              </address>
              <a
                href="mailto:info@arjavcapital.com"
                className="block hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                info@arjavcapital.com
              </a>
              <a
                href="https://www.linkedin.com/company/arjavcapital/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Linkedin size={15} aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-[0.8rem] text-white sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Arjav Capital. All rights reserved.</p>
          <div className="flex gap-8">
            <Link
              to="/privacy-policy"
              className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-use"
              className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Terms of Use
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
