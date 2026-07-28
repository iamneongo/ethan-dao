import Image from "next/image";
import { ABOUT_BIO } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative aspect-[4/5] w-full overflow-hidden bg-gold">
          <Image
            src="/images/ethan-headshot-hero.jpg"
            alt="Ethan Dao — Realtor, eXp Realty"
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className="object-cover object-top"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="h-eyebrow">eXp Realty · Texas Ace Team</p>
          <h2 className="h-section-title mt-3 text-ink-strong">Your Dallas–Fort Worth Realtor</h2>
          <p className="mt-6 text-[15px] leading-[1.85] text-ink">{ABOUT_BIO}</p>
          <a href="#work" className="btn-outline-dark mt-8">
            Learn More
          </a>
        </Reveal>
      </div>
    </section>
  );
}
