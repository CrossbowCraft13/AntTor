import { motion } from "framer-motion";
import { Boxes, KeyRound, Layers, Lock, Shield } from "lucide-react";

const LAYERS = [
  {
    num: "01",
    icon: Layers,
    title: "Layered routing encryption",
    body: "Every leg of the journey is protected by layered, onion-style routing encryption. Each node sees only its two neighbors — never the full path, never the content.",
    tone: "text-cyan-200 bg-cyan-400/10 ring-cyan-300/20",
    bar: "from-cyan-400/70 to-cyan-400/0",
  },
  {
    num: "02",
    icon: Lock,
    title: "Encrypted cache chunks",
    body: "Data stays encrypted while sitting inside caches. Chunks are stored as authenticated ciphertext in encrypted envelopes — with keys kept separate from the data they protect.",
    tone: "text-indigo-200 bg-indigo-400/10 ring-indigo-300/20",
    bar: "from-indigo-400/70 to-indigo-400/0",
  },
  {
    num: "03",
    icon: Shield,
    title: "Protected retrieval",
    body: "When data isn't cached, the exit's Retrieval Shield handles the external retrieval — isolating the process and minimizing what any exit knows about the surrounding network.",
    tone: "text-fuchsia-200 bg-fuchsia-400/10 ring-fuchsia-300/20",
    bar: "from-fuchsia-400/70 to-fuchsia-400/0",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function OnionVisual() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative h-[260px] w-[260px] scale-90 sm:scale-100">
        <div className="absolute inset-0 rounded-[3rem] border border-cyan-300/20 bg-cyan-400/[0.04] shadow-[inset_0_0_50px_rgba(34,211,238,0.08)]">
          <span className="absolute left-1/2 top-3 -translate-x-1/2 whitespace-nowrap text-[0.6rem] font-bold uppercase tracking-[0.2em] text-cyan-200/80">
            Routing layer
          </span>
        </div>
        <div className="absolute inset-[2.4rem] rounded-[2.2rem] border border-indigo-300/20 bg-indigo-400/[0.05] shadow-[inset_0_0_50px_rgba(129,140,248,0.08)]">
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.6rem] font-bold uppercase tracking-[0.2em] text-indigo-200/80">
            Cache layer
          </span>
        </div>
        <div className="absolute inset-[4.8rem] flex flex-col items-center justify-center gap-1.5 rounded-3xl border border-fuchsia-300/25 bg-fuchsia-500/[0.07] shadow-[0_0_40px_-4px_rgba(232,121,249,0.3)]">
          <Lock className="h-5 w-5 text-fuchsia-200" />
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-fuchsia-200/90">
            Your data
          </span>
        </div>
      </div>
    </div>
  );
}

export function Encryption() {
  return (
    <section id="encryption" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">Under the hood</p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          <span className="text-gradient">Encryption. Encryption. Encryption.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-400">
          Three layers deep. Every byte, every hop, every time.
        </p>
      </motion.div>

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-[auto_1fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <OnionVisual />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col gap-4"
        >
          {LAYERS.map((layer) => (
            <motion.div
              key={layer.num}
              variants={item}
              className="glass group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
            >
              <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${layer.bar}`} />
              <div className="flex items-start gap-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ${layer.tone}`}>
                  <layer.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-xs font-bold tracking-widest text-slate-500">{layer.num}</span>
                    <h3 className="font-display text-lg font-semibold text-white">{layer.title}</h3>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{layer.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="glass mt-8 flex flex-col items-center gap-4 rounded-3xl p-7 sm:flex-row sm:gap-6"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-200 ring-1 ring-emerald-300/20">
          <Boxes className="h-6 w-6" />
        </div>
        <div className="text-center sm:text-left">
          <h3 className="font-display text-lg font-semibold text-white">Chunk-level integrity</h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">
            Every chunk is content-addressed and Merkle-verified. Tamper with a single byte and the
            network knows — corrupted data never reaches you.
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-200">
          <KeyRound className="h-4 w-4" />
          Keys separated from data
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 text-center text-sm font-medium text-slate-400"
      >
        Encryption follows the data <span className="text-white">all the way through the system</span> — on the
        path, in the caches, and at the edge.
      </motion.p>
    </section>
  );
}