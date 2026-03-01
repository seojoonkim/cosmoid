const features = [
  { icon:"🛒", title:"쇼핑 자동화", desc:"쿠팡, 네이버쇼핑 상품 검색부터 주문까지 한 번에" },
  { icon:"🍕", title:"배달 주문", desc:"배민, 쿠팡이츠에서 '치킨 시켜줘' 한 마디로" },
  { icon:"🚕", title:"교통", desc:"카카오T 택시 요금 조회 및 호출" },
  { icon:"💰", title:"금융 관리", desc:"오픈뱅킹으로 계좌 조회, 월별 지출 분석" },
  { icon:"📅", title:"일정 관리", desc:"캘린더 연동, 미팅 예약, 리마인더 설정" },
  { icon:"🔍", title:"정보 검색", desc:"네이버 검색, 뉴스, 날씨 실시간" },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-[#0f0f1a]" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">원하는 모든 걸 대신 해줘요</h2>
          <p className="text-slate-400 text-lg">한국 생활에 딱 맞춘 스킬들</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-2xl p-6 card-hover">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-bold mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
