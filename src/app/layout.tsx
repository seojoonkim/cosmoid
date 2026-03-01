import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cosmoid — 카카오톡 AI 비서",
  description: "카카오톡으로 대화하면 AI가 주문, 검색, 일정, 금융까지 대신 처리하는 개인 AI 비서",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
