import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import QuoteSection from "@/components/QuoteSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <WhySection />
        <HowItWorks />
        <Features />
        <QuoteSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
