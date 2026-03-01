"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "/icons/cart.svg",
    title: "쇼핑 자동화",
    bullets: ["쿠팡·네이버 최저가를 실시간으로 탐색해요", "리뷰 요약 후 최적 상품을 추천해드려요", "대화 한 번으로 바로 주문해드려요"],
  },
  {
    icon: "/icons/food.svg",
    title: "배달 주문",
    bullets: ["배민·쿠팡이츠 메뉴를 자동으로 추천해드려요", "과거 주문을 기반으로 취향을 학습해요", "결제까지 대화 흐름 안에서 완결해드려요"],
  },
  {
    icon: "/icons/money.svg",
    title: "금융 요약",
    bullets: ["오픈뱅킹으로 계좌 잔액을 조회해드려요", "월별 지출을 카테고리별로 분석해드려요", "이상 지출을 감지해서 알려드려요"],
  },
  {
    icon: "/icons/calendar.svg",
    title: "일정 관리",
    bullets: ["캘린더에 자동으로 등록하고 수정해드려요", "미팅 30분 전에 미리 알려드려요", "충돌 일정을 감지해서 대안을 제안해드려요"],
  },
  {
    icon: "/icons/car.svg",
    title: "이동·교통",
    bullets: ["카카오T 실시간 요금을 조회해드려요", "택시와 대중교통 경로를 비교해드려요", "도착 예정 시간을 카카오톡으로 공유해드려요"],
  },
  {
    icon: "/icons/search.svg",
    title: "실시간 검색",
    bullets: ["네이버·구글 최신 뉴스를 요약해드려요", "트렌드·날씨·환율을 즉시 조회해드려요", "검색 결과를 알기 쉽게 요약해드려요"],
  },
];

