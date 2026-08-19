const WORDS = [
  "Privacy by design",
  "Multi-hop routing",
  "Distributed chunking",
  "Distributed cache",
  "Parallel retrieval",
  "Failure resistant",
  "Open source",
  "Community operated",
  "One free tier",
  "Any device",
];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <section className="relative border-y border-white/5 bg-white/[0.02] py-5" aria-hidden="true">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#05060b] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#05060b] to-transparent" />
      <div className="overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {row.map((word, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-sm font-medium uppercase tracking-[0.2em] text-slate-400">
                {word}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}