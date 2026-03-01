export default function BetaCTA() {
  return (
    <section id="beta" className="border-t border-white/8 bg-[#080808] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <p className="section-label">지금 시작하기</p>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
          대기열에 등록하고
          <br />
          가장 먼저 시작하세요.
        </h2>
        <form className="mt-10 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@company.com"
            className="h-12 flex-1 rounded-md border border-white/15 bg-transparent px-4 text-sm text-white outline-none placeholder:text-[#666] focus:border-[#7c3aed]"
          />
          <button
            type="submit"
            className="h-12 rounded-md border border-white bg-white px-6 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            베타 신청
          </button>
        </form>
      </div>
    </section>
  );
}
