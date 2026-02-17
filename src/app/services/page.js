import ImageCard from "@/components/common/ImageCard";
import PageBanner from "@/components/common/PageBanner";
import SectionHeading from "@/components/common/SectionHeading";
import { services } from "@/data/services/Data";
import Buttons from "@/components/common/Buttons";
import Image from "next/image";


export default function page() {
  return (
    <div className="flex flex-col">
        <PageBanner title="Our services" bannerBg='/images/service-banner.jpg' breadCrumbs={[
           {
                label:'services',
                href:'/services'
           }
        ]} />


        {/* first section - why invest in property */}
        
              <div className="bg-(--color-secondary) py-20 px-8">
                <div className="flex flex-col gap-12 mx-auto max-w-[1200px]">
                  <SectionHeading minorHeading="our services" mainHeading="what we offers"   />
        
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
                    {services.map((i,index)=>(
                        <div className="flex flex-col gap-6 bg-(--color-neutral) border border-gray-300 rounded-lg p-6 text-black" key={index}>
                            <div className="relative w-full" style={{ height: "280px" }}>
                                <Image src={i.image} alt={i.title} fill  className="object-cover object-[center_30%] rounded-md"/>
                            </div>
                            <h3 className="font-bold capitalize text-xl">
                                {i.title}
                            </h3>

                            <p className="text-sm">
                                {i.description}
                            </p>

                            
                            <Buttons link={i.link} buttonText="explore more" />
                            </div>
                    ))}
                  </div>
                </div>
              </div>
        
      
    </div>
  )
}
