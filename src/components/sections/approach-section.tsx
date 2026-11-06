"use client";

import { motion } from "framer-motion";
import { reveal } from './shared';

export function ApproachSection() {
  const values = [
    ["01", "Your priorities lead", "We build around what matters to you, not a one-size-fits-all checklist."],
    ["02", "Thoughtful choices", "We help you compare options clearly and make decisions with confidence."],
    ["03", "One connected plan", "We keep the details, suppliers and schedule moving in the same direction."],
  ];

  return (
    <section className="grid grid-cols-[0.85fr_1.15fr] gap-[9%] pt-[130px] pb-[135px] max-[760px]:grid-cols-1 max-[760px]:gap-7 max-[760px]:pt-[90px] max-[760px]:pb-[95px] min-[761px]:max-[1000px]:grid-cols-1 min-[761px]:max-[1000px]:gap-9 min-[761px]:max-[1000px]:pt-[95px] min-[761px]:max-[1000px]:pb-[100px] mx-auto w-[min(1120px,82%)] max-[760px]:w-[86%] min-[761px]:max-[1000px]:w-[88%]" id="approach">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <span className="block text-[9px] tracking-[0.2em] leading-[1.5]">WHY WEDTEC EVENTS</span>
        <h2 className="my-[18px] mb-[22px] font-serif text-[clamp(39px,4.4vw,54px)] font-normal tracking-[-0.045em] leading-[1.08] text-[#3c000c] max-[760px]:text-[clamp(40px,10vw,55px)]">Care in the details. <em className="font-normal text-[#3c000c]">Calm in the moments.</em></h2>
        <p className="mb-[25px] max-w-[430px] text-[12px] leading-[1.9] text-[#77736c]">
          Good planning is more than a beautiful set-up. It is the feeling that everything has
          been thought through, with your people and priorities at the heart of it.
        </p>
      </motion.div>
      <div className="grid grid-cols-1">
        {values.map(([number, title, text], index) => (
          <motion.article
            className="grid grid-cols-[35px_1fr] grid-rows-[auto_auto] gap-x-[13px] border-t border-[#d5d0c6] py-5"
            key={number}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
          >
            <span className="row-span-2 pt-[5px] text-[9px] tracking-[0.16em] text-[#3c000c]">{number}</span>
            <h3 className="mb-[7px] font-serif text-[22px] font-normal">{title}</h3>
            <p className="mb-0 max-w-[430px] text-[11px] leading-[1.85] text-[#77736c]">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
