import { motion } from "framer-motion";
import { Lock, Waves } from "lucide-react";

type Flow = {
  title: string;
  tagline: string;
  question: string;
  labels: string[];
  tone: "cyan" | "amber";
  icon: typeof Lock;
};

const FLOWS: Flow[] = [
  {
    title: "Routing network",
    tagline: "The privacy layer",
    question: "How does this communication travel privately?",
    labels: ["Entry", "Relay", "Relay", "Exit", "Destination"],
    tone: "cyan",
    icon: Lock,
  },
  {
    title: "Cache network",
    tagline: "The performance layer",
    question: "How does this communication travel efficiently?",
    labels: ["Chunk", "Chunk", "Chunk", "Chunk"],
    tone: "amber",
    icon: Waves,
  },
];

function FlowLine({ labels, tone }: { labels: string[]; tone: "cyan" | "amber" }) {
  const cyan = tone === "cyan";
  return (
    <div className="relative mt-12 px-2">
      <div
        className={`absolute inset-x-2 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r ${
          cyan
            ? "from-transparent via-cyan-400/60 to-transparent"
            : "from-transparent via-amber-400/60 to-transparent"
        }`}
      />
      <div
        className={`animate-flow absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full ${
          cyan
            ? "bg-cyan-300 shadow-[0_0_18px_4px_rgba(34,211,238,0.55)]"
            : "bg-amber-300 shadow-[0_0_18px_4px_rgba(245,181,68,0.55)]"
        }`}
        style={{ animationDelay: cyan ? "0s" : "0.9s" }}
      />
      <div className="relative flex items-start justify-between gap-2">
        {labels.map((label, i) => (
          <div key={i} className="flex flex-col items-center gap-3">
            <span
              className={`text-center text-[0.68rem] font-semibold uppercase tracking-wider ${
                cyan ? "text-cyan-200/90" : "text-amber-200/90"
              }`}
            >
              {label}
            </span>
            <span
              className={`flex h-3.5 w-3.5 items-center justify-center rounded-full ${
                cyan ? "bg-cyan-400/25" : "bg-amber-400/25"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${cyan ? "bg-cyan-300" : "bg-amber-300"}`} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BigIdea() {
  return (
    <section id="network" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">The Big Idea</p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Two networks.
          <br />
          <span className="text-gradient">One purpose.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-400">
          AntTor combines two cooperating networks — one answers{" "}
          <span className="font-medium text-cyan-200">how your data stays private</span>, the other{" "}
          <span className="font-medium text-amber-200">how it stays fast</span>.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {FLOWS.map((flow, index) => (
          <motion.div
            key={flow.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
            className={`glass group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1.5 ${
              flow.tone === "cyan"
                ? "hover:border-cyan-300/25 hover:shadow-[0_24px_70px_-28px_rgba(34,211,238,0.5)]"
                : "hover:border-amber-300/25 hover:shadow-[0_24px_70px_-28px_rgba(245,181,68,0.4)]"
            }`}
          >
            <div
              className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                flow.tone === "cyan" ? "bg-cyan-400/15 opacity-60" : "bg-amber-400/15 opacity-60"
              }`}
            />
            <div className="relative flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                  flow.tone === "cyan"
                    ? "bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/20"
                    : "bg-amber-400/15 text-amber-200 ring-1 ring-amber-300/20"
                }`}
              >
                <flow.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-white">{flow.title}</h3>
                <p className={`text-xs font-semibold uppercase tracking-wider ${flow.tone === "cyan" ? "text-cyan-300/80" : "text-amber-300/80"}`}>
                  {flow.tagline}
                </p>
              </div>
            </div>
            <p className="relative mt-4 text-sm leading-relaxed text-slate-400">“{flow.question}”</p>
            <FlowLine labels={flow.labels} tone={flow.tone} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}