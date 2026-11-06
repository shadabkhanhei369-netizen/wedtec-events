"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { reveal, faqs, ArrowIcon } from './shared';

export function FaqSection() {
  const [openFaqs, setOpenFaqs] = useState<Set<number>>(() => new Set());

  const toggleFaq = (index: number) => {
    setOpenFaqs((current) => {
      const next = new Set(current);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <section className="bg-[#ffecd1] py-[100px] md:py-[125px]" id="faq">
      <div className="mx-auto grid w-[min(1120px,86%)] grid-cols-[0.8fr_1.2fr] items-start gap-[8%] max-[760px]:grid-cols-1 max-[760px]:gap-9 min-[761px]:max-[1000px]:grid-cols-1 min-[761px]:max-[1000px]:gap-10">
        <motion.div
          className="rounded-md border border-white/80 bg-white p-7 shadow-[0_12px_35px_rgba(37,35,31,0.07)] sm:p-9"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <span className="block text-[10px] tracking-[0.2em] leading-[1.5] text-[#3c000c]">
THINKING OF PLANNING WITH US?
</span>
          <h2 className="my-[18px] mb-[22px] font-serif text-[clamp(39px,4.5vw,50px)] font-normal tracking-[-0.045em] leading-[1.08] text-[#3c000c] max-[760px]:text-[clamp(40px,10vw,55px)]">Everything you need to know before<em className="font-normal text-[#3c000c]">we begin.</em></h2>
          <p className="mb-[25px] max-w-[430px] text-[15px] leading-[1.9] text-[#77736c]">From our planning process to the services we offer, find answers to common questions and get a clearer picture of what working with WEDTEC looks like.
</p>
          <div className="mb-6 h-px w-12 bg-[#e3ba6f]" />
          <p className="mb-[25px] max-w-[430px] text-[15px] leading-[1.9] text-[#77736c]">Have another question? We'd be happy to help.
</p>
          <a className="group inline-flex flex-[0_0_auto] items-center gap-4 border-b border-[#3c000c] pb-[9px] text-[14px] tracking-[0.025em]" href="#contact">Talk to our team <ArrowIcon /></a>
        </motion.div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <motion.div
              className="group rounded-md border border-[#eeeae2] bg-white px-5 shadow-[0_8px_24px_rgba(37,35,31,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(37,35,31,0.1)] sm:px-7"
              key={faq.question}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <button
                aria-controls={`faq-answer-${index}`}
                aria-expanded={openFaqs.has(index)}
                className="flex min-h-[72px] w-full cursor-pointer items-center justify-between gap-5 py-5 text-left font-serif text-[17px] text-[#3c000c] outline-none focus-visible:ring-2 focus-visible:ring-[#3c000c] focus-visible:ring-offset-4 sm:min-h-[80px] sm:text-[19px]"
                onClick={() => toggleFaq(index)}
                type="button"
              >
                <span className="flex items-start gap-4">
                  {/* <span className="pt-1 font-sans text-[9px] tracking-[0.12em] text-[#3c000c]">0{index + 1}</span> */}
                  {faq.question}
                </span>
                <span className={`relative grid size-8 shrink-0 place-items-center rounded-full text-[#3c000c] transition-colors ${openFaqs.has(index) ? "bg-[#3c000c] text-white" : "bg-[#ffecd1]"}`} aria-hidden="true">
                  <span className="absolute h-px w-3 bg-current" />
                  <span className={`absolute h-3 w-px bg-current transition-transform duration-200 ${openFaqs.has(index) ? "rotate-90" : ""}`} />
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openFaqs.has(index) && (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                    exit={{ height: 0, opacity: 0 }}
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="mb-0 max-w-[570px] border-t border-[#eeeae2] pb-6 pt-4 pl-8 text-[15px] leading-[1.9] text-[#77736c] sm:pl-9">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
