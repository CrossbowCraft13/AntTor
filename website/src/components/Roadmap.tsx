import { motion } from "framer-motion";
import { FlaskConical, FileCode2, Cpu, Network as NetworkIcon, Rocket } from "lucide-react";

const PHASES = [
  {
    icon: FlaskConical,
    name: "Research",
    detail: "Threat model, protocol design, and node architecture.",
    state: "active" as const,
  },
  {
    icon: FileCode2,
    name: "Specification",
    detail: "Protocol spec, chunking, and Merkle verification.",
    state: "next" as const,
  },
  {
    icon: Cpu,
    name: "Prototype",
    detail: "A reference node implementation you can run.",
    state: "upcoming" as const,
  },
  {
    icon: NetworkIcon,
    name: "Network",
    detail: "Community relays, caches, and a live testnet.",
    state: "upcoming" as const,
  },
  {
    icon: Rocket,
    name: "Production",
    detail: "Free, open, and community-operated at scale.",
    state: "upcoming" as const,
  },
];

export function Roadmap() {
  return (
    <section id="status" className="relative mx-auto max-w-5xl scroll-mt-28 px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">Status</p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Built <span className="text-gradient">incrementally</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-400">
          AntTor is an ambitious project built step by step. It&apos;s currently in the early
          research and specification phases — and not production-ready yet.
        </p>
        <span className="glass mt-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-amber-200">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
          Not production-ready yet
        </span>
      </motion.div>

      <div className="relative mt-16">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/40 via-indigo-400/25 to-transparent sm:left-1/2" />
        <div className="flex flex-col gap-8">
          {PHASES.map((phase, i) => {
            const left = i % 2 === 0;
            return (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, x: left ? -28 : 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className={`relative flex ${left ? "sm:justify-start" : "sm:justify-end"}`}
              >
                <div
                  className={`absolute left-5 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full sm:left-1/2 ${
                    phase.state === "active"
                      ? "bg-cyan-400/20 text-cyan-200 ring-1 ring-cyan-300/50 shadow-[0_0_24px_4px_rgba(34,211,238,0.35)]"
                      : phase.state === "next"
                        ? "bg-indigo-400/15 text-indigo-200 ring-1 ring-indigo-300/30"
                        : "bg-white/5 text-slate-500 ring-1 ring-white/10"
                  }`}
                >
                  <phase.icon className="h-5 w-5" />
                </div>

                <div className={`glass ml-14 w-full max-w-md rounded-2xl p-6 sm:ml-0 ${left ? "sm:mr-16" : "sm:ml-16"}`}>
                  <div className="flex items-center gap-3">
                    <h3 className={`font-display text-lg font-semibold ${phase.state === "active" ? "text-white" : phase.state === "next" ? "text-slate-200" : "text-slate-400"}`}>
                      {phase.name}
                    </h3>
                    {phase.state === "active" && (
                      <span className="rounded-full bg-cyan-400/15 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-cyan-200 ring-1 ring-cyan-300/25">
                        Current
                      </span>
                    )}
                    {phase.state === "next" && (
                      <span className="rounded-full bg-indigo-400/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-indigo-200 ring-1 ring-indigo-300/20">
                        Next
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{phase.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}