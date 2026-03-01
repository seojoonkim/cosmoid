const agents = [
  { icon:"💼", name:"업무비서", messenger:"카카오톡", skills:["캘린더","이메일","네이버 검색"] },
  { icon:"🏠", name:"생활비서", messenger:"텔레그램", skills:["쿠팡","배민","카카오T"], featured: true },
  { icon:"💳", name:"금융비서", messenger:"왓츠앱", skills:["계좌 조회","지출 분석","DeFi"] },
];

export default function MultiAgent() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">하나의 계정, 여러 AI 비서</h2>
          <p className="text-slate-400 text-lg">각자 다른 메신저에서, 각자 다른 역할로</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {agents.map((a) => (
            <div key={a.name} className={`glass rounded-2xl p-8 card-hover ${a.featured ? "border-purple-500/50 glow-purple" : ""}`}>
              <div className="text-4xl mb-4">{a.icon}</div>
              <h3 className="text-xl font-bold mb-1">{a.name}</h3>
              <p className="text-slate-500 text-sm mb-4">{a.messenger} 연결</p>
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
