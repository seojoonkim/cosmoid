import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cosmoid — 카카오톡 AI 에이전트",
  description: "카카오톡으로 대화하면 AI가 주문, 검색, 일정, 금융까지 대신 처리하는 AI 에이전트",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const obs = new IntersectionObserver((entries) => {
                entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); });
              }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
              document.addEventListener("DOMContentLoaded", () => {
                document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
