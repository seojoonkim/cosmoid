export default function SocialProof() {
  const messengers = ["💬 카카오톡","✈️ 텔레그램","💚 왓츠앱","🎮 디스코드","💼 슬랙"];
  return (
    <section className="py-16 border-y border-white/8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-400 mb-8 text-base">이미 <span className="text-white font-bold text-lg">1,247명</span>이 기다리고 있어요</p>
        <div className="flex flex-wrap justify-center gap-8">
          {messengers.map((m) => (
            <span key={m} className="text-slate-400 text-base font-medium">{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
