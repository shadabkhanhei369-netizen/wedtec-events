"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { reveal, clientReviews } from './shared';

export function ClientTestimonialsSection() {
  const [activeReview, setActiveReview] = useState(0);
  const [reviewDirection, setReviewDirection] = useState<-1 | 1>(1);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setReviewDirection(1);
      setActiveReview((current) => (current + 1) % clientReviews.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const moveReview = (direction: -1 | 1) => {
    setReviewDirection(direction);
    setActiveReview((current) => (current + direction + clientReviews.length) % clientReviews.length);
  };
  const visibleReviews = [0, 1, 2].map((offset) => ({
    review: clientReviews[(activeReview + offset) % clientReviews.length],
    index: (activeReview + offset) % clientReviews.length,
  }));

  return (
    <section className="relative overflow-hidden bg-[#ffecd1] py-[80px] md:py-[80px]" id="client-testimonials">
      <div className="relative z-10 mx-auto w-[min(1120px,86%)] min-[761px]:max-[1000px]:w-[88%]">
    
        <motion.div
          className="mx-auto mb-12 max-w-[800px] text-center sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <span className="block text-[10px] tracking-[0.2em] text-[#3c000c]">A FEW WORDS THAT MEAN EVERYTHING</span>
          <h2 className="mb-4 mt-4 font-serif text-[clamp(38px,5vw,54px)] font-normal leading-[1.08] tracking-[-0.045em] text-[#3c000c]">
            The moments they remember.<em className="text-[#3c000c]">The words we treasure.</em>
          </h2>
          <p className="mx-auto mb-0 max-w-[700px] text-[15px] leading-[1.9] text-[#77736c]">
            Every celebration is a shared journey, and hearing how it felt for the people at its heart means the most to us. These are the voices and experiences that make our work truly rewarding.

          </p>
        </motion.div>
        <div className="mx-auto flex min-h-[360px] items-center gap-2 sm:min-h-[390px] sm:gap-4">
          <button
            aria-label="Previous client testimonial"
            className="z-20 grid size-9 shrink-0 place-items-center rounded-full border border-[#3c000c]/20 bg-white text-[#3c000c] shadow-sm transition hover:bg-[#3c000c] hover:text-white sm:size-11"
            onClick={() => moveReview(-1)}
            type="button"
          >
            <span aria-hidden="true" className="text-xl leading-none">‹</span>
          </button>
          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="flex w-full gap-4 sm:gap-5">
              <AnimatePresence initial={false} mode="popLayout" custom={reviewDirection}>
                {visibleReviews.map(({ review, index }) => (
                  <motion.article
                    aria-current={index === activeReview ? "true" : undefined}
                    className="relative flex min-h-[280px] w-full shrink-0 flex-col rounded-md border border-[#e5e0d7] bg-white p-5 shadow-[0_16px_40px_rgba(37,35,31,0.08)] transition-shadow sm:min-h-[300px] sm:w-[calc((100%-1.25rem)/2)] sm:p-6 lg:w-[calc((100%-2.5rem)/3)] lg:p-7"
                    custom={reviewDirection}
                    initial={{ opacity: 0, x: reviewDirection * 55 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: reviewDirection * -55 }}
                    key={review.category}
                    layout="position"
                    transition={{ duration: 0.35, ease: "easeInOut", layout: { duration: 0.4 } }}
                  >
                    <div className="mb-5 flex items-center justify-between gap-3">
                      <span className="flex items-center gap-2 text-[12px] font-semibold text-[#3c000c]">
                        <span aria-hidden="true" className="font-sans text-[19px] font-bold tracking-[-0.1em]">
                          <span className="text-[#4285f4]">G</span>
                          <span className="text-[#ea4335]">o</span>
                          <span className="text-[#fbbc05]">o</span>
                          <span className="text-[#4285f4]">g</span>
                          <span className="text-[#34a853]">l</span>
                          <span className="text-[#ea4335]">e</span>
                        </span>
                        <span className="hidden sm:inline">Review</span>
                      </span>
                      <span aria-label="Sample five-star rating; replace with verified rating" className="shrink-0 text-[14px] tracking-[0.08em] text-[#fbbc04]">
                        ★★★★★
                      </span>
                    </div>
                    <span className="mb-3 text-[9px] tracking-[0.15em] text-[#3c000c]">
                      {review.category.toUpperCase()}
                    </span>
                    <p className="flex-1 font-serif text-[14px] leading-[1.65] text-[#3c000c] sm:text-[16px]">
                      “{review.quote}”
                    </p>
                    <div className="mt-5 border-t border-[#eeeae3] pt-4">
                      <span className="block text-[11px] font-semibold text-[#3c000c]">{review.author}</span>
                      <span className="mt-1 block text-[9px] text-[#77736c]">Sample testimonial — replace before publishing</span>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <button
            aria-label="Next client testimonial"
            className="z-20 grid size-9 shrink-0 place-items-center rounded-full border border-[#3c000c]/20 bg-white text-[#3c000c] shadow-sm transition hover:bg-[#3c000c] hover:text-white sm:size-11"
            onClick={() => moveReview(1)}
            type="button"
          >
            <span aria-hidden="true" className="text-xl leading-none">›</span>
          </button>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2" aria-label="Choose a client testimonial">
          {clientReviews.map((review, index) => (
            <button
              aria-label={`Show testimonial: ${review.category}`}
              aria-current={index === activeReview ? "true" : undefined}
              className={`h-[7px] rounded-full transition-all duration-300 ${index === activeReview ? "w-6 bg-[#3c000c]" : "w-[7px] bg-[#c9c4b8] hover:bg-[#3c000c]"}`}
              key={review.category}
              onClick={() => {
                if (index !== activeReview) {
                  setReviewDirection(index > activeReview ? 1 : -1);
                  setActiveReview(index);
                }
              }}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
