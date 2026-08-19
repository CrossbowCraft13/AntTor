import { NetworkCanvas } from "./NetworkCanvas";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(130%_120%_at_50%_-10%,#131a33_0%,#080a12_45%,#05060b_100%)]" />
      <div className="grid-lines absolute inset-0 [mask-image:radial-gradient(85%_65%_at_50%_28%,black,transparent)]" />

      <div className="animate-float-a absolute -top-44 -left-40 h-[34rem] w-[34rem] rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="animate-float-b absolute top-1/4 -right-48 h-[38rem] w-[38rem] rounded-full bg-indigo-500/25 blur-[130px]" />
      <div className="animate-float-c absolute -bottom-52 left-1/4 h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/15 blur-[130px]" />
      <div className="animate-float-b absolute bottom-1/4 -left-32 h-72 w-72 rounded-full bg-amber-400/10 blur-[100px]" />

      <NetworkCanvas className="absolute inset-0 h-full w-full opacity-50" />

      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#05060b] to-transparent" />
    </div>
  );
}