"use client";

import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return (
    <footer className="min-h-[120px] bg-[#090908] text-white px-[7.3%] py-[53px] pb-[22px] max-[760px]:min-h-0 max-[760px]:px-[7%] max-[760px]:pt-[37px] max-[760px]:pb-5">
      <div className="grid grid-cols-[1.2fr_1fr_0.8fr_1fr] gap-[35px] pb-[43px] max-[760px]:grid-cols-2 max-[760px]:gap-[30px_18px] max-[760px]:pb-8 min-[761px]:max-[1000px]:grid-cols-2">
        <a aria-label="WEDTEC EVENTS home" className="inline-flex flex-col items-center gap-[5px] justify-self-start self-start" href="#home">
          <BrandLogo className="h-auto w-[240px] max-sm:w-[158px]" />
        </a>
        <p className="m-0 font-serif text-[18px] leading-[1.5] text-white/65 tracking-[0.04em] max-[760px]:self-start max-[760px]:text-base">Thoughtful celebrations.<br />Lasting memories.</p>
        <div className="flex min-w-0 flex-col items-start gap-[13px] max-[760px]:gap-3">
          <a className="text-[12px] text-white/70 transition-colors hover:text-[#e3ba6f] max-[760px]:[overflow-wrap:anywhere] max-[760px]:leading-[1.5]" href="#services">Our services</a>
          <a className="text-[12px] text-white/70 transition-colors hover:text-[#e3ba6f] max-[760px]:[overflow-wrap:anywhere] max-[760px]:leading-[1.5]" href="#work">Our work</a>
          <a className="text-[12px] text-white/70 transition-colors hover:text-[#e3ba6f] max-[760px]:[overflow-wrap:anywhere] max-[760px]:leading-[1.5]" href="#gallery">Gallery</a>
          <a className="text-[12px] text-white/70 transition-colors hover:text-[#e3ba6f] max-[760px]:[overflow-wrap:anywhere] max-[760px]:leading-[1.5]" href="#faq">FAQs</a>
        </div>
        <div className="flex min-w-0 flex-col items-start gap-[13px] max-[760px]:gap-3">
          <a className="text-[12px] text-white/70 transition-colors hover:text-[#e3ba6f] max-[760px]:[overflow-wrap:anywhere] max-[760px]:leading-[1.5]" href="#about">About WEDTEC</a>
          <a className="text-[12px] text-white/70 transition-colors hover:text-[#e3ba6f] max-[760px]:[overflow-wrap:anywhere] max-[760px]:leading-[1.5]" href="#strategy">Our plan & strategy</a>
          <a className="text-[12px] text-white/70 transition-colors hover:text-[#e3ba6f] max-[760px]:[overflow-wrap:anywhere] max-[760px]:leading-[1.5]" href="#contact">Get in touch</a>
          <a className="text-[12px] text-white/70 transition-colors hover:text-[#e3ba6f] max-[760px]:[overflow-wrap:anywhere] max-[760px]:leading-[1.5]" href="mailto:hello@wedtecevents.com">hello@wedtecevents.com</a>
          <div className="mt-2">
            <span className="mb-3 block text-[8px] tracking-[0.16em] text-white/50">FOLLOW OUR JOURNEY</span>
            <div className="flex items-center gap-2">
              <a aria-label="Instagram" className="grid size-9 place-items-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-[#e3ba6f] hover:text-[#e3ba6f]" href="https://www.instagram.com/wedtec_events?exln=N3JsNzY4Z29oY2w3" rel="noreferrer" target="_blank">
                <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
                  <rect height="16" rx="4" stroke="currentColor" strokeWidth="1.6" width="16" x="4" y="4" />
                  <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.5" cy="6.8" r="1" fill="currentColor" />
                </svg>
              </a>
              <a aria-label="Facebook" className="grid size-9 place-items-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-[#e3ba6f] hover:text-[#e3ba6f]" href="https://www.facebook.com/share/14uALKUodVE/" rel="noreferrer" target="_blank">
                <svg aria-hidden="true" className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.4 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.2V13H10v8h3.4Z" />
                </svg>
              </a>
              {/* <a aria-label="Pinterest (add WEDTEC profile link)" className="grid size-9 place-items-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-[#e3ba6f] hover:text-[#e3ba6f]" href="https://www.pinterest.com/" rel="noreferrer" target="_blank">
                <svg aria-hidden="true" className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.1 3a9 9 0 0 0-3.3 17.4c0-.7 0-1.6.2-2.4l1.2-5s-.3-.6-.3-1.5c0-1.4.8-2.4 1.8-2.4.8 0 1.2.6 1.2 1.4 0 .8-.5 2-.8 3.1-.2.9.4 1.6 1.3 1.6 1.6 0 2.8-1.7 2.8-4.2 0-2.2-1.6-3.7-3.8-3.7-2.6 0-4.1 1.9-4.1 3.9 0 .8.3 1.6.7 2 .2.2.2.3.1.6l-.3 1c-.1.3-.3.4-.6.2-1.1-.5-1.7-2-1.7-3.2 0-2.6 1.9-5.1 5.6-5.1 3 0 5.3 2.2 5.3 5.1 0 3-1.9 5.5-4.6 5.5-.9 0-1.8-.5-2.1-1l-.6 2.4c-.2.9-.8 1.8-1.2 2.4.9.3 1.8.5 2.8.5a9 9 0 0 0 0-18Z" />
                </svg>
              </a> */}
              {/* <a aria-label="YouTube (add WEDTEC channel link)" className="grid size-9 place-items-center rounded-full border border-white/20 text-white/75 transition-colors hover:border-[#e3ba6f] hover:text-[#e3ba6f]" href="https://www.youtube.com/" rel="noreferrer" target="_blank">
                <svg aria-hidden="true" className="size-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.7 12 4.7 12 4.7s-5.9 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.8 2.8 2.8 0 0 0 2 2c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.8ZM10 15.2V8.8l5.5 3.2-5.5 3.2Z" />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-white/20 pt-[17px] text-[8px] tracking-[0.09em] text-white/55 max-[760px]:text-[10px]">
        <span>© WEDTEC EVENTS</span>
        <nav aria-label="Legal policies" className="flex flex-wrap gap-x-4 gap-y-2">
          <a className="transition-colors hover:text-[#e3ba6f] text-[10px]" href="/privacy-policy">Privacy policy</a>
          <a className="transition-colors hover:text-[#e3ba6f] text-[10px]" href="/terms-and-conditions">Terms & conditions</a>
          <a className="transition-colors hover:text-[#e3ba6f] text-[10px]" href="/cookie-policy">Cookie policy</a>
        </nav>
        <a className="transition-colors hover:text-[#e3ba6f] text-[10px]" href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}
