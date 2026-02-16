import SectionHeading from "../common/SectionHeading";
import { services } from "@/data/homepage/ServiceData";
import Link from "next/link";
import Buttons from "../common/Buttons";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((i,index)=>(
                <div className="flex flex-col gap-4 bg-(--color-secondary) border border-gray-300 rounded-lg p-6 text-black" key={index}>
                    <div className='bg-(--color-button-bg) rounded-2xl h-fit w-fit p-4 text-(--color-primary)'>
                        {i.icon}
                    </div>
                    <h3 className="font-semibold text-base">
                        {i.title}
                    </h3>
                    <p className="text-sm">
                        {i.description}
                    </p>


                    <Buttons link={i.link} buttonText={i.buttonText} buttonIcon={i.buttonIcon}/>
                </div>
            ))}
            
        </div>
      </div>
    </div>
  )
}
