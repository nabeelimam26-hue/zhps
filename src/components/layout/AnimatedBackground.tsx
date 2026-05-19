export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050814]">
      <div className="absolute inset-0 cinematic-shell" />

      <div className="absolute -top-32 left-1/2 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,163,92,0.22),transparent_67%)] blur-3xl animate-glow-shift" />
      <div className="absolute -left-36 top-[20%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(112,138,196,0.18),transparent_72%)] blur-3xl animate-atmo" />
      <div className="absolute -right-24 bottom-[-6rem] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(121,88,181,0.16),transparent_72%)] blur-3xl animate-drift" />

      <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(248,205,140,0.09)_2%,transparent_32%,transparent_66%,rgba(107,127,184,0.08)_100%)]" />
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:90px_90px]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.9)_0.7px,transparent_0.7px)] [background-size:3px_3px]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,20,0.1),#050814_85%)]" />
    </div>
  );
}
