"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "kakaotalk", src: "/logos/kakaotalk.svg" },
  { name: "telegram", src: "/logos/telegram.svg" },
  { name: "whatsapp", src: "/logos/whatsapp.svg" },
  { name: "discord", src: "/logos/discord.svg" },
  { name: "slack", src: "/logos/slack.svg" },
  { name: "line", src: "/logos/line.svg" },
];

export default function SocialProof() {
  return (
    <section className="bg-white border-y border-[var(--border)] py-10">
      <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="section-label"
          >
            소셜 프루프
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-3 text-3xl md:text-4xl font-black tracking-tight"
          >
            1,247명이 대기 중
          </motion.h2>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-2.5 text-base text-[var(--muted)]">
              <Image src={logo.src} alt={logo.name} width={22} height={22} className="h-5 w-5 object-contain" />
              <span className="capitalize">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
