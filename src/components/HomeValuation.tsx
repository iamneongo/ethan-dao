import { VALUATION } from "@/lib/content";
import { CheckIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export function HomeValuation() {
  return (
    <section className="relative overflow-hidden py-24 text-white lg:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${VALUATION.bg})` }}
      />
      <div className="absolute inset-0 bg-black/45" />
      <Reveal className="relative z-10 mx-auto max-w-[1100px] px-6">
        <h2 className="h-section-title max-w-4xl">{VALUATION.title}</h2>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {VALUATION.bullets.map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm">
              <CheckIcon className="h-4 w-4 text-gold" />
              <span>{b}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col overflow-hidden bg-white sm:flex-row">
          <input
            type="text"
            placeholder="Enter your home address"
            className="flex-1 px-6 py-5 text-sm text-ink-strong placeholder:text-neutral-400 focus:outline-none"
          />
          <button className="btn-gold shrink-0 whitespace-nowrap px-8 py-5">
            {VALUATION.cta}
          </button>
        </div>
      </Reveal>
    </section>
  );
}
