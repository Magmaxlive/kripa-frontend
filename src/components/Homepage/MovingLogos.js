import { Logos } from "@/data/homepage/PartnerLogos"
import Image from "next/image"


export default function MovingLogos() {
  return (
    <div className="flex flex-col gap-6 py-10 px-8 w-full bg-[var(--color-secondary)] border-y-1 border-gray-300">
        <h2 className="uppercase text-sm text-center font-semibold tracking-wider text-[var(--color-muted-text)]">Working with New Zealand's leading lenders</h2>

        <div className="overflow-hidden w-full">
            <div className="flex gap-20 w-max animate-[marquee_40s_linear_infinite]">
                    {Logos.map((i,index)=>(
                        <Image src={i.image} width={150} height={150} alt={i.name} key={index} className="grayscale transition duration-300 hover:grayscale-0 hover:scale-110"/>
                    ))}
            </div>
        </div>
      
    </div>
  )
}
