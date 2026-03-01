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
    <section className="border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">멀티 에이전트</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {agents.map((agent) => (
            <article
              key={agent.title}
              className={`rounded-md border p-4 md:p-8 ${
                agent.featured
                  ? "border-[var(--purple)] bg-[var(--purple)] text-white"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
              }`}
            >
              {agent.featured && (
                <span className="badge mb-5 inline-block border-white/40 text-white">추천</span>
              )}
              <h3 className="text-lg font-semibold md:text-xl">{agent.title}</h3>
              <p className={`mt-3 text-sm md:text-base ${agent.featured ? "text-white/90" : "text-[var(--muted)]"}`}>
                {agent.desc}
              </p>
              <p
                className={`mono mt-6 text-xs uppercase tracking-[0.08em] md:text-sm ${
                  agent.featured ? "text-white/80" : "text-[var(--muted)]"
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
