"use client";

import { useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { motion } from "framer-motion";
import { reveal, workVideos, ArrowIcon } from './shared';

export function OurResultsSection() {
  const [activeResult, setActiveResult] = useState(0);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    moved: boolean;
  } | null>(null);
  const suppressClickRef = useRef(false);

  const moveResult = (direction: -1 | 1) => {
    setActiveResult((current) => (current + direction + workVideos.length) % workVideos.length);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    if (drag.moved) {
      suppressClickRef.current = true;
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
      if (Math.abs(deltaX) > 40) {
        moveResult(deltaX < 0 ? 1 : -1);
      }
    }

    dragRef.current = null;
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    if (Math.abs(event.clientX - drag.startX) > 8) drag.moved = true;
  };

  const handlePointerCancel = () => {
    dragRef.current = null;
  };

  const visibleResults = ([-1, 0, 1] as const).map((offset) => ({
    item: workVideos[(activeResult + offset + workVideos.length) % workVideos.length],
    offset,
  }));

  return (
    <section className="overflow-hidden bg-[#ffecd1] py-[80px] md:py-[80px]" id="results">
      <motion.div
        className="mx-auto w-[min(1440px,90%)] min-[761px]:max-[1000px]:w-[88%]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={reveal}
      >
        <div className="mx-auto mb-10 max-w-[700px] text-center sm:mb-14">
          <span className="block text-[10px] tracking-[0.2em] leading-[1.5] text-[#3c000c]">A GLIMPSE INTO OUR WORK
</span>
          <h2 className="mt-[17px] font-serif text-[clamp(38px,5vw,56px)] font-normal tracking-[-0.045em] leading-[1.1] text-[#3c000c]">
            Celebrations, <em className="font-normal text-[#3c000c]">brought together by WEDTEC Events.
</em>
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-[1.9] text-[#77736c]">
          Explore a selection of weddings and events we've planned and executed, each shaped by a distinct vision, setting and celebration.
          </p>
        </div>
        <div className="relative mx-auto flex min-h-[clamp(210px,42vw,470px)] items-center justify-center">
          <div
            className="absolute inset-0 w-full touch-pan-y cursor-grab active:cursor-grabbing"
            onClickCapture={(event) => {
              if (!suppressClickRef.current) return;
              event.preventDefault();
              event.stopPropagation();
              suppressClickRef.current = false;
            }}
            onPointerCancel={handlePointerCancel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
          >
            {visibleResults.map(({ item, offset }) => {
              const isActive = offset === 0;
              return (
                <motion.button
                  animate={{
                    opacity: isActive ? 1 : 0.82,
                    scale: isActive ? 1 : 0.94,
                    y: isActive ? 0 : 0,
                  }}
                  aria-label={`${isActive ? "Currently showing" : "Show"} ${item.title}`}
                  aria-pressed={isActive}
                  className={`group absolute top-1/2 block min-w-0 -translate-y-1/2 overflow-hidden rounded-[1.5rem] bg-[#3c000c] text-left text-white shadow-[0_22px_60px_rgba(37,35,31,0.22)] transition-[border,box-shadow] duration-500 sm:rounded-[2rem] ${isActive ? "left-1/2 z-20 w-[82%] -translate-x-1/2 border-2 border-white sm:w-[58%]" : offset < 0 ? "left-[-7%] z-10 w-[58%] cursor-pointer sm:left-[4%] sm:w-[34%]" : "right-[-7%] z-10 w-[58%] cursor-pointer sm:right-[4%] sm:w-[34%]"}`}
                  key={`${item.title}-${offset}`}
                  onClick={() => {
                    if (!isActive) moveResult(offset);
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  type="button"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <video
                      autoPlay={isActive}
                      className={`absolute inset-0 h-full w-full object-cover transition-[filter,transform] duration-500 ${isActive ? "scale-100 blur-0" : "scale-110 blur-[2px]"}`}
                      loop
                      muted
                      playsInline
                      poster={item.poster}
                      onEnded={isActive ? () => moveResult(1) : undefined}
                      preload={isActive ? "auto" : "none"}
                      ref={(element) => {
                        if (element && !isActive) element.pause();
                      }}
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                    <div className={`absolute inset-0 ${isActive ? "bg-gradient-to-t from-black/75 via-black/10 to-transparent" : "bg-gradient-to-t from-black/75 via-black/25 to-black/20"}`} />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-left sm:p-6 lg:p-8">
                      <span className="mb-2 block text-[8px] tracking-[0.18em] text-white/75 sm:text-[9px]">WEDTEC EVENTS</span>
                      <span className={`block font-serif leading-tight ${isActive ? "text-[clamp(22px,3.5vw,46px)]" : "text-[clamp(20px,2.5vw,36px)]"}`}>{item.title}</span>
                      <span className="mt-2 block text-[9px] text-white/75 sm:text-[11px]">{item.location}</span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
          <button
            aria-label="Previous result video"
            className="absolute left-[-3%] top-1/2 z-30 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-[#3c000c]/20 bg-white/90 text-[#3c000c] shadow-sm transition hover:bg-[#3c000c] hover:text-white sm:left-[-2%] sm:size-11"
            onClick={() => moveResult(-1)}
            type="button"
          >
            <span aria-hidden="true" className="text-xl leading-none">‹</span>
          </button>
          <button
            aria-label="Next result video"
            className="absolute right-[-3%] top-1/2 z-30 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-[#3c000c]/20 bg-white/90 text-[#3c000c] shadow-sm transition hover:bg-[#3c000c] hover:text-white sm:right-[-2%] sm:size-11"
            onClick={() => moveResult(1)}
            type="button"
          >
            <span aria-hidden="true" className="text-xl leading-none">›</span>
          </button>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2" aria-label="Choose a result video">
          {workVideos.map((item, index) => (
            <button
              aria-label={`Show ${item.title}`}
              aria-current={index === activeResult ? "true" : undefined}
              className={`h-[7px] rounded-full transition-all duration-300 ${index === activeResult ? "w-6 bg-[#3c000c]" : "w-[7px] bg-[#c9c4b8] hover:bg-[#3c000c]"}`}
              key={item.title}
              onClick={() => setActiveResult(index)}
              type="button"
            />
          ))}
        </div>
        <p className="mx-auto mt-5 max-w-[580px] text-center text-[15px] leading-[1.8] text-[#77736c]">
          These visuals offer a glimpse of our creative vision. We look forward to showcasing the weddings and events we bring to life as our portfolio evolves.

        </p>
        <div className="mt-7 text-center">
          <a className="group inline-flex items-center gap-4 border-b border-[#3c000c] pb-[9px] text-[14px] tracking-[0.025em]" href="#contact">
            Let&apos;s create your celebration
             <ArrowIcon />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
