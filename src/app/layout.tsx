import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cosmoid — 나만의 AI 비서",
  description: "3분 만에 만드는 나만의 AI 비서. 카카오톡, 텔레그램에서 바로 사용.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com" async></script>
        <style dangerouslySetInnerHTML={{__html: `
          body { font-family: 'Noto Sans KR', sans-serif; background: #0a0a0f; color: #f8fafc; overflow-x: hidden; margin: 0; }
          .gradient-text { background: linear-gradient(135deg, #7c3aed, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
          .gradient-btn { background: linear-gradient(135deg, #7c3aed, #06b6d4); transition: opacity 0.2s; border: none; cursor: pointer; }
          .gradient-btn:hover { opacity: 0.85; }
          .glass { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(12px); }
          .card-hover { transition: transform 0.2s, box-shadow 0.2s; }
          .card-hover:hover { transform: translateY(-4px); box-shadow: 0 0 30px rgba(124,58,237,0.25); }
          .glow-purple { box-shadow: 0 0 40px rgba(124,58,237,0.3); }
        `}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
