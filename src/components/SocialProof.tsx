"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SocialProof() {
  return (
    <section className="bg-white border-y border-[var(--border)] py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="section-label"
          >
            소셜 프루프
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-3 text-3xl md:text-4xl font-black tracking-tight"
          >
            1,247명 얼리어답터 대기 중
          </motion.h2>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] px-5 py-3">
            <Image src="/logos/kakaotalk.svg" alt="kakaotalk" width={42} height={42} className="h-10 w-10 object-contain" />
            <span className="text-lg font-bold text-[var(--text)]">KakaoTalk</span>
          </div>
          <p className="text-sm text-[var(--muted)]">텔레그램, 라인 등 6개 메신저 지원 예정</p>
        </div>
      </div>
    </section>
  );
}
