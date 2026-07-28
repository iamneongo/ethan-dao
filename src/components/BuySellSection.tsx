import Image from "next/image";
import { Reveal } from "@/components/Reveal";

interface Props {
  eyebrow: string;
  title: string;
  body: string;
  buttons: string[];
  image: string;
  reverse?: boolean;
}

export function BuySellSection({ eyebrow, title, body, buttons, image, reverse }: Props) {
  return (
    <section className="bg-offwhite/60">
      <div className="relative mx-auto max-w-[1440px]">
        <div
          className={`relative flex flex-col lg:block ${reverse ? "lg:pl-0" : ""}`}
        >
          {/* Image */}
          <div
            className={`relative h-[320px] w-full lg:absolute lg:top-0 lg:h-full lg:w-[62%] ${
              reverse ? "lg:left-0" : "lg:right-0"
            }`}
          >
            <Image src={image} alt={title} fill sizes="(max-width:1024px) 100vw, 900px" className="object-cover" />
          </div>

          {/* Card */}
          <div
            className={`relative z-10 flex lg:py-24 ${
              reverse ? "lg:justify-end" : "lg:justify-start"
            }`}
          >
            <Reveal className="w-full bg-white p-8 sm:p-12 lg:w-[46%] lg:p-16">
              <p className="h-eyebrow">{eyebrow}</p>
              <h2 className="h-section-title mt-3 text-ink-strong">{title}</h2>
              <p className="mt-5 text-[15px] leading-[1.85] text-ink">{body}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                {buttons.map((b) => (
                  <a key={b} href="#" className="btn-outline-dark">
                    {b}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
