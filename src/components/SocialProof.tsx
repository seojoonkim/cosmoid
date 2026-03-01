export default function SocialProof() {
  const messengers = ["💬 카카오톡","✈️ 텔레그램","💚 왓츠앱","🎮 디스코드","💼 슬랙"];
  return (
    <section className="py-12 border-y border-white/8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-400 mb-6 text-sm">이미 <span className="text-white font-bold">1,247명</span>이 베타 대기 중</p>
        <div className="flex flex-wrap justify-center gap-6">
          {messengers.map((m) => (
            <span key={m} className="text-slate-400 text-sm font-medium">{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
