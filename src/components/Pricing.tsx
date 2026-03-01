const plans = [
  { name:"Free", price:"₩0", unit:"/월", features:["에이전트 1개","경량 AI 모델","월 50만 토큰","기본 스킬 5개"], cta:"무료로 시작", featured:false },
  { name:"Pro", price:"₩19,900", unit:"/월", features:["에이전트 5개","Claude / GPT-4o","월 500만 토큰","스킬 15개","금융 MCP 포함"], cta:"Pro 시작하기", featured:true },
  { name:"Business", price:"₩49,900", unit:"/월", features:["에이전트 20개","Claude Opus","월 2,000만 토큰","스킬 50개","전담 지원"], cta:"Business 시작하기", featured:false },
];

export default function Pricing() {
  return (
    <section className="py-32 px-6 bg-[#0d0d18]" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">합리적인 요금제</h2>
          <p className="text-xl text-slate-400">베타 기간 동안 모든 플랜 50% 할인</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-3xl p-10 card-hover flex flex-col relative ${p.featured ? "glow-purple" : "glass"}`}
              style={p.featured ? {background:"linear-gradient(135deg,rgba(124,58,237,0.2),rgba(6,182,212,0.1))",border:"1px solid rgba(124,58,237,0.5)"} : {}}>
              {p.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="gradient-btn text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg">✨ 추천</span>
                </div>
              )}
              <h3 className="text-xl font-bold mb-4">{p.name}</h3>
              <div className="mb-8">
                <span className="text-5xl font-black">{p.price}</span>
                <span className="text-slate-400 text-sm ml-1">{p.unit}</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                    <span className="gradient-text font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full font-bold text-sm ${p.featured ? "gradient-btn text-white" : "border border-white/20 text-white hover:bg-white/5 transition-colors"}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
