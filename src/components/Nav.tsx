export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold text-[var(--text)]">
          Cosmoid
        </a>
        <div className="hidden items-center gap-8 text-xs text-[var(--muted)] md:flex md:text-sm">
          <a href="#why" className="transition-colors hover:text-[var(--purple)]">
            왜 Cosmoid인가
          </a>
          <a href="#features" className="transition-colors hover:text-[var(--purple)]">
            기능
          </a>
          <a href="#pricing" className="transition-colors hover:text-[var(--purple)]">
            요금제
          </a>
        </div>
        <a
          href="#beta"
          className="rounded-md bg-[var(--purple)] px-4 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 md:text-sm"
        >
          베타 신청
        </a>
      </div>
    </nav>
  );
}
