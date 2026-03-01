"use client";
import { motion } from "framer-motion";

const rows = [
  { label: "시작 시간", cosmoid: "1분", saas: "30분~2시간", self: "수일~수주" },
  { label: "설치/설정", cosmoid: "없음 (카톡만)", saas: "앱 설치 + 가입", self: "서버, CLI, 코드 설정" },
  { label: "기술 지식", cosmoid: "불필요", saas: "최소", self: "개발자 수준 필수" },
  { label: "한국 서비스 연동", cosmoid: "기본 탑재", saas: "없거나 제한적", self: "직접 구현 필요" },
  { label: "카카오톡 지원", cosmoid: "✓", saas: "✗", self: "✗" },
  { label: "유지보수", cosmoid: "자동", saas: "업체 의존", self: "직접 관리" },
  { label: "비용", cosmoid: "₩0~₩49,900/월", saas: "$20~$100+/월", self: "서버비 + 인건비" },
  { label: "개인화 수준", cosmoid: "높음", saas: "제한적", self: "무제한 (단, 전문가 필요)" },
  { label: "데이터 보안", cosmoid: "대화 내용 미저장", saas: "정책마다 다름", self: "직접 책임" },
];

export default function Comparison() {
  return (
    <section className="section-bg-5 border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="section-label"
        >비교</motion.p>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight section-title">
          왜 Cosmoid인가요?
        </h2>
        <p className="mt-4 text-base text-[var(--muted)] max-w-2xl">
          OpenClaw를 직접 설치하거나, 해외 SaaS를 쓰는 것과 무엇이 다른지 비교해보세요.
          Cosmoid는 <strong>누구나 1분 안에</strong> AI 에이전트를 최적의 환경으로 운영할 수 있도록 설계됐어요.
        </p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-[var(--border)] shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border)]"
                style={{background:"linear-gradient(90deg,#f5f0ff,#faf9ff)"}}>
                <th className="py-4 px-5 text-left text-xs font-bold uppercase tracking-widest text-[var(--muted)]">항목</th>
                <th className="py-4 px-5 text-center">
                  <span className="inline-block rounded-full bg-[var(--purple)] px-3 py-1 text-xs font-bold text-white">Cosmoid ✦</span>
                </th>
                <th className="py-4 px-5 text-center text-xs font-semibold text-[var(--muted)]">해외 AI SaaS</th>
                <th className="py-4 px-5 text-center text-xs font-semibold text-[var(--muted)]">OpenClaw 직접 설치</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label}
                  className="border-b border-[var(--border)] last:border-0 transition-colors hover:bg-[var(--bg-alt)]"
                  style={{background: i % 2 === 0 ? "white" : "#faf9ff"}}>
                  <td className="py-4 px-5 font-semibold text-[var(--text)]">{row.label}</td>
                  <td className="py-4 px-5 text-center font-semibold" style={{color:"var(--purple)"}}>{row.cosmoid}</td>
                  <td className="py-4 px-5 text-center text-[var(--muted)]">{row.saas}</td>
                  <td className="py-4 px-5 text-center text-[var(--muted)]">{row.self}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm text-[var(--muted)]">
          코딩 없이, 설치 없이 — 지금 바로 나만의 AI 에이전트를 시작하세요.
        </p>
      </div>
    </section>
  );
}
