import { ChevronUpIcon } from "@/components/icons";

export function FloatingConnect() {
  return (
    <a
      href="#work"
      className="fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wide text-ink-strong shadow-[0_4px_20px_rgba(0,0,0,0.18)] transition-transform hover:-translate-y-0.5"
    >
      Let&apos;s Connect
      <ChevronUpIcon className="h-4 w-4" />
    </a>
  );
}
