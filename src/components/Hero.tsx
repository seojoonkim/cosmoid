export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)",backgroundSize:"60px 60px"}} />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm text-slate-300 mb-8">
          🇰🇷 2026년 3월 베타 출시
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          3분 만에 만드는<br />
          <span className="gradient-text">나만의 AI 비서</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          카카오톡, 텔레그램, 왓츠앱에서 바로 사용.<br />
          쿠팡 주문부터 금융 관리까지 — AI가 대신 처리해요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="gradient-btn text-white font-bold px-8 py-4 rounded-full text-lg">
            베타 신청하기
          </button>
          <button className="border border-white/20 text-white font-medium px-8 py-4 rounded-full text-lg hover:bg-white/5 transition-colors">
            데모 보기
          </button>
        </div>
      </div>
    </section>
  );
}
