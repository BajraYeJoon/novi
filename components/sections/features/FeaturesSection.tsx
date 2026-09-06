"use client";

import { motion, useReducedMotion } from "motion/react";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "./FeatureCard";
import { featureCards } from "./features.data";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function FeaturesSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="features"
      className="flex w-full scroll-mt-20 justify-center py-24 md:py-32"
    >
      <div className="flex w-full max-w-[1300px] flex-col items-center gap-14 px-3 md:gap-[56px] md:px-[30px]">
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            badge="Features"
            title="Everything your team needs, in one place."
            subtitle="Four tools that do one thing each — so your team spends less time switching and more time shipping."
          />
        </motion.div>

        <motion.div
          className="grid w-full grid-cols-1 gap-5 md:gap-6 lg:grid-cols-2 lg:gap-6"
          variants={gridVariants}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {featureCards.map((card) => (
            <FeatureCard key={card.id} data={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}