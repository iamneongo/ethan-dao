"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  SearchIcon,
  HamburgerIcon,
} from "@/components/icons";
import { CONTACT, AGENT } from "@/lib/content";

const NAV = [
  { label: "BUY", items: ["Search Homes", "Buyer's Guide", "New-Build Communities"] },
  { label: "SELL", items: ["Home Valuation", "Seller's Guide", "Marketing Strategy"] },
  { label: "PROPERTIES", items: ["Recent Sales", "Featured Homes", "Neighborhoods"] },
  { label: "CONTACT", items: ["Get in Touch", "Schedule a Call", "Follow Ethan"] },
];

export function Navbar({ onOpenMenu }: { onOpenMenu: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled((document.scrollingElement?.scrollTop ?? window.scrollY) > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-10">
        {/* Wordmark lockup */}
        <a
          href="#top"
          className={cn(
            "flex shrink-0 flex-col leading-none transition-colors duration-300",
            scrolled ? "text-ink-strong" : "text-white"
          )}
        >
          <span className="font-display text-xl font-extrabold tracking-[0.16em] lg:text-[1.7rem]">
            {AGENT.wordmark}
          </span>
          <span className="mt-0.5 text-[10px] font-semibold tracking-[0.42em] text-gold lg:text-[11px]">
            {AGENT.role.toUpperCase()}
          </span>
        </a>

        {/* Center nav */}
        <nav
          className={cn(
            "hidden items-center gap-7 xl:flex",
            scrolled ? "text-ink-strong" : "text-white"
          )}
        >
          <a href={`tel:${CONTACT.phone}`} className="text-[15px] font-medium tracking-wide hover:text-gold">
            {CONTACT.phone}
          </a>
          {NAV.map((n) => (
            <div key={n.label} className="group relative">
              <button className="flex items-center gap-1 text-[14px] tracking-wide transition-colors hover:text-gold">
                {n.label}
                <ChevronDownIcon className="h-3.5 w-3.5" />
              </button>
              <div className="invisible absolute left-1/2 top-full w-52 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <ul className="rounded-sm bg-white py-2 text-ink-strong shadow-xl">
                  {n.items.map((it) => (
                    <li key={it}>
                      <a href="#" className="block px-5 py-2.5 text-[13px] tracking-wide hover:bg-offwhite hover:text-gold">
                        {it}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <button aria-label="Search" className="transition-colors hover:text-gold">
            <SearchIcon className="h-5 w-5" />
          </button>
        </nav>

        {/* Hamburger */}
        <button
          onClick={onOpenMenu}
          aria-label="Open menu"
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
            scrolled
              ? "bg-gold text-white"
              : "border border-white/80 text-white"
          )}
        >
          <HamburgerIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
