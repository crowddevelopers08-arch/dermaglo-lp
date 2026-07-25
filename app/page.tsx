import BeforeAfterSection from "@/components/beforeafter";
import CaregiverHeroSection from "@/components/CaregiverHeroSection";
import DermaGlowNavbar from "@/components/DermaGlowNavbar";
import FertilityCommitmentSection from "@/components/FertilityCommitmentSection";
import FrequentlyAskedQuestionsSection from "@/components/FrequentlyAskedQuestionsSection";
import HeroBannerSection from "@/components/HeroBannerSection";
import MeetDermatologistSection from "@/components/MeetDermatologistSection";
import ParadiseTreatmentsSection from "@/components/ParadiseTreatmentsSection";
import PricingPlansSection from "@/components/PricingPlansSection";
import FadeIn from "@/components/scrollanimate";
import SiteFooter from "@/components/SiteFooter";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <DermaGlowNavbar />
      <FadeIn direction="fade" duration={1200} staggerChildren staggerDelay={180} className="w-full">
        <HeroBannerSection />
      </FadeIn>
      <FadeIn direction="up" duration={1200} staggerChildren staggerDelay={180} className="w-full">
        <BeforeAfterSection />
      </FadeIn>
      <FadeIn direction="up" duration={1200} staggerChildren staggerDelay={180} className="w-full">
        <FertilityCommitmentSection />
      </FadeIn>
      <FadeIn
        direction="up"
        duration={900}
        staggerChildren
        staggerDelay={110}
        staggerSelector="[data-pricing-animate]"
        className="w-full"
      >
        <PricingPlansSection />
      </FadeIn>
      <FadeIn direction="up" duration={1200} staggerChildren staggerDelay={180} className="w-full">
        <ParadiseTreatmentsSection />
      </FadeIn>
      <FadeIn direction="up" duration={1200} staggerChildren staggerDelay={180} className="w-full">
        <MeetDermatologistSection />
      </FadeIn>
      <FadeIn direction="up" duration={1200} staggerChildren staggerDelay={180} className="w-full">
        <TestimonialsSection />
      </FadeIn>
      <FadeIn direction="up" duration={1200} staggerChildren staggerDelay={180} className="w-full">
        <FrequentlyAskedQuestionsSection />
      </FadeIn>
      <FadeIn direction="fade" duration={1250} staggerChildren staggerDelay={190} className="w-full">
        <CaregiverHeroSection />
      </FadeIn>
      <FadeIn direction="up" duration={1200} staggerChildren staggerDelay={180} className="w-full">
        <SiteFooter />
      </FadeIn>
    </div>
  );
}
