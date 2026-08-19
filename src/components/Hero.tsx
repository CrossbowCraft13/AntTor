import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { GithubIcon } from "./icons";

const GITHUB_URL = "https://github.com/CrossbowCraft13/AntTor";
const WIKI_URL = "https://github.com/CrossbowCraft13/AntTor/wiki";

const STATS = [
  { value: "2", label: "cooperating networks" },
  { value: "9", label: "core features" },
  { value: "1", label: "free tier — always" },
  { value: "∞", label: "devices supported" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-36 text-center sm:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="glass flex items-center gap-2.5 rounded-full px-4 py-1.5 text-xs font-medium text-slate-300 sm:text-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        Open source · Early research phase
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="font-display mt-7 max-w-4xl text-5xl font-bold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl"
      >
        The Tor for
        <br />
        <span className="text-gradient">P2P.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.22, ease: "easeOut" }}
        className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
      >
        AntTor is an open-source, community-operated privacy network for fast, decentralized,
        high-bandwidth peer-to-peer communication. Private P2P networking that feels like a
        normal application.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.34, ease: "easeOut" }}
        className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
      >
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-transform hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-indigo-100 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <GithubIcon className="h-5 w-5" />
          View on GitHub
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href={WIKI_URL}
          target="_blank"
          rel="noreferrer"
          className="glass group flex w-full items-center justify-center gap-2.5 rounded-2xl px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/25 hover:bg-white/10 sm:w-auto"
        >
          <BookOpen className="h-5 w-5 text-iris" />
          Read the Wiki
        </a>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-5 text-xs text-slate-500"
      >
        No accounts. No tracking. Just connect.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="glass mt-14 grid w-full max-w-3xl grid-cols-2 divide-x divide-white/5 rounded-3xl sm:grid-cols-4"
      >
        {STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-6">
            <span className="font-display text-3xl font-bold text-gradient">{stat.value}</span>
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}