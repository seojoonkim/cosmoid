export default function WhyCosmoid() {
  return (
    <section id="why" className="bg-[var(--bg-alt)] border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="section-label">왜 Cosmoid인가</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          대화형 AI를 일상에서
          <br />
          진짜 쓰게 만드는 방식
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="card p-6 md:p-8">
            <p className="badge">기존 방식</p>
            <ul className="mt-6 space-y-3 text-[var(--muted)]">
              <li>별도 앱 설치와 긴 온보딩 과정</li>
              <li>도구마다 인터페이스가 달라 학습 필요</li>
              <li>실행 단계에서 맥락이 끊겨 사용 중단</li>
            </ul>
          </div>
          <div className="card p-6 md:p-8">
            <p className="badge">Cosmoid</p>
            <ul className="mt-6 space-y-3">
              <li>익숙한 메신저에서 바로 시작</li>
              <li>주문, 검색, 일정, 금융을 한 문맥에서 처리</li>
              <li>짧은 대화만으로 실행까지 완료</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
