export default function BetaCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="beta">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25)_0%,transparent_65%)]" />
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
          지금 신청하면<br /><span className="gradient-text">Pro 1개월 무료</span>
        </h2>
        <p className="text-xl text-slate-400 mb-12 leading-relaxed">
          3월 런칭 시 가장 먼저 초대받고,<br />Pro 플랜 한 달 무료 혜택을 드려요.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6">
          <input type="email" placeholder="이메일 주소를 입력하세요" className="flex-1 bg-white/8 border border-white/12 rounded-full px-6 py-4 text-sm outline-none focus:border-purple-500 transition-colors" />
          <button className="gradient-btn text-white font-bold px-8 py-4 rounded-full text-sm whitespace-nowrap shadow-lg">베타 신청하기</button>
        </div>
        <p className="text-slate-500 text-sm">이미 <span className="text-white font-semibold">1,247명</span>이 대기 중 · 신용카드 불필요</p>
      </div>
    </section>
  );
}
