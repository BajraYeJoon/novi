"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Sparkle } from "lucide-react";
import { SITE } from "@/config/site";
import { blurIn } from "@/lib/motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-foreground text-white"
    >
      <div className="absolute inset-0">
        <Image
          src="https://framerusercontent.com/images/LTzUgqhBMU0fYD8l2vHeGvu8dQI.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1300px] flex-col items-center gap-8 px-6 md:gap-[52px] md:px-[60px]">
        <div className="flex w-full flex-col items-center gap-6 pt-28 md:gap-6 md:pt-[120px]">
          <motion.span
            {...blurIn(0)}
            className="flex w-min items-center gap-2 whitespace-nowrap rounded-full py-[9px] pl-[10px] pr-[18px] text-[14px] leading-[1.2] text-white shadow-[inset_0_0.5px_1px_rgba(255,255,255,0.23)]"
          >
            <motion.span
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="flex shrink-0"
            >
              <Sparkle size={20} fill="currentColor" strokeWidth={0} />
            </motion.span>
            Built for small teams
          </motion.span>

          <motion.h1
            {...blurIn(0.12)}
            className="w-full text-center text-[40px] font-semibold leading-[110%] tracking-[-0.04em] text-white md:w-[90%] md:text-[52px] lg:text-[64px]"
          >
            Run your team without <br className="hidden sm:block" /> the tab
            switching.
          </motion.h1>

          <motion.p
            {...blurIn(0.24)}
            className="w-full max-w-[630px] lg:max-w-[700px] text-center text-base lg:text-lg leading-[140%] tracking-[-0.2px] text-white/70"
          >
            {SITE.description}
          </motion.p>
        </div>

        <motion.div
          {...blurIn(0.36)}
          className="flex w-full flex-col items-center justify-center gap-3 pb-6 sm:w-auto sm:flex-row sm:gap-4"
        >
          <Link
            href="/pricing"
            className="flex w-full items-center justify-center whitespace-nowrap rounded-full bg-white px-8 py-4 text-[16px] font-semibold leading-[140%] text-foreground transition-colors hover:bg-white/85 sm:w-auto"
          >
            Start free
          </Link>
          <Link
            href="#features"
            className="flex w-full items-center justify-center whitespace-nowrap rounded-full border border-white/40 bg-black px-8 py-4 text-[16px] font-semibold leading-[140%] text-white transition-colors hover:bg-black/80 sm:w-auto sm:border-white/30 sm:bg-white/10 sm:backdrop-blur-md sm:hover:bg-white/15"
          >
            See how it works
          </Link>
        </motion.div>
      </div>

      <motion.figure
        initial={{ opacity: 0, y: 36, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-[1440px] px-6 md:px-10"
        style={{ aspectRatio: "5 / 3" }}
      >
        <Image
          src="/images/hero/hero-image.png"
          alt="Novi dashboard preview"
          fill
          priority
          sizes="(max-width: 1440px) 100vw, 1440px"
          className="object-contain"
        />
      </motion.figure>
    </section>
  );
}
