const steps = [
  {
    number: "01",
    title: "연결",
    description: "카카오톡을 연결하고 기본 설정을 완료합니다.",
  },
  {
    number: "02",
    title: "요청",
    description: "원하는 작업을 평소 대화하듯 메시지로 보냅니다.",
  },
  {
    number: "03",
    title: "실행",
    description: "Cosmoid가 검색, 결제, 예약까지 처리하고 결과를 회신합니다.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="section-label">어떻게 작동하나</p>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">Notion처럼 명확한 3단계</h2>
        <div className="mt-10 space-y-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="card p-6 md:p-8 grid gap-4 md:grid-cols-2 md:items-center"
            >
              <div>
                <p className="text-base font-semibold text-[var(--purple)]">{step.number}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight">{step.title}</h3>
                <p className="mt-3 text-lg text-[var(--muted)]">{step.description}</p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-alt)] p-5 md:p-6">
                <p className="text-base text-[var(--muted)]">
                  {step.number} 단계에서 필요한 정보만 보여줘 빠르게 다음 행동으로 이어집니다.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
