"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HMonogram, SearchIcon } from "@/components/icons";
import { SocialLinks } from "@/components/SocialLinks";
import { AGENT } from "@/lib/content";

export function Hero() {
  const [tab, setTab] = useState<"buy" | "rent">("buy");

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden text-white">
      {/* Background image */}
      <Image
        src="/images/ethan-aerial-neighborhood.jpg"
        alt="Dallas–Fort Worth neighborhood"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6 pt-24 text-center">
        <HMonogram className="mb-4 h-28 w-28 drop-shadow-lg sm:h-32 sm:w-32" />
        <h1 className="text-5xl font-semibold tracking-[0.14em] sm:text-6xl">{AGENT.wordmark}</h1>
        <p className="mt-4 text-base font-light tracking-[0.2em] sm:text-lg">
          {AGENT.tagline}
        </p>

        {/* Search */}
        <div className="mt-10 w-full max-w-xl">
          <div className="flex w-max overflow-hidden text-sm font-medium tracking-wide">
            <button
              onClick={() => setTab("buy")}
              className={cn(
                "px-6 py-2.5 transition-colors",
                tab === "buy" ? "bg-white/95 text-ink-strong" : "bg-black/40 text-white"
              )}
            >
              BUY
            </button>
            <button
              onClick={() => setTab("rent")}
              className={cn(
                "px-6 py-2.5 transition-colors",
                tab === "rent" ? "bg-gold text-white" : "bg-black/40 text-white"
              )}
            >
              RENT
            </button>
          </div>
          <div className="flex bg-white">
            <div className="flex flex-1 items-center gap-3 px-5">
              <SearchIcon className="h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search DFW by Address, City, or Neighborhood"
                className="w-full bg-transparent py-4 text-sm text-ink-strong placeholder:text-neutral-400 focus:outline-none"
              />
            </div>
            <button className="bg-gold px-8 text-sm font-semibold tracking-widest text-white transition-colors hover:bg-gold-dark">
              SEARCH
            </button>
          </div>
        </div>

        {/* Social — follow Ethan */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/80">
            Follow Ethan · 15K+ Community
          </span>
          <SocialLinks variant="light" />
        </div>
      </div>
    </section>
  );
}
