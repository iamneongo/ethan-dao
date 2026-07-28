import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-ink-black py-20 text-white lg:py-28">
      {/* Ambient gold glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-gold/15 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Trophy image */}
        <Reveal className="order-2 flex justify-center lg:order-1">
          <Image
            src="/images/ethan-awards.png"
            alt="Texas Ace Team Top Producer crystal awards for Ethan Dao, 2024 and 2025"
            width={1024}
            height={955}
            sizes="(max-width: 1024px) 90vw, 540px"
            className="h-auto w-full max-w-[540px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
          />
        </Reveal>

        {/* Copy */}
        <Reveal delay={120} className="order-1 lg:order-2">
          <span className="h-kicker text-white/80 [&::before]:bg-gold">Recognition</span>
          <h2 className="h-section-title mt-4">
            Back-to-Back <span className="text-gold">Top Producer</span>
          </h2>
          <p className="mt-6 max-w-[60ch] text-[15px] leading-[1.8] text-white/80">
            Named a Top Producer with the <strong className="font-semibold text-white">Texas Ace Team
            at eXp Realty</strong> in both 2024 and 2025 — recognized for consistent top-tier sales
            performance and client results across the Dallas–Fort Worth Metroplex, backed by a
            15,000+ community across YouTube, Facebook, TikTok, and Instagram.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Top Producer 2024", "Top Producer 2025", "15K+ Community"].map((label) => (
              <span
                key={label}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13px] font-semibold text-white/90"
              >
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
