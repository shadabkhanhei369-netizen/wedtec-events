const contactActions = [
  {
    label: "Call Now",
    href: "tel:+918904399882",
    ariaLabel: "Call WEDTEC EVENTS",
    className: "bg-[#3c000c] !text-white hover:bg-[#520817]",
    icon: (
      <svg aria-hidden="true" className="size-7 shrink-0" fill="white" viewBox="0 0 24 24">
        <path
          d="M7.1 3.8h2.5l1.2 4.1-1.9 1.9a15.4 15.4 0 0 0 5.3 5.3l1.9-1.9 4.1 1.2v2.5c0 1.1-.9 2-2 2A15.2 15.2 0 0 1 5.1 5.8c0-1.1.9-2 2-2Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
      </svg>
    ),
  },
  {
    label: "Whatsapp",
    href: "https://wa.me/918904399882?text=Hello%20WEDTEC%20EVENTS%2C%20I%27d%20love%20to%20talk%20about%20my%20wedding.",
    ariaLabel: "Contact WEDTEC EVENTS on WhatsApp",
    className: "bg-[#08bf58] !text-white hover:bg-[#079b49]",
    external: true,
    icon: (
      <svg aria-hidden="true" className="size-7 shrink-0" fill="none" viewBox="0 0 24 24">
        <path
          d="M20.2 11.8a8.2 8.2 0 0 1-12.1 7.2L3.5 20l1.1-4.4a8.2 8.2 0 1 1 15.6-3.8Z"
          stroke="white"
          strokeLinejoin="round"
          strokeWidth="1.7"
        />
        <path
          d="M8.6 8.2c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .5l-.5.7c-.2.2-.2.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.2.1.4.3.4.5 0 .5-.2 1-.6 1.3-.5.4-1.1.6-1.7.5-1-.1-2.2-.7-3.5-1.8-1.1-1-2-2.3-2.3-3.4-.2-.7-.1-1.4.3-2Z"
          fill="white"
        />
      </svg>
    ),
  },
];

export function FloatingContactButtons() {
  return (
    <>
      <div aria-hidden="true" className="h-[calc(48px+env(safe-area-inset-bottom))] min-[761px]:hidden" />
      <nav
        aria-label="Quick contact"
        className="fixed right-6 bottom-6 z-50 flex flex-col gap-3 max-[760px]:right-0 max-[760px]:bottom-0 max-[760px]:left-0 max-[760px]:grid max-[760px]:w-full max-[760px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[760px]:gap-0 max-[760px]:bg-transparent max-[760px]:pb-[env(safe-area-inset-bottom)]"
      >
        {contactActions.map((action) => (
          <a
            aria-label={action.ariaLabel}
            className={`flex size-14 min-w-0 items-center justify-center rounded-full text-[13px] font-semibold shadow-[0_8px_24px_rgba(60,0,12,0.2)] transition-[background-color,transform] duration-200 hover:-translate-y-0.5 max-[760px]:h-12 max-[760px]:w-full max-[760px]:gap-2 max-[760px]:rounded-none max-[760px]:px-3 max-[760px]:text-[14px] max-[760px]:shadow-none max-[760px]:hover:translate-y-0 ${action.className}`}
            href={action.href}
            key={action.label}
            rel={action.external ? "noreferrer" : undefined}
            target={action.external ? "_blank" : undefined}
          >
            <span className="max-[760px]:text-current [&>svg]:size-5">{action.icon}</span>
            <span className="sr-only max-[760px]:not-sr-only">{action.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
