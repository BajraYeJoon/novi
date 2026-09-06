"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const centered = align === "center";

  return (
    <div
      ref={ref}
      className={cn(
        "flex max-w-[600px] flex-col",
        centered && "items-center text-center",
        className
      )}
    >
      {badge && (
        <motion.span
          initial={false}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 12, filter: "blur(5px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-[14px] tracking-[-0.014em] text-[#5235ef]"
        >
          [{badge}]
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mt-2.5 text-[40px] font-medium leading-[1.1em] tracking-[-0.048em] text-foreground md:text-[48px]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-3 text-[20px] leading-[1.4em] tracking-[-0.02em] text-muted-foreground"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
