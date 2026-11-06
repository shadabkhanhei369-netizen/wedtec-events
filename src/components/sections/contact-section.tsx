"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { reveal, ArrowIcon } from './shared';

export function ContactSection() {
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [submissionState, setSubmissionState] = useState<"success" | "error" | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 760px)");
    const updateViewport = () => setIsMobile(mobileQuery.matches);

    updateViewport();
    mobileQuery.addEventListener("change", updateViewport);
    return () => mobileQuery.removeEventListener("change", updateViewport);
  }, []);

  const handleInquirySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const inquiryField = form.querySelector<HTMLTextAreaElement>('[name="details"]');
    const inquiryDetailsText = inquiryField?.value.trim() ?? "";

    inquiryField?.setCustomValidity(
      inquiryDetailsText.length < 10
        ? "Please enter at least 10 non-whitespace characters about your plans."
        : "",
    );

    if (!form.reportValidity()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionMessage("");
    setSubmissionState(null);

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result: unknown = await response.json();
      const message =
        typeof result === "object" &&
        result !== null &&
        "message" in result &&
        typeof result.message === "string"
          ? result.message
          : "We couldn't send your inquiry. Please try again or email us directly.";

      setSubmissionMessage(message);
      setSubmissionState(response.ok ? "success" : "error");
      if (response.ok) {
        form.reset();
      }
    } catch (error) {
      console.error("Unable to submit contact inquiry:", error);
      setSubmissionMessage("We couldn't connect to send your inquiry. Please try again or email us directly.");
      setSubmissionState("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#ffecd1] py-[90px] md:py-[115px]" id={isMobile ? undefined : "contact"}>
      <div className="mx-auto grid w-[min(1120px,86%)] items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-[9%]"    >
        <motion.div
          className="pt-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <span className="block text-[10px] tracking-[0.2em] text-[#3c000c]">LET&apos;S MAKE YOUR OCCASION HAPPEN</span>
          <h2 className="mt-5 max-w-[500px] font-serif text-[clamp(42px,5vw,62px)] font-normal leading-[1.05] tracking-[-0.05em] text-[#3c000c]">
            It starts <em className="text-[#3c000c]">with your idea.</em>
          </h2>
          <p className="mt-5 max-w-[430px] text-[15px] leading-[1.9] text-[#68645e]">
            Tell us what you&apos;re planning, what you envision and what matters most. We&apos;ll take it from there, bringing the right ideas and expertise to the table.

          </p>
          <div className="mt-9 border-t border-[#c9c4b8] pt-6">
            <span className="block text-[10px] tracking-[0.16em] text-[#8a8177]">START A CONVERSATION</span>
            <a className="mt-2 inline-block text-[15px] text-[#3c000c] transition-colors hover:text-[#3c000c]" href="mailto:wedtecevents@gmail.com">
             wedtecevents@gmail.com
            </a>
          </div>
          <p className="mt-8 max-w-[380px] font-serif text-[20px] leading-[1.5] text-[#77736c]">
            Every great celebration has a beginning. Let&apos;s find yours.

          </p>
        </motion.div>

        <motion.form
          className="rounded-md border border-white/70 bg-white p-5 shadow-[0_16px_45px_rgba(37,35,31,0.09)] sm:p-8 lg:p-10"
          onSubmit={handleInquirySubmit}
          id={isMobile ? "contact" : undefined}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <h3 className="mb-2 font-serif text-[28px] font-normal text-[#3c000c]">Tell us about your plans</h3>
          <p className="mb-7 text-[13px] leading-[1.8] text-[#77736c]">Fields marked with * are required. Your inquiry will be sent to our team by email.</p>

          <div className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-[12px] font-medium tracking-[0.04em] text-[#3c000c]">
              Your name *
              <input className="h-11 rounded-sm border border-[#e4dfd6] bg-[#fcfbf8] px-3 text-[12px] font-normal tracking-normal text-[#3c000c] outline-none transition focus:border-[#3c000c] focus:ring-2 focus:ring-[#3c000c]/15" autoComplete="name" maxLength={80} minLength={2} name="name" pattern="[\p{L}\p{M}][\p{L}\p{M} .’'-]{1,79}" placeholder="Full name" required title="Enter a name using letters, spaces, apostrophes, periods, or hyphens." />
            </label>
            <label className="flex flex-col gap-2 text-[12px] font-medium tracking-[0.04em] text-[#3c000c]">
              Email address *
              <input className="h-11 rounded-sm border border-[#e4dfd6] bg-[#fcfbf8] px-3 text-[12px] font-normal tracking-normal text-[#3c000c] outline-none transition focus:border-[#3c000c] focus:ring-2 focus:ring-[#3c000c]/15" autoComplete="email" name="email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" placeholder="you@example.com" required title="Enter a valid email address, such as you@example.com." type="email" />
            </label>
            <label className="flex flex-col gap-2 text-[12px] font-medium tracking-[0.04em] text-[#3c000c]">
              Phone number
              <input className="h-11 rounded-sm border border-[#e4dfd6] bg-[#fcfbf8] px-3 text-[12px] font-normal tracking-normal text-[#3c000c] outline-none transition focus:border-[#3c000c] focus:ring-2 focus:ring-[#3c000c]/15" autoComplete="tel" name="phone" pattern="\+?[0-9][0-9\s().-]{6,19}" placeholder="Your phone number" title="Enter a valid phone number using digits and optional spaces, +, parentheses, periods, or hyphens." type="tel" />
            </label>
            <label className="flex flex-col gap-2 text-[12px] font-medium tracking-[0.04em] text-[#3c000c]">
              Event type *
              <select className="h-11 rounded-sm border border-[#e4dfd6] bg-[#fcfbf8] px-3 text-[12px] font-normal tracking-normal text-[#3c000c] outline-none transition focus:border-[#3c000c] focus:ring-2 focus:ring-[#3c000c]/15" defaultValue="" name="eventType" required>
                <option disabled value="">Choose an event type</option>
                <option>Wedding</option>
                <option>Wedding celebration / reception</option>
                <option>Engagement</option>
                <option>Private event</option>
                <option>Corporate event</option>
                <option>Other celebration</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-[12px] font-medium tracking-[0.04em] text-[#3c000c]">
              Event date
              <input className="h-11 rounded-sm border border-[#e4dfd6] bg-[#fcfbf8] px-3 text-[12px] font-normal tracking-normal text-[#3c000c] outline-none transition focus:border-[#3c000c] focus:ring-2 focus:ring-[#3c000c]/15" name="eventDate" type="date" />
            </label>
            <label className="flex flex-col gap-2 text-[12px] font-medium tracking-[0.04em] text-[#3c000c]">
              Estimated guest count
              <input className="h-11 rounded-sm border border-[#e4dfd6] bg-[#fcfbf8] px-3 text-[12px] font-normal tracking-normal text-[#3c000c] outline-none transition focus:border-[#3c000c] focus:ring-2 focus:ring-[#3c000c]/15" min="1" name="guestCount" placeholder="e.g. 150" type="number" />
            </label>
            <label className="flex flex-col gap-2 text-[12px] font-medium tracking-[0.04em] text-[#3c000c] sm:col-span-2">
              Event location or venue
              <input className="h-11 rounded-sm border border-[#e4dfd6] bg-[#fcfbf8] px-3 text-[12px] font-normal tracking-normal text-[#3c000c] outline-none transition focus:border-[#3c000c] focus:ring-2 focus:ring-[#3c000c]/15" name="location" placeholder="City, venue, or destination" />
            </label>
            <label className="flex flex-col gap-2 text-[12px] font-medium tracking-[0.04em] text-[#3c000c] sm:col-span-2">
              What services are you interested in?
              <select className="h-11 rounded-sm border border-[#e4dfd6] bg-[#fcfbf8] px-3 text-[12px] font-normal tracking-normal text-[#3c000c] outline-none transition focus:border-[#3c000c] focus:ring-2 focus:ring-[#3c000c]/15" defaultValue="" name="services">
                <option value="">Select a service</option>
                <option>Full-service planning</option>
                <option>Venue selection</option>
                <option>Décor and design</option>
                <option>Entertainment and DJ</option>
                <option>Destination wedding</option>
                <option>Not sure yet / multiple services</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-[12px] font-medium tracking-[0.04em] text-[#3c000c] sm:col-span-2">
              Tell us more about your plans *
                <textarea className="min-h-[110px] resize-y rounded-sm border border-[#e4dfd6] bg-[#fcfbf8] px-3 py-3 text-[12px] font-normal leading-[1.7] tracking-normal text-[#3c000c] outline-none transition focus:border-[#3c000c] focus:ring-2 focus:ring-[#3c000c]/15" maxLength={2000} minLength={10} name="details" onInput={(event) => event.currentTarget.setCustomValidity("")} placeholder="Your ideas, priorities, and anything else you'd like us to know..." required title="Enter at least 10 characters and include some details about your plans." />
            </label>
          </div>

            {submissionMessage && (
              <p
                aria-live="polite"
                className={`mt-5 text-[13px] leading-[1.6] ${submissionState === "success" ? "text-green-800" : "text-red-800"}`}
                role="status"
              >
                {submissionMessage}
              </p>
            )}

            <div className="mt-7 flex justify-center">
              <button className="group inline-flex min-h-[50px] items-center justify-center gap-4 rounded-2xl bg-[#3c000c] px-6 text-[10px] tracking-[0.08em] text-white uppercase transition-colors hover:bg-[#3c000c] disabled:cursor-wait disabled:opacity-70" disabled={isSubmitting} type="submit">
                {isSubmitting ? "Sending..." : "Prepare my inquiry"} {!isSubmitting && <ArrowIcon />}
              </button>
            </div>
        </motion.form>
      </div>
    </section>
  );
}
