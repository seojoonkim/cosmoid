"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "카카오톡 연결",
    description: "카카오 계정으로 30초 만에 가입. QR 코드 스캔 한 번으로 카카오톡에 Cosmoid가 바로 추가돼요.",
    image: "/images/2026-03-01-step1-connect.png",
  },
  {
    number: "02",
    title: "그냥 말하면 돼요",
    description: "\"치킨 시켜줘\", \"내일 미팅 잡아줘\" — 평소 대화하듯 메시지 하나만 보내면 끝이에요. 앱 없이, 검색 없이.",
    image: "/images/2026-03-01-step2-request.png",
  },
  {
    number: "03",
    title: "AI가 다 처리해요",
    description: "주문, 예약, 검색, 일정 등록까지 — 결과를 카카오톡으로 바로 알려드려요. 확인만 하면 완료예요.",
    image: "/images/2026-03-01-step3-done.png",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-label"
        >
          어떻게 쓰나요
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          딱 3단계예요
        </motion.h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="card p-6 md:p-7 flex flex-col">
              <p className="text-sm font-bold text-[var(--purple)] mb-3">{step.number}</p>
              <h3 className="text-xl font-extrabold tracking-tight text-[var(--text)] mb-3">{step.title}</h3>
              <p className="text-base text-[var(--muted)] leading-relaxed mb-5">{step.description}</p>
              <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--bg-alt)] mt-auto">
                <img src={step.image} alt={step.title} className="w-full object-cover h-40" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
