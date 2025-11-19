export default function GetStartedSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-[#005CFF] text-white px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="relative z-10 flex flex-col items-center gap-6 text-center">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Get started today
            </h2>
            <p className="max-w-2xl text-sm sm:text-base text-blue-100">
              Start with your existing jobs, parts, and customers. Rung layers
              on top, so your team can try it in the field without changing how
              they work overnight.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-blue-100">
              <span className="inline-flex items-center rounded-full border border-blue-200/60 bg-white/5 px-4 py-2">
                No long-term contracts
              </span>
              <span className="inline-flex items-center rounded-full border border-blue-200/60 bg-white/5 px-4 py-2">
                Roll out to one crew or your whole team
              </span>
              <span className="inline-flex items-center rounded-full border border-blue-200/60 bg-white/5 px-4 py-2">
                Hands-on onboarding support
              </span>
            </div>

            <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href="/schedule"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#005CFF] shadow-md transition hover:opacity-90"
              >
                Talk to our team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
