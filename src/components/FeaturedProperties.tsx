"use client";

import { useRef } from "react";
import Image from "next/image";
import { FEATURED_PROPERTIES } from "@/lib/content";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export function FeaturedProperties() {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: "smooth" });
  };

  return (
    <section id="recent" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <span className="h-kicker">Proven track record</span>
        <h2 className="h-section-title mb-12 mt-4 text-ink-strong">Recent Sales</h2>

        <div
          ref={track}
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {FEATURED_PROPERTIES.map((p) => (
            <article
              key={p.address}
              className="group relative aspect-[3/4] w-[85%] shrink-0 snap-start overflow-hidden rounded-[1.25rem] sm:w-[46%] lg:w-[48%]"
            >
              <Image
                src={p.image}
                alt={p.address}
                fill
                sizes="(max-width:1024px) 100vw, 560px"
                className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
              <span className="absolute left-5 top-5 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink-black">
                {p.price}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <div className="font-display text-lg font-bold leading-tight">{p.address}</div>
                <div className="mt-2 text-xs uppercase tracking-wide text-white/85">
                  {p.beds} Beds · {p.baths} Baths · {p.sqft} Sq.Ft.
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white transition-colors hover:bg-gold-dark"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white transition-colors hover:bg-gold-dark"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
          <a href="#" className="btn-gold">
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
