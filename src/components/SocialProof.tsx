"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SocialProof() {
  return (
    <section className="bg-white border-y border-[var(--border)] py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <motion.p
            className="section-label reveal"
          >
            소셜 프루프
          </motion.p>
          <motion.h2
            className="mt-3 text-3xl md:text-4xl font-black tracking-tight whitespace-nowrap section-title reveal reveal-delay-1"
          >
            1,247명 얼리어답터 대기 중
          </motion.h2>
          <div className="flex items-center gap-3 mt-4 mb-2 reveal reveal-delay-2">
            <div className="flex -space-x-2">
              {["#7c3aed", "#6d28d9", "#8b5cf6", "#4c1d95", "#a78bfa"].map((c, i) => (
                <div
                  key={i}
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: c,
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "11px",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {["김", "이", "박", "최", "정"][i]}
                </div>
              ))}
            </div>
            <p className="text-sm text-[var(--muted)]">
              <span className="font-bold text-[var(--text)]">1,247명</span>이 베타 대기 중
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2.5 reveal reveal-delay-3">
          {[
            { name: "KakaoTalk", src: "/logos/kakaotalk.svg" },
            { name: "Telegram", src: "/logos/telegram.svg" },
            { name: "Line", src: "/logos/line.svg" },
            { name: "WhatsApp", src: "/logos/whatsapp.svg" },
            { name: "Discord", src: "/logos/discord.svg" },
            { name: "Slack", src: "/logos/slack.svg" },
          ].map((m) => (
            <div key={m.name} className="card flex items-center gap-2 rounded-xl px-3 py-2.5">
              <Image src={m.src} alt={m.name} width={28} height={28} className="h-7 w-7 object-contain shrink-0" />
              <span className="text-xs font-medium text-[var(--muted)] whitespace-nowrap">{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
