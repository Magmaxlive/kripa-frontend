import Hero from "@/components/Homepage/Hero";
import MovingLogos from "@/components/Homepage/MovingLogos";
import ServiceSection from "@/components/Homepage/ServiceSection";
import WhyChooseUs from "@/components/Homepage/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
       <Hero/>
       <MovingLogos/>
       <ServiceSection/>
       <WhyChooseUs/>
    </div>
  );
}
