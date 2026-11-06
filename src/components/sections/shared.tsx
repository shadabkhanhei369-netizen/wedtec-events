export const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export const services = [
  { title: "Wedding planning", icon: "planning", image: "photo-1519741497674-611481863552" },
  { title: "Venue selection", icon: "venue", image: "photo-1519167758481-83f550bb49b3" },
  { title: "Décor & design", icon: "design", image: "photo-1519225421980-715cb0215aed" },
  { title: "Floral styling", icon: "florals", image: "photo-1464366400600-7168b8af9bc3" },
  { title: "Food & catering", icon: "dining", image: "photo-1511795409834-ef04bbd61622" },
  { title: "Photography & film", icon: "photography", image: "photo-1537633552985-df8429e8048b" },
  { title: "Entertainment", icon: "entertainment", image: "photo-1470229722913-7c0e2dbbafd3" },
  { title: "Destination weddings", icon: "destination", image: "photo-1507504031003-b417219a0fde" },
  { title: "DJ & live music", icon: "entertainment", image: "photo-1501386761578-eac5c94b800a" },
  { title: "Mehndi artists", icon: "florals", image: "photo-1519741497674-611481863552" },
  { title: "Bar & beverages", icon: "dining", image: "photo-1511795409834-ef04bbd61622" },
  { title: "Stage & production", icon: "design", image: "photo-1506157786151-b8491531f063" },
  { title: "Guest hospitality", icon: "venue", image: "photo-1519167758481-83f550bb49b3" },
  { title: "Transport & logistics", icon: "destination", image: "photo-1507504031003-b417219a0fde" },
  { title: "Bridal styling", icon: "photography", image: "photo-1537633552985-df8429e8048b" },
  { title: "Corporate & social events", icon: "planning", image: "photo-1511578314322-379afb476865" },
] as const;

export type ServiceIconName = (typeof services)[number]["icon"];

export const strategySteps = [
  {
    title: "1 Consult",
    subtitle: "Every great event begins with understanding.",
    description: "We get to know your vision, priorities, style and budget to understand what matters most to you.",
    image: "/approach/Consult.jpg",
    alt: "Outdoor wedding ceremony set with flowers and white chairs",
  },
  {
    title: "2 Plan",
    subtitle: "Your ideas take shape.",
    description: "We develop a tailored event plan that brings your vision, practical requirements and key decisions into one clear direction.",
    image: "/approach/Plan.jpg",
    alt: "Thoughtfully styled wedding table details",
  },
  {
    title: "3 Shortlist",
    subtitle: "Discover the possibilities.",
    description: "We help you explore suitable venues, creative concepts and vendors that align with your vision, preferences and budget.",
    image: "/approach/Shortlist.jpg",
    alt: "A beautifully prepared celebration venue",
  },
  {
    title: "4 Book",
    subtitle: "Decisions become arrangements.",
    description: "We coordinate selections, bookings and confirmations, helping turn your plans into a set of well-organised commitments.",
    image: "/approach/Book.jpg",
    alt: "An elegant wedding reception ready for guests",
  },
  {
    title: "5 Manage",
    subtitle: "Every moving part finds its place.",
    description: "We bring vendors, schedules and logistics into sync, keeping the preparations coordinated as your event takes shape.",
    image: "/approach/Manage.jpg",
    alt: "Guests arriving at a carefully arranged event",
  },
  {
    title: "6 Execute",
    subtitle: "The planning comes together.",
    description: "On the day, we oversee the arrangements and coordinate the details so everything works in harmony while you enjoy the occasion.",
    image: "/approach/Execute.jpg",
    alt: "Guests celebrating together on a dance floor",
  },
] as const;

export const strategyContentSequence = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.06, staggerChildren: 0.14 },
  },
};

export const strategyContentReveal = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

export const clientReviews = [
  {
    category: "Wedding planning",
    quote: "Add an approved client testimonial about the wedding planning experience here.",
    author: "Client name",
  },
  {
    category: "Venue & celebration",
    quote: "Add an approved Google review about the venue and celebration experience here.",
    author: "Client name",
  },
  {
    category: "Wedding design",
    quote: "Add an approved client testimonial about the decor and design experience here.",
    author: "Client name",
  },
  {
    category: "Destination wedding",
    quote: "Add an approved Google review about the destination wedding experience here.",
    author: "Client name",
  },
];

