import Image from "next/image";

const logos = [
  { name: "kakaotalk", src: "/logos/kakaotalk.svg" },
  { name: "telegram", src: "/logos/telegram.svg" },
  { name: "whatsapp", src: "/logos/whatsapp.svg" },
  { name: "discord", src: "/logos/discord.svg" },
  { name: "slack", src: "/logos/slack.svg" },
  { name: "google", src: "/logos/google.svg" },
];

export default function SocialProof() {
  return (
    <section className="border-y border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">사회적 신뢰</p>
        <p className="mt-4 text-2xl font-extrabold leading-tight md:text-4xl">1,247명이 대기 중</p>
        <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-5">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="minimal-card flex h-12 w-12 items-center justify-center rounded-md p-2 md:h-14 md:w-14"
            >
              <Image src={logo.src} alt={logo.name} width={24} height={24} className="h-6 w-6 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
