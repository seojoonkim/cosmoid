"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "카카오톡 대화 내용이 저장되나요?",
    a: "아니요. 코스모이드는 명령을 처리하는 데 필요한 최소한의 정보만 일시적으로 사용하고, 처리가 완료되면 즉시 폐기해요. 대화 내용을 서버에 저장하거나 학습 데이터로 활용하지 않아요. 모든 통신은 TLS 암호화로 보호되며, 제3자에게 절대 공유하지 않아요."
  },
  {
    q: "어떤 서비스들을 지원하나요?",
    a: "현재 쿠팡·11번가(쇼핑), 배달의민족·쿠팡이츠(배달), 카카오T·티맵(이동), KB·신한·하나·우리·카카오뱅크 오픈뱅킹(금융), 구글 캘린더·카카오캘린더(일정), 네이버·구글(검색/날씨/환율)을 지원해요. 매달 새로운 서비스가 추가되고 있으며, 원하는 서비스가 있으면 요청해주시면 우선 검토해드려요."
  },
  {
    q: "베타 기간은 언제까지인가요?",
    a: "2026년 하반기까지 베타를 운영할 예정이에요. 베타 기간 동안 가입하신 분들은 Pro 플랜을 완전 무료로 이용할 수 있어요. 정식 출시 후에도 베타 가입자에게는 특별 할인 혜택을 드릴 예정이에요. 자리가 한정돼 있으니 서두르시는 걸 추천해요."
  },
  {
    q: "결제 정보는 안전한가요?",
    a: "코스모이드는 카드 번호나 계좌 정보를 직접 저장하지 않아요. 모든 결제는 카카오페이, 네이버페이, 토스페이 등 공인된 PG사를 통해서만 이루어져요. 코스모이드는 '주문 요청'을 전달하는 역할만 하며, 실제 결제 승인은 사용자가 직접 확인하는 구조예요."
  },
  {
    q: "AI가 실수로 잘못된 주문을 하면 어떻게 되나요?",
    a: "모든 주문·예약·결제는 실행 전에 반드시 확인 메시지를 먼저 보내드려요. '굽네치킨 18,000원 — 주문할까요?'처럼 구체적인 내용을 보여드리고, '확인' 또는 '취소'로 응답하신 후에만 실제로 처리해요. 자동으로 멋대로 결제되는 일은 없어요."
  },
  {
    q: "카카오톡이 아닌 다른 메신저도 지원하나요?",
    a: "현재는 카카오톡이 메인이에요. 텔레그램은 베타 테스트 중이며, 라인·왓츠앱·디스코드·슬랙은 2026년 하반기 순차 지원 예정이에요. 원하시는 메신저를 알려주시면 지원 우선순위에 반영할게요."
  },
  {
    q: "설치나 별도 앱 다운로드가 필요한가요?",
    a: "전혀 필요 없어요. 카카오톡에서 '코스모이드'를 친구 추가하는 것만으로 바로 시작할 수 있어요. 회원가입 폼도, 앱 다운로드도, 복잡한 설정도 없어요. 처음 대화를 시작하면 30초 안에 첫 번째 기능을 써볼 수 있어요."
  },
  {
    q: "금융 계좌 연결이 무서운데 꼭 해야 하나요?",
    a: "금융 기능은 완전히 선택 사항이에요. 쇼핑·배달·일정 기능만으로도 충분히 유용하게 쓸 수 있어요. 금융 연결 시에는 금융결제원 표준 오픈뱅킹 API를 통해 '잔액 조회·거래 내역 확인' 권한만 부여해요. 이체나 결제 권한은 절대 요청하지 않아요."
  },
  {
    q: "월 사용량 한도를 초과하면 어떻게 되나요?",
    a: "한도에 가까워지면 미리 알림을 드려요. 초과 시 서비스가 갑자기 차단되지 않고, 기본 기능은 계속 사용할 수 있어요. 추가 사용량을 구매하거나 다음 달 갱신을 기다리면 돼요. 갑자기 막혀서 당황하는 일은 없도록 설계했어요."
  },
  {
    q: "가족이나 팀과 함께 쓸 수 있나요?",
    a: "Scale 플랜은 최대 20개 에이전트를 지원해요. 가족 구성원별로 각자의 에이전트를 만들거나, 소규모 팀이 공유 에이전트를 함께 운영할 수 있어요. 관리자 페이지에서 사용 현황과 권한을 한 눈에 볼 수 있어요."
  },
  {
    q: "해지하면 데이터는 어떻게 되나요?",
    a: "해지 신청 즉시 설정, 이용 기록, 연결된 계정 정보를 모두 삭제해요. 법적 보관 의무가 있는 결제 기록 일부를 제외한 모든 데이터는 30일 이내 완전 파기돼요. 삭제 완료 확인서도 요청하시면 발급해드려요."
  },
  {
    q: "사용 중 문제가 생기면 어디에 도움을 요청하나요?",
    a: "카카오톡 채팅창에 '도움말' 또는 '문제 신고'라고 보내시면 즉시 가이드를 안내해드려요. 이메일(support@cosmoid.ai)로도 문의하실 수 있어요. 베타 기간에는 모든 문의에 24시간 이내 답변을 드리고 있어요."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-bg-7 border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
                    className="section-label"
        >
          자주 묻는 질문
        </motion.p>
        <motion.h2
                    className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight section-title"
        >
          FAQ
        </motion.h2>

        <div className="mt-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article key={faq.q} className="border-b border-[var(--border)]">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left py-5"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[17px] transition-colors duration-200"
                    style={{ color: isOpen ? "#1a1a2e" : "var(--text)" }}>
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="text-xl font-light shrink-0"
                    style={{ color: isOpen ? "var(--purple)" : "var(--muted)", lineHeight: 1 }}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="pb-5 text-[15px] leading-relaxed text-[var(--muted)]">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
