export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--bg)] px-5 py-20 md:px-8 md:py-28">
      {/* 배경 블러 blob — 더 크고 화사하게 */}
      <div className="absolute top-[-120px] left-[-100px] h-[500px] w-[500px] rounded-full bg-[var(--purple-mid)] opacity-40 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] h-[400px] w-[400px] rounded-full bg-[var(--purple-soft)] opacity-50 blur-[80px] pointer-events-none" />
      <div className="absolute top-[40%] left-[40%] h-[200px] w-[200px] rounded-full bg-[#c4b5fd] opacity-20 blur-[60px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">

          {/* 왼쪽 텍스트 */}
          <div className="md:col-span-6">
            <span className="badge">Private Beta</span>
            <h1 className="mt-6 text-[2.8rem] md:text-[4.2rem] font-black leading-[1.05] tracking-tight">
              말 한마디로<br />
              <span style={{background:"linear-gradient(135deg,#7c3aed,#06b6d4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                모든 걸 처리하는
              </span><br />
              AI 개인 비서
            </h1>
            <p className="mt-6 max-w-lg text-lg text-[var(--muted)] leading-relaxed">
              카카오톡에서 대화 하나로 쇼핑 주문, 배달, 일정 관리, 금융 조회까지. 설치도, 학습도 필요 없어요.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#beta"
                className="rounded-full px-8 py-4 text-base font-bold text-white shadow-lg hover:opacity-90 transition-opacity"
                style={{background:"linear-gradient(135deg,#7c3aed,#8b5cf6)"}}>
                무료 베타 신청 →
              </a>
              <a href="#how" className="rounded-full border border-[var(--border)] px-8 py-4 text-base font-semibold text-[var(--text)] hover:bg-white transition-colors">
                사용법 보기
              </a>
            </div>
            {/* 신뢰 지표 */}
            <div className="mt-10 flex items-center gap-6 text-sm text-[var(--muted)]">
              <div className="flex items-center gap-2">
                <span className="text-xl">🇰🇷</span>
                <span>한국 서비스 특화</span>
              </div>
              <div className="w-px h-4 bg-[var(--border)]" />
              <div className="flex items-center gap-2">
                <span className="font-bold text-[var(--text)]">1,247명</span>
                <span>대기 중</span>
              </div>
              <div className="w-px h-4 bg-[var(--border)]" />
              <div>3분 설정</div>
            </div>
          </div>

          {/* 오른쪽 비주얼 */}
          <div className="md:col-span-6">
            <div className="relative">
              {/* 프리미엄 이미지 */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)]"
                style={{boxShadow:"0 32px 80px rgba(124,58,237,0.18), 0 8px 24px rgba(0,0,0,0.08)"}}>
                <img src="/images/2026-03-01-hero-premium.png" alt="Cosmoid 미리보기"
                  className="w-full object-cover h-64 md:h-80" />
              </div>

              {/* 채팅 카드 — 이미지 아래 겹치게 */}
              <div className="mt-4 rounded-2xl border border-[var(--border)] bg-white shadow-lg overflow-hidden"
                style={{boxShadow:"0 8px 32px rgba(124,58,237,0.10)"}}>
                <div className="flex items-center justify-between px-5 py-3 bg-[var(--purple-soft)] border-b border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full flex items-center justify-center"
                      style={{background:"linear-gradient(135deg,#7c3aed,#06b6d4)"}}>
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <p className="text-sm font-semibold text-[var(--text)]">Cosmoid 비서</p>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />online
                  </span>
                </div>
                <div className="space-y-3 px-4 py-4 text-sm">
                  <div className="flex justify-end">
                    <div className="max-w-[78%] rounded-2xl rounded-br-sm px-4 py-2.5 text-white text-sm"
                      style={{background:"linear-gradient(135deg,#7c3aed,#8b5cf6)"}}>
                      치킨 시켜줘, 배달의민족으로
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[78%] rounded-2xl rounded-bl-sm border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-sm text-[var(--text)]">
                      근처 인기 치킨집 3곳 찾았어요. 굽네치킨 27분 도착, 18,000원. 주문할까요?
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="max-w-[78%] rounded-2xl rounded-br-sm px-4 py-2.5 text-white text-sm"
                      style={{background:"linear-gradient(135deg,#7c3aed,#8b5cf6)"}}>
                      응
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[78%] rounded-2xl rounded-bl-sm border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-sm text-[var(--text)]">
                      ✓ 주문 완료! 27분 후 도착 예정이에요 🍗
                    </div>
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