export const galleryImages = [
  { title: "A garden wedding", category: "WEDDINGS", image: "/ourgallery/01.jpg", alt: "Outdoor wedding ceremony in a garden" },
  { title: "A night to celebrate", category: "EVENTS", image: "/ourgallery/02.jpg", alt: "Elegant event venue prepared for a celebration" },
  { title: "The dance floor", category: "DJ & MUSIC", image: "/ourgallery/03.jpeg", alt: "Concert lights above a lively dance floor" },
  { title: "Details in bloom", category: "WEDDINGS", image: "/ourgallery/04.jpg", alt: "Wedding table decorated with flowers" },
  { title: "A beautiful setting", category: "EVENTS", image: "/ourgallery/05.jpg", alt: "Outdoor celebration venue at sunset" },
  { title: "Music after dark", category: "DJ & MUSIC", image: "/ourgallery/06.jpg", alt: "Live music and lights at an evening event" },
  { title: "A moment together", category: "WEDDINGS", image: "/ourgallery/07.jpg", alt: "Newlyweds sharing a joyful moment" },
  { title: "Tables set for guests", category: "EVENTS", image: "/ourgallery/08.jpg", alt: "Celebration table with flowers and candlelight" },
  { title: "Lights and celebration", category: "DJ & MUSIC", image: "/ourgallery/09.jpg", alt: "Colorful lights at a live music event" },
  { title: "An intimate ceremony", category: "WEDDINGS", image: "/ourgallery/10.jpg", alt: "Romantic intimate wedding celebration" },
  { title: "A grand welcome", category: "EVENTS", image: "/ourgallery/11.jpg", alt: "Guests arriving at a beautifully arranged event" },
  { title: "Celebrate together", category: "DJ & MUSIC", image: "/ourgallery/12.jpg", alt: "Crowd celebrating together at an event" },
  { title: "Candlelit details", category: "WEDDINGS", image: "/ourgallery/13.jpg", alt: "Romantic candlelit wedding reception" },
  { title: "A day to remember", category: "EVENTS", image: "/ourgallery/14.jpg", alt: "Guests enjoying a thoughtfully planned event" },
  { title: "The party begins", category: "DJ & MUSIC", image: "/ourgallery/15.jpg", alt: "DJ performing beneath dramatic event lighting" },
  { title: "A celebration in color", category: "WEDDINGS", image: "/ourgallery/16.jpg", alt: "Colorful wedding decorations and flowers" },
  { title: "Gathered around the table", category: "EVENTS", image: "/ourgallery/17.jpg", alt: "Guests gathered around a celebration table" },
  { title: "Sound and lights", category: "DJ & MUSIC", image: "/ourgallery/18.jpg", alt: "Stage lights and sound at a live event" },
  { title: "A joyful beginning", category: "WEDDINGS", image: "/ourgallery/19.jpg", alt: "Couple celebrating their wedding day" },
  { title: "Moments with meaning", category: "EVENTS", image: "/ourgallery/20.jpg", alt: "Elegant details arranged for a special event" },
].map((item) => ({
  ...item,
  src: item.image,
}));

export const faqs = [
  {
    question: "What kinds of celebrations do you plan?",
    answer:
      "We help shape weddings and wedding-weekend celebrations, from intimate gatherings to multi-day events. We’ll learn about your plans first and let you know how we can best support them.",
  },
  {
    question: "Can you help us find a venue?",
    answer:
      "Yes. We can help you explore venue options that suit your guest list, location, atmosphere and budget, then support the next planning steps.",
  },
  {
    question: "Do we need to have everything figured out before we contact you?",
    answer:
      "Not at all. A date, a rough guest count or even just a feeling is a lovely place to start. We can work through the details together.",
  },
  {
    question: "Can you work with our preferred vendors?",
    answer:
      "Of course. If you already have trusted creative partners, we’re happy to coordinate with them. We can also help you discover suppliers for the pieces still to be decided.",
  },
  {
    question: "How do we get started?",
    answer:
      "Send us a note with a little about your celebration. We’ll arrange an introductory conversation, hear what matters to you and talk through possible next steps.",
  },
];
// 8050614813
export const heroSlides = [
  {
    heading: "Every Beautiful Celebration Begins With a Dream.",
    eyebrow: "Every couple imagines their day differently. We begin by listening to the story you want to tell.",
    emphasis: "Weddings",
    caption: "Where your story begins",
    video: "/banner/banner1.mp4",
    poster: "https://assets.mixkit.co/videos/40584/40584-thumb-360-0.jpg",
    credit: "Newlyweds walking through a garden",
  },
  {
    heading: "THE ART IS IN THE DETAILS.",
    eyebrow: "From creative concepts to logistics, we bring every element together with a clear plan and a considered approach.",
    emphasis: "For Two",
    caption: "A moment just for two",
    video: "/banner/banner2.mp4",
    poster: "https://assets.mixkit.co/videos/40601/40601-thumb-360-0.jpg",
    credit: "Happy newlyweds posing",
  },
  {
    heading: "So You Can Be There for Every Moment.",
    eyebrow: "While we take care of the details, you get to be part of the memories that last a lifetime.",
    emphasis: "In Bloom",
    caption: "Every detail, thoughtfully chosen",
    video: "https://assets.mixkit.co/videos/5224/5224-720.mp4",
    poster: "https://assets.mixkit.co/videos/5224/5224-thumb-360-0.jpg",
    credit: "A decorated wedding table",
  },
  {
    heading: "MADE TO BE REMEMBERED.",
    eyebrow: "Behind every remarkable occasion is a team working in sync to create an experience that stays with you long after the event ends.",
    emphasis: "In Love",
    caption: "Together, in the moment",
    video: "https://assets.mixkit.co/videos/40593/40593-720.mp4",
    poster: "https://assets.mixkit.co/videos/40593/40593-thumb-360-0.jpg",
    credit: "Newlyweds smiling",
  },
];

