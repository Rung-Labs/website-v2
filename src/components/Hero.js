import { useState } from "react";
import employeeMockup from "../assets/employee-mockup.png";
import ownerMockup from "../assets/owner-mockup.png";
import Header from "./Header";

const viewAssets = {
  employee: {
    image: employeeMockup,
    pointers: [
      "Automatically complete jobs, no more paperwork",
      "Ask the job history about a certain location, no more calling around",
    ],
    buttonLabel: "Show owner view",
  },
  owner: {
    image: ownerMockup,
    pointers: [
      "Have visibility into part and material usage",
      "Searchable job history in your messages",
    ],
    buttonLabel: "Show employee view",
  },
};

export default function Hero() {
  const [view, setView] = useState("employee");
  const pointer = viewAssets[view];

  return (
    <div className="relative min-h-screen min-w-screen">
      <Header />

      <section className="flex min-h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden px-4 pt-28 pb-20">
        <div className="w-full max-w-5xl space-y-6 px-4 sm:px-6 lg:px-24 2xl:px-32 text-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
              Your AI Helper for Every Job, Part, and Customer Record
            </h1>
            <p className="text-base text-black sm:text-xl">
              No apps. No logins. No learning curve. Just message it.
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-4xl px-4 sm:px-6 lg:px-24 2xl:px-32">
          <div className="relative flex items-center justify-center">
            <img
              className="w-[75%] "
              src={pointer.image}
              alt={`${view} phone mockup`}
            />
            <div className="hidden xl:flex absolute -left-24 top-32 w-56 rotate-[-4deg] items-center justify-center rounded-full border border-black/20 bg-black/70 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
              {pointer.pointers[0]}
            </div>
            <div className="hidden xl:flex absolute -right-24 bottom-32 w-48 rotate-3 items-center justify-center rounded-full border border-black/20 bg-black/70 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm">
              {pointer.pointers[1]}
            </div>
          </div>
          <div className="mt-6 flex w-full justify-center">
            <button
              className="rounded-full border border-black px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black transition-all duration-200 hover:bg-black hover:text-white"
              onClick={() =>
                setView(view === "employee" ? "owner" : "employee")
              }
            >
              {pointer.buttonLabel}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
