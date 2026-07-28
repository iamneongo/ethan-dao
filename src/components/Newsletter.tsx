import { NEWSLETTER } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Newsletter() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Reveal className="mx-auto max-w-[900px] px-6 text-center">
        <h2 className="h-section-title text-ink-strong">{NEWSLETTER.title}</h2>
        <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-relaxed text-ink">
          {NEWSLETTER.body}
        </p>
        <form className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
          <input
            type="text"
            placeholder="NAME"
            className="w-full border border-line px-5 py-4 text-sm tracking-wide text-ink-strong placeholder:text-neutral-400 focus:border-gold focus:outline-none sm:w-56"
          />
          <input
            type="email"
            placeholder="EMAIL"
            className="w-full border border-line px-5 py-4 text-sm tracking-wide text-ink-strong placeholder:text-neutral-400 focus:border-gold focus:outline-none sm:w-56"
          />
          <button type="submit" className="btn-gold px-10 py-4">
            Submit
          </button>
        </form>
        <label className="mx-auto mt-5 flex max-w-3xl items-start gap-3 text-left text-xs leading-relaxed text-muted-slate">
          <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-gold" />
          <span>
            {NEWSLETTER.consent.split("Privacy Policy")[0]}
            <a href="#" className="underline">Privacy Policy</a>.
          </span>
        </label>
      </Reveal>
    </section>
  );
}
