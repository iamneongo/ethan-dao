import { AWARDS } from "@/lib/content";
import { StarIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <Reveal>
          <h2 className="h-section-title text-center text-ink-strong">
            Awards &amp; Recognition
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-ink">
            Recognized by the Texas Ace Team and trusted by a growing community across the
            Dallas–Fort Worth Metroplex.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {AWARDS.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <article className="flex h-full flex-col items-center rounded-md border border-line bg-white p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <StarIcon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-semibold uppercase tracking-wide text-ink-strong">
                  {a.title}
                </h3>
                <p className="mt-1 text-[13px] font-medium uppercase tracking-[0.1em] text-gold">
                  {a.org}
                </p>
                <p className="mt-4 text-[13px] leading-relaxed text-ink">{a.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
