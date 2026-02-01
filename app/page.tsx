"use client";

import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/home/hero-section"
import MissionVisionSection from "@/components/home/mission-vision"
import FeaturedProducts from "@/components/home/featured-products"
import ApplicationsSection from "@/components/home/applications-section"
import WhyChooseSection from "@/components/home/why-choose-section"
import CaseStudiesSection from "@/components/home/case-studies-section"
/* import CertificationsSection from "@/components/home/certifications-section" */
import FAQSection from "@/components/home/faq-section"
/* import TestimonialsSection from "@/components/home/testimonials-section"*/
import DistributionMap from "@/components/home/distribution-map"
import CapacityDashboard from "@/components/home/capacity-dashboard"
import AvailabilityTracker from "@/components/home/availability-tracker"
import SustainabilitySection from "@/components/home/sustainability-section"
/* import SectorsCarousel from "@/components/home/sectors-carousel" */
import CTASection from "@/components/home/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Header />
      <HeroSection />
      <MissionVisionSection className="mt-[-20px]" />
      <FeaturedProducts />
      <ApplicationsSection />
      <WhyChooseSection />
      <CaseStudiesSection />
     {/*  <CertificationsSection /> 
      <TestimonialsSection />*/}
      <DistributionMap />
      <CapacityDashboard />
      <AvailabilityTracker />
      <SustainabilitySection />
      <FAQSection />
      {/* <SectorsCarousel /> */}
      <CTASection />
      <Footer />
    </main>
  );
}