export const workVideos = [
  {
    title: "A garden celebration",
    location: "Goa · Wedding day",
    video: "/eventvideo/wedtech%20v%201.mp4",
    poster: "/eventvideo/wedtech-v-1.jpg",
    alt: "Newlyweds walking together through a wedding garden",
  },
  {
    title: "Thoughtful table details",
    location: "The celebration · Décor",
    video: "/eventvideo/wedtech%20v%203.mp4",
    poster: "/eventvideo/wedtech-v-3.jpg",
    alt: "Wedding table with flowers, candles, plates and gold cutlery",
  },
  {
    title: "A moment just for two",
    location: "The newlyweds · Couple portraits",
    video: "/eventvideo/wedtech%20v%202.mp4",
    poster: "/eventvideo/wedtech-v-2.jpg",
    alt: "Newlyweds posing together in a garden",
  },
  {
    title: "Joy in every moment",
    location: "Wedding day · Newlywed portraits",
    video: "/eventvideo/wedtech%20v%204.mp4",
    poster: "/eventvideo/wedtech-v-4.jpg",
    alt: "Newlyweds sharing a happy moment in a garden",
  },
  {
    title: "A celebration in bloom",
    location: "Wedding day · Garden ceremony",
    video: "/eventvideo/wedtech%20v%205.mp4",
    poster: "/eventvideo/wedtech-v-5.jpg",
    alt: "Sample wedding film of a couple in a garden",
  },
  {
    title: "Together, just married",
    location: "Couple portraits · Wedding day",
    video: "/eventvideo/wedtech%20v%206.mp4",
    poster: "/eventvideo/wedtech-v-6.jpg",
    alt: "Sample wedding film of newlyweds posing together",
  },
  {
    title: "The newlywed glow",
    location: "Wedding day · Couple portraits",
    video: "/eventvideo/wedtech%20v%201.mp4",
    poster: "/eventvideo/wedtech-v-1.jpg",
    alt: "Sample wedding film of a newlywed couple",
  },
  {
    title: "Details made memorable",
    location: "Reception · Tablescape",
    video: "/eventvideo/wedtech%20v%207.mp4",
    poster: "/eventvideo/wedtech-v-7.jpg",
    alt: "Sample wedding film of reception details",
  },
];

export function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      className={`transition-transform duration-[180ms] group-hover:translate-x-1 ${diagonal ? "-rotate-45" : ""}`}
    >
      <path d="M4.5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  const commonProps = {
    "aria-hidden": true as const,
    className: "h-9 w-9",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.4,
    viewBox: "0 0 40 40",
  };

  return (
    <svg {...commonProps}>
      {name === "planning" && <><rect x="8" y="10" width="24" height="22" rx="2" /><path d="M14 7v6m12-6v6M8 17h24m-17 6 3 3 7-7" /></>}
      {name === "venue" && <><path d="M7 32h26M10 32V15l10-7 10 7v17M16 32V21h8v11M14 17h.01M26 17h.01" /></>}
      {name === "design" && <><path d="M20 6 23.5 16.5 34 20l-10.5 3.5L20 34l-3.5-10.5L6 20l10.5-3.5L20 6Z" /><path d="m30 7 1.2 3.8L35 12l-3.8 1.2L30 17l-1.2-3.8L25 12l3.8-1.2L30 7Z" /></>}
      {name === "florals" && <><path d="M20 20c-7-2-8-10-2-12 5 1 6 7 2 12Zm0 0c2-7 10-8 12-2-1 5-7 6-12 2Zm0 0c7 2 8 10 2 12-5-1-6-7-2-12Zm0 0c-2 7-10 8-12 2 1-5 7-6 12-2Zm0 0v15m0-7c-3-3-6-3-8-2" /></>}
      {name === "dining" && <><path d="M9 7v11m4-11v11m-7-5h10M11 18v15m13-26v24m0-24c6 4 6 11 0 14" /></>}
      {name === "photography" && <><path d="M7 13h6l2-3h10l2 3h6v19H7V13Z" /><circle cx="20" cy="22" r="6" /><path d="M29 17h.01" /></>}
      {name === "entertainment" && <><path d="M16 29V10l16-3v19M16 15l16-3" /><ellipse cx="11" cy="30" rx="5" ry="3" /><ellipse cx="27" cy="27" rx="5" ry="3" /></>}
      {name === "destination" && <><circle cx="20" cy="18" r="10" /><path d="M20 28v5m-6 0h12m-10-15 3 3 6-7" /></>}
    </svg>
  );
}
