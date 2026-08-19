import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  Boxes,
  Coins,
  Database,
  Shield,
  Smartphone,
  Sparkles,
  TowerControl,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "Privacy by design",
    body: "Multi-hop routing minimizes what any individual node can learn about your traffic.",
    accent: "from-cyan-400/60 to-cyan-400/10",
  },
  {
    icon: Zap,
    title: "Performance focused",
    body: "Routing weighs latency, bandwidth, congestion, geography, and node health in real time.",
    accent: "from-amber-400/60 to-amber-400/10",
  },
  {
    icon: Boxes,
    title: "Distributed chunking",
    body: "Large objects are split into small, independently verifiable chunks.",
    accent: "from-indigo-400/60 to-indigo-400/10",
  },
  {
    icon: Database,
    title: "Distributed cache",
    body: "Popular data is cached closer to users and adapts to demand automatically.",
    accent: "from-fuchsia-400/60 to-fuchsia-400/10",
  },
  {
    icon: ArrowDownToLine,
    title: "Parallel retrieval",
    body: "Chunks are fetched simultaneously — resumable and verifiable at every hop.",
    accent: "from-cyan-400/60 to-cyan-400/10",
  },
  {
    icon: TowerControl,
    title: "Failure resistant",
    body: "Nodes can vanish without taking the network down. The mesh heals itself.",
    accent: "from-emerald-400/60 to-emerald-400/10",
  },
  {
    icon: Coins,
    title: "One free tier",
    body: "The core network is intended to remain free to use, for everyone.",
    accent: "from-amber-400/60 to-amber-400/10",
  },
  {
    icon: Sparkles,
    title: "Simple UX",
    body: "You never need to understand the technology underneath. It just works.",
    accent: "from-violet-400/60 to-violet-400/10",
  },
  {
    icon: Smartphone,
    title: "Any device",
    body: "Phones, laptops, desktops, routers, NAS, and servers — all welcome.",
    accent: "from-sky-400/60 to-sky-400/10",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">Features</p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Built for P2P.
          <br />
          <span className="text-gradient">Private by design.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-400">
          Every layer of AntTor is engineered around one goal: fast, high-bandwidth private P2P
          communication that stays simple for the people using it.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {FEATURES.map((feature) => (
          <motion.article
            key={feature.title}
            variants={item}
            className="glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_24px_60px_-24px_rgba(34,211,238,0.35)]"
          >
            <div
              className={`pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gradient-to-br ${feature.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div className="glass relative flex h-11 w-11 items-center justify-center rounded-xl">
              <feature.icon className="h-5 w-5 text-slate-100" />
            </div>
            <h3 className="font-display relative mt-5 text-lg font-semibold text-white">{feature.title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-slate-400">{feature.body}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}