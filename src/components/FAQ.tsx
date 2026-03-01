"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { q: "카카오톡 대화 내용이 저장되나요?", a: "아니요, 코스모이드는 명령 처리 후 대화 내용을 서버에 저장하지 않아요. 개인정보 보호를 최우선으로 설계했어요." },
  { q: "어떤 서비스들을 지원하나요?", a: "쿠팡, 배민, 카카오T, 네이버 검색, 주요 시중 은행 오픈뱅킹을 지원해요. 지원 서비스는 계속 확장 중이에요." },
  { q: "베타 기간은 언제까지인가요?", a: "2026년 중반까지 베타 운영 예정이에요. 베타 기간 중에는 Pro 플랜도 무료로 이용하실 수 있어요." },
  { q: "결제 정보는 안전한가요?", a: "코스모이드는 카드 정보를 직접 저장하지 않아요. 모든 결제는 공식 앱/사이트를 통해 이루어져요." },
  { q: "카카오톡이 아닌 다른 앱도 되나요?", a: "현재는 카카오톡이 메인이에요. 텔레그램, 라인 등 다른 메신저도 순차적으로 지원할 예정이에요." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-label"
        >
          자주 묻는 질문
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          FAQ
        </motion.h2>

        <div className="mt-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article key={faq.q} className="border-b border-[var(--border)] py-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold" style={{color: isOpen ? "#f59e0b" : "var(--text)"}}>{faq.q}</span>
                  <span className="text-lg font-bold" style={{color: isOpen ? "#f59e0b" : "var(--muted)"}}>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{faq.a}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
