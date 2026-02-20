import Image from "next/image"
import ScheduleCallButton from "./ScheduleCallButton"
import { whyKripa } from "@/data/commercial-loans/data"
import IconCard from "./IconCard"
import SectionHeading from "./SectionHeading"

export default function BusinessNewsSection() {
  return (
    <div className="bg-(--color-secondary) py-20 px-8">
                                    
                <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
    
                    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
    
                        <Image
                            src='/images/business-news.jpg'
                            width={800} // desired width
                            height={500} // desired height
                            alt="commercial loans"
                            className="rounded-xl object-cover"
                        />
                       
                        <div className="flex flex-col justify-center items-center gap-6">
                            <SectionHeading minorHeading="why us ?" mainHeading="Why Kripa Financial Solutions Limited?" paragraph="Simi Sethu and Sethu Arjunan found Kripa Financial Solutions Limited. A former banker & sales professional, Simi has been actively involved in the community, helping customers across New Zealand to achieve their portfolio of properties."  />
    
                            <ScheduleCallButton/>
                        </div>
    
    
                    </div>
    
                    <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
                      {whyKripa.map((i,index)=>(
                        <IconCard icon={i.icon} bgColor="bg-(--color-neutral) border-2 border-gray-300" key={index} title={i.title} description={i.description} />
                      ))}
                    </div>
                </div>
                                                        
            </div>
  )
}
