"use client";
import { motion } from "framer-motion";

const examples = [
  { emoji: "🍗", title: "주문·결제", desc: "\"치킨 시켜줘\" 한마디에 메뉴 찾고, 결제까지 알아서" },
  { emoji: "📅", title: "일정 관리", desc: "\"내일 오전 강남 미팅 넣어줘\" — 캘린더 등록 + 출발 알림까지" },
  { emoji: "🔍", title: "정보 검색", desc: "\"에어팟 최저가 찾아줘\" — 여러 쇼핑몰 비교 후 바로 결과" },
  { emoji: "🚕", title: "예약·호출", desc: "\"카카오T 잡아줘\" — 픽업 시간, 카드 결제까지 한번에" },
];

export default function WhatIsAgent() {
  return (
    <section className="section-bg-6 border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">

          {/* 왼쪽 — 설명 */}
          <div>
            <motion.p
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="section-label"
            >AI 에이전트란?</motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight section-title"
            >
              말 한마디면<br/>알아서 다 해주는 AI
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-base leading-relaxed" style={{ color: "#4b5563" }}
            >
              <strong style={{ color: "var(--text)" }}>AI 에이전트</strong>는 단순히 질문에 답하는 챗봇이 아니에요.
              앱을 직접 열고, 검색하고, 주문하고, 결제까지 — <strong style={{ color: "var(--text)" }}>실제 행동</strong>을 대신 해주는 디지털 비서예요.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 text-base leading-relaxed" style={{ color: "#4b5563" }}
            >
              Cosmoid는 이 AI 에이전트를 <strong style={{ color: "var(--text)" }}>누구나 1분이면</strong> 내 것으로 만들 수 있게 해줘요.
              코딩도, 새 앱 설치도 전혀 필요 없어요. 카카오톡에서 바로 시작해요.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white"
              style={{ background: "linear-gradient(90deg, #7c3aed, #6d28d9)" }}
            >
              <span>챗봇</span>
              <span style={{ opacity: 0.5 }}>→</span>
              <span style={{ color: "#fbbf24" }}>AI 에이전트</span>
              <span style={{ opacity: 0.5 }}>→</span>
              <span>Cosmoid</span>
            </motion.div>
          </div>

          {/* 오른쪽 — 예시 카드 4개 */}
          <div className="grid grid-cols-2 gap-3">
            {examples.map((ex, i) => (
              <motion.div
                key={ex.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="card p-4 flex flex-col gap-2"
              >
                <span className="text-2xl">{ex.emoji}</span>
                <p className="font-bold text-sm" style={{ color: "var(--text)" }}>{ex.title}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{ex.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
