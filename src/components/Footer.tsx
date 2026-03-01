export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <div className="text-xl font-black gradient-text mb-1">Cosmoid</div>
          <p className="text-slate-500 text-sm">AI 비서를 모두에게</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">서비스 소개</a>
          <a href="#" className="hover:text-white transition-colors">요금제</a>
          <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
          <a href="#" className="hover:text-white transition-colors">이용약관</a>
        </div>
        <p className="text-slate-600 text-sm">© 2026 Cosmoid. All rights reserved.</p>
      </div>
    </footer>
  );
}
