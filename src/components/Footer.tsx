import { CONTACT, FOOTER_LINKS, AGENT } from "@/lib/content";
import { HMonogram } from "@/components/icons";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="bg-white pt-20 text-ink">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <HMonogram className="h-12 w-12" />
          <span className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-[0.18em] text-ink-strong">
              {AGENT.wordmark}
            </span>
            <span className="mt-1 text-[10px] font-medium tracking-[0.38em] text-gold">
              {AGENT.role.toUpperCase()}
            </span>
          </span>
        </div>

        {/* Contact + address */}
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-strong">Ethan Dao</h3>
            <div className="mt-4 space-y-1 text-sm">
              <a href={`tel:${CONTACT.phone}`} className="block hover:text-gold">{CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="block underline hover:text-gold">{CONTACT.email}</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-strong">Brokerage</h3>
            <div className="mt-4 space-y-1 text-sm">
              <p>{CONTACT.address1}</p>
              <p>{CONTACT.address2}</p>
            </div>
          </div>
        </div>

        {/* Links + social */}
        <div className="mt-12 flex flex-col gap-6 border-t border-line pt-10 lg:flex-row lg:items-center lg:justify-between">
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm tracking-wide">
            {FOOTER_LINKS.map((l) => (
              <a key={l} href="#" className="hover:text-gold">{l}</a>
            ))}
          </nav>
          <SocialLinks variant="gold" size="sm" />
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-[11px] leading-relaxed text-muted-slate">
          Ethan Dao (Tung Dao) is a licensed real estate agent in the State of Texas, affiliated with eXp Realty, LLC
          and the Texas Ace Team. Listing and sales information is sourced from the North Texas Real Estate Information
          Systems (NTREIS) and is intended solely for personal, non-commercial use to identify properties of interest.
          While generally considered reliable, this data is not guaranteed accurate; buyers are responsible for
          verifying all information independently. Equal Housing Opportunity.
        </p>
        <p className="mt-4 text-[11px] text-muted-slate">
          ©2026 NTREIS. All rights reserved.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-line py-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 text-sm text-muted-slate sm:flex-row">
          <span className="font-semibold tracking-wide text-ink-strong">
            {AGENT.wordmark} · REALTOR®
          </span>
          <span>eXp Realty · Texas Ace Team · Dallas–Fort Worth, TX</span>
          <span>
            Copyright © 2026 | <a href="#" className="underline">Privacy Policy</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
