import { motion } from "framer-motion";
import { Ban, EyeOff, FileX, Microscope, UserX } from "lucide-react";

const PROMISES = [
  {
    icon: EyeOff,
    title: "No tracking",
    body: "No analytics, no beacons, no fingerprinting. Ever.",
  },
  {
    icon: UserX,
    title: "No accounts",
    body: "Nothing to attach to you. Connect and go.",
  },
  {
    icon: FileX,
    title: "No logs",
    body: "There is no record of what you did to hand over.",
  },
  {
    icon: Ban,
    title: "No ads",
    body: "You are not the product. There is no product.",
  },
  {
    icon: Microscope,
    title: "Nothing to subpoena",
    body: "You can't be forced to hand over data you never had.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function PrivacyStance() {
  return (
    <section id="privacy" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[28rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-[140px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-300/90">Our promise</p>
        <h2 className="font-display mt-6 text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
          WE DON&apos;T WANT
          <br />
          <span className="text-gradient-warm">YOUR DATA.</span>
        </h2>
        <p className="mt-7 text-base leading-relaxed text-slate-300 sm:text-lg">
          AntTor is built around a simple idea: a network that holds the least data is a network
          that can&apos;t be compromised. No accounts, no tracking, no telemetry, no logs, no ads —
          there is nothing to collect, nothing to sell, and nothing to hand over.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
      >
        {PROMISES.map((promise) => (
          <motion.div
            key={promise.title}
            variants={item}
            className="glass group relative overflow-hidden rounded-3xl p-6 text-center transition-all duration-500 hover:-translate-y-1 hover:border-rose-300/25 hover:shadow-[0_24px_60px_-24px_rgba(251,113,133,0.35)]"
          >
            <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-rose-400/15 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-rose-400/10 text-rose-200 ring-1 ring-rose-300/20">
              <promise.icon className="h-5 w-5" />
            </div>
            <h3 className="font-display relative mt-4 text-base font-semibold text-white">{promise.title}</h3>
            <p className="relative mt-1.5 text-xs leading-relaxed text-slate-400">{promise.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto mt-12 max-w-2xl text-center text-sm font-medium text-slate-400"
      >
        A network that holds nothing <span className="text-white">can leak nothing</span> — and has
        nothing to be forced into giving up.
      </motion.p>
    </section>
  );
}