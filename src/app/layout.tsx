import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cosmoid — 나만의 AI 비서",
  description: "3분 만에 만드는 나만의 AI 비서. 카카오톡, 텔레그램에서 바로 사용.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
