export default function Hero() {
  return (
    <section className="bg-[var(--bg)] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="md:grid md:grid-cols-12 md:gap-8">
          <div className="max-w-3xl md:col-span-7">
            <span className="badge bg-transparent">BETA · 2026년 3월</span>
            <h1 className="mt-6 text-3xl font-extrabold leading-tight md:text-6xl md:leading-[1.02]">
              카카오톡으로 대화하면,
              <br className="hidden md:block" />
              <span className="text-[var(--purple)]">AI가 다 해줘요.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-base">
              설치 없이 바로 시작하는 메신저 기반 AI 비서. 쇼핑 주문부터 일정 관리, 금융 조회까지 대화 한 번으로
              처리합니다.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#beta"
                className="rounded-md bg-[var(--purple)] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:text-base"
              >
                베타 바로 신청
              </a>
              <a href="#how" className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--purple)] md:text-base">
                작동 방식 보기
              </a>
            </div>
          </div>

          <div className="mt-12 rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm md:col-span-5 md:mt-16 md:mr-2 md:p-8">
            <div className="mb-5 flex items-center justify-between border-b border-[var(--border)] pb-4">
              <p className="mono text-xs uppercase tracking-[0.08em] text-[var(--muted)] md:text-sm">Kakaotalk Simulation</p>
              <p className="mono text-xs text-[var(--muted)] md:text-sm">Cosmoid Assistant</p>
            </div>
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex justify-end">
                <div className="max-w-[82%] rounded-lg rounded-tr-md bg-[var(--purple)] px-4 py-3 text-white">
                  쿠팡에서 충전기 제일 싼 거 사줘
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[82%] rounded-lg rounded-tl-md border border-[var(--border)] bg-[var(--bg-alt)] px-4 py-3 text-[var(--text)]">
                  찾았어요. 삼성 정품 7,900원입니다. 주문할까요?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[82%] rounded-lg rounded-tr-md bg-[var(--purple)] px-4 py-3 text-white">응, 결제해줘</div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[82%] rounded-lg rounded-tl-md border border-[var(--border)] bg-[var(--bg-alt)] px-4 py-3 text-[var(--text)]">
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
