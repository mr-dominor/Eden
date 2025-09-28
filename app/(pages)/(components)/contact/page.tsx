"use client"
import React from "react";
import { MotionDiv, MotionDivLeft, MotionDivRight } from "../micro-components/motion-div";

// Eden School Contact Component
// Purely frontend showcase, no logic or validation.

export default function EdenContact() {
  return (
    <section className="max-w-6xl mx-auto p-6 lg:p-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left: Contact card + details */}
        <MotionDivLeft>
          <div className="flex items-start gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-purple-950">Contact Eden School</h2>
              <p className="mt-1 text-sm text-purple-700">Warm, responsive, and child-centered — reach out to our admissions or general office.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            <div>
              <p className="text-xs text-purple-600 uppercase">Phone</p>
              <p className="font-medium">+91 98765 43210</p>
            </div>

            <div>
              <p className="text-xs text-purple-600 uppercase">Email</p>
              <p className="font-medium">connect@edenschool.edu</p>
            </div>

            <div>
              <p className="text-xs text-purple-600 uppercase">Address</p>
              <p className="font-medium">Greenway Road, Eden City</p>
            </div>

            <div className="mt-2 flex gap-3">
              <a aria-label="Eden School Instagram" href="#" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 ring-purple-200 hover:scale-105 transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#4c1d95" strokeWidth="1.4"/><path d="M16 7h.01" stroke="#4c1d95" strokeWidth="1.4" strokeLinecap="round"/></svg>
                <span className="text-sm text-purple-900">@EdenSchool</span>
              </a>
              <a aria-label="Eden School Facebook" href="#" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ring-1 ring-purple-200 hover:scale-105 transition">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M15 8h2v4h-2v8h-3v-8h-2v-3h2V7.5C12 5.57 13.57 4 15.5 4H18v4h-3.5C14 8 15 8 15 8z" stroke="#4c1d95" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-sm text-purple-900">Eden School</span>
              </a>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs text-purple-600">Office hours</p>
            <p className="font-medium">Mon — Fri: 8:30 AM — 4:30 PM</p>
          </div>
        </MotionDivLeft>

        {/* Right: Decorative form (no logic) */}
        <MotionDivRight>
          <div className="rounded-2xl p-8 shadow-xl bg-white/80 backdrop-blur border border-purple-100">
            <h3 className="text-lg font-semibold text-purple-950">Send us a note</h3>
            <p className="text-sm text-purple-700 mt-1">We would love to hear from you — questions about admissions, visits, or our curriculum.</p>

            <form className="mt-6 grid gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accessible-purple transition"
              />
              <input
                type="email"
                placeholder="you@domain.com"
                className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accessible-purple transition"
              />
              <textarea
                rows={4}
                placeholder="Write your message here"
                className="w-full rounded-lg border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accessible-purple transition"
              ></textarea>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="px-5 py-2 rounded-lg bg-accessible-purple text-white font-medium hover:scale-[1.02] active:scale-95 transition"
                >
                  Send Message
                </button>
                <button
                  type="reset"
                  className="px-4 py-2 rounded-lg border border-purple-300 text-purple-900"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

        </MotionDivRight>
      </div>

      {/* Footer small note */}
      <div className="mt-10 text-center text-sm text-purple-600">This contact panel is for design showcase only. No data is processed.</div>
    </section>
  );
}