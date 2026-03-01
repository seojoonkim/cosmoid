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
          style={{ color: "rgba(255,255,255,0.85)" }}
        >
          지금 시작해보세요
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl section-title" style={{color:"white"}}
        >
          베타 대기열에 등록하고
          <br className="hidden md:block" />
          가장 먼저 써보세요
        </motion.h2>
        <form className="mt-10 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="이메일 주소 입력"
            className="h-12 flex-1 rounded-full border border-white/30 bg-white/20 px-5 text-base text-white outline-none placeholder:text-white/70 focus:border-white focus:bg-white/30 transition-all md:text-lg" style={{caretColor:"white"}}
          />
          <button
            type="submit"
            className="h-12 rounded-full px-6 text-base font-semibold text-white transition-opacity hover:opacity-90 md:text-lg" style={{background:"#f59e0b",border:"none"}}
          >
            베타 신청
          </button>
        </form>
      </div>
    </section>
  );
}
