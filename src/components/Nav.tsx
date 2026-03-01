export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/8 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold text-white">
          Cosmoid
        </a>
        <div className="hidden items-center gap-8 text-sm text-[#888] md:flex">
          <a href="#why" className="transition-colors hover:text-white">
            왜 Cosmoid인가
          </a>
          <a href="#features" className="transition-colors hover:text-white">
            기능
          </a>
          <a href="#pricing" className="transition-colors hover:text-white">
            요금제
          </a>
        </div>
        <a
          href="#beta"
          className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
        >
          베타 신청
        </a>
      </div>
    </nav>
  );
}
