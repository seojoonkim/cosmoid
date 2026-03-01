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
    <section id="how" className="border-t border-white/8 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">어떻게 작동하나</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="rounded-md border border-white/12 bg-[#0b0b0b] p-6 md:p-7">
              <p className="mono text-4xl font-bold leading-none text-white md:text-5xl">{step.number}</p>
              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#888]">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
