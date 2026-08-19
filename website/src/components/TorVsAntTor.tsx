import { motion } from "framer-motion";
import { Check, Globe, Radio } from "lucide-react";

const TOR_USES = [
  "Browsing the web anonymously",
  "Visiting .onion sites",
  "Getting around censorship",
  "Any destination on the public internet",
];

const ANTTOR_USES = [
  "Sharing files between your devices",
  "Syncing data peer-to-peer",
  "Private messaging between peers",
  "Streaming between devices and servers",
];

const TABLE_ROWS = [
  { label: "Purpose", tor: "Anonymous access to the open web", anttor: "Private P2P communication" },
  { label: "Traffic", tor: "Web browsing", anttor: "Peer-to-peer transfers" },
  { label: "Bandwidth", tor: "Low — anonymity first", anttor: "High — performance first" },
  { label: "Exit", tor: "A single exit node — sees the full request", anttor: "A distributed Retrieval Shield — no single exit knows it all" },
  { label: "Your data", tor: "Cleartext at the exit — HTTPS is essential", anttor: "Encrypted on the path, in caches, and at the edge" },
  { label: "Best for", tor: "Browsing, .onion, censorship", anttor: "Files, sync, messaging, streaming" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function TorVsAntTor() {
  return (
    <section id="compare" className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-28 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300/80">For newcomers</p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Tor vs <span className="text-gradient">AntTor</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-400">
          Same philosophy, different jobs. Tor and AntTor are both volunteer-run privacy networks —
          but they solve two very different problems. Here&apos;s the 60-second version.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-16 grid gap-6 lg:grid-cols-2"
      >
        <motion.div
          variants={item}
          className="glass relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-slate-300 ring-1 ring-white/10">
              <Globe className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-slate-100">Tor</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Anonymous browsing · open web
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            Tor routes your web traffic through a volunteer network so the sites you visit can&apos;t
            tell who you are. It&apos;s the gold standard for anonymous access to the open web — slow
            by design, because anonymity is the whole point.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Use Tor when…
          </p>
          <ul className="mt-3 space-y-2.5">
            {TOR_USES.map((use) => (
              <li key={use} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/15">
                  <Check className="h-3 w-3 text-slate-400" />
                </span>
                {use}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={item}
          className="ring-glow relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-400/[0.14] via-indigo-500/[0.1] to-fuchsia-400/[0.14] p-[1px]"
        >
          <div className="glass-deep relative h-full rounded-3xl p-8">
            <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="relative flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-300/25">
                <Radio className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-white">AntTor</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300/80">
                  Private highways · P2P traffic
                </p>
              </div>
            </div>
            <p className="relative mt-5 text-sm leading-relaxed text-slate-300">
              AntTor routes peer-to-peer traffic through a community network built for speed —
              distributed caching, parallel retrieval, and adaptive routing that keep private P2P
              communication fast and high-bandwidth.
            </p>
            <p className="relative mt-6 text-xs font-semibold uppercase tracking-wider text-cyan-300/70">
              Use AntTor when…
            </p>
            <ul className="relative mt-3 space-y-2.5">
              {ANTTOR_USES.map((use) => (
                <li key={use} className="flex items-start gap-3 text-sm text-slate-200">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-400/15 ring-1 ring-cyan-300/30">
                    <Check className="h-3 w-3 text-cyan-200" />
                  </span>
                  {use}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="glass mt-8 overflow-hidden rounded-3xl"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  &nbsp;
                </th>
                <th className="px-6 py-4 font-display text-base font-semibold text-slate-200">Tor</th>
                <th className="px-6 py-4 font-display text-base font-semibold text-gradient">AntTor</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white/[0.02]" : ""}>
                  <td className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {row.label}
                  </td>
                  <td className="px-6 py-4 text-slate-300">{row.tor}</td>
                  <td className="px-6 py-4 text-slate-100">{row.anttor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 text-center text-sm font-medium text-slate-400"
      >
        They&apos;re not rivals — they&apos;re <span className="text-white">layers</span>. Tor for the
        open web, AntTor for peer-to-peer. Use both.
      </motion.p>
    </section>
  );
}