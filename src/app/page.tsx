import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhyCosmoid from "@/components/WhyCosmoid";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Comparison from '@/components/Comparison';
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import BetaCTA from "@/components/BetaCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <SocialProof />
      <WhyCosmoid />
      <Comparison />
      <Features />
      <HowItWorks />
      <FAQ />
      <Pricing />
      <BetaCTA />
      <Footer />
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-[var(--border)] md:hidden">
        <a href="#cta" className="block w-full text-center py-3 rounded-xl bg-[var(--purple)] text-white font-bold text-sm">카톡으로 30초 신청</a>
      </div>
    </main>
  );
}
