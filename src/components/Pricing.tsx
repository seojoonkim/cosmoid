"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    monthlyPrice: "₩0",
    annualPrice: "₩0",
    features: ["기본 에이전트 1개", "월 50만 토큰", "핵심 스킬 5개"],
    cta: "무료 시작",
  },
  {
    name: "Pro",
    monthlyPrice: "₩19,900",
    annualPrice: "₩15,900",
    features: ["에이전트 3개", "월 500만 토큰", "고급 스킬 + 우선 처리"],
    cta: "Pro 시작하기",
  },
  {
    name: "Scale",
    monthlyPrice: "₩49,900",
    annualPrice: "₩39,900",
    features: ["에이전트 8개", "월 2,000만 토큰", "팀 기능 + 관리자 제어"],
    cta: "팀으로 시작",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="section-bg-8 border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.p className="section-label reveal">
          요금제
        </motion.p>
        <motion.h2 className="mt-4 section-h2 section-title reveal reveal-delay-1">
          필요한 만큼 선택하세요
        </motion.h2>

        <div className="flex items-center gap-3 mt-6 mb-2 reveal reveal-delay-2">
          <span className="text-sm text-[var(--muted)]">월간</span>
          <button
            onClick={() => setAnnual((a) => !a)}
            className="relative w-11 h-6 rounded-full transition-colors"
            style={{ background: annual ? "var(--purple)" : "var(--border)" }}
            type="button"
            aria-label="연간 결제 토글"
          >
            <span
              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-all"
              style={{ left: annual ? "24px" : "4px" }}
            />
          </button>
          <span className="text-sm text-[var(--muted)]">
            연간 <span className="text-xs font-bold text-green-600 ml-1">20% 할인</span>
          </span>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3 md:items-start">
          {plans.map((plan, idx) => {
            const isPro = plan.name === "Pro";
            return (
              <article
                key={plan.name}
                className={`rounded-2xl p-6 md:p-8 flex flex-col reveal ${idx === 1 ? "reveal-delay-1" : idx === 2 ? "reveal-delay-2" : ""}`}
                style={
                  isPro
                    ? {
                        position: "relative",
                        background: "white",
                        border: "2px solid var(--purple)",
                        color: "var(--text)",
                        transform: "scale(1.03)",
                        boxShadow: "0 8px 40px rgba(109,40,217,0.18)",
                      }
                    : { background: "white", border: "1px solid var(--border)", color: "var(--text)" }
                }
              >
                {isPro ? (
                  <div
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--purple)",
                      color: "white",
                      padding: "4px 16px",
                      borderRadius: "100px",
                      fontSize: "12px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    가장 인기
                  </div>
                ) : null}
                <div className="flex items-center justify-between mb-5">
                  <h3 className="card-title">{plan.name}</h3>
                </div>
                <p className="text-3xl md:text-4xl font-black mb-1" style={{ color: "#d97706", fontWeight: 800 }}>
                  {annual ? plan.annualPrice : plan.monthlyPrice}
                  <span className="text-base font-normal ml-1" style={{ opacity: 0.7 }}>/월</span>
                </p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-base">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: "var(--purple)" }} />
                      <span style={{ opacity: isPro ? 0.9 : 0.7 }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="mt-8 w-full rounded-full px-4 py-3 text-base font-bold transition-opacity hover:opacity-90"
                  style={
                    isPro
                      ? { background: "var(--purple)", color: "white", border: "none" }
                      : { background: "var(--purple-soft)", color: "var(--purple)", border: "1px solid var(--border)" }
                  }
                >
                  {plan.cta}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
