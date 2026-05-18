export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div className="absolute left-1/2 top-[-10rem] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-[-16rem] left-[-10rem] h-[36rem] w-[36rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
      <div className="absolute right-[-12rem] top-1/3 h-[34rem] w-[34rem] rounded-full bg-indigo-500/20 blur-3xl animate-float-delayed" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.35),rgba(2,6,23,0.96))]" />
      <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
    </div>
  );
}
