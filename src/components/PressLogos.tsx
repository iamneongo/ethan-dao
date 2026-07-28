import { PLATFORMS } from "@/lib/content";

export function PressLogos() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-8">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-slate">
          Find Ethan On
        </span>
        {PLATFORMS.map((name) => (
          <span
            key={name}
            className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-strong/70 transition-colors hover:text-gold"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
