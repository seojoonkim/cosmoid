"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const H1_CASES = [
  ["나만의 AI 에이전트", "바로 만들어드려요"],
  ["배민·쿠팡·금융계좌", "모두 연결해드려요"],
  ["코딩 없이", "5분이면 시작돼요"],
];

function TypingH1() {
  const [caseIdx, setCaseIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCaseIdx(c => (c + 1) % H1_CASES.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="mt-6 font-black leading-[1.22] tracking-tight text-[var(--text)]"
      style={{fontSize:"clamp(1.9rem, 4.8vw, 3.5rem)", fontWeight:900, wordBreak:"keep-all"}}>
      <span style={{display:"block", color:"var(--purple)", whiteSpace:"nowrap"}}>카톡 한 마디에</span>
      <div style={{
        overflow:"hidden",
        minHeight:"2.4em",
        maskImage:"linear-gradient(to bottom, transparent 0%, black 18%, black 75%, transparent 100%)",
        WebkitMaskImage:"linear-gradient(to bottom, transparent 0%, black 18%, black 75%, transparent 100%)",
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={caseIdx}
            initial={{ y: "15%", opacity: 0, filter: "blur(6px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-15%", opacity: 0, filter: "blur(6px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{display:"block", color:"var(--text)", whiteSpace:"nowrap"}}>{H1_CASES[caseIdx][0]}</span>
            <span style={{display:"block", color:"var(--text)", whiteSpace:"nowrap"}}>{H1_CASES[caseIdx][1]}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </h1>
  );
}

const messages = [
  { id: 1, from: "user", text: "치킨 시켜줘, 배달의민족으로 🍗" },
  { id: 2, from: "ai", text: "근처 굽네치킨이 평점 4.8이에요. 18,000원, 27분이면 도착 — 바로 주문할까요?" },
  { id: 3, from: "user", text: "응, 결제도 해줘" },
  { id: 4, from: "ai", text: "✓ 카카오페이 결제 완료! 도착까지 27분이에요 🍗", card: { emoji: "🍗", title: "굽네치킨 볼케이노", tag: "배달의민족", rows: ["₩18,000 · 카카오페이", "27분 후 도착 예정"] } },
  { id: 5, from: "user", text: "내일 오전 10시 강남 미팅 캘린더에 넣어줘" },
  { id: 6, from: "ai", text: "✓ 캘린더에 넣었어요. 9:30 출발 알림도 설정해뒀어요.", card: { emoji: "📅", title: "강남 미팅", tag: "캘린더", rows: ["내일 오전 10:00", "⏰ 9:30 출발 알림"] } },
  { id: 7, from: "user", text: "ㅇㅇ 카카오T도 잡아줘. 현대카드로" },
  { id: 8, from: "ai", text: "✓ 카카오T 예약 완료! 현대카드로 결제돼요.", card: { emoji: "🚕", title: "카카오T 예약", tag: "카카오T", rows: ["9:22 픽업", "현대카드 결제"] } },
  { id: 9, from: "user", text: "쿠팡에서 에어팟 최저가 찾아줘" },
  { id: 10, from: "ai", text: "에어팟 프로 2 — 289,000원, 오늘 최저가예요. 바로 주문할까요?", card: { emoji: "🎧", title: "AirPods Pro 2세대", tag: "쿠팡 로켓배송", rows: ["₩229,000 · 오늘 최저가", "내일 도착"] } },
];

export default function Hero() {
  const [visible, setVisible] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [typingId, setTypingId] = useState<number | null>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [typingText, visible]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }

    if (visible === 0) {
      // 첫 메시지 딜레이 후 시작
      const t = setTimeout(() => setVisible(1), 600);
      return () => clearTimeout(t);
    }

    const newMsg = messages[visible - 1];
    if (!newMsg) return;

    setTypingId(newMsg.id);
    setTypingText("");
    let i = 0;
    const full = newMsg.text;
    const speed = 34;

    const tid = setInterval(() => {
      i++;
      setTypingText(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(tid);
        // 타이핑 완료 후 다음 메시지 or 리셋
        const pause = visible < messages.length ? 525 : 2500;
        const next = setTimeout(() => {
          if (visible < messages.length) {
            setVisible(v => v + 1);
          } else {
            setVisible(0);
            setTypingText("");
            setTypingId(null);
          }
        }, pause);
        return () => clearTimeout(next);
      }
    }, speed);

    return () => clearInterval(tid);
  }, [visible]);

  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-14 md:pb-28"
      style={{
        background: "#ffffff",
      }}>

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:items-center">

          {/* 왼쪽 텍스트 */}
          <div className="md:col-span-6">
            <span className="inline-block rounded-xl border border-[var(--purple-mid)] bg-white/70 px-4 py-1.5 text-xs font-bold tracking-[0.08em] text-[var(--text)]">
              Private Beta
            </span>
            <TypingH1 />
            <p className="mt-6 max-w-lg text-lg text-[var(--muted)] leading-relaxed" style={{ fontSize: "18px" }}>
              OpenClaw 같은 AI 에이전트, 이제 누구나 가질 수 있어요. 카카오·배민·쿠팡·네이버 등 한국 서비스에 바로 연결 — 설치도 코딩도 필요 없어요.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#cta"
                className="rounded-xl px-8 py-4 text-base font-bold hover:opacity-90 transition-opacity shadow-lg"
                style={{background:"#EA580C",boxShadow:"0 8px 24px rgba(194,65,12,0.28)",color:"white"}}>
                카톡으로 30초 신청
              </a>
              <a href="#how"
                className="rounded-xl border-2 px-8 py-4 text-base font-bold hover:bg-white/70 transition-colors" style={{borderColor:"var(--purple-mid)",color:"var(--text)"}}>
                작동 방식 보기
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                { icon: "⚡", text: "1분 설정 완료" },
                { icon: "👤", text: "누구나 바로 시작" },
                { icon: "🔒", text: "대화 내용 미저장" },
              ].map((b) => (
                <span key={b.text} className="flex items-center gap-1.5 rounded-xl border border-[var(--purple-mid)] bg-white/75 px-3.5 py-1.5 text-sm font-medium text-[var(--muted)] backdrop-blur-sm">
                  <span>{b.icon}</span>{b.text}
                </span>
              ))}
            </div>
          </div>

          {/* 오른쪽 — 채팅창만 */}
          <div className="md:col-span-6 md:pl-16 flex justify-end">
            <div className="relative mx-auto" style={{ width: "360px", maxWidth: "360px", minWidth: "360px" }}>
              <div
                style={{
                  background: "#1a1a1a",
                  borderRadius: "48px",
                  padding: "5px 10px 12px",
                  boxShadow:
                    "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                <div
                  style={{
                    width: "90px",
                    height: "22px",
                    background: "#000",
                    borderRadius: "11px",
                    margin: "0 auto 6px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ width: "8px", height: "8px", background: "#222", borderRadius: "50%" }} />
                </div>
                <div
                  className="rounded-3xl overflow-hidden"
                  style={{ background: "#f2f2f7", boxShadow: "0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.12)", minHeight:"500px", maxHeight:"560px" }}
                >
                  <div className="flex items-center justify-between px-5 py-3.5" style={{ background: "#ffffff", borderBottom: "1px solid #e9e0ff" }}>
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-full overflow-hidden">
                        <img src="/images/cosmoid-logo-v2.png" alt="커스모이드" className="h-full w-full object-cover" />
                      </div>
                      <p className="text-sm font-bold" style={{ color: "#1c1033" }}>커스모이드</p>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "#34c759" }}>
                      <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: "#34c759" }} />online
                    </span>
                  </div>
                  <div
                    ref={chatRef}
                    className="chat-scroll px-4 pt-4 pb-6 space-y-3 h-[460px] md:h-[540px] overflow-y-scroll"
                    style={{ background: "#f2f2f7" }}
                  >
                    <AnimatePresence>
                      {messages.slice(0, visible).map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className={`flex items-end gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                        >
                          {msg.from === "ai" && (
                            <div className="h-8 w-8 rounded-full overflow-hidden shrink-0 mb-0.5">
                              <img src="/images/cosmoid-logo-v2.png" alt="커스모이드" className="h-full w-full object-cover" />
                            </div>
                          )}
                          <div
                            className="max-w-[72%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed"
                            style={
                              msg.from === "user"
                                ? { background: "#EA580C", color: "#ffffff", borderRadius: "20px 20px 4px 20px" }
                                : { background: "#ffffff", color: "#1c1033", borderRadius: "20px 20px 20px 4px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }
                            }
                          >
                            {msg.id === typingId ? typingText : msg.text}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    {visible > 0 && visible < messages.length && messages[visible - 1].from === "user" && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                        <div className="px-4 py-3 flex gap-1" style={{ background: "#ffffff", borderRadius: "20px 20px 20px 4px", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
                          {[0, 1, 2].map((i) => (
                            <span key={i} className="h-1.5 w-1.5 rounded-full animate-bounce" style={{ background: "#FB923C", animationDelay: `${i * 0.15}s` }} />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
              <div style={{ width: "130px", height: "4px", background: "rgba(15,13,21,0.2)", borderRadius: "2px", margin: "10px auto 0" }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
