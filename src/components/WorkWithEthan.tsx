import { WORK_WITH, CONTACT } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function WorkWithEthan() {
  return (
    <section id="work" className="relative overflow-hidden py-28 lg:py-36">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${WORK_WITH.bg})` }}
      />
      {/* Dark scrim for strong text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-black/85 via-ink-black/75 to-ink-black/90" />
      <Reveal className="relative z-10 mx-auto max-w-3xl px-6 text-center text-white">
        <span className="h-kicker justify-center text-white/80 [&::before]:bg-gold">
          Let&apos;s work together
        </span>
        <h2 className="h-section-title mt-4">{WORK_WITH.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.8] text-white/85">
          {WORK_WITH.body}
        </p>
        <a href={`tel:${CONTACT.phone}`} className="btn-gold mt-9">
          {WORK_WITH.cta}
        </a>
      </Reveal>
    </section>
  );
}
