import { Reveal } from "@/components/Reveal";

export function ListingsMap() {
  return (
    <section className="bg-darkgray py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="h-section-title mb-10 text-center text-white">Listings &amp; Sales</h2>
        </Reveal>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-200">
          <iframe
            title="Dallas–Fort Worth listings and sales map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-97.55%2C32.55%2C-96.35%2C33.25&layer=mapnik&marker=32.90%2C-96.95"
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
