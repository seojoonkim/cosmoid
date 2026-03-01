export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] px-5 py-18 md:px-8 md:py-24">
      <div className="absolute top-[-80px] left-[-60px] h-[400px] w-[400px] rounded-full bg-[var(--purple-mid)] opacity-30 blur-[80px]" />
      <div className="absolute top-[100px] right-[-80px] h-[300px] w-[300px] rounded-full bg-[var(--purple-soft)] opacity-40 blur-[60px]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <span className="badge">Private Beta</span>
            <h1 className="mt-6 text-[2.8rem] md:text-[4rem] font-extrabold leading-[1.1] tracking-tight">
              메신저 위에서
              <br />
              가장 부드럽게 작동하는
              <br />
              AI 개인 비서
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">
              Calm의 감성과 Notion의 명확함을 담아, 주문과 검색부터 일정과 금융 확인까지 카카오톡 대화 하나로
              끝냅니다.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <a
                href="#beta"
                className="bg-[var(--purple)] text-white rounded-full px-7 py-3.5 text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                베타 신청하기
              </a>
              <a
                href="#how"
                className="rounded-full border border-[var(--border)] px-7 py-3.5 text-lg font-semibold text-[var(--text)] hover:bg-white transition-colors"
              >
                데모 보기
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="card overflow-hidden p-4 shadow-sm md:p-5">
              <img src="/images/2026-03-01-hero-chat.png" alt="Cosmoid 데모" className="mb-4 w-full rounded-xl object-cover" />
              <div className="mb-4 flex items-center justify-between rounded-xl bg-[var(--purple-soft)] px-4 py-3">
                <p className="text-base font-semibold text-[var(--text)]">Cosmoid 비서</p>
                <span className="flex items-center gap-2 text-sm text-[var(--muted)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  online
                </span>
              </div>
              <div className="space-y-3 text-base md:text-lg">
                <div className="flex justify-end">
                  <div className="max-w-[82%] rounded-2xl rounded-br-md bg-[var(--purple)] px-4 py-3 text-white">
                    내일 오전 10시에 팀 미팅 잡아줘
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[82%] rounded-2xl rounded-bl-md bg-white border border-[var(--border)] px-4 py-3">
                    팀 캘린더를 확인했어요. 오전 10시, 30분 회의로 초대 보낼게요.
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[82%] rounded-2xl rounded-br-md bg-[var(--purple)] px-4 py-3 text-white">
                    끝나고 점심 메뉴도 추천해줘
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="max-w-[82%] rounded-2xl rounded-bl-md bg-white border border-[var(--border)] px-4 py-3">
                    근처 한식/샐러드/쌀국수 인기 매장을 정리해뒀어요. 바로 주문도 가능해요.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
