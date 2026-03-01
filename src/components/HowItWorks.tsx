const steps = [
  { n:"01", title:"소셜 로그인", desc:"카카오, 구글, 네이버로 30초 안에 가입. 지갑도 자동으로 생성돼요.", icon:"🔑" },
  { n:"02", title:"에이전트 설정", desc:"이름과 성격을 정하고, 연결할 메신저와 원하는 스킬을 선택하세요.", icon:"⚙️" },
  { n:"03", title:"바로 사용", desc:"QR 코드 스캔 한 번으로 카카오톡에서 AI 비서와 대화를 시작해요.", icon:"💬" },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-32 px-5" id="how">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-6xl font-black mb-4">3분이면 충분해요</h2>
          <p className="text-base md:text-xl text-slate-400">복잡한 설정 없이, 지금 바로 시작할 수 있어요.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="glass rounded-3xl p-6 md:p-10 card-hover">
              <div className="text-3xl mb-4">{s.icon}</div>
              <div className="gradient-text text-5xl font-black mb-3 leading-none">{s.n}</div>
              <h3 className="text-base font-bold mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
