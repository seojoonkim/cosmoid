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

        {/* 헤더 — 다른 섹션과 동일 구조 */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="section-label reveal"
          >AI 에이전트란?</motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 section-h2 section-title reveal reveal-delay-1"
          >
            말 한마디면<br/>알아서 다 해주는 AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 section-desc mx-auto reveal reveal-delay-2"
          >
            그냥 대답만 하는 챗봇이 아니에요. 앱을 열고, 검색하고, 주문하고, 결제까지 — <strong style={{ color: "var(--text)" }}>실제로 행동하는 AI 비서</strong>예요.
            Cosmoid가 있으면 <strong style={{ color: "var(--text)" }}>누구나 1분 만에</strong> 이 AI 비서를 가질 수 있어요. 코딩도, 앱 설치도 필요 없어요.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 inline-flex items-center gap-3 rounded-full px-6 py-3 text-base font-bold text-white"
            style={{ background: "linear-gradient(90deg, #7c3aed, #6d28d9)", boxShadow: "0 4px 20px rgba(124,58,237,0.4)" }}
          >
            <span style={{opacity:0.65, fontWeight:500}}>챗봇</span>
            <span style={{ opacity: 0.4 }}>→</span>
            <span style={{ color: "#fbbf24", fontWeight:700 }}>AI 에이전트</span>
            <span style={{ opacity: 0.4 }}>→</span>
            <span style={{ color: "#ffffff", fontWeight:900, fontSize:"1.15rem", letterSpacing:"-0.01em" }}>내 손안의 Cosmoid ✦</span>
          </motion.div>
        </div>

        {/* 카드 4개 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {examples.map((ex, i) => (
            <motion.div
              key={ex.title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="card p-5 flex flex-col gap-3 reveal"
            >
              <span className="text-3xl">{ex.emoji}</span>
              <p className="card-title">{ex.title}</p>
              <p className="card-desc">{ex.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
