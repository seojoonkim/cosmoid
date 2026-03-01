import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Cosmoid — 카카오톡 AI 에이전트",
  description: "카카오톡으로 대화하면 AI가 주문, 검색, 일정, 금융까지 대신 처리하는 AI 에이전트",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={nunito.variable}>{children}</body>
    </html>
  );
}
