import { SOCIALS } from "@/lib/content";
import { cn } from "@/lib/utils";
import {
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
  TiktokIcon,
  ZillowIcon,
} from "@/components/icons";

export const SOCIAL_LINKS = [
  { label: "Facebook", href: SOCIALS.facebook, Icon: FacebookIcon },
  { label: "YouTube", href: SOCIALS.youtube, Icon: YoutubeIcon },
  { label: "Instagram", href: SOCIALS.instagram, Icon: InstagramIcon },
  { label: "TikTok", href: SOCIALS.tiktok, Icon: TiktokIcon },
  { label: "Zillow", href: SOCIALS.zillow, Icon: ZillowIcon },
];

/** Inline row of social icons. `variant` controls the look. */
export function SocialLinks({
  variant = "light",
  className,
  size = "md",
}: {
  variant?: "light" | "dark" | "gold";
  className?: string;
  size?: "sm" | "md";
}) {
  const box = size === "sm" ? "h-9 w-9" : "h-10 w-10";
  const icon = size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]";
  const styles = {
    light: "border border-white/60 text-white hover:bg-white hover:text-ink-strong",
    dark: "border border-ink/20 text-ink-strong hover:bg-gold hover:border-gold hover:text-white",
    gold: "bg-gold text-white hover:bg-gold-dark",
  }[variant];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ethan Dao on ${label}`}
          title={label}
          className={cn(
            "flex items-center justify-center rounded-full transition-colors duration-300",
            box,
            styles
          )}
        >
          <Icon className={icon} />
        </a>
      ))}
    </div>
  );
}

/** Fixed vertical bar pinned to the right edge — always visible on desktop. */
export function FloatingSocialBar() {
  return (
    <div className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2.5 xl:flex">
      {SOCIAL_LINKS.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ethan Dao on ${label}`}
          title={label}
          className="group flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-strong shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-white"
        >
          <Icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}
