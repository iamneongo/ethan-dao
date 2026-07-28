"use client";

import { cn } from "@/lib/utils";
import { CONTACT, FOOTER_LINKS } from "@/lib/content";
import { SocialLinks } from "@/components/SocialLinks";

export function SideMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      />
      <aside
        className={cn(
          "fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-white p-10 transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="self-end text-3xl leading-none text-ink-strong hover:text-gold"
        >
          &times;
        </button>
        <nav className="mt-10 flex flex-col gap-6">
          {FOOTER_LINKS.map((l) => (
            <a
              key={l}
              href="#"
              onClick={onClose}
              className="text-lg tracking-wide text-ink-strong transition-colors hover:text-gold"
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="mt-auto space-y-3 text-sm text-ink">
          <a href={`tel:${CONTACT.phone}`} className="block hover:text-gold">
            {CONTACT.phone}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="block hover:text-gold">
            {CONTACT.email}
          </a>
          <SocialLinks variant="gold" size="sm" className="pt-2" />
        </div>
      </aside>
    </>
  );
}
