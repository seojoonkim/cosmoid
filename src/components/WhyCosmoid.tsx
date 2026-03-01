export default function WhyCosmoid() {
  return (
    <section className="py-20 md:py-32 px-5 bg-[#0d0d18]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-purple-400 mb-5 font-medium">
            💡 왜 Cosmoid인가
          </div>
          <h2 className="text-3xl md:text-6xl font-black mb-4 leading-tight">
            AI 비서 시대가 왔는데,<br />
            <span className="gradient-text">왜 나는 못 쓰고 있을까?</span>
          </h2>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto">
            최고의 AI 인프라는 이미 존재해요. 문제는 설치가 너무 어렵다는 거예요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="glass rounded-3xl p-6 md:p-10">
            <div className="text-2xl mb-3">😓</div>
            <h3 className="text-xl font-black mb-4 text-slate-300">기존 AI 비서의 현실</h3>
            <ul className="space-y-3">
              {[
                "터미널에 명령어 입력? 뭔지 모르겠음",
                "Node.js 설치, npm 설정... 포기",
                "JSON 파일 수동 편집이 필요",
                "설치해도 카카오톡 연결 방법이 없음",
                "개발자 아니면 반나절 걸림",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-400 text-sm">
                  <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl p-6 md:p-10 relative overflow-hidden" style={{background:"linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.1))", border:"1px solid rgba(124,58,237,0.3)"}}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.15),transparent_70%)]" />
            <div className="relative z-10">
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="text-xl font-black mb-4 text-white">Cosmoid는 달라요</h3>
              <ul className="space-y-3">
                {[
                  "카카오/구글 소셜 로그인 30초면 끝",
                  "터미널? 코드? 전혀 필요 없어요",
                  "클릭 몇 번으로 스킬 ON/OFF",
                  "카카오톡 QR 스캔 → 즉시 사용 시작",
                  "비개발자도 3분이면 완성",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200 text-sm">
                    <span className="gradient-text mt-0.5 shrink-0 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center glass rounded-3xl p-6 md:p-10">
          <p className="text-xl md:text-3xl font-black text-white leading-relaxed mb-3">
            "AI 인프라는 누구에게나 열려 있어야 해요.<br />
            <span className="gradient-text">Cosmoid가 그 문을 열어드려요."</span>
          </p>
          <p className="text-slate-500 text-xs md:text-sm">— OpenClaw 기반으로 구축된 유일한 한국어 B2C AI 비서</p>
        </div>
      </div>
    </section>
  );
}
