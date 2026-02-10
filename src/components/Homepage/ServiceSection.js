import SectionHeading from "../common/SectionHeading";
import { services } from "@/data/homepage/ServiceData";
import Link from "next/link";

export default function ServiceSection() {
  return (
    <div className="py-20 px-8 bg-(--color-neutral)">
      <div className="flex flex-col gap-10 mx-auto  max-w-[1200px]">
        <SectionHeading 
            minorHeading="Our Services" 
            mainHeading="Financial Solutions Tailored for You" 
            paragraph="From first homes to business empires, we provide comprehensive financial
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

                    <Link href={i.link} className="mt-4 bg-(--color-primary) text-(--color-secondary) w-fit flex gap-2 justify-center items-center rounded-xl lg:py-3 lg:px-6 p-3  font-semibold">
                          {i.buttonText}  {i.buttonIcon}
                    </Link>
                </div>
            ))}
            
        </div>
      </div>
    </div>
  )
}
