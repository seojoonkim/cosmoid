import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import WhyCosmoid from "@/components/WhyCosmoid";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import MultiAgent from "@/components/MultiAgent";
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
      <HowItWorks />
      <Features />
      <MultiAgent />
      <Pricing />
      <BetaCTA />
      <Footer />
    </main>
  );
}
