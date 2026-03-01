"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₩0",
    term: "/월",
    features: ["기본 에이전트 1개", "월 50만 토큰", "핵심 스킬 5개"],
    cta: "무료 시작",
    featured: false,
  },
  {
    name: "Pro",
    price: "₩19,900",
    term: "/월",
    features: ["에이전트 5개", "월 500만 토큰", "고급 스킬 + 우선 처리"],
    cta: "Pro 시작하기",
    featured: true,
  },
  {
    name: "Scale",
    price: "₩49,900",
    term: "/월",
    features: ["에이전트 20개", "월 2,000만 토큰", "팀 기능 + 관리자 제어"],
    cta: "팀으로 시작",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--bg-alt)] border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-label"
        >
          요금제
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          필요한 만큼 선택하세요
        </motion.h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3 md:items-start">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-2xl p-6 md:p-8 flex flex-col"
style={{ background: "white", border: "1px solid var(--border)", color: "var(--text)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold">{plan.name}</h3>

              </div>
              <p className="text-3xl md:text-4xl font-black mb-1">
                {plan.price}
                <span className="text-base font-normal ml-1" style={{ opacity: 0.7 }}>{plan.term}</span>
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-base">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                style={{ background: "var(--purple)" }} />
                    <span style={{ opacity: plan.featured ? 0.9 : 0.7 }}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="mt-8 w-full rounded-full px-4 py-3 text-base font-bold transition-opacity hover:opacity-90"
                style={plan.featured
                  ? { background: "white", color: "var(--purple)", border: "none" }
                  : { background: "var(--purple-soft)", color: "var(--purple)", border: "1px solid var(--border)" }
                }
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
