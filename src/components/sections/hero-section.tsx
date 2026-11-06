"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { reveal, heroSlides, ArrowIcon } from './shared';

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [playbackFailed, setPlaybackFailed] = useState(false);
  const slide = heroSlides[activeSlide];

  const selectSlide = (index: number) => {
    setActiveSlide(index);
    setPlaybackFailed(false);
  };

  const showNextSlide = () => {
    selectSlide((activeSlide + 1) % heroSlides.length);
  };

  return (
    <section className="relative h-svh min-h-[760px] max-h-[1020px] overflow-hidden bg-[#3c000c] text-white max-[760px]:h-auto max-[760px]:min-h-0 max-[760px]:max-h-none max-[760px]:overflow-hidden max-[760px]:bg-[#ffecd1] max-[760px]:text-[#3c000c] max-[760px]:px-[14px] max-[760px]:pt-[14px] max-[760px]:pb-[28px]" id="home">
      <div className="hero-media absolute inset-0 overflow-hidden bg-[#3c000c] max-[760px]:top-[14px] max-[760px]:right-[14px] max-[760px]:left-[14px] max-[760px]:h-[var(--hero-mobile-media-height)] max-[760px]:rounded-xl" aria-hidden="true">
        <video
          key={slide.video}
          className="h-full w-full object-cover max-[760px]:[object-position:center_43%]"
          autoPlay={!playbackFailed}
          muted
          playsInline
          preload="auto"
          poster={slide.poster}
          onEnded={showNextSlide}
          onError={() => setPlaybackFailed(true)}
          aria-label={slide.credit}
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      </div>
      <div className="hero-shade absolute inset-0 max-[760px]:top-[14px] max-[760px]:right-[14px] max-[760px]:left-[14px] max-[760px]:h-[var(--hero-mobile-media-height)] max-[760px]:rounded-xl" />
      <div className="absolute z-[1] top-1/2 right-[5%] flex -translate-y-1/2 flex-col items-center gap-[10px] max-[760px]:top-[calc(14px_+_var(--hero-mobile-media-height)*0.5)] max-[760px]:right-[28px]" role="group" aria-label="Choose a featured wedding video">
          {heroSlides.map((item, index) => (
            <button
              aria-label={`Show video ${index + 1}: ${item.caption}`}
              aria-current={index === activeSlide ? "true" : undefined}
              className={`h-[10px] w-[10px] cursor-pointer rounded-full border border-white/85 p-0 transition-[background-color,transform] duration-[180ms] hover:scale-125 ${index === activeSlide ? "bg-white" : "bg-transparent"}`}
              key={item.video}
              onClick={() => selectSlide(index)}
              type="button"
            />
          ))}
      </div>
      <div className="absolute z-[1] right-0 bottom-[11%] left-0 mx-auto grid w-[min(1160px,82%)] grid-cols-[1.05fr_1fr] items-end gap-10 min-[761px]:max-[900px]:w-[88%] min-[761px]:max-[900px]:grid-cols-1 min-[761px]:max-[900px]:gap-7 max-[760px]:relative max-[760px]:right-auto max-[760px]:bottom-auto max-[760px]:left-auto max-[760px]:mt-[calc(var(--hero-mobile-media-height)_+_32px)] max-[760px]:w-full max-[760px]:grid-cols-1 max-[760px]:gap-[14px] max-[760px]:text-center">
        <motion.div
          className="max-w-[610px] max-[760px]:max-w-none min-[761px]:max-[900px]:max-w-[650px]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } },
          }}
        >
    
          <motion.h1
            key={slide.heading}
            initial="hidden"
            animate="visible"
            variants={reveal}
            className="mb-[15px] max-w-[610px] font-serif text-[clamp(38px,4.7vw,56px)] font-normal tracking-[-0.045em] leading-[1.12] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.8)] max-[760px]:max-w-none max-[760px]:text-[clamp(38px,9vw,52px)] max-[760px]:text-[#3c000c]"
          >
            {slide.heading}
            <br />
            {/* <em className="font-normal">{slide.emphasis}</em> */}
          </motion.h1>
                <motion.p
            className="block text-[14px] tracking-[0.2em] leading-[1.5] mb-[15px] text-white/85 max-[760px]:hidden"
            key={`${slide.heading}-eyebrow`}
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            {slide.eyebrow}
          </motion.p>
        </motion.div>
        <div className="flex flex-col gap-6 pb-[5px] max-[760px]:gap-3">
          <div className="grid grid-cols-3 gap-[15px] max-[760px]:gap-[7px]" aria-label="Our planning approach">
            <div className="flex flex-col gap-[7px] max-[760px]:items-center max-[760px]:gap-1"><strong className="font-serif text-[clamp(15px,1.45vw,21px)] font-normal tracking-[-0.02em] max-[760px]:text-[clamp(11px,3.3vw,14px)] max-[760px]:leading-[1.15]">Personalised planning</strong><span className="text-[10px] leading-[1.45] text-white/85 max-[760px]:text-[clamp(7px,2.15vw,9px)] max-[760px]:leading-[1.25] max-[760px]:text-[#615d55]">From first idea to final detail</span></div>
            <div className="flex flex-col gap-[7px] max-[760px]:items-center max-[760px]:gap-1"><strong className="font-serif text-[clamp(15px,1.45vw,21px)] font-normal tracking-[-0.02em] max-[760px]:text-[clamp(11px,3.3vw,14px)] max-[760px]:leading-[1.15]">Venue & design</strong><span className="text-[10px] leading-[1.45] text-white/85 max-[760px]:text-[clamp(7px,2.15vw,9px)] max-[760px]:leading-[1.25] max-[760px]:text-[#615d55]">Spaces shaped around your vision</span></div>
            <div className="flex flex-col gap-[7px] max-[760px]:items-center max-[760px]:gap-1"><strong className="font-serif text-[clamp(15px,1.45vw,21px)] font-normal tracking-[-0.02em] max-[760px]:text-[clamp(11px,3.3vw,14px)] max-[760px]:leading-[1.15]">Seamless execution</strong><span className="text-[10px] leading-[1.45] text-white/85 max-[760px]:text-[clamp(7px,2.15vw,9px)] max-[760px]:leading-[1.25] max-[760px]:text-[#615d55]">Every detail, perfectly in place</span></div>
          </div>
          <div className="flex items-center gap-3 max-[760px]:gap-2">
            <a className="inline-flex min-h-[50px] items-center justify-center gap-[25px] px-[22px] text-[10px] tracking-[0.07em] transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 min-h-[58px] flex-1 justify-between bg-[#3c000c] px-6 text-[12px] font-semibold tracking-normal hover:bg-[#430914] max-[760px]:min-h-12 max-[760px]:justify-center max-[760px]:gap-[10px] max-[760px]:px-[10px] max-[760px]:text-[clamp(10px,3vw,12px)] max-[760px]:text-white text-white! rounded-2xl" href="#contact">
              Start your wedding planning <ArrowIcon />
            </a>
            <a
              aria-label="Contact WEDTEC EVENTS on WhatsApp"
              className="grid h-[58px] w-[58px] flex-[0_0_58px] place-items-center rounded-[13px] bg-[#08bf58] transition hover:-translate-y-0.5 hover:bg-[#079b49] max-[760px]:h-12 max-[760px]:w-12 max-[760px]:flex-[0_0_48px] max-[760px]:rounded-[11px]"
              href="https://wa.me/918904399882?text=Hello%20WEDTEC%20EVENTS%2C%20I%27d%20love%20to%20talk%20about%20my%20wedding."
              rel="noreferrer"
              target="_blank"
            >
              <svg aria-hidden="true" className="h-[30px] w-[30px] max-[760px]:h-[26px] max-[760px]:w-[26px]" viewBox="0 0 24 24" fill="none">
                <path d="M20.2 11.8a8.2 8.2 0 0 1-12.1 7.2L3.5 20l1.1-4.4a8.2 8.2 0 1 1 15.6-3.8Z" stroke="white" strokeWidth="1.7" strokeLinejoin="round" />
                <path d="M8.6 8.2c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .5l-.5.7c-.2.2-.2.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.2.1.4.3.4.5 0 .5-.2 1-.6 1.3-.5.4-1.1.6-1.7.5-1-.1-2.2-.7-3.5-1.8-1.1-1-2-2.3-2.3-3.4-.2-.7-.1-1.4.3-2Z" fill="white" />
              </svg>
            </a>
          </div>
        </div>
      </div>
   
    </section>
  );
}
