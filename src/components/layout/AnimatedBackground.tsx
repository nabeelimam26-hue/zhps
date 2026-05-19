export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#050814]">
      <div className="absolute inset-0 cinematic-shell" />
      <div className="absolute -top-28 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,154,75,0.2),transparent_65%)] blur-3xl" />
      <div className="absolute -left-24 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(123,155,223,0.16),transparent_68%)] blur-3xl animate-drift" />
      <div className="absolute -right-24 bottom-[-5rem] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(126,91,190,0.18),transparent_68%)] blur-3xl animate-float" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:88px_88px]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,20,0.06),#050814_90%)]" />
    </div>
  );
}
