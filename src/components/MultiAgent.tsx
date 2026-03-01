const agents = [
  { icon:"💼", name:"업무비서", messenger:"카카오톡", skills:["캘린더","이메일","네이버 검색"] },
  { icon:"🏠", name:"생활비서", messenger:"텔레그램", skills:["쿠팡","배민","카카오T"], featured: true },
  { icon:"💳", name:"금융비서", messenger:"왓츠앱", skills:["계좌 조회","지출 분석","DeFi"] },
];

export default function MultiAgent() {
  return (
    <section className="py-20 md:py-32 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black mb-4">하나의 계정,<br />여러 AI 비서</h2>
          <p className="text-base md:text-xl text-slate-400">각자 다른 메신저에서, 각자 다른 역할로</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {agents.map((a) => (
            <div key={a.name} className={`rounded-3xl p-6 md:p-10 card-hover ${a.featured ? "glow-purple" : "glass"}`}
              style={a.featured ? {background:"linear-gradient(135deg,rgba(124,58,237,0.2),rgba(6,182,212,0.1))",border:"1px solid rgba(124,58,237,0.4)"} : {}}>
              <div className="text-4xl mb-4">{a.icon}</div>
              <h3 className="text-xl font-black mb-1">{a.name}</h3>
              <p className="text-slate-400 text-xs mb-4">{a.messenger} 연결</p>
              <div className="flex flex-wrap gap-2">
                {a.skills.map((s) => (
                  <span key={s} className="text-xs bg-white/8 rounded-full px-3 py-1 text-slate-300">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
