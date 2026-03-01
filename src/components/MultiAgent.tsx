const agents = [
  {
    title: "생활 에이전트",
    desc: "쇼핑, 배달, 교통을 실시간 처리",
    stack: "Kakaotalk + Shopping + Delivery",
    bullets: ["쿠팡·배민 자동 주문", "카카오T 호출", "실시간 최저가 탐색"],
  },
  {
    title: "업무 에이전트",
    desc: "일정 조율, 검색, 요약 자동화",
    stack: "Kakaotalk + Calendar + Search",
    bullets: ["캘린더 자동 등록·수정", "미팅 리마인드 자동화", "문서·뉴스 즉시 요약"],
    featured: true,
  },
  {
    title: "금융 에이전트",
    desc: "지출 분석과 월간 리포트 제공",
    stack: "Kakaotalk + Banking + Report",
    bullets: ["오픈뱅킹 계좌 조회", "월별 지출 분석", "이상 지출 감지 알림"],
  },
];

export default function MultiAgent() {
  return (
    <section className="bg-white border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="section-label">멀티 에이전트</p>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">역할별로 나뉜 AI 팀</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {agents.map((agent) => (
            <article
              key={agent.title}
              className="rounded-2xl border p-6 md:p-8"
              style={agent.featured
                ? { background: "var(--purple)", borderColor: "var(--purple)", color: "white" }
                : { background: "var(--surface)", borderColor: "var(--border)", color: "var(--text)" }
              }
            >
              {agent.featured && (
                <span className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
                  style={{ background: "rgba(255,255,255,0.2)", color: "white" }}>
                  추천
                </span>
              )}
              <h3 className="text-xl font-bold">{agent.title}</h3>
              <p className="mt-2 text-base" style={{ color: agent.featured ? "rgba(255,255,255,0.85)" : "var(--muted)" }}>
                {agent.desc}
              </p>
              <ul className="mt-5 space-y-2">
                {agent.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm leading-relaxed"
                    style={{ color: agent.featured ? "rgba(255,255,255,0.9)" : "var(--muted)" }}>
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ background: agent.featured ? "rgba(255,255,255,0.7)" : "var(--purple)" }} />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs uppercase tracking-[0.08em]"
                style={{ color: agent.featured ? "rgba(255,255,255,0.6)" : "var(--muted)" }}>
                {agent.stack}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
