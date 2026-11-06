"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AboutUsSection() {
  return (
    <section
      aria-labelledby="about-us-heading"
      className="relative overflow-hidden bg-[#ffecd1] px-[7%] py-16 sm:py-20 lg:py-28"
      id="about"
    >
      
      <div className="relative z-10 mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
        <motion.div
          className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[540px]"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-[#3c000c]"
          />
          <Image
            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1400&q=85"
            alt="Wedding table details thoughtfully arranged by WEDTEC EVENTS"
            fill
            sizes="(max-width: 767px) 86vw, 50vw"
            className="z-10 rounded-2xl object-cover shadow-lg shadow-black/10 ring-1 ring-black/5"
          />
        </motion.div>
        <motion.div
          className="max-w-[540px] md:py-8"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <span className="text-[10px] font-medium tracking-[0.2em] text-[#3c000c]">
            A LITTLE ABOUT WEDTEC
          </span>
          <h2
            className="mb-5 mt-4 font-serif text-[clamp(38px,5vw,50px)] font-normal leading-[1.08] tracking-[-0.045em] text-[#3c000c]"
            id="about-us-heading"
          >
            Your Story Shapes the Celebration. <em className="text-[#3c000c]">We Bring It Together.
</em>
          </h2>
          <p className="mb-5 text-[15px] leading-[1.9] text-[#77736c]">
            Every wedding carries something of its own — family traditions, shared memories and a vision of how the day should feel.

          </p>
          <p className="mb-7 text-[15px] leading-[1.9] text-[#77736c]">
            We take the time to understand what matters to you, then bring together the planning, creative ideas and coordination needed to make it happen. From the first decisions to the final execution, WEDTEC EVENTS works to make the entire journey feel considered, connected and personal.<br></br>
The result is a celebration that reflects not just the occasion, but the people at its heart.

          </p>
          <a
            className="inline-flex items-center gap-4 border-b border-[#3c000c] pb-[9px] text-[14px] tracking-[0.025em] text-[#3c000c] transition-colors hover:border-[#3c000c] hover:text-[#3c000c]"
            href="#contact"
          >
            CONTACT US
            <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none">
              <path d="M4.5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </motion.div>
      </div>
     
    
    </section>
  );
}
