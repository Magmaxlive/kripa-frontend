import ImageCard from "@/components/common/ImageCard";
import PageBanner from "@/components/common/PageBanner";
import SectionHeading from "@/components/common/SectionHeading";
import { services } from "@/data/services/Data";
import Buttons from "@/components/common/Buttons";
import Image from "next/image";
import ParagraphSection from "@/components/common/ParagraphSection";
import ContactForm from "@/components/common/ContactForm";
import ContactCard from "@/components/common/ContactCard";
import GetinTouchSection from "@/components/Homepage/GetinTouchSection";


export default function page() {
  return (
    <div className="flex flex-col">
        <PageBanner title="Our services" bannerBg='/images/service-banner.jpg' breadCrumbs={[
           {
                label:'services',
                href:'/services'
           }
        ]} />


        {/* first section - services */}
        
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

            {/* second section */}
              <div className="bg-(--color-primary) py-20 px-8">
                <div className="flex flex-col gap-12 mx-auto max-w-[1200px]">
                  <div className="grid grid-cols-1 md:grid-cols-2  gap-4">

                    <SectionHeading minorHeading="we guide you" mainHeading={
                      <>
                        We are here <br/> for you!
                      </>
                    } mainHeadingColor="text-(--color-secondary)"  minorHeadingColor="text-(--color-secondary)"    />

                    <ParagraphSection class="justify-start items-center" textSize="text-sm" paragraphColor="text-(--color-secondary)" paragraph={
                      <>
                        <p>At Kripa Financial Solutions, our mission is to help Kiwis achieve their dreams of homeownership. Our team of seasoned mortgage experts will work tirelessly on your behalf to secure the optimal financing solution.</p> 
                        <p>We take pride in being your trusted guides throughout the mortgage process. We will explain every step and detail to you in simple terms, ensuring you feel empowered when making this important investment. With decades of combined experience in the New Zealand mortgage market, we have established relationships with over lenders across the market.</p>
                        <p>This allows us to access loan options you may not find on your own, and negotiate the most competitive terms, rates and fees tailored to your budget and goals. We are your tireless advocates, leveraging our expertise to hunt for your perfect mortgage deal.</p>
                      </>
                    }  />

                    
                  </div>
                </div>
              </div>


              {/* third section */}
              
              <GetinTouchSection/>
        
      
    </div>
  )
}
