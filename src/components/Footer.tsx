export default function Footer() {
  return (
    <footer className="bg-[var(--text)] text-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 md:px-8 text-sm md:flex-row md:items-center md:justify-between md:text-base">
        <div>
          <img src="/logo.svg" alt="Cosmoid" className="h-7" style={{ filter: "brightness(0) invert(1)" }} />
          <p className="mt-2 text-xs text-white/70 md:text-sm">AI assistant for real life</p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a href="#features" className="text-white/80 hover:text-white">
            기능
          </a>
          <a href="#pricing" className="text-white/80 hover:text-white">
            요금제
          </a>
          <a href="#beta" className="text-white/80 hover:text-white">
            베타 신청
          </a>
        </div>
        <p className="text-xs text-white/70 md:text-sm">© 2026 Cosmoid. All rights reserved.</p>
      </div>
    </footer>
  );
}
