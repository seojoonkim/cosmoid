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
    <section id="pricing" className="border-t border-white/8 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">요금제</p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-xl border p-6 ${
                plan.featured ? "border-white bg-white text-black" : "border-white/10 bg-white/[0.03] text-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                {plan.featured && <span className="badge border-black/20 text-black">recommended</span>}
              </div>
              <p className="mt-5 text-4xl font-extrabold">
                {plan.price}
                <span className={`ml-1 text-sm ${plan.featured ? "text-black/70" : "text-[#888]"}`}>{plan.term}</span>
              </p>
              <ul className={`mt-6 space-y-2 text-sm ${plan.featured ? "text-black/80" : "text-[#888]"}`}>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-full px-4 py-2.5 text-sm font-semibold ${
                  plan.featured
                    ? "bg-black text-white"
                    : "bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
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
