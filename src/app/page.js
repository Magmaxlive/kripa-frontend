import FinancialToolsSection from "@/components/Homepage/FinancialToolsSection";
import Hero from "@/components/Homepage/Hero";
import InsightSection from "@/components/Homepage/InsightSection";
import MovingLogos from "@/components/Homepage/MovingLogos";
import ServiceSection from "@/components/Homepage/ServiceSection";
import TestimonialSection from "@/components/Homepage/TestimonialSection";
import WhyChooseUs from "@/components/Homepage/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
       <Hero/>
       <MovingLogos/>
       <ServiceSection/>
       <WhyChooseUs/>
       <InsightSection/>
       <TestimonialSection/>
       <FinancialToolsSection/>
    </div>
  );
}
