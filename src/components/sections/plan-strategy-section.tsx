"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { reveal, strategySteps, strategyContentSequence, strategyContentReveal } from './shared';

export function PlanStrategySection() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextStep = Math.min(
      strategySteps.length - 1,
      Math.floor(progress * strategySteps.length),
    );

    setActiveStep((currentStep) =>
      currentStep === nextStep ? currentStep : nextStep,
    );
  });

  return (
    <section className="bg-[#ffecd1] pt-[40px] text-[#3c000c] md:pt-[60px]" id="strategy">
      <div className="mx-auto w-[min(1180px,88%)]">
        <motion.div
          className="mx-auto mb-10 max-w-[800px] text-center sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <span className="block text-[10px] tracking-[0.2em] text-[#3c000c]">THE WEDTEC APPROACH
</span>
          <h2 className="mt-4 font-serif text-[clamp(38px,5vw,60px)] font-normal leading-[1.08] tracking-[-0.045em] text-[#3c000c]">
           The Journey to Your, <em className="text-[#3c000c]">Big Day Starts Here.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[890px] text-[15px] leading-[1.9] text-[#77736c] ">
          Behind every well-executed event is a clear vision, a considered plan and a team that knows how to bring everything together. Our six-step approach guides you through every stage, keeping the process organised, collaborative and true to your vision — right through to the moment everything comes together.
          </p>
          <p className="mx-auto mt-4 max-w-[890px] text-[15px] leading-[1.9] text-[#77736c]"><b>Thoughtfully planned. Carefully coordinated. Beautifully executed.</b>

</p>
        </motion.div>
      </div>
      <div className="relative h-[700svh]" ref={stepsRef}>
        <div className="sticky top-0 flex h-svh items-center [perspective:1400px]">
          <div className="mx-auto w-[min(1280px,88%)]">
            <article
              aria-live="polite"
              className="grid items-center gap-8 rounded-md border border-[#e3ba6f]/45 bg-[#3c000c] p-5 shadow-[0_16px_45px_rgba(60,0,12,0.08)] sm:p-8 md:grid-cols-[1.05fr_0.95fr] md:gap-[7%] md:p-10"
            >
              <div className="relative aspect-[1.2/1] max-h-[40svh] md:max-h-[64svh]">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-[#e3ba6f] rotate-350"
                />
                <AnimatePresence initial={false} mode="sync">
                  <motion.div
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 overflow-hidden rounded-xl bg-[#ffecd1] rotate-350"
                    exit={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    key={strategySteps[activeStep].image}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <Image
                      alt={strategySteps[activeStep].alt}
                      className="object-cover"
                      fill
                      sizes="(max-width: 767px) 80vw, 50vw"
                      src={strategySteps[activeStep].image}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="py-2 md:py-8">
                <div>
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      animate="visible"
                      exit={{ opacity: 0 }}
                      initial="hidden"
                      key={strategySteps[activeStep].title}
                      variants={strategyContentSequence}
                    >
                      {/* <motion.span
                        className="mb-4 block text-[10px] font-medium tracking-[0.2em] text-[#8a8177]"
                        variants={strategyContentReveal}
                      >
                        STEP 0{activeStep + 1} / 06
                      </motion.span> */}
                      <motion.h3
                        className="mb-4 font-serif text-[clamp(40px,6vw,74px)] font-normal leading-[1.6] tracking-[-0.04em] text-white"
                        variants={strategyContentReveal}
                      >
                        {strategySteps[activeStep].title}
                      </motion.h3>
                      <motion.h4
                        className="max-w-[510px] text-[30px] leading-[1.6] max-sm:text-[18px] text-white"
                        variants={strategyContentReveal}
                      >
                        {strategySteps[activeStep].subtitle}
                      </motion.h4>
                      <motion.p
                        className="max-w-[510px] text-[30px] leading-[1.6] text-white max-sm:text-[18px] "
                        variants={strategyContentReveal}
                      >
                        {strategySteps[activeStep].description}
                      </motion.p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                {/* <div className="mt-8 flex items-center gap-4">
                  <span className="text-[10px] tracking-[0.16em] text-[#8a8177]">
                    0{activeStep + 1}
                  </span>
                  <div
                    aria-label={`Step ${activeStep + 1} of ${strategySteps.length}`}
                    aria-valuemax={strategySteps.length}
                    aria-valuemin={1}
                    aria-valuenow={activeStep + 1}
                    className="h-px flex-1 bg-[#3c000c]/15"
                    role="progressbar"
                  >
                    <motion.div
                      animate={{
                        width: `${((activeStep + 1) / strategySteps.length) * 100}%`,
                      }}
                      className="h-full bg-[#3c000c]"
                      transition={{ duration: 0.35 }}
                    />
                  </div>
                  <span className="text-[10px] tracking-[0.16em] text-[#8a8177]">06</span>
                </div> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
