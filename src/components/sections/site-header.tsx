"use client";

import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { ArrowIcon } from './shared';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="absolute fixed z-10 top-0 left-0 flex w-full h-[94px] items-center justify-between border-b border-[#e3ba6f]/25 bg-[#090908] px-[7.3%] text-white shadow-[0_8px_24px_rgba(9,9,8,0.16)] max-[760px]:top-[14px] max-[760px]:right-[14px] max-[760px]:left-[14px] max-[760px]:w-auto max-[760px]:h-[78px] max-[760px]:px-[6%] min-[761px]:max-[900px]:h-[78px] min-[761px]:max-[900px]:px-[6%] min-[761px]:max-[1000px]:px-[5%] ">
      <a aria-label="WEDTEC EVENTS home" className="inline-flex flex-col items-center gap-[5px] h-auto " href="#home" onClick={closeMenu}>
        <BrandLogo className="h-auto w-[240px] max-sm:w-[158px]" />
      </a>
      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="hidden relative z-[12] w-[42px] h-[42px] cursor-pointer flex-col items-center justify-center gap-[6px] border border-white/60 bg-transparent text-white max-[760px]:flex min-[761px]:max-[900px]:flex"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="h-px w-[15px] bg-current" />
        <span className="h-px w-[15px] bg-current" />
      </button>
      <nav
        className={`flex items-center gap-[clamp(24px,3.2vw,52px)] text-[13px] tracking-[0.06em] max-[760px]:absolute max-[760px]:top-0 max-[760px]:right-0 max-[760px]:left-0 max-[760px]:hidden max-[760px]:items-stretch max-[760px]:gap-0 max-[760px]:bg-[#090908] max-[760px]:px-[8%] max-[760px]:pt-[90px] max-[760px]:pb-[30px] max-[760px]:text-[13px] min-[761px]:max-[900px]:absolute min-[761px]:max-[900px]:top-0 min-[761px]:max-[900px]:right-0 min-[761px]:max-[900px]:left-0 min-[761px]:max-[900px]:hidden min-[761px]:max-[900px]:items-stretch min-[761px]:max-[900px]:gap-0 min-[761px]:max-[900px]:bg-[#090908] min-[761px]:max-[900px]:px-[8%] min-[761px]:max-[900px]:pt-[90px] min-[761px]:max-[900px]:pb-[30px] min-[761px]:max-[900px]:text-[13px] ${menuOpen ? "!flex flex-col" : ""}`}
        aria-label="Main navigation"
      >
        <a className="transition-opacity hover:opacity-[0.68] max-[760px]:border-t max-[760px]:border-white/15 max-[760px]:py-4 min-[761px]:max-[900px]:border-t min-[761px]:max-[900px]:border-white/15 min-[761px]:max-[900px]:py-4" href="#about" onClick={closeMenu}>About us</a>
        <a className="transition-opacity hover:opacity-[0.68] max-[760px]:border-t max-[760px]:border-white/15 max-[760px]:py-4 min-[761px]:max-[900px]:border-t min-[761px]:max-[900px]:border-white/15 min-[761px]:max-[900px]:py-4" href="#services" onClick={closeMenu}>Services</a>
        <a className="transition-opacity hover:opacity-[0.68] max-[760px]:border-t max-[760px]:border-white/15 max-[760px]:py-4 min-[761px]:max-[900px]:border-t min-[761px]:max-[900px]:border-white/15 min-[761px]:max-[900px]:py-4" href="#work" onClick={closeMenu}>Our work</a>
        <a className="transition-opacity hover:opacity-[0.68] max-[760px]:border-t max-[760px]:border-white/15 max-[760px]:py-4 min-[761px]:max-[900px]:border-t min-[761px]:max-[900px]:border-white/15 min-[761px]:max-[900px]:py-4" href="#gallery" onClick={closeMenu}>Gallery</a>
        <a className="transition-opacity hover:opacity-[0.68] max-[760px]:border-t max-[760px]:border-white/15 max-[760px]:py-4 min-[761px]:max-[900px]:border-t min-[761px]:max-[900px]:border-white/15 min-[761px]:max-[900px]:py-4" href="#results" onClick={closeMenu}>Our results</a>
        <a className="flex items-center gap-[9px] transition-opacity hover:opacity-[0.68] max-[760px]:justify-between max-[760px]:border-t max-[760px]:border-white/15 max-[760px]:py-4 min-[761px]:max-[900px]:justify-between min-[761px]:max-[900px]:border-t min-[761px]:max-[900px]:border-white/15 min-[761px]:max-[900px]:py-4" href="#contact" onClick={closeMenu}>
          Let&apos;s talk <ArrowIcon diagonal />
        </a>
      </nav>
    </header>
  );
}
