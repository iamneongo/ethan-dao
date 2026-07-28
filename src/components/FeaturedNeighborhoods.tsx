import Image from "next/image";
import { NEIGHBORHOODS } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function FeaturedNeighborhoods() {
  return (
    <section className="bg-darkgray py-20 text-white lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <h2 className="h-section-title mb-12 text-center">Featured Neighborhoods</h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {NEIGHBORHOODS.map((n, i) => (
            <Reveal key={n.name} delay={i * 90}>
              <a href="#" className="group relative flex h-[360px] items-center justify-center overflow-hidden">
                <Image
                  src={n.image}
                  alt={n.name}
                  fill
                  sizes="(max-width:768px) 100vw, 480px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/45" />
                <h3 className="relative z-10 text-3xl font-semibold uppercase tracking-[0.08em] text-white">
                  {n.name}
                </h3>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a href="#" className="btn-outline-light">
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
