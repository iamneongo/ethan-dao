import { STATS } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function StatsBand() {
  return (
    <section className="bg-darkgray py-16 text-white lg:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-y-12 px-6 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 90} className="text-center">
            <div className="text-4xl font-bold tracking-wide lg:text-5xl">{s.value}</div>
            <div className="mt-2 text-sm tracking-[0.12em] text-white/85 lg:text-base">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
