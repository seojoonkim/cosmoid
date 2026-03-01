const steps = [
  { n:"01", title:"소셜 로그인", desc:"카카오, 구글, 네이버로 30초 안에 가입. 지갑도 자동으로 생성돼요." },
  { n:"02", title:"에이전트 설정", desc:"이름과 성격을 정하고, 연결할 메신저와 원하는 스킬을 선택하세요." },
  { n:"03", title:"바로 사용", desc:"QR 코드 스캔 한 번으로 카카오톡에서 AI 비서와 대화를 시작해요." },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6" id="how">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">3분이면 충분해요</h2>
          <p className="text-slate-400 text-lg">복잡한 설정 없이, 지금 바로 시작할 수 있어요.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="glass rounded-2xl p-8 card-hover">
              <div className="gradient-text text-5xl font-black mb-4">{s.n}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
