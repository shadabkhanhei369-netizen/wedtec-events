"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isWatermarkOnLeft, setIsWatermarkOnLeft] = useState(false);
  const [isWatermarkVisible, setIsWatermarkVisible] = useState(true);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsHeroVisible(entry.isIntersecting);
    });

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".site-content section"));
    if (sections.length === 0) return;

    let currentSide = false;
    let pendingSide: boolean | null = null;
    let sideChangeTimeout: ReturnType<typeof setTimeout> | null = null;

    const updateWatermarkSide = () => {
      const midpoint = window.innerHeight / 2;
      const currentSectionIndex = sections.reduce(
        (currentIndex, section, index) =>
          section.getBoundingClientRect().top <= midpoint ? index : currentIndex,
        0,
      );
      const desiredSide = Math.floor(currentSectionIndex / 3) === 1;

      if (desiredSide === pendingSide) return;

      if (desiredSide === currentSide) {
        if (sideChangeTimeout) clearTimeout(sideChangeTimeout);
        sideChangeTimeout = null;
        pendingSide = null;
        setIsWatermarkVisible(true);
        return;
      }

      if (sideChangeTimeout) clearTimeout(sideChangeTimeout);
      pendingSide = desiredSide;
      setIsWatermarkVisible(false);
      sideChangeTimeout = setTimeout(() => {
        currentSide = desiredSide;
        pendingSide = null;
        sideChangeTimeout = null;
        setIsWatermarkOnLeft(desiredSide);
        setIsWatermarkVisible(true);
      }, 250);
    };

    updateWatermarkSide();
    window.addEventListener("scroll", updateWatermarkSide, { passive: true });
    window.addEventListener("resize", updateWatermarkSide);
    return () => {
      window.removeEventListener("scroll", updateWatermarkSide);
      window.removeEventListener("resize", updateWatermarkSide);
      if (sideChangeTimeout) clearTimeout(sideChangeTimeout);
    };
  }, []);

  return (
    <main className="site-master relative">
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed ${isWatermarkOnLeft ? "left-1/7 rotate-[50deg]" : "left-4/5 rotate-[320deg]"} top-1/2 z-[1] size-[100vw] max-md:size-[120vw] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${isHeroVisible || !isWatermarkVisible ? "opacity-0" : "opacity-10"}`}>
        <Image
          alt=""
          className="object-contain"
          fill
          sizes="50vw"
          src="/logo/meruncolorlogo.svg"
        />
      </div>
      <div className="site-content">{children}</div>
    </main>
  );
}
