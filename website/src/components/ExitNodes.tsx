import { motion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  EyeOff,
  FileX,
  KeyRound,
  Lock,
  RefreshCw,
  Shield,
  ShieldCheck,
  Timer,
  TriangleAlert,
} from "lucide-react";

const SHIELD_POINTS = [
  {
    icon: EyeOff,
    title: "Compartmentalized knowledge",
    body: "Each exit receives only a limited, authenticated slice of an encrypted retrieval session — no identity, no original IP, no complete path, no full history. Compromise one exit and you still can't reconstruct the session.",
    accent: "text-cyan-200 bg-cyan-400/10 ring-cyan-300/20",
  },
  {
    icon: KeyRound,
    title: "Encrypted retrieval tasks",
    body: "Retrieval work is divided into authenticated encrypted tasks across multiple exits, plus an encrypted chunk stream. Each participant processes only the information its role requires.",
    accent: "text-indigo-200 bg-indigo-400/10 ring-indigo-300/20",
  },
  {
    icon: Timer,
    title: "Ephemeral sessions",
    body: "Exit participation runs on short-lived cryptographic sessions. When a session ends, temporary state is discarded according to the node's retention policy — less long-term information to correlate.",
    accent: "text-fuchsia-200 bg-fuchsia-400/10 ring-fuchsia-300/20",
  },
  {
    icon: FileX,
    title: "No traffic history",
    body: "An exit keeps no permanent database of user activity. Operational metrics like uptime and bandwidth are separated from application traffic — measure the node without turning it into a surveillance system.",
    accent: "text-rose-200 bg-rose-400/10 ring-rose-300/20",
  },
  {
    icon: Boxes,
    title: "Encrypted cache protection",
    body: "Cache chunks live inside encrypted envelopes, meaningful only to authorized participants. Possessing a cached chunk is not the same as possessing the ability to read it.",
    accent: "text-emerald-200 bg-emerald-400/10 ring-emerald-300/20",
  },
  {
    icon: ShieldCheck,
    title: "Audited exit infrastructure",
    body: "Exits are continuously evaluated by the Node Audit System — reputation is built on how well the node operates, not just how much bandwidth it provides.",
    accent: "text-amber-200 bg-amber-400/10 ring-amber-300/20",
  },
];

const CONTRIBUTIONS = [
  "Public internet connectivity",
  "Retrieval bandwidth",
  "Hardened network boundary",
  "Cryptographic processing",
  "Distributed caching",
  "Retrieval Shield participation",
  "Auditable capacity",
  "Distributed redundancy",
];

function TorDiagram() {
  return (
    <div className="h-full rounded-2xl border border-rose-300/15 bg-rose-500/[0.04] p-6 sm:p-8">
      <div className="flex items-center gap-2.5">
        <TriangleAlert className="h-5 w-5 text-rose-300" />
        <h4 className="font-display text-lg font-semibold text-white">The traditional model</h4>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        In most privacy networks, the final stage is simple:
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        <div className="rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 ring-1 ring-white/10">
          Entry
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-slate-600" />
        <div className="rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 ring-1 ring-white/10">
          Relay
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-slate-600" />
        <div className="rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 ring-1 ring-white/10">
          Relay
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-slate-600" />
        <div className="rounded-xl bg-rose-500/20 px-4 py-2.5 text-sm font-semibold text-rose-100 ring-1 ring-rose-400/40 shadow-[0_0_24px_-4px_rgba(251,113,133,0.5)]">
          Exit
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 text-rose-300/70" />
        <div className="rounded-xl border border-dashed border-rose-400/40 bg-rose-500/10 px-4 py-2.5 text-sm font-semibold text-rose-100">
          Internet
        </div>
      </div>

      <ul className="mt-6 space-y-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
        <li>
          • One machine carries the entire burden of being the user&apos;s visible gateway —{" "}
          <span className="font-medium text-rose-200">a single point of exposure</span>.
        </li>
        <li>• The exit sees the complete request and can observe unencrypted traffic.</li>
        <li>• That&apos;s why exit sniffing, malicious exits, and operator scrutiny are among Tor&apos;s most serious threats.</li>
      </ul>
    </div>
  );
}

