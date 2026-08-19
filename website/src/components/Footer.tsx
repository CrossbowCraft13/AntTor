import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Logo } from "./Navbar";
import { GithubIcon } from "./icons";

const GITHUB_URL = "https://github.com/CrossbowCraft13/AntTor";
const WIKI_URL = "https://github.com/CrossbowCraft13/AntTor/wiki";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      <div className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-64 max-w-3xl rounded-full bg-indigo-500/15 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Install AntTor. Connect. <span className="text-gradient">Everything complicated happens underneath.</span>
          </h2>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-900 transition-transform hover:scale-[1.03] active:scale-[0.98] sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-indigo-100 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <GithubIcon className="h-4 w-4" />
              View on GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={WIKI_URL}
              target="_blank"
              rel="noreferrer"
              className="glass group flex w-full items-center justify-center gap-2.5 rounded-2xl px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/25 hover:bg-white/10 sm:w-auto"
            >
              <BookOpen className="h-4 w-4 text-iris" />
              Read the Wiki
            </a>
          </div>
        </motion.div>
      </div>

      <div className="relative border-t border-white/5">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 py-8 sm:flex-row">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <span className="font-display text-base font-semibold tracking-tight text-white">
              Ant<span className="text-gradient">Tor</span>
            </span>
          </a>
          <p className="text-xs text-slate-500">
            © 2026 AntTor · Open source · No accounts, no tracking
          </p>
          <div className="flex items-center gap-5 text-xs font-medium text-slate-400">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-white">
              <GithubIcon className="h-3.5 w-3.5" /> GitHub
            </a>
            <a href={WIKI_URL} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
              Wiki
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}