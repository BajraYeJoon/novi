"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { SITE, NAV_LINKS } from "@/config/site";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent backdrop-blur-xl backdrop-saturate-150">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="#home"
          aria-label={`${SITE.name} home`}
          className="flex items-center text-foreground"
        >
          <span className="font-display text-[28px] font-bold leading-none tracking-[-0.04em] md:text-[30px]">
            novi
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS?.map((link) => (
            <Link
              key={link?.label}
              href={link?.href}
              className="text-[17px] font-medium text-foreground transition-colors hover:text-foreground"
            >
              {link?.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Button size="md" href="/pricing">
            Start Free
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-xl text-foreground transition-colors hover:bg-foreground/5 md:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex items-center justify-center"
            >
              {open ? (
                <X size={22} strokeWidth={2} />
              ) : (
                <Menu size={22} strokeWidth={2} />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-b border-foreground/5 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {NAV_LINKS?.map((link) => (
                <Link
                  key={link?.label}
                  href={link?.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-[17px] font-medium text-foreground hover:bg-foreground/5"
                >
                  {link?.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-3">
                <Button href="/pricing">Start Free</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
