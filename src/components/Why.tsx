import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";

const GITHUB_URL = "https://github.com/CrossbowCraft13/AntTor";

const OTHERS = [
  {
    name: "Tor",
    role: "General purpose",
    body: "Anonymous internet access for the open web. Broad, mature, and battle-tested.",
  },
  {
    name: "I2P",
    role: "Decentralized",
    body: "A powerful decentralized ecosystem for anonymous services and hidden hosting.",
  },
  {
    name: "VPN",
    role: "Easy, centralized",
    body: "Simple and fast — but centralized, logged, and only as private as its provider.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Why() {
  return (
    <section id="why" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">Why AntTor?</p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          A different <span className="text-gradient">problem space</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-400">
          AntTor isn&apos;t meant to replace Tor. It&apos;s meant to complement it — exploring a
          space Tor was never designed for: <span className="font-medium text-white">high-bandwidth P2P communication</span>.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-16 grid gap-4 lg:grid-cols-3"
      >
        {OTHERS.map((other) => (
          <motion.div
            key={other.name}
            variants={item}
            className="glass relative overflow-hidden rounded-3xl p-7 opacity-80 transition-all duration-500 hover:opacity-100 hover:-translate-y-1"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{other.role}</p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-slate-200">{other.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{other.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="ring-glow relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-400/[0.12] via-indigo-500/[0.08] to-fuchsia-400/[0.12] p-[1px]"
      >
        <div className="glass-deep relative flex flex-col items-start gap-6 rounded-3xl p-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-cyan-300" />
              AntTor
            </span>
            <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              The Tor for P2P
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              A decentralized privacy network designed specifically for P2P traffic — distributed
              caching, parallel retrieval, and adaptive routing that make private P2P feel like a
              normal application.
            </p>
          </div>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative flex shrink-0 items-center gap-2.5 overflow-hidden rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-indigo-100 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <GithubIcon className="h-4 w-4" />
            GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}