function FeaturePreview({ title }: { title: string }) {
  if (title === "쇼핑 자동화") {
    return (
      <div className="h-full bg-[var(--bg-alt)] p-4">
        <div className="text-[11px] text-[var(--muted)] mb-2">쿠팡 검색 결과</div>
        <div className="grid grid-cols-2 gap-2 h-[calc(100%-20px)]">
          <div className="rounded-xl bg-white shadow-sm p-2 flex flex-col">
  <div className="h-14 rounded-md bg-purple-50 flex items-center justify-center text-3xl">🔌</div>
            <p className="mt-2 text-xs font-semibold text-[var(--text)]">애플 충전기</p>
            <p className="mt-0.5 text-[11px] text-[var(--muted)]">★4.8</p>
            <div className="mt-auto flex items-center gap-1">
              <span className="text-xs font-bold text-[var(--text)]">₩7,900</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-600">최저가</span>
            </div>
          </div>
          <div className="rounded-xl bg-white shadow-sm p-2 flex flex-col">
  <div className="h-14 rounded-md bg-purple-50 flex items-center justify-center text-3xl">🎧</div>
            <p className="mt-2 text-xs font-semibold text-[var(--text)]">무선이어폰</p>
            <p className="mt-0.5 text-[11px] text-[var(--muted)]">★4.6</p>
            <p className="mt-auto text-xs font-bold text-[var(--text)]">₩32,000</p>
          </div>
        </div>
      </div>
    );
  }

  if (title === "배달 주문") {
    return (
      <div className="h-full bg-[var(--bg-alt)] p-4 flex flex-col">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-white shadow-sm p-2.5">
            <p className="text-lg leading-none">🍗</p>
            <p className="mt-1 text-xs font-semibold text-[var(--text)]">굽네치킨</p>
            <p className="text-[11px] text-[var(--muted)]">27분</p>
            <p className="mt-1 text-xs font-bold text-[var(--text)]">18,000원</p>
          </div>
          <div className="rounded-xl bg-white shadow-sm p-2.5">
            <p className="text-lg leading-none">🍕</p>
            <p className="mt-1 text-xs font-semibold text-[var(--text)]">도미노피자</p>
            <p className="text-[11px] text-[var(--muted)]">35분</p>
            <p className="mt-1 text-xs font-bold text-[var(--text)]">22,000원</p>
          </div>
        </div>
        <button className="mt-auto w-full rounded-lg bg-[var(--purple)] py-1.5 text-xs font-semibold text-white">주문하기</button>
      </div>
    );
  }

  if (title === "금융 요약") {
    return (
      <div className="h-full bg-[var(--bg-alt)] p-4 flex flex-col">
        <div className="rounded-xl bg-white shadow-sm p-3">
          <p className="text-[11px] text-[var(--muted)]">총 잔액</p>
          <p className="mt-1 text-xl font-extrabold text-[var(--text)]">1,234,567원</p>
        </div>
        <div className="mt-3 space-y-2">
          <div className="rounded-xl bg-white shadow-sm p-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[var(--text)]">식비</span>
              <span className="text-[var(--muted)]">42%</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[42%] bg-[var(--purple)]" />
            </div>
          </div>
          <div className="rounded-xl bg-white shadow-sm p-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[var(--text)]">쇼핑</span>
              <span className="text-[var(--muted)]">28%</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[28%] bg-amber-500" />
            </div>
          </div>
          <div className="rounded-xl bg-white shadow-sm p-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[var(--text)]">교통</span>
              <span className="text-[var(--muted)]">15%</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
              <div className="h-full w-[15%] bg-green-500" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (title === "일정 관리") {
    const days = Array.from({ length: 35 }, (_, i) => i + 1);
    return (
      <div className="h-full bg-[var(--bg-alt)] p-4 flex flex-col">
        <div className="text-xs font-semibold text-[var(--text)] mb-2">3월 2026</div>
        <div className="grid grid-cols-7 gap-1 text-[10px]">
          {days.map((day) => {
            const isToday = day === 10;
            const hasEvent = day === 6 || day === 12 || day === 19 || day === 26;
            return (
              <div key={day} className="rounded-md bg-white shadow-sm h-5 flex items-center justify-center relative">
                <span
                  className={`${
                    isToday ? "h-4 w-4 rounded-full bg-[var(--purple)] text-white flex items-center justify-center" : "text-[var(--muted)]"
                  }`}
                >
                  {day <= 31 ? day : ""}
                </span>
                {hasEvent && day <= 31 ? <span className="absolute bottom-0.5 h-1 w-1 rounded-full bg-[var(--purple)]" /> : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (title === "이동·교통") {
    return (
      <div className="h-full bg-[var(--bg-alt)] p-4 flex flex-col">
        <div className="rounded-xl bg-white shadow-sm p-2 text-[11px] text-[var(--muted)]">성수역 2번 출구 → 코엑스 동문</div>
        <div className="mt-2 rounded-xl bg-white shadow-sm p-2 h-20">
          <div className="h-full rounded-lg bg-gray-100 relative overflow-hidden">
            <svg viewBox="0 0 120 48" className="absolute inset-0 h-full w-full">
              <path d="M6 36 C 26 6, 56 8, 78 24 S 108 42, 114 14" fill="none" stroke="var(--purple)" strokeWidth="3" strokeLinecap="round" />
              <circle cx="8" cy="36" r="3" fill="var(--purple)" />
              <circle cx="114" cy="14" r="3" fill="var(--purple)" />
            </svg>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <p className="text-xs text-[var(--text)]">예상 요금 8,500원 · 17분</p>
          <button className="rounded-lg bg-yellow-300 px-2 py-1 text-[11px] font-semibold text-gray-800">카카오T</button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-[var(--bg-alt)] p-4">
      <div className="h-full flex flex-col gap-2">
        <div className="rounded-xl bg-white shadow-sm p-2 flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-blue-50 shrink-0 flex items-center justify-center text-base">🌤</div>
          <div className="min-w-0 flex-1">
            <p className="text-xs leading-tight text-[var(--text)] line-clamp-2">서울 날씨 오늘 15도 맑음</p>
            <p className="text-[11px] text-[var(--muted)]">방금 전</p>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-sm p-2 flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-green-50 shrink-0 flex items-center justify-center text-base">📈</div>
          <div className="min-w-0 flex-1">
            <p className="text-xs leading-tight text-[var(--text)] line-clamp-2">코스피 2,650 상승 마감</p>
            <p className="text-[11px] text-[var(--muted)]">3분 전</p>
          </div>
        </div>
        <div className="rounded-xl bg-white shadow-sm p-2 flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-amber-50 shrink-0 flex items-center justify-center text-base">📱</div>
          <div className="min-w-0 flex-1">
            <p className="text-xs leading-tight text-[var(--text)] line-clamp-2">삼성 신제품 발표</p>
            <p className="text-[11px] text-[var(--muted)]">10분 전</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="section-bg-7 border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
          className="section-label reveal"
        >
          어떤 일을 해드릴 수 있나요
        </motion.p>
        <motion.h2
          className="mt-4 section-h2 section-title reveal reveal-delay-1"
        >
          핵심 기능 6가지
        </motion.h2>
        <p className="mt-4 section-desc reveal reveal-delay-2">
          메신저 대화만으로 실사용 작업을 끝내도록, 자주 쓰는 일상 시나리오를 우선 자동화했어요.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <article
              key={feature.title}
              className={`card overflow-hidden flex flex-col reveal ${idx % 3 === 0 ? "" : idx % 3 === 1 ? "reveal-delay-1" : "reveal-delay-2"}`}
            >
              {/* 이미지 영역 */}
              <div className="border-b border-[var(--border)] h-44 md:h-48 overflow-hidden bg-white">
                <FeaturePreview title={feature.title} />
              </div>
              {/* 텍스트 영역 */}
              <div className="p-5 md:p-6 flex flex-col flex-1">
  <h3 className="text-xl font-extrabold text-[var(--text)] mb-4">{feature.title}</h3>
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
