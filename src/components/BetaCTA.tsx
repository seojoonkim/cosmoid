export default function BetaCTA() {
  return (
    <section id="beta" className="border-t border-[var(--border)] bg-[var(--purple)] py-16 md:py-20 text-white">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">지금 시작하기</p>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
          베타 대기열에 등록하고
          <br className="hidden md:block" />
          가장 먼저 써보세요
        </h2>
        <form className="mt-10 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@company.com"
            className="h-12 flex-1 rounded-full border border-white/30 bg-white/20 px-5 text-base text-white outline-none placeholder:text-white/70 focus:border-white md:text-lg"
          />
          <button
            type="submit"
            className="h-12 rounded-full border border-white/60 bg-white px-6 text-base font-semibold text-[var(--purple)] transition-opacity hover:opacity-90 md:text-lg"
          >
            베타 신청
          </button>
        </form>
      </div>
    </section>
  );
}
