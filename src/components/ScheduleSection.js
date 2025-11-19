import { useState } from "react";
import Header from "./Header";

export default function ScheduleSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // 'idle' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.REACT_APP_WEB3FORMS_KEY;
    if (!accessKey) {
      console.error("Missing REACT_APP_WEB3FORMS_KEY env variable");
    }
    console.log(accessKey);
    formData.append("access_key", accessKey || "");
    formData.append("subject", "New schedule call request from Rung site");
    formData.append("from_name", "Rung Labs Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        form.reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        console.error("Web3Forms error:", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#EDEDED]">
      <Header />
      <div className="pt-24">
        <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
              Schedule a call
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              See how Rung would work with your team
            </h2>
            <p className="mt-3 text-sm text-gray-600 sm:text-base max-w-2xl mx-auto">
              Tell us a bit about your field service operation and we’ll walk
              you through the product using examples that look like your
              day-to-day.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/90 p-6 sm:p-8 shadow-md">
            <form
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              onSubmit={handleSubmit}
            >
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  name="name"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Work email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  name="email"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="ACME HVAC"
                  name="company"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Number of field technicians
                </label>
                <input
                  type="text"
                  placeholder="1–5"
                  name="technicians"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Do you use any tools today? (CRM, FSM, chat)
                </label>
                <input
                  type="text"
                  placeholder="e.g., ServiceTitan + Slack + SMS"
                  name="tools"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  What would you like Rung to help with first?
                </label>
                <textarea
                  rows={4}
                  placeholder="Job history questions, new tech training, materials tracking, etc."
                  name="message"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {submitStatus === "success" && (
                <div className="sm:col-span-2 rounded-lg border border-green-500/30 bg-green-50 px-4 py-3 text-xs text-green-700">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="sm:col-span-2 rounded-lg border border-red-500/30 bg-red-50 px-4 py-3 text-xs text-red-600">
                  ✗ Something went wrong sending your message. Please try again
                  or email us directly.
                </div>
              )}

              <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-gray-500">
                  We’ll reach out within one business day with times for a quick
                  intro call.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-gray-900 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Request a call"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
