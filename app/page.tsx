"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import AppTypes from "@/components/AppTypes";
import Benefits from "@/components/Benefits";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#151513] text-[#FDFDFD] overflow-x-hidden w-full max-w-full">
      <Header />
      <HeroSection />
      <HowItWorks />
      <AppTypes />
      <Benefits />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
