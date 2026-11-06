"use client";

import { motion } from "framer-motion";
import { ArrowIcon } from './shared';

export function QuoteSection() {
  return (
    <section className="relative grid min-h-[430px] place-items-center overflow-hidden bg-[#3c000c] text-center text-white max-[760px]:min-h-[350px]">
      <video
        aria-hidden="true"
        autoPlay
        className="absolute inset-0 h-full w-full scale-[1.02] object-cover"
        loop
        muted
        playsInline
        preload="auto"
        tabIndex={-1}
      >
        <source src="/banner/banner1.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[rgb(36_32_29/54%)]" />
      <motion.div
        className="relative z-[1] flex flex-col items-center p-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="mb-[17px] block text-[10px] font-bold tracking-[0.2em] leading-[1.5] text-white/75">THE WEDTEC WAY</span>
        <p className="mb-[25px] font-serif text-[clamp(39px,5vw,60px)] tracking-[-0.045em] text-white max-[760px]:text-[clamp(38px,10vw,56px)]">A vision well planned. An occasion beautifully lived. 
</p>
        <a className="inline-flex min-h-[50px] items-center justify-center gap-[25px] px-[22px] text-[12px] tracking-[0.07em] transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 border border-white/70 font-bold rounded-2xl   hover:bg-[#3c000c] text-white bg-transparent" href="#contact">Book Your Occasion With Us! <ArrowIcon /></a>
      </motion.div>
    </section>
  );
}
