"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  { id: 1, from: "user", text: "치킨 시켜줘, 배달의민족으로 🍗" },
  { id: 2, from: "ai", text: "근처 굽네치킨이 평점 4.8점이에요. 27분 도착, 18,000원 — 바로 주문할까요?" },
  { id: 3, from: "user", text: "응, 결제도 해줘" },
  { id: 4, from: "ai", text: "✓ 카카오페이로 결제 완료! 27분 후 도착 예정이에요. 문 열어두세요 🍗" },
  { id: 5, from: "user", text: "내일 강남에서 오전 10시 미팅 잡아줘" },
  { id: 6, from: "ai", text: "캘린더에 '강남 미팅' 등록했어요. 9시 30분에 리마인드 드릴게요. 카카오맵으로 길 안내도 해드릴까요? 📅" },
  { id: 7, from: "user", text: "이번 달 카드 지출 얼마야?" },
  { id: 8, from: "ai", text: "3월 지출 총 847,200원이에요. 식비 42%, 쇼핑 28%, 교통 15% 순이에요 💳" },
];

export default function Hero() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible < messages.length) {
      const t = setTimeout(() => setVisible(v => v + 1), 900);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setVisible(0), 2000);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <section className="relative overflow-hidden py-20 md:py-28"
      style={{background: "linear-gradient(135deg, #0f0824 0%, #1a0a3e 40%, #2d1065 70%, #1e0550 100%)"}}>
      
      {/* 별 파티클 */}
      {[...Array(24)].map((_, i) => (
        <div key={i} className="absolute rounded-full bg-white pointer-events-none"
          style={{
            width: `${[1,1,2,1,1,2,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1][i]}px`,
            height: `${[1,1,2,1,1,2,1,1,1,2,1,1,1,2,1,1,2,1,1,1,2,1,1,1][i]}px`,
            top: `${[5,15,25,8,40,55,12,70,30,85,18,60,45,90,22,75,38,92,10,50,65,80,35,95][i]}%`,
            left: `${[10,25,50,75,15,90,40,60,80,30,95,5,45,20,70,85,35,55,65,10,40,75,90,20][i]}%`,
            opacity: [0.3,0.5,0.7,0.4,0.6,0.3,0.5,0.4,0.6,0.3,0.7,0.5,0.4,0.6,0.3,0.5,0.7,0.4,0.6,0.3,0.5,0.4,0.6,0.3][i],
          }}
        />
      ))}

      {/* 보라 글로우 blob */}
      <div className="absolute top-[-80px] left-[-60px] h-72 w-72 rounded-full pointer-events-none"
        style={{background:"radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)"}} />
      <div className="absolute bottom-[-40px] right-[-40px] h-64 w-64 rounded-full pointer-events-none"
        style={{background:"radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)"}} />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">

          {/* 왼쪽 텍스트 */}
          <div className="md:col-span-5">
            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
              Private Beta
            </span>
            <h1 className="mt-6 font-black leading-[1.12] tracking-tight text-white"
              style={{fontSize:"clamp(2.4rem, 5vw, 4rem)", wordBreak:"keep-all"}}>
              말 한마디로<br/>
              <span style={{background:"linear-gradient(135deg,#a78bfa,#22d3ee)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                모든 걸 처리하는
              </span><br/>
              AI 에이전트
            </h1>
            <p className="mt-6 max-w-lg text-base text-white/70 leading-relaxed">
              카카오톡에서 대화 하나로 쇼핑 주문, 배달, 일정 관리, 금융 조회까지. 설치도, 학습도 필요 없어요.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#beta"
                className="rounded-full px-8 py-4 text-base font-bold text-white hover:opacity-90 transition-opacity shadow-lg"
                style={{background:"linear-gradient(135deg,#7c3aed,#8b5cf6)",boxShadow:"0 8px 24px rgba(124,58,237,0.4)"}}>
                무료 베타 신청 →
              </a>
              <a href="#how"
                className="rounded-full border-2 border-white/60 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors">
                사용법 보기
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <img src="https://flagcdn.com/w40/kr.png" alt="한국" className="h-4 w-6 rounded-sm object-cover" />
                <span>한국 서비스 특화</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div className="flex items-center gap-1">
                <span className="font-bold text-[#f59e0b]">1,247명</span>
                <span>대기 중</span>
              </div>
              <div className="w-px h-4 bg-white/20" />
              <div>3분 설정</div>
            </div>
          </div>

          {/* 오른쪽 — 채팅창만 */}
          <div className="md:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
              style={{background:"rgba(255,255,255,0.05)",backdropFilter:"blur(20px)",boxShadow:"0 32px 80px rgba(0,0,0,0.4)"}}>
              {/* 헤더 */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10"
                style={{background:"rgba(255,255,255,0.06)"}}>
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-full flex items-center justify-center"
                    style={{background:"linear-gradient(135deg,#7c3aed,#06b6d4)"}}>
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                  <p className="text-sm font-semibold text-white">커스모이드</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />online
                </span>
              </div>
              {/* 메시지 */}
              <div className="px-5 py-5 space-y-3.5 h-[340px] md:h-[400px] overflow-y-auto">
                <AnimatePresence>
                  {messages.slice(0, visible).map((msg) => (
                    <motion.div key={msg.id}
                      initial={{ opacity: 0, y: 12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                        msg.from === "user"
                          ? "rounded-br-sm text-white"
                          : "rounded-bl-sm text-white/85 border border-white/10"
                      }`}
                        style={msg.from === "user"
                          ? {background:"linear-gradient(135deg,#7c3aed,#8b5cf6)"}
                          : {background:"rgba(255,255,255,0.08)"}
                        }
                      >
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {/* 타이핑 인디케이터 */}
                {visible > 0 && visible < messages.length && messages[visible - 1].from === "user" && (
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex justify-start">
                    <div className="rounded-2xl rounded-bl-sm px-4 py-3 border border-white/10 flex gap-1"
                      style={{background:"rgba(255,255,255,0.08)"}}>
                      {[0,1,2].map(i => (
                        <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/50 animate-bounce"
                          style={{animationDelay:`${i*0.15}s`}} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
