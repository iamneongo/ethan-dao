import Image from "next/image";
import { BEYOND_CARDS } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function BeyondRealEstate() {
  return (
    <section className="bg-darkgray py-20 text-white lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="h-section-title mb-14 text-center">Beyond Real Estate with Ethan</h2>
        </Reveal>
        <div className="flex flex-col gap-14">
          {BEYOND_CARDS.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 80}
              className="grid items-center gap-8 md:grid-cols-[minmax(0,440px)_1fr]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image src={c.image} alt={c.title} fill sizes="440px" className="object-cover" />
              </div>
              <div>
                <div className="mb-4 h-px w-full bg-white/25" />
                <h3 className="text-xl font-semibold uppercase tracking-wide">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{c.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
