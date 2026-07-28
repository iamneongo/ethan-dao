import Image from "next/image";
import { NEIGHBORHOODS } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function FeaturedNeighborhoods() {
  return (
    <section className="bg-darkgray py-20 text-white lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal className="text-center">
          <span className="h-kicker justify-center text-white/80 [&::before]:bg-gold">
            Where Ethan works
          </span>
          <h2 className="h-section-title mb-12 mt-4">Featured Neighborhoods</h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {NEIGHBORHOODS.map((n, i) => (
            <Reveal key={n.name} delay={i * 90}>
              <a
                href="#"
                className="group relative flex h-[420px] items-end overflow-hidden rounded-[1.5rem]"
              >
                <Image
                  src={n.image}
                  alt={`Homes in ${n.name}, Texas`}
                  fill
                  sizes="(max-width:768px) 100vw, 420px"
                  className="object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="relative z-10 p-7">
                  <h3 className="font-display text-3xl font-bold tracking-tight text-white">
                    {n.name}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View homes →
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a href="#" className="btn-outline-light">
            View All Areas
          </a>
        </div>
      </div>
    </section>
  );
}
