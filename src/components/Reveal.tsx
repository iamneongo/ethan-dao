"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const TAGS = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  span: motion.span,
} as const;

const variants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof typeof TAGS;
}) {
  const reduce = useReducedMotion();
  const M = TAGS[as];

  if (reduce) {
    return <M className={className}>{children}</M>;
  }

  return (
    <M
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{
        duration: 0.75,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </M>
  );
}
