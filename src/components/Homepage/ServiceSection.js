import SectionHeading from "../common/SectionHeading";
import { services } from "@/data/services/Data";
import Link from "next/link";
import Buttons from "../common/Buttons";
import Image from "next/image";

export default function ServiceSection() {
  return (
    <div className="py-20 px-8 bg-(--color-neutral)" id="services">
      <div className="flex flex-col gap-12 mx-auto  max-w-[1200px]">
        <SectionHeading 
            minorHeading="Our Services" 
            mainHeading="Financial Solutions Tailored for You" 
            paragraph="From first homes to business ventures, we provide comprehensive financial
            guidance every step of the way." 
            class="items-center justify-center text-center"
            
        />

        <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
            {services.map((i,index)=>(
                <div className="flex flex-col gap-4 bg-(--color-secondary) border border-gray-300 rounded-lg p-6 text-black" key={index}>
                      <div className="relative w-full" style={{ height: "240px" }}>
                          <Image src={i.image} alt={i.title} fill  className="object-cover object-[center_30%] rounded-md"/>
                      </div>
                    <h3 className="font-semibold text-xl">
                        {i.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                        {i.description}
                    </p>


                    <Buttons link={i.link} buttonText="explore more" />
                </div>
            ))}
            
        </div>
      </div>
    </div>
  )
}
