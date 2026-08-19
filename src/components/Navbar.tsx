import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "./icons";

const GITHUB_URL = "https://github.com/CrossbowCraft13/AntTor";

const LINKS = [
  { href: "#privacy", label: "Privacy" },
  { href: "#features", label: "Features" },
  { href: "#compare", label: "Compare" },
  { href: "#exit-nodes", label: "Exit Nodes" },
  { href: "#network", label: "Network" },
  { href: "#status", label: "Status" },
];

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="anttor-mark" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" />
          <stop offset="0.55" stopColor="#818cf8" />
          <stop offset="1" stopColor="#e879f9" />
        </linearGradient>
      </defs>
      <path
        d="M32 10 L32 18 M32 46 L32 54 M10 32 L18 32 M46 32 L54 32"
        stroke="url(#anttor-mark)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="32" cy="32" r="9" fill="url(#anttor-mark)" />
      <circle cx="32" cy="32" r="4" fill="#0a0c15" />
      <circle cx="32" cy="10" r="4" fill="url(#anttor-mark)" />
      <circle cx="32" cy="54" r="4" fill="url(#anttor-mark)" />
      <circle cx="10" cy="32" r="4" fill="url(#anttor-mark)" />
      <circle cx="54" cy="32" r="4" fill="url(#anttor-mark)" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`flex w-full max-w-5xl items-center justify-between gap-3 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled ? "glass-deep shadow-[0_20px_60px_-30px_rgba(34,211,238,0.25)]" : "border border-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <Logo className="h-8 w-8 transition-transform duration-500 group-hover:rotate-90" />
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Ant<span className="text-gradient">Tor</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="group hidden items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:shadow-[0_0_30px_-6px_rgba(255,255,255,0.5)] sm:flex"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-200 transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="glass-deep absolute inset-x-4 top-[4.5rem] rounded-2xl p-2 md:hidden"
          >
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}