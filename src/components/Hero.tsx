"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";
import { SearchIcon } from "@/components/icons";
import { SocialLinks } from "@/components/SocialLinks";

export function Hero() {
  const [tab, setTab] = useState<"buy" | "rent">("buy");
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0.12]);

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-ink-black text-white"
    >
      {/* Right visuals — brand wash + cutout (large screens only) */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {/* Solid-ish yellow directly behind the subject (hides the cutout's yellow edge),
            fading smoothly to black toward the content on the left */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(66%_98%_at_80%_42%,#f7bf0d_0%,#f7bf0d_26%,rgba(247,191,13,0.42)_46%,rgba(247,191,13,0.12)_60%,transparent_74%)]"
        />
        {/* Transparent cutout */}
        <motion.div
          style={reduce ? undefined : { y: yImg }}
          className="absolute bottom-0 right-0 h-full w-[58%] xl:w-[52%]"
        >
          <Image
            src="/images/ethan-cutout.png"
            alt="Ethan Dao, Realtor with eXp Realty, in a dark suit"
            fill
            priority
            sizes="55vw"
            className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] items-center px-6 lg:px-10">
        <motion.div
          style={reduce ? undefined : { y: yContent, opacity: fade }}
          className="max-w-xl py-32"
        >
          <span className="h-kicker text-white/80 [&::before]:bg-gold">
            eXp Realty · Texas Ace Team
          </span>

          <h1 className="mt-6 font-display text-[clamp(3.2rem,9vw,6rem)] font-extrabold leading-[0.92] tracking-[-0.035em]">
            ETHAN
            <br />
            <span className="text-gold">DAO</span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/70">
            Realtor & Top Producer <span className="text-white">2024 &amp; 2025</span> —
            helping buyers, sellers, and investors move with confidence across the
            <span className="text-white"> Dallas–Fort Worth Metroplex</span>.
          </p>

          {/* Search */}
          <div className="mt-9 w-full max-w-xl">
            <div className="flex w-max overflow-hidden rounded-t-xl text-[13px] font-semibold tracking-wide">
              <button
                onClick={() => setTab("buy")}
                className={cn(
                  "px-7 py-2.5 transition-colors",
                  tab === "buy" ? "bg-white text-ink-black" : "bg-white/10 text-white/80"
                )}
              >
                BUY
              </button>
              <button
                onClick={() => setTab("rent")}
                className={cn(
                  "px-7 py-2.5 transition-colors",
                  tab === "rent" ? "bg-gold text-ink-black" : "bg-white/10 text-white/80"
                )}
              >
                RENT
              </button>
            </div>
            <div className="flex overflow-hidden rounded-b-xl rounded-tr-xl bg-white">
              <div className="flex flex-1 items-center gap-3 px-5">
                <SearchIcon className="h-5 w-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search DFW by city, address, or neighborhood"
                  className="w-full bg-transparent py-4 text-sm text-ink-strong placeholder:text-neutral-400 focus:outline-none"
                />
              </div>
              <button className="bg-gold px-7 text-sm font-bold tracking-wide text-ink-black transition-colors hover:bg-gold-light">
                SEARCH
              </button>
            </div>
          </div>

          {/* Social */}
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
              Follow · 15K+ community
            </span>
            <SocialLinks variant="light" size="sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
