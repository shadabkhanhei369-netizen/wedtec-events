import {
  AboutUsSection,
  ClientTestimonialsSection,
  ContactSection,
  FaqSection,
  HeroSection,
  OurGallerySection,
  OurResultsSection,
  OurWorkSection,
  PlanStrategySection,
  QuoteSection,
  ServicesSection,
  SiteFooter,
  SiteHeader,
  UspSection,
} from "@/components/sections";
import { SiteLayout } from "@/components/site-layout";
import { ViewportReveal } from "@/components/viewport-reveal";
import { FloatingContactButtons } from "@/components/floating-contact-buttons";
export default function Home() {
  return (
    <>
      <SiteHeader />
      <ViewportReveal><HeroSection /></ViewportReveal>
    <SiteLayout>
      <ViewportReveal><UspSection /></ViewportReveal>
      <ViewportReveal><AboutUsSection /></ViewportReveal>
      <ViewportReveal><OurWorkSection /></ViewportReveal>
      <ViewportReveal><PlanStrategySection /></ViewportReveal>
      <ClientTestimonialsSection />
      <ViewportReveal><ServicesSection /></ViewportReveal>
      <ViewportReveal><OurResultsSection /></ViewportReveal>
      <ViewportReveal><QuoteSection /></ViewportReveal>
      <ViewportReveal><OurGallerySection /></ViewportReveal>
      <ViewportReveal><FaqSection /></ViewportReveal>
      <ViewportReveal><ContactSection /></ViewportReveal>
    </SiteLayout>
      <ViewportReveal><SiteFooter /></ViewportReveal>
      <FloatingContactButtons />
    </>
  );
}
