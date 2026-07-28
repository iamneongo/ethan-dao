import { STATS } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function StatsBand() {
  return (
    <section className="bg-ink-black py-16 text-white lg:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-x-6 gap-y-12 px-6 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 90}
            className="flex flex-col items-center border-white/10 text-center md:[&:not(:last-child)]:border-r"
          >
            <div className="font-display text-[clamp(2.6rem,6vw,4rem)] font-extrabold leading-none tracking-[-0.03em] text-gold">
              {s.value}
            </div>
            <div className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/65 lg:text-xs">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
