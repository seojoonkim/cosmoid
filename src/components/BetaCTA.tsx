export default function BetaCTA() {
  return (
    <section id="beta" className="border-t border-[var(--border)] bg-[var(--bg-alt)] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <p className="section-label">지금 시작하기</p>
        <h2 className="mt-4 max-w-2xl text-2xl font-extrabold leading-tight md:text-4xl">
          대기열에 등록하고
          <br className="hidden md:block" />
          가장 먼저 시작하세요.
        </h2>
        <form className="mt-10 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@company.com"
            className="h-12 flex-1 rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 text-sm text-[var(--text)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--purple)] md:text-base"
          />
          <button
            type="submit"
            className="h-12 rounded-md border border-[var(--purple)] bg-[var(--purple)] px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:text-base"
          >
            베타 신청
          </button>
        </form>
      </div>
    </section>
  );
}
