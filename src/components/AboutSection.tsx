import Image from "next/image";
import { ABOUT_BIO } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Portrait with offset yellow frame */}
        <Reveal className="relative">
          <div
            aria-hidden
            className="absolute -bottom-4 -left-4 h-full w-full rounded-[1.5rem] bg-gold"
          />
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/ethan-headshot-hero.jpg"
              alt="Ethan Dao — Realtor, eXp Realty"
              fill
              sizes="(max-width: 1024px) 100vw, 460px"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="h-kicker">Meet Ethan</span>
          <h2 className="h-section-title mt-4 text-ink-strong">
            Your Dallas–Fort Worth Realtor
          </h2>
          <p className="mt-6 max-w-[65ch] text-[15px] leading-[1.8] text-ink">
            {ABOUT_BIO}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="btn-ink">
              Work With Ethan
            </a>
            <a href="#recent" className="btn-outline-dark">
              See Recent Sales
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
