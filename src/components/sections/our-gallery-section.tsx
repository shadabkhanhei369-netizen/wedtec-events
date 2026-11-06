"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { reveal, galleryImages } from './shared';

export function OurGallerySection() {
  return (
    <section className="bg-[#ffecd1] py-[100px] md:py-[125px]" id="gallery">
      <div className="mx-auto w-[min(1240px,88%)]">
        <motion.div
          className="mx-auto mb-10 max-w-[700px] text-center sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <span className="block text-[10px] tracking-[0.2em] text-[#3c000c]">IN EVERY FRAME, A CELEBRATION</span>
          <h2 className="mt-[17px] font-serif text-[clamp(38px,5vw,60px)] font-normal leading-[1.08] tracking-[-0.045em] text-[#3c000c]">
           Different occasions. <em className="text-[#3c000c]">Countless expressions.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[590px] text-[15px] leading-[1.9] text-[#77736c]">
            A curated look at the weddings, events, settings and experiences that reflect the creative world of WEDTEC.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {galleryImages.map((item, index) => (
            <motion.article
              className="group relative"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
            >
              <div className={`relative overflow-hidden rounded-sm bg-[#d5d0c6] shadow-[0_8px_22px_rgba(37,35,31,0.08)] ${index % 5 === 1 || index % 5 === 3 ? "aspect-[0.78]" : "aspect-[0.92]"} sm:aspect-[0.86]`}>
                <Image
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0.65,0.3,1)] group-hover:scale-[1.08]"
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 23vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-1 flex-col gap-1 p-3 transition-transform duration-300 group-hover:translate-y-0 sm:p-5">
                  <span className="text-[8px] tracking-[0.16em] text-white/80">{item.category}</span>
                  <h3 className="mb-0 font-serif text-[16px] font-normal leading-tight text-white sm:text-[20px]">{item.title}</h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
