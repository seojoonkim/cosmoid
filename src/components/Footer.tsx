export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between md:text-base">
        <div className="text-[var(--text)]">
          <p className="text-lg font-bold">Cosmoid</p>
          <p className="mt-1 text-xs text-[var(--muted)] md:text-sm">AI assistant for real life</p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a href="#features" className="hover:text-[var(--purple)]">
            기능
          </a>
          <a href="#pricing" className="hover:text-[var(--purple)]">
            요금제
          </a>
          <a href="#beta" className="hover:text-[var(--purple)]">
            베타 신청
          </a>
        </div>
        <p className="text-xs md:text-sm">© 2026 Cosmoid. All rights reserved.</p>
      </div>
    </footer>
  );
}
