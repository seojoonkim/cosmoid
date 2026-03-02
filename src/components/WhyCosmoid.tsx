"use client";

import { motion } from "framer-motion";

export default function WhyCosmoid() {
  return (
    <section id="why" className="section-bg-2 border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
          className="section-label reveal"
        >
          왜 Clawroid인가요
        </motion.p>
        <motion.h2
          className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl section-title reveal reveal-delay-1"
        >
          OpenClaw 같은 AI 에이전트를<br />나만의 것으로, 한국 서비스에 바로
        </motion.h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* 기존 방식 */}
          <div className="card overflow-hidden flex flex-col reveal reveal-delay-2">
            <div className="p-6 md:p-8">
              <p className="text-xl font-black text-[var(--text)] mb-1">기존 방식</p><p className="text-sm text-[var(--muted)] mb-5">지금까지 AI 에이전트를 못 쓴 이유</p>
              <ul className="mt-5 space-y-3 text-base leading-relaxed text-[var(--muted)]">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                  별도 앱 설치와 긴 온보딩 과정
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                  도구마다 인터페이스가 달라 학습 필요
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                  실행 단계에서 맥락이 끊겨 사용 중단
                </li>
              </ul>
            </div>
            <div className="mt-auto bg-[var(--bg-alt)] border-t border-[var(--border)]">
              <img src="/images/2026-03-01-why-old.png" alt="기존 방식" className="w-full object-cover h-44 md:h-52" />
            </div>
          </div>

          {/* Clawroid */}
          <div className="card overflow-hidden flex flex-col reveal reveal-delay-3">
            <div className="p-6 md:p-8">
              <p className="text-xl font-black text-[var(--purple)] mb-1">Clawroid</p><p className="text-sm text-[var(--muted)] mb-5">대화 하나로 실행까지</p>
              <ul className="mt-5 space-y-3 text-base leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--purple)] shrink-0" />
                  익숙한 메신저에서 바로 시작
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--purple)] shrink-0" />
                  주문, 검색, 일정, 금융을 한 문맥에서 처리
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--purple)] shrink-0" />
                  짧은 대화만으로 실행까지 완료
                </li>
              </ul>
            </div>
            <div className="mt-auto bg-[var(--purple-soft)] border-t border-[var(--border)]">
              <img src="/images/2026-03-01-why-new.png" alt="Clawroid 방식" className="w-full object-cover h-44 md:h-52" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
