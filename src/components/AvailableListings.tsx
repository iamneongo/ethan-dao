import Image from "next/image";
import { LISTINGS } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function AvailableListings() {
  return (
    <section className="bg-darkgray py-20 text-white lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="h-section-title mb-14 text-center">
            Homes Across Dallas–Fort Worth
          </h2>
        </Reveal>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {LISTINGS.map((p, i) => (
            <Reveal key={p.address} delay={(i % 3) * 80}>
              <article className="group h-full overflow-hidden bg-white text-ink-strong shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.address}
                    fill
                    sizes="(max-width:1024px) 100vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3 flex gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                    <span className="bg-gold px-2.5 py-1">{p.status ?? "For Sale"}</span>
                  </div>
                </div>
                <div className="px-5 py-6 text-center">
                  <div className="text-xl font-semibold">{p.price}</div>
                  <div className="mt-2 text-[13px] font-medium uppercase tracking-wide text-ink">
                    {p.address}
                  </div>
                  <div className="mt-2 flex items-center justify-center gap-2 text-[12px] uppercase tracking-wide text-muted-slate">
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
