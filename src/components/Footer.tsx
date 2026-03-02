import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--text)] text-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 md:px-8 text-base md:flex-row md:items-center md:justify-between md:text-lg">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo-icon-white.svg" alt="" className="h-7 w-7" />
            <span className="text-lg font-bold text-white tracking-tight">clawroid</span>
          </Link>
          <p className="mt-2 text-sm text-white/70 md:text-base">AI assistant for real life</p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a href="#features" className="text-white/80 hover:text-white">기능</a>
          <a href="#pricing" className="text-white/80 hover:text-white">요금제</a>
          <a href="#cta" className="text-white/80 hover:text-white">베타 신청</a>
        </div>
        <p className="text-sm text-white/70 md:text-base">© 2026 Clawroid. All rights reserved.</p>
      </div>
    </footer>
  );
}
