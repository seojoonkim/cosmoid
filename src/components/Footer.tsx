export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 text-sm text-[#888] md:flex-row md:items-center md:justify-between">
        <div className="text-white">
          <p className="text-lg font-bold">Cosmoid</p>
          <p className="mt-1 text-xs text-[#888]">AI assistant for real life</p>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <a href="#features" className="hover:text-white">
            기능
          </a>
          <a href="#pricing" className="hover:text-white">
            요금제
          </a>
          <a href="#beta" className="hover:text-white">
            베타 신청
          </a>
        </div>
        <p className="text-xs">© 2026 Cosmoid. All rights reserved.</p>
      </div>
    </footer>
  );
}
