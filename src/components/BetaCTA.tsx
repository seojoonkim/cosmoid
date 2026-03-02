"use client";

import { motion } from "framer-motion";

export default function BetaCTA() {
  return (
    <section id="cta" className="border-t border-[var(--border)] bg-[var(--purple)] py-16 md:py-20 text-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-label"
          style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff", letterSpacing: "0.01em", textTransform: "none" }}
        >
          지금 시작해보세요
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl"
          style={{ color: "white" }}
        >
          지금 등록하고<br />
          가장 먼저 써보세요
        </motion.h2>

        {/* 카카오톡 버튼 */}
        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-base font-bold transition-opacity hover:opacity-90"
            style={{ background: "#FEE500", color: "#000000" }}
          >
            <span style={{ fontSize: "1.1rem" }}>💬</span>
            카카오톡으로 신청
          </a>
        </div>

        <p className="mt-6 text-sm text-white/60">또는 이메일로 대기 신청</p>
        <form className="mt-3 flex flex-col gap-3 sm:flex-row max-w-lg">
          <input
            type="email"
            placeholder="이메일 주소 입력"
            className="h-12 flex-1 rounded-xl px-5 text-base outline-none transition-all"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "1.5px solid rgba(255,255,255,0.5)",
              color: "white",
              caretColor: "white",
            }}
          />
          <button
            type="submit"
            className="h-12 rounded-xl px-6 text-base font-semibold transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ background: "#ffffff", color: "var(--purple)", border: "none" }}
          >
            베타 신청
          </button>
        </form>
      </div>
    </section>
  );
}
