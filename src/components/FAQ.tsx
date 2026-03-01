"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { q: "카카오톡 대화 내용이 저장되나요?", a: "아니요, 코스모이드는 명령 처리 후 대화 내용을 서버에 저장하지 않아요. 개인정보 보호를 최우선으로 설계했으며, 모든 통신은 암호화돼요." },
  { q: "어떤 서비스들을 지원하나요?", a: "쿠팡, 배민, 쿠팡이츠, 카카오T, 네이버 검색, 주요 시중 은행 오픈뱅킹, 구글 캘린더를 지원해요. 지원 서비스는 매달 확장 중이에요." },
  { q: "베타 기간은 언제까지인가요?", a: "2026년 중반까지 베타 운영 예정이에요. 베타 기간 중에는 Pro 플랜도 완전 무료로 이용하실 수 있어요." },
  { q: "결제 정보는 안전한가요?", a: "코스모이드는 카드 정보를 직접 저장하지 않아요. 모든 결제는 카카오페이, 네이버페이 등 공식 결제 수단을 통해 이루어지며, 코스모이드는 중간에 개입하지 않아요." },
  { q: "카카오톡이 아닌 다른 앱도 되나요?", a: "현재는 카카오톡이 메인이에요. 텔레그램, 라인, 왓츠앱, 디스코드, 슬랙도 순차적으로 지원할 예정이에요." },
  { q: "AI가 실수로 잘못된 주문을 하면 어떻게 되나요?", a: "모든 주문은 실행 전 확인 메시지를 보내드려요. '확인' 또는 '취소'로 응답하신 후에만 실제로 처리돼요. 실수 걱정 없이 편하게 쓰세요." },
  { q: "월 사용량 한도를 초과하면 어떻게 되나요?", a: "한도 초과 시 서비스가 중단되는 게 아니라, 다음 달로 이월되거나 추가 구매할 수 있어요. 갑자기 막히는 일은 없어요." },
  { q: "가족이나 다른 사람도 함께 쓸 수 있나요?", a: "Scale 플랜에서는 팀 기능을 통해 가족 또는 소규모 팀이 함께 에이전트를 공유할 수 있어요." },
  { q: "설치나 별도 앱 다운로드가 필요한가요?", a: "전혀 필요 없어요. 카카오톡 친구 추가 한 번으로 바로 시작할 수 있어요. 새 앱 설치, 회원가입 없이 30초면 돼요." },
  { q: "해지하면 데이터는 어떻게 되나요?", a: "해지 시 저장된 설정 및 이용 기록을 완전히 삭제해드려요. 언제든 요청하시면 즉시 처리해드립니다." },
  { q: "사용법을 잘 모르겠어요. 도움받을 수 있나요?", a: "카카오톡 채팅창에 '도움말'이라고 보내시면 사용 가이드를 즉시 안내해드려요. 이메일 고객센터도 운영 중이에요." },
  { q: "금융 계좌 연결이 무서운데 꼭 해야 하나요?", a: "금융 기능은 선택 사항이에요. 쇼핑, 배달, 일정 기능만 써도 충분히 유용해요. 금융 연결 시에는 조회 전용 권한만 사용해요." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white border-t border-[var(--border)] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="section-label"
        >
          자주 묻는 질문
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          FAQ
        </motion.h2>

        <div className="mt-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article key={faq.q} className="border-b border-[var(--border)] py-4">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold" style={{color: isOpen ? "#f59e0b" : "var(--text)"}}>{faq.q}</span>
                  <span className="text-lg font-bold" style={{color: isOpen ? "#f59e0b" : "var(--muted)"}}>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen ? <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{faq.a}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
