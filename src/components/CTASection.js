import React from "react";
import { FaTools, FaHardHat } from "react-icons/fa";

export default function CTASection() {
  return (
    <div className="w-full flex justify-center px-4 py-20 ">
      <div className="relative w-full max-w-6xl bg-[#005CFF] text-white rounded-3xl px-6 md:px-20 py-20 overflow-hidden">
        {/* LEFT DECORATIVE ICON */}
        <FaTools
          className="hidden md:block absolute left-6 bottom-6 text-white opacity-30"
          size={100}
        />

        {/* RIGHT DECORATIVE ICON */}
        <FaHardHat
          className="hidden md:block absolute right-6 bottom-6 text-white opacity-30"
          size={100}
        />

        {/* MAIN CONTENT BLOCK */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 leading-snug">
            Behind the Texts.
            <br />
            How Rung Works.
          </h2>

          <ul className="text-left space-y-4 mx-auto max-w-xl text-lg">
            <li className="flex items-start gap-3">
              <span className="text-green-300 text-xl">✔</span>
              <span>
                <strong>Understands Your Jobs:</strong> Knows every service
                call, part number, system model, and note.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-300 text-xl">✔</span>
              <span>
                <strong>Trains New Techs Instantly:</strong> Acts like the
                senior tech everyone calls — without calling anyone.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-300 text-xl">✔</span>
              <span>
                <strong>Logs Purchases Automatically:</strong> Just text “bought
                a 25lb tank + fan motor” and Rung organizes it.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-green-300 text-xl">✔</span>
              <span>
                <strong>No Apps. No New Platform:</strong> Works through text
                only — techs already know how to use it.
              </span>
            </li>
          </ul>

          <a
            href="/schedule"
            className="inline-flex mt-10 bg-white text-[#005CFF] px-6 py-3 rounded-lg font-medium text-lg shadow-md hover:opacity-90 transition"
          >
            Get Free Demo →
          </a>
        </div>
      </div>
    </div>
  );
}
