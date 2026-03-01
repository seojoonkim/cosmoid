export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.2)_0%,transparent_65%)]" />
      <div className="absolute inset-0" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",backgroundSize:"60px 60px"}} />
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 text-sm text-slate-300 mb-10 font-medium">
          🇰🇷 2026년 3월 베타 출시 — 선착순 2,000명
        </div>
        <h1 className="text-6xl md:text-8xl font-black leading-[1.05] mb-8 tracking-tight">
          AI 비서,<br />
          <span className="gradient-text">드디어 누구나</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-4 max-w-2xl mx-auto leading-relaxed font-medium">
          개발자 아니어도 괜찮아요.
        </p>
        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          카카오톡, 텔레그램에서 바로 사용하는 나만의 AI — 쿠팡 주문, 금융 관리, 일정 조율까지 한 번에.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="gradient-btn text-white font-bold px-10 py-5 rounded-full text-lg shadow-lg">
            무료로 베타 신청하기 →
          </button>
          <button className="border border-white/20 text-white font-medium px-10 py-5 rounded-full text-lg hover:bg-white/5 transition-colors">
            2분 데모 보기
          </button>
        </div>
        <p className="mt-6 text-slate-600 text-sm">신용카드 불필요 · 언제든 취소 가능</p>
      </div>
    </section>
  );
}
