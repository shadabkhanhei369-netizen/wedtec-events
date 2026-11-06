"use client";

import { motion } from "framer-motion";
import { reveal, ArrowIcon } from './shared';

export function ProposalSection() {
  const proposals = [
    ["01", "Full-service planning", "From first ideas to the final farewell."],
    ["02", "Design & vendor guidance", "A clear creative direction and the right people around you."],
    ["03", "Wedding-weekend coordination", "A steady, detail-minded presence as your plans come together."],
  ];

  return (
    <section className="grid grid-cols-[0.9fr_1.1fr] items-center gap-[10%] pt-[135px] pb-[135px] max-[760px]:grid-cols-1 max-[760px]:gap-[38px] max-[760px]:pt-[90px] max-[760px]:pb-[95px] min-[761px]:max-[1000px]:grid-cols-1 min-[761px]:max-[1000px]:gap-9 min-[761px]:max-[1000px]:pt-[95px] min-[761px]:max-[1000px]:pb-[100px] mx-auto w-[min(1120px,82%)] max-[760px]:w-[86%] min-[761px]:max-[1000px]:w-[88%]" id="celebrations">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <span className="block text-[9px] tracking-[0.2em] leading-[1.5]">A CELEBRATION THAT FITS</span>
        <h2 className="my-[18px] mb-[22px] font-serif text-[clamp(38px,4.5vw,55px)] font-normal tracking-[-0.045em] leading-[1.08] text-[#3c000c] max-[760px]:text-[clamp(40px,10vw,55px)]">Start with what <em className="font-normal text-[#3c000c]">you need.</em></h2>
        <p className="mb-[25px] max-w-[430px] text-[12px] leading-[1.9] text-[#77736c]">
          Some couples want a team beside them from the first venue visit. Others have the big
          pieces in place and need a steady hand to bring it all together. We shape our support
          around your celebration.
        </p>
        <a className="group inline-flex flex-[0_0_auto] items-center gap-4 border-b border-[#c9c4b8] pb-[9px] text-[10px] tracking-[0.025em]" href="#contact">Find your starting point <ArrowIcon /></a>
      </motion.div>
      <motion.div
        className="border-t border-[#d5d0c6]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {proposals.map(([number, title, description]) => (
          <motion.a className="grid min-h-[103px] grid-cols-[36px_1fr_20px] items-center gap-[18px] border-b border-[#d5d0c6] transition-[padding] duration-[180ms] hover:px-[7px]" href="#contact" key={number} variants={reveal}>
            <span className="self-start pt-[27px] text-[9px] tracking-[0.15em] text-[#3c000c]">{number}</span>
            <span className="flex flex-col gap-[7px]"><strong className="font-serif text-[21px] font-normal">{title}</strong><small className="text-[10px] leading-[1.6] text-[#77736c]">{description}</small></span>
            <ArrowIcon diagonal />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
