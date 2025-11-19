export default function FAQSection() {
  const faqs = [
    {
      question: "What is Rung in one sentence?",
      answer:
        "Rung is a message-based assistant that understands your jobs, parts, and customers so your team can get answers instantly without logging into a system.",
    },
    {
      question: "Do technicians need to install a new app?",
      answer:
        "No. Techs interact with Rung over the channels they already use—just by sending messages. There are no new logins, dashboards, or training required.",
    },
    {
      question: "What kinds of questions can Rung answer?",
      answer:
        "Rung can recall job history, part numbers, purchase history, and service notes, and it can generate job summaries and reports based on what your team texts it.",
    },
    {
      question: "How does Rung fit with my existing CRM or FSM?",
      answer:
        "Rung is designed to sit on top of your existing tools, not replace them. We can integrate with your CRM/FSM so existing data becomes searchable in plain language.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            Questions teams usually ask before trying Rung
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-black/10 bg-white/90 px-5 py-4 sm:px-6 sm:py-5 shadow-sm"
            >
              <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                {item.question}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


