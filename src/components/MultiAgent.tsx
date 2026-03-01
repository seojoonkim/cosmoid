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
            <article key={agent.title} className="minimal-card rounded-xl p-6">
              <h3 className="text-xl font-semibold">{agent.title}</h3>
              <p className="mt-3 text-sm text-[#888]">{agent.desc}</p>
              <p className="mono mt-6 text-xs uppercase tracking-[0.08em] text-cyan-300">{agent.stack}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
