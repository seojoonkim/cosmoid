const messengers = [
  { name: "카카오톡", logo: "/logos/kakaotalk.svg" },
  { name: "텔레그램", logo: "/logos/telegram.svg" },
  { name: "왓츠앱", logo: "/logos/whatsapp.svg" },
  { name: "디스코드", logo: "/logos/discord.svg" },
  { name: "슬랙", logo: "/logos/slack.svg" },
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-white/8">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <p className="text-slate-400 mb-6 text-sm">
          이미 <span className="text-white font-bold text-base">1,247명</span>이 기다리고 있어요
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {messengers.map((m) => (
            <span key={m.name} className="text-slate-400 text-sm font-medium inline-flex items-center gap-2">
              <img src={m.logo} alt={`${m.name} logo`} className="w-5 h-5" />
              {m.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