function AntTorDiagram() {
  return (
    <div className="ring-glow h-full rounded-2xl bg-gradient-to-br from-cyan-400/[0.12] via-indigo-500/[0.08] to-fuchsia-400/[0.12] p-[1px]">
      <div className="flex h-full flex-col rounded-2xl bg-[#0b0e18]/80 p-6 backdrop-blur-xl sm:p-8">
        <div className="flex items-center gap-2.5">
          <Shield className="h-5 w-5 text-cyan-300" />
          <h4 className="font-display text-lg font-semibold text-white">The Retrieval Shield</h4>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">
          AntTor treats the final stage as a <span className="font-medium text-cyan-200">cooperative retrieval system</span> —
          multiple exits participate in the same encrypted retrieval session without any single node
          knowing the complete request:
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          <div className="rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 ring-1 ring-white/10">
            Entry
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-slate-600" />
          <div className="rounded-xl bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 ring-1 ring-white/10">
            Relay
          </div>
          <ArrowRight className="h-4 w-4 shrink-0 text-slate-600" />

          <div className="relative rounded-2xl border border-cyan-300/30 bg-cyan-400/[0.08] p-2.5 shadow-[0_0_30px_-6px_rgba(34,211,238,0.45)]">
            <div className="flex items-center gap-1.5">
              {["Exit A", "Exit B", "Exit C"].map((exit, i) => (
                <div key={exit}>
                  <div
                    className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2.5 text-sm font-semibold ring-1 ${
                      i === 2
                        ? "bg-fuchsia-400/15 text-fuchsia-100 ring-fuchsia-300/40"
                        : "bg-cyan-400/15 text-cyan-100 ring-cyan-300/40"
                    }`}
                  >
                    <Lock className="h-3.5 w-3.5" />
                    {exit}
                  </div>
                  <p className="mt-1 text-center text-[0.6rem] font-semibold uppercase tracking-wider text-cyan-200/70">
                    {i === 0 ? "Relay / Shield" : i === 1 ? "Relay / Shield" : "Retrieval Gateway"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <ArrowRight className="h-4 w-4 shrink-0 text-cyan-300/70" />
          <div className="rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-100">
            Internet
          </div>
        </div>

        <ul className="mt-6 space-y-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
          <li>
            • The result is a <span className="font-medium text-cyan-200">distributed final layer</span> — not a
            single machine carrying the whole burden.
          </li>
          <li>• Each exit processes only an encrypted task, never the full request.</li>
          <li>• Encrypted chunks flow back through the network and are reassembled in the user&apos;s rolling buffer.</li>
        </ul>
      </div>
    </div>
  );
}

export function ExitNodes() {
  return (
    <section id="exit-nodes" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
          Exit nodes &amp; the Retrieval Shield
        </p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          The most exposed role in the network.
          <br />
          <span className="text-gradient">Made safer by design.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-400">
          Running an exit is one of the most important — and most exposed — roles in any privacy
          network. It&apos;s the final gateway between the private network and the public internet,
          and its operator faces scrutiny, traffic correlation, and abuse reports that normal relays
          never see. AntTor is designed to make that role safer:{" "}
          <span className="font-medium text-white">
            reducing what any exit knows, limiting what it can retain, and distributing retrieval
            across the network
          </span>{" "}
          whenever possible.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <TorDiagram />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
        >
          <AntTorDiagram />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto mt-24 max-w-2xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
          What the shield changes
        </p>
        <h3 className="font-display mt-4 text-2xl font-bold tracking-tight text-white sm:text-4xl">
          Designed around <span className="text-gradient">minimum necessary knowledge</span>
        </h3>
      </motion.div>

      <motion.div
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SHIELD_POINTS.map((point) => (
          <motion.div
            key={point.title}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
            }}
            className="glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ring-1 ${point.accent}`}>
              <point.icon className="h-5 w-5" />
            </div>
            <h4 className="font-display relative mt-4 text-base font-semibold text-white">{point.title}</h4>
            <p className="relative mt-1.5 text-xs leading-relaxed text-slate-400">{point.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="glass mt-8 overflow-hidden rounded-3xl"
      >
        <div className="grid gap-px bg-white/5 sm:grid-cols-2">
          <div className="bg-[#0a0c15]/70 p-7 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <RefreshCw className="h-4 w-4" /> First request
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 ring-1 ring-white/10">Exit</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-600" />
              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 ring-1 ring-white/10">Internet</span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-600" />
              <span className="rounded-lg border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-100">
                Encrypted chunks enter cache
              </span>
            </div>
          </div>
          <div className="bg-[#0a0c15]/70 p-7 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <RefreshCw className="h-4 w-4" /> Future requests
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold text-cyan-100">
                Distributed cache
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-slate-600" />
              <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300 ring-1 ring-white/10">User</span>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 bg-cyan-400/[0.04] px-7 py-4 text-center sm:px-8">
          <p className="font-display text-sm font-semibold text-cyan-100">
            The cache gets busier. The exit gets quieter.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.05, ease: "easeOut" }}
        className="mt-10 rounded-3xl border border-amber-300/20 bg-amber-400/[0.05] p-8 sm:p-10"
      >
        <div className="flex flex-col items-start gap-5 sm:flex-row">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-200 ring-1 ring-amber-300/25">
            <TriangleAlert className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold text-white">The honest part</h4>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
              An exit is still the final bridge to the public internet. It cannot be completely
              invisible to an ISP, and AntTor does not claim otherwise. The goal is not to eliminate
              the risks of operating an internet-facing node — it is to make those risks{" "}
              <span className="font-medium text-amber-200">smaller, compartmentalized, measurable, and worth taking on</span>{" "}
              for the people who choose to contribute.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="ring-glow relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-400/[0.12] via-indigo-500/[0.08] to-fuchsia-400/[0.12] p-[1px]"
      >
        <div className="glass-deep relative rounded-3xl p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-3xl" />
          <Lock className="mx-auto h-8 w-8 text-cyan-300" />
          <p className="font-display mx-auto mt-5 max-w-3xl text-xl font-bold leading-snug tracking-tight text-white sm:text-2xl">
            Caching does not imply readability. Retrieval does not imply exposure.{" "}
            <span className="text-gradient">Possession does not imply access.</span>
          </p>
          <p className="mt-4 text-sm font-medium text-slate-300">
            An exit should be useful without being unnecessarily exposed.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mt-10 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Run an exit. Strengthen the network. Protect the operator.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
          {CONTRIBUTIONS.map((contribution) => (
            <span
              key={contribution}
              className="glass rounded-full px-3.5 py-1.5 text-xs font-medium text-slate-300"
            >
              {contribution}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}