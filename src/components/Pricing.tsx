const plans = [
  {
    name: "Starter",
    price: "₩0",
    term: "/월",
    features: ["기본 에이전트 1개", "월 50만 토큰", "핵심 스킬 5개"],
    cta: "무료 시작",
  },
  {
    name: "Pro",
    price: "₩19,900",
    term: "/월",
    features: ["에이전트 5개", "월 500만 토큰", "고급 스킬 + 우선 처리"],
    cta: "추천 플랜 시작",
    featured: true,
  },
  {
    name: "Scale",
    price: "₩49,900",
    term: "/월",
    features: ["에이전트 20개", "월 2,000만 토큰", "팀 기능 + 관리자 제어"],
    cta: "팀으로 시작",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">요금제</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-lg border p-4 md:p-8 ${
                plan.featured
                  ? "border-[var(--purple)] bg-[var(--purple)] text-white"
                  : "border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold md:text-xl">{plan.name}</h3>
                {plan.featured && <span className="badge border-white/40 text-white">recommended</span>}
              </div>
              <p className="mt-5 text-3xl font-extrabold md:text-4xl">
                {plan.price}
                <span className={`ml-1 text-xs md:text-sm ${plan.featured ? "text-white/80" : "text-[var(--muted)]"}`}>
                  {plan.term}
                </span>
              </p>
              <ul className={`mt-6 space-y-2 text-sm md:text-base ${plan.featured ? "text-white/90" : "text-[var(--muted)]"}`}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-md border px-4 py-2.5 text-sm font-semibold ${
                  plan.featured
                    ? "border-white/70 bg-white text-[var(--purple)]"
                    : "border-[var(--border)] bg-[var(--purple-bg)] text-[var(--purple)]"
                }`}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
