"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import type { FeatureCardData } from "./features.types";

interface FeatureCardProps {
  data: FeatureCardData;
}

export default function FeatureCard({ data }: FeatureCardProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();

  const blurIn = (delay = 0) =>
    reduce
      ? { initial: { opacity: 1, y: 0, filter: "blur(0px)" }, animate: { opacity: 1, y: 0, filter: "blur(0px)" } }
      : {
          initial: { opacity: 0, y: 24, filter: "blur(8px)" },
          animate: inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {},
          transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <motion.article
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
      }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
      className="group relative flex w-full flex-col items-start gap-8 overflow-hidden rounded-lg border border-[#eaeaea] p-6 md:gap-10 md:p-10"
      style={{ backgroundColor: data.backgroundColor }}
    >
      {data.image && (
        <motion.div
          {...blurIn()}
          className="w-full rounded-2xl bg-white p-2.5 md:p-3"
        >
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
            />
          </div>
        </motion.div>
      )}
      <div className="flex w-full flex-col gap-2">
        <motion.h5
          {...blurIn(0.1)}
          className="text-[24px] font-medium leading-[1.1em] tracking-[-0.04em]"
          style={{ color: data.textColor }}
        >
          {data.title}
        </motion.h5>
        <motion.p
          {...blurIn(0.22)}
          className="text-[16px] leading-[1.4em] tracking-[-0.019em]"
          style={{ color: data.descriptionColor }}
        >
          {data.description}
        </motion.p>
      </div>
    </motion.article>
  );
}