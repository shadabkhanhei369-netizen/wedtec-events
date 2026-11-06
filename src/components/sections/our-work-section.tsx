"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { motion } from "framer-motion";
import { reveal, workVideos, ArrowIcon } from './shared';
import {
  getCenteredScrollLeft,
  getLoopRecenter,
  getScaleOverflowPadding,
} from "./our-work-carousel-geometry.mjs";

function getCenteredCardIndex(track: HTMLDivElement) {
  const trackCenter = track.getBoundingClientRect().left + track.clientWidth / 2;
  return Array.from(track.children).reduce(
    (closest, card, index) => {
      const bounds = card.getBoundingClientRect();
      const distance = Math.abs(bounds.left + bounds.width / 2 - trackCenter);
      return distance < closest.distance ? { index, distance } : closest;
    },
    { index: 0, distance: Number.POSITIVE_INFINITY },
  ).index;
}

function scrollTrackInstantly(track: HTMLDivElement, left: number) {
  const previousScrollBehavior = track.style.scrollBehavior;
  track.style.scrollBehavior = "auto";
  track.scrollLeft = left;
  window.requestAnimationFrame(() => {
    track.style.scrollBehavior = previousScrollBehavior;
  });
}

export function OurWorkSection() {
  const [activeWork, setActiveWork] = useState<number | null>(null);
  const [centeredWork, setCenteredWork] = useState(0);
  const [isDraggingWork, setIsDraggingWork] = useState(false);
  const workTrackRef = useRef<HTMLDivElement>(null);
  const workDragRef = useRef<{
    pointerId: number;
    startX: number;
    startScrollLeft: number;
    moved: boolean;
  } | null>(null);
  const workPointerInsideRef = useRef(false);
  const suppressWorkClickRef = useRef(false);

  const updateCenteredWork = useCallback(() => {
    const track = workTrackRef.current;
    if (!track) return;

    setCenteredWork(getCenteredCardIndex(track));
  }, []);

  const recenterWorkTrack = useCallback(() => {
    const track = workTrackRef.current;
    if (!track) return;

    const cards = Array.from(
      track.querySelectorAll<HTMLButtonElement>(":scope > button"),
    );
    const itemCount = workVideos.length;
    const { centeredIndex, cycles } = getLoopRecenter(
      getCenteredCardIndex(track),
      itemCount,
      5,
    );
    const loopDistance = cards[itemCount].offsetLeft - cards[0].offsetLeft;
    const scrollAdjustment = cycles * loopDistance;

    if (scrollAdjustment !== 0) {
      scrollTrackInstantly(track, track.scrollLeft + scrollAdjustment);
      if (workDragRef.current) {
        workDragRef.current.startScrollLeft += scrollAdjustment;
      }
      setActiveWork((activeIndex) => {
        if (activeIndex === null) return null;
        const recenteredIndex = activeIndex + cycles * itemCount;
        return recenteredIndex >= itemCount &&
          recenteredIndex < itemCount * 4
          ? recenteredIndex
          : activeIndex;
      });
    }

    setCenteredWork(centeredIndex);
  }, []);

  const scrollWork = useCallback((direction: -1 | 1) => {
    const track = workTrackRef.current;
    if (!track) return;

    const cards = Array.from(
      track.querySelectorAll<HTMLButtonElement>(":scope > button"),
    );
    if (cards.length === 0) return;

    const trackBounds = track.getBoundingClientRect();
    const trackCenter = trackBounds.left + trackBounds.width / 2;
    const currentIndex = cards.reduce(
      (closestIndex, card, index) => {
        const cardBounds = card.getBoundingClientRect();
        const cardCenter = cardBounds.left + cardBounds.width / 2;
        const distance = Math.abs(cardCenter - trackCenter);
        return distance < closestIndex.distance
          ? { index, distance }
          : closestIndex;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY },
    ).index;
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0 || nextIndex >= cards.length) {
      const itemIndex = currentIndex % workVideos.length;
      nextIndex =
        workVideos.length * 2 +
        ((itemIndex + direction + workVideos.length) % workVideos.length);
    }
    const nextCard = cards[nextIndex];
    const nextLeft = getCenteredScrollLeft(
      nextCard.offsetLeft,
      nextCard.offsetWidth,
      track.clientWidth,
    );
    const maxScrollLeft = track.scrollWidth - track.clientWidth;

    track.scrollTo({
      left: Math.max(0, Math.min(nextLeft, maxScrollLeft)),
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const track = workTrackRef.current;
    if (!track) return;

    const cards = Array.from(
      track.querySelectorAll<HTMLButtonElement>(":scope > button"),
    );
    const initialCard = cards[workVideos.length * 2];
    if (initialCard) {
      scrollTrackInstantly(
        track,
        getCenteredScrollLeft(
          initialCard.offsetLeft,
          initialCard.offsetWidth,
          track.clientWidth,
        ),
      );
      setCenteredWork(workVideos.length * 2);
    }

    const updateScalePadding = () => {
      const firstCard = track.querySelector<HTMLButtonElement>(
        ":scope > button",
      );
      if (!firstCard) return;

      track.style.paddingBlock = `${getScaleOverflowPadding(firstCard.offsetHeight, 1.2)}px`;
    };

    let frameId = 0;
    let recenterTimeout = 0;
    const handleScrollEnd = () => {
      window.clearTimeout(recenterTimeout);
      if (workDragRef.current) return;
      recenterWorkTrack();
    };
    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateCenteredWork);
      window.clearTimeout(recenterTimeout);
      if (!workDragRef.current) {
        recenterTimeout = window.setTimeout(recenterWorkTrack, 700);
      }
    };

    updateScalePadding();
    const resizeObserver = new ResizeObserver(updateScalePadding);
    const firstCard = track.querySelector(":scope > button");
    if (firstCard) resizeObserver.observe(firstCard);

    scheduleUpdate();
    track.addEventListener("scroll", scheduleUpdate, { passive: true });
    track.addEventListener("scrollend", handleScrollEnd);
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(recenterTimeout);
      resizeObserver.disconnect();
      track.removeEventListener("scroll", scheduleUpdate);
      track.removeEventListener("scrollend", handleScrollEnd);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [recenterWorkTrack, updateCenteredWork]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const track = workTrackRef.current;
      if (
        !track ||
        document.visibilityState !== "visible" ||
        workPointerInsideRef.current ||
        workDragRef.current ||
        track.contains(document.activeElement)
      ) {
        return;
      }

      const bounds = track.getBoundingClientRect();
      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;

      scrollWork(1);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [scrollWork]);

  const handleWorkPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    workDragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDraggingWork(true);
  };

  const handleWorkPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = workDragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 5) drag.moved = true;
    if (drag.moved) event.currentTarget.scrollLeft = drag.startScrollLeft - delta;
  };

  const handleWorkPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const drag = workDragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    if (drag.moved) suppressWorkClickRef.current = true;
    workDragRef.current = null;
    setIsDraggingWork(false);
    window.setTimeout(recenterWorkTrack, 50);
  };

  return (
    <section className="relative overflow-hidden bg-[#ffecd1] py-[50px] md:py-[80px]" id="work">
      <div className="relative z-[1] mx-auto w-[min(1120px,86%)] min-[761px]:max-[1000px]:w-[88%] ">
        <motion.div
          className="mb-10 text-center sm:mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
        >
          <span className="block text-[10px] tracking-[0.2em] text-[#3c000c]">A FEW FAVOURITE MOMENTS</span>
          <h2 className="mx-auto mb-4 mt-4 max-w-[740px] font-serif text-[clamp(38px,5vw,62px)] font-normal leading-[1.08] tracking-[-0.045em] text-[#3c000c]">
           From the First Thought to the  <em className="text-[#3c000c]">Final Applause.</em>
          </h2>
          <p className="mx-auto mb-0 max-w-[980px] text-[15px] leading-[1.9] text-[#77736c]">
         What begins as a conversation gradually becomes a place, an atmosphere and an experience shared by many. These are some of the celebrations we've helped shape, each brought to life through creative thinking, thoughtful planning and careful execution.

          </p>
        </motion.div>
        <div className="relative">
          <div
            className={`flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6 max-[760px]:-mx-[7vw] max-[760px]:w-[100vw] max-[760px]:px-[14vw] ${isDraggingWork ? "cursor-grabbing select-none" : "cursor-grab"}`}
            ref={workTrackRef}
            aria-label="Wedding celebration films"
            onClickCapture={(event) => {
              if (!suppressWorkClickRef.current) return;
              event.preventDefault();
              event.stopPropagation();
              suppressWorkClickRef.current = false;
            }}
            onPointerDown={handleWorkPointerDown}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") workPointerInsideRef.current = true;
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") workPointerInsideRef.current = false;
            }}
            onPointerMove={handleWorkPointerMove}
            onPointerUp={handleWorkPointerUp}
            onPointerCancel={handleWorkPointerUp}
          >
          {[...workVideos, ...workVideos, ...workVideos, ...workVideos, ...workVideos].map((item, index) => {
            const isPlaying = activeWork === index;
            return (
              <motion.button
                className={`group relative aspect-[0.52] w-[72vw] shrink-0 snap-center overflow-hidden rounded-[5px] bg-[#3c000c] text-left text-white shadow-[0_12px_30px_rgba(37,35,31,0.12)] transition-[border-radius,transform] duration-300 ease-out sm:w-[40vw] lg:w-[calc((100%-6rem)/5)] lg:origin-center  ${centeredWork === index ? "z-10 !rounded-2xl lg:scale-[1.2]" : "z-0 lg:scale-[0.8]"}`}
                key={`${index}-${item.title}`}
                onBlur={() => setActiveWork(null)}
                onClick={() => setActiveWork(isPlaying ? null : index)}
                onFocus={() => setActiveWork(index)}
                onMouseEnter={() => setActiveWork(index)}
                onMouseLeave={() => setActiveWork(null)}
                type="button"
                aria-label={`${isPlaying ? "Pause preview of" : "Preview"} ${item.title}`}
                aria-pressed={isPlaying}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: (index % workVideos.length) * 0.08,
                }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url("${item.poster}")` }}
                />
                {isPlaying && (
                  <video
                    autoPlay
                    className="absolute inset-0 h-full w-full bg-[#000] object-contain"
                    loop
                    muted
                    playsInline
                    poster={item.poster}
                    preload="auto"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 overflow-hidden">
                  <motion.div
                    animate={isPlaying ? { y: "110%", opacity: 0 } : { y: 0, opacity: 1 }}
                    className="p-4 sm:p-5"
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                  <span className="mb-2 block text-[8px] tracking-[0.18em] text-white/75 sm:text-[9px]">
                    WEDTEC EVENTS
                  </span>
                  <span className="block font-serif text-[clamp(17px,2vw,26px)] leading-tight">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-[9px] text-white/75 sm:text-[11px]">
                    {item.location}
                  </span>
                  </motion.div>
                </div>
              </motion.button>
            );
            })}
          </div>
          <div className="pointer-events-none absolute inset-x-1 top-1/2 z-20 flex -translate-y-1/2 justify-between sm:inset-x-[-3.25rem]">
          <button
            aria-label="Scroll to previous wedding films"
            className="pointer-events-auto grid size-9 place-items-center rounded-full border border-[#3c000c]/20 bg-white/95 text-[#3c000c] shadow-md transition hover:bg-[#3c000c] hover:text-white sm:size-10"
            onClick={() => scrollWork(-1)}
            type="button"
          >
            <span aria-hidden="true" className="text-xl leading-none">‹</span>
          </button>
          <button
            aria-label="Scroll to more wedding films"
            className="pointer-events-auto grid size-9 place-items-center rounded-full border border-[#3c000c]/20 bg-white/95 text-[#3c000c] shadow-md transition hover:bg-[#3c000c] hover:text-white sm:size-10"
            onClick={() => scrollWork(1)}
            type="button"
          >
            <span aria-hidden="true" className="text-xl leading-none">›</span>
          </button>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a className="group inline-flex items-center gap-4 border-b border-[#c9c4b8] pb-[9px] text-[12px] tracking-[0.025em]" href="#contact">
            Create a celebration like this <ArrowIcon />
          </a>
        </div>
      </div>
    
    </section>
  );
}
