"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "카카오톡 연결",
    description: "카카오 계정으로 30초 만에 가입하세요. QR 코드 스캔 한 번으로 카카오톡에 Cosmoid가 바로 추가돼요.",
    image: "/images/2026-03-01-step1-v3.png",
  },
  {
    number: "02",
    title: "그냥 쓰면 돼요",
    description: "\"치킨 시켜줘\", \"내일 미팅 잡아줘\" — 평소처럼 메시지만 보내시면 돼요. 앱 없이, 검색 없이.",
    image: "/images/2026-03-01-step2-v3.png",
  },
  {
    number: "03",
    title: "AI가 다 처리해요",
    description: "주문, 예약, 검색, 일정 등록까지 — 결과를 카카오톡으로 바로 알려드려요. 확인만 하시면 완료예요.",
    image: "/images/2026-03-01-step3-v3.png",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-[var(--bg-alt)] border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
                    className="section-label"
        >
          어떻게 사용하나요
        </motion.p>
        <motion.h2
                    className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight section-title"
        >
          딱 3단계예요
        </motion.h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="card overflow-hidden flex flex-col">
              {/* 이미지 */}
              <div className="h-48 md:h-56 overflow-hidden bg-[var(--bg-alt)]">
                <img
                  src={step.image}
                  alt={step.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center scale-[1.15]"
                />
              </div>
              {/* 텍스트 */}
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-sm font-black" style={{color:"#f59e0b"}}>{step.number}</span>
                  <h3 className="text-lg font-extrabold tracking-tight text-[var(--text)]">{step.title}</h3>
                </div>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
