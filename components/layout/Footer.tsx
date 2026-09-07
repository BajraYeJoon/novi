import { X, Camera, Newspaper } from "lucide-react";
import Link from "next/link";
import { SITE, FOOTER_GROUPS } from "@/config/site";
import Button from "../ui/Button";

const SOCIALS = [
  { label: "X", href: "https://x.com", Icon: X },
  { label: "Instagram", href: "https://instagram.com", Icon: Camera },
  { label: "Medium", href: "https://medium.com", Icon: Newspaper },
];

export default function Footer() {
  return (
    <footer className="relative mt-14 w-full overflow-hidden rounded-t-[40px] bg-foreground md:mt-24 text-white">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col items-center gap-10 px-5 pb-8 pt-12 md:px-[35px] md:pt-[100px]">
        <div className="grid w-full gap-12 md:grid-cols-2 md:gap-x-[60px]">
          <div className="flex flex-col gap-10 md:gap-16">
            <p className="max-w-[480px] text-[20px] leading-[1.4em] tracking-[-0.02em] text-white/65">
              {SITE?.description}
            </p>

            <div className="flex flex-col items-start gap-5">
              <p className="whitespace-nowrap text-sm text-white/65">
                Follow us on:
              </p>
              <div className="flex items-center gap-4">
                {SOCIALS?.map((social, i) => (
                  <div key={social?.label} className="contents">
                    <Link
                      href={social?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social?.label}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-white/65 transition-colors hover:text-white"
                    >
                      <social.Icon size={18} />
                    </Link>
                    {i < SOCIALS?.length - 1 && (
                      <span className="h-7 w-px shrink-0 bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <form
              action="/contact"
              method="get"
              className="flex w-full max-w-sm items-center gap-2"
            >
              <input
                type="email"
                name="email"
                required
                placeholder="Write your email address"
                aria-label="Write your email address"
                className="h-11 flex-1 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-white/40"
              />
              <Button
                type="submit"
                className="h-11 shrink-0 rounded-full bg-white px-5 text-sm font-medium text-foreground transition-colors hover:bg-white/90"
              >
                Get updates
              </Button>
            </form>
          </div>

          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-[30px]">
            {FOOTER_GROUPS?.map((group) => (
              <div key={group?.title} className="flex flex-col gap-5">
                <h3 className="text-[22px] leading-[1.2em] tracking-[-0.028em] text-white">
                  {group?.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {group?.links?.map((link) => (
                    <li key={link?.label}>
                      <Link
                        href={link?.href}
                        className="text-[16px] text-white/65 transition-colors duration-300 hover:text-white"
                      >
                        {link?.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex w-full flex-col items-center gap-6">
          <div className="flex w-full flex-col items-center justify-between gap-3 text-center text-[14px] text-white/65 sm:flex-row">
            <p>
              {SITE.name} {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="/privacy"
                className="transition-colors duration-300 hover:text-white"
              >
                Privacy Policy
              </Link>
              <span className="h-3 w-px bg-white/20" />
              <Link
                href="/terms"
                className="transition-colors duration-300 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
            <p>Built for small, fast moving teams.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}