import Image from "next/image";

const features = [
  { icon: "/icons/cart.svg", title: "쇼핑 자동화", desc: "최저가 탐색 후 바로 주문" },
  { icon: "/icons/food.svg", title: "배달 주문", desc: "메뉴 추천부터 결제까지" },
  { icon: "/icons/money.svg", title: "금융 요약", desc: "지출 분석과 계좌 조회" },
  { icon: "/icons/calendar.svg", title: "일정 관리", desc: "캘린더 등록과 리마인드" },
  { icon: "/icons/car.svg", title: "이동 지원", desc: "교통 조회와 호출" },
  { icon: "/icons/search.svg", title: "실시간 검색", desc: "뉴스, 정보, 트렌드 탐색" },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="section-label">무엇을 해줄 수 있나</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 md:p-8">
              <Image src={feature.icon} alt={feature.title} width={28} height={28} className="h-7 w-7" />
              <h3 className="mt-5 text-lg font-semibold md:text-xl">{feature.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)] md:text-base">{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
