import { HERO_QUOTE } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function QuoteBand() {
  return (
    <section className="relative flex min-h-[340px] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/ethan-aerial-houston.jpg)" }}
      />
      <div className="absolute inset-0 bg-black/45" />
      <Reveal className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="text-2xl font-light italic leading-relaxed text-white lg:text-[28px]">
          {HERO_QUOTE}
        </p>
      </Reveal>
    </section>
  );
}
