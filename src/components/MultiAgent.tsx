const agents = [
  {
    title: "생활 에이전트",
    desc: "쇼핑, 배달, 교통을 실시간 처리",
    stack: "Kakaotalk + Shopping + Delivery",
  },
  {
    title: "업무 에이전트",
    desc: "일정 조율, 검색, 요약 자동화",
    stack: "Kakaotalk + Calendar + Search",
    featured: true,
  },
  {
    title: "금융 에이전트",
    desc: "지출 분석과 월간 리포트 제공",
    stack: "Kakaotalk + Banking + Report",
  },
];

export default function MultiAgent() {
  return (
    <section className="border-t border-white/8 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">멀티 에이전트</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {agents.map((agent) => (
            <article
              key={agent.title}
              className={`rounded-md border p-6 ${
                agent.featured ? "border-white bg-white text-black" : "border-white/10 bg-[#0b0b0b] text-white"
              }`}
            >
              {agent.featured && (
                <span className="badge mb-5 inline-block border-[#7c3aed]/60 text-[#7c3aed]">추천</span>
              )}
              <h3 className="text-xl font-semibold">{agent.title}</h3>
              <p className={`mt-3 text-sm ${agent.featured ? "text-black/70" : "text-[#888]"}`}>{agent.desc}</p>
              <p
                className={`mono mt-6 text-xs uppercase tracking-[0.08em] ${
                  agent.featured ? "text-black/65" : "text-[#888]"
                }`}
              >
                {agent.stack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
