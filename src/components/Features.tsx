import Image from "next/image";

const features = [
  {
    icon: "/icons/cart.svg",
    title: "쇼핑 자동화",
    image: "/images/2026-03-01-feat-shopping.png",
    bullets: ["쿠팡·네이버 최저가 실시간 탐색", "리뷰 요약 후 최적 상품 추천", "대화 한 번으로 바로 주문 완료"],
  },
  {
    icon: "/icons/food.svg",
    title: "배달 주문",
    image: "/images/2026-03-01-feat-delivery.png",
    bullets: ["배민·쿠팡이츠 메뉴 자동 추천", "과거 주문 기반 취향 학습", "결제까지 대화 흐름 안에서 완결"],
  },
  {
    icon: "/icons/money.svg",
    title: "금융 요약",
    image: "/images/2026-03-01-feat-finance.png",
    bullets: ["오픈뱅킹 연동 계좌 잔액 조회", "월별 지출 카테고리 분석", "이상 지출 감지 및 알림"],
  },
  {
    icon: "/icons/calendar.svg",
    title: "일정 관리",
    image: "/images/2026-03-01-feat-calendar.png",
    bullets: ["캘린더 자동 등록 및 수정", "미팅 전 30분 사전 리마인드", "충돌 일정 감지 및 대안 제안"],
  },
  {
    icon: "/icons/car.svg",
    title: "이동 지원",
    image: "/images/2026-03-01-feat-taxi.png",
    bullets: ["카카오T 실시간 요금 조회", "택시·대중교통 경로 비교", "도착 예정 시간 카카오톡 공유"],
  },
  {
    icon: "/icons/search.svg",
    title: "실시간 검색",
    image: "/images/2026-03-01-feat-search.png",
    bullets: ["네이버·구글 최신 뉴스 요약", "트렌드·날씨·환율 즉시 조회", "검색 결과를 대화체로 정리"],
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[var(--bg-alt)] border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <p className="section-label">무엇을 해줄 수 있나</p>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">핵심 기능 6가지</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <article key={feature.title} className="card overflow-hidden flex flex-col">
              {/* 이미지 영역 */}
              <div className="bg-[var(--bg-alt)] border-b border-[var(--border)] h-40 overflow-hidden">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover object-top" />
              </div>
              {/* 텍스트 영역 */}
              <div className="p-5 md:p-6 flex flex-col flex-1">
                <p className="text-xs font-semibold text-[var(--purple)] mb-3">{String(idx + 1).padStart(2, "0")}</p>
                <div className="flex items-center gap-2.5 mb-4">
                  <Image src={feature.icon} alt={feature.title} width={22} height={22} className="h-5 w-5 shrink-0" />
                  <h3 className="text-base font-bold text-[var(--text)]">{feature.title}</h3>
                </div>
                <ul className="space-y-2 mt-auto">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-[var(--muted)] leading-relaxed">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--purple)] shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
