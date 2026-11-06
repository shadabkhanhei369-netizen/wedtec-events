"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reveal, services, ArrowIcon, ServiceIcon } from './shared';

export function ServicesSection() {
  return (
    <section className="bg-[#ffecd1] py-[80px] md:py-[80px]" id="services">
      <div className="mx-auto w-[min(1120px,82%)] max-[760px]:w-[86%] min-[761px]:max-[1000px]:w-[88%]">
        <motion.div
          className="mx-auto mb-10 max-w-[700px] text-center sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <span className="block text-[10px] tracking-[0.2em] leading-[1.5] text-[#3c000c]">WEDDINGS & EVENTS, DESIGNED AROUND YOU</span>
          <h2 className="mt-[17px] font-serif text-[clamp(38px,4.7vw,56px)] font-normal tracking-[-0.045em] leading-[1.12] text-[#3c000c]">
            You have a reason to celebrate.<em className="font-normal text-[#3c000c]"> We make it happen.
</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-[1.9] text-[#77736c]">
          From defining the concept to coordinating every moving part, we take care of the work behind the event, bringing your vision together so you can focus on the people and moments that matter.

          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.article
              className="group relative flex min-h-[170px] flex-col items-center justify-center gap-4 overflow-hidden rounded-md border border-white/30 px-3 py-6 text-center text-white shadow-[0_8px_24px_rgba(37,35,31,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(37,35,31,0.2)] sm:min-h-[200px] sm:gap-5 sm:px-5 sm:py-8"
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <Image
                alt=""
                aria-hidden="true"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.3,1)] group-hover:scale-110"
                src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=800&q=85`}
                fill
                sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 23vw"
              />
              <span className="absolute inset-0 bg-black/55 transition-colors duration-300 group-hover:bg-black/65" />
              <span className="relative z-[1] grid size-[58px] place-items-center rounded-full border border-[#e3ba6f] bg-[#e3ba6f] text-[#3c000c] transition duration-300 group-hover:scale-105 group-hover:bg-[#ffecd1] sm:size-[66px]">
                <ServiceIcon name={service.icon} />
              </span>
              <h3 className="relative z-[1] mb-0 font-serif text-[15px] font-normal leading-snug text-white sm:text-[18px]">
                {service.title}
              </h3>
            </motion.article>
          ))}
        </div>
        <motion.a
          className="group mx-auto mt-[42px] flex w-fit items-center gap-4 border-b border-[#3c000c] pb-[9px] text-[14px] tracking-[0.025em] max-[760px]:mt-8"
          href="#contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          Talk through your plans <ArrowIcon />
        </motion.a>
      </div>
    </section>
  );
}
