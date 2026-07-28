import Image from "next/image";
import { cn } from "@/lib/utils";
import { LISTINGS } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function AvailableListings() {
  return (
    <section className="bg-darkgray py-20 text-white lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <span className="h-kicker justify-center text-white/80 [&::before]:bg-gold">Portfolio across DFW</span>
          <h2 className="h-section-title mb-14 mt-4 text-center">
            Homes Across Dallas–Fort Worth
          </h2>
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {LISTINGS.map((p, i) => (
            <Reveal key={p.address} delay={(i % 3) * 80}>
              <article className="card-surface group h-full text-ink-strong">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.address}
                    fill
                    sizes="(max-width:1024px) 100vw, 380px"
                    className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                  <span
                    className={cn(
                      "absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide",
                      p.status === "Sold"
                        ? "bg-ink-black text-white"
                        : "bg-gold text-ink-black"
                    )}
                  >
                    {p.status ?? "For Sale"}
                  </span>
                </div>
                <div className="px-6 py-6">
                  <div className="font-display text-xl font-bold">{p.price}</div>
                  <div className="mt-2 text-[13px] font-medium text-ink">
                    {p.address}
                  </div>
                  <div className="mt-3 flex items-center gap-2 border-t border-line pt-3 text-[12px] uppercase tracking-wide text-muted-slate">
                    <span>
                      {p.beds != null && `${p.beds} Beds · `}
                      {p.baths != null && `${p.baths} ${p.baths === 1 ? "Bath" : "Baths"} · `}
                      {p.sqft} {p.sqft && !p.sqft.includes("Lot") ? "Sq.Ft." : ""}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BrowseCTA() {
  return (
    <section className="bg-darkgray pb-24 text-center">
      <a href="#" className="btn-outline-light">
        Browse Properties
      </a>
    </section>
  );
}
