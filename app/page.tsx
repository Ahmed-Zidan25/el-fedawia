import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/home/hero-section"
import MissionVisionSection from "@/components/home/mission-vision"
import SectorsCarousel from "@/components/home/sectors-carousel"
import WhyChooseSection from "@/components/home/why-choose-section"
import TeamSection from "@/components/home/team-section"
import CTASection from "@/components/home/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Header />
      <HeroSection />
      <MissionVisionSection className="mt-[-20px]" />
      <SectorsCarousel />
      <WhyChooseSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  )
}
