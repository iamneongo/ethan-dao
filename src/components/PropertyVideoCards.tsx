import Image from "next/image";
import { VIDEO_CARDS } from "@/lib/content";
import { PlayIcon } from "@/components/icons";
import { Reveal } from "@/components/Reveal";

export function PropertyVideoCards() {
  return (
    <section className="bg-darkgray pb-24 text-white">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-6 md:grid-cols-3">
        {VIDEO_CARDS.map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <h3 className="min-h-[3.5rem] text-lg font-light uppercase tracking-[0.08em] text-white/90">
              {c.title}
            </h3>
            <p className="mt-2 text-sm text-white/70">{c.address}</p>
            <div className="group relative mt-4 aspect-[4/3] w-full cursor-pointer overflow-hidden">
              <Image
                src={c.poster}
                alt={c.title}
                fill
                sizes="(max-width:768px) 100vw, 380px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-ink-strong transition-transform duration-300 group-hover:scale-110">
                  <PlayIcon className="ml-1 h-7 w-7" />
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
