export default function WhyCosmoid() {
  return (
    <section id="why" className="border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">왜 Cosmoid인가</p>
        <h2 className="mt-4 max-w-2xl text-2xl font-extrabold leading-tight md:text-4xl">AI 비서, 지금까지 왜 못 썼을까?</h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="minimal-card rounded-lg p-4 md:p-8">
            <p className="mono text-xs uppercase tracking-[0.08em] text-[var(--muted)] md:text-sm">기존 방식</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--muted)] md:text-base">
              <li>설치 과정이 길고 진입 장벽이 높음</li>
              <li>메신저 연동이 까다롭고 중간에 이탈</li>
              <li>비개발자에게는 설정 자체가 부담</li>
            </ul>
          </div>
          <div className="minimal-card rounded-lg p-4 md:p-8">
            <p className="mono text-xs uppercase tracking-[0.08em] text-[var(--muted)] md:text-sm">Cosmoid</p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--text)] md:text-base">
              <li>로그인 후 바로 카카오톡에서 사용 시작</li>
              <li>주문, 검색, 일정, 금융을 대화로 처리</li>
              <li>명령어 없이 누구나 3분 내 온보딩</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
