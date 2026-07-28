import { WORK_WITH } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function WorkWithEthan() {
  return (
    <section id="work" className="relative overflow-hidden py-28 lg:py-36">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${WORK_WITH.bg})` }}
      />
      <div className="absolute inset-0 bg-white/55" />
      <Reveal className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="h-section-title text-ink-strong">{WORK_WITH.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-ink">
          {WORK_WITH.body}
        </p>
        <a href="#" className="btn-outline-dark mt-8 bg-white/90">
          {WORK_WITH.cta}
        </a>
      </Reveal>
    </section>
  );
}
