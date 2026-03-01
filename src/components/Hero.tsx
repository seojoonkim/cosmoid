export default function Hero() {
  return (
    <section className="bg-[#080808] px-6 pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <div className="max-w-3xl md:col-span-7">
            <span className="badge bg-transparent text-white">BETA · 2026년 3월</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-7xl md:leading-[1.02]">
              카카오톡으로 대화하면,
              <br />
              <span className="text-[#7c3aed]">AI가 다 해줘요.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#888] md:text-base">
              설치 없이 바로 시작하는 메신저 기반 AI 비서. 쇼핑 주문부터 일정 관리, 금융 조회까지 대화 한 번으로
              처리합니다.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#beta"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                베타 바로 신청
              </a>
              <a href="#how" className="text-sm text-[#888] transition-colors hover:text-white">
                작동 방식 보기
              </a>
            </div>
          </div>

          <div className="minimal-card mt-12 rounded-lg p-5 md:col-span-5 md:mt-16 md:mr-2 md:p-7">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <p className="mono text-xs uppercase tracking-[0.08em] text-[#888]">Kakaotalk Simulation</p>
              <p className="mono text-xs text-[#888]">Cosmoid Assistant</p>
            </div>
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex justify-end">
                <div className="max-w-[82%] rounded-lg rounded-tr-md bg-[#141414] px-4 py-3 text-white">
                  쿠팡에서 충전기 제일 싼 거 사줘
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[82%] rounded-lg rounded-tl-md border border-white/15 bg-[#111111] px-4 py-3 text-white">
                  찾았어요. 삼성 정품 7,900원입니다. 주문할까요?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[82%] rounded-lg rounded-tr-md bg-[#141414] px-4 py-3 text-white">응, 결제해줘</div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[82%] rounded-lg rounded-tl-md border border-white/15 bg-[#111111] px-4 py-3 text-white">
                  주문 완료. 내일 도착 예정입니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
