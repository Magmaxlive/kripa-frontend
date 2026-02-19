import PageBanner from "@/components/common/PageBanner";
import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";
import ScheduleCallButton from "@/components/common/ScheduleCallButton";
import { products } from "@/data/insurance/products";
import InsuranceProducts from "@/components/common/InsuranceProducts";
import GetinTouchSection from "@/components/Homepage/GetinTouchSection";
import SubPagesFirstSection from "@/components/common/SubPagesFirstSection";

export default function page() {
  return (
    <div className="flex flex-col">
        <PageBanner title="insurance solutions" bannerBg='/images/insuranceBanner.jpg' breadCrumbs={[
            {
                label : 'insurance' , href : '/insurance'
            }
        ]}  />

         {/* first section - manage your loan */}

         <SubPagesFirstSection minorHeading="insurance for everyone" image='/images/insurance.jpg' mainHeading="Insurance" paragraph={
                                <>
                                  <p>Looking for insurance for your family, health or your assets? </p>
                                  <p>Kripa can help.</p>
                                </>
                              } />
                
                      


                      {/* second section */}
                            
                      
                        <div className="bg-(--color-neutral) py-20 px-8">
                        
                            <div className="flex flex-col justify-center items-center gap-6 mx-auto max-w-[1200px]">
                                <SectionHeading minorHeading="Confidence Through Protection" mainHeading="Tailored cover that safeguards what’s important today and tomorrow" paragraph="At Kripa Financial Solutions, we believe in protecting what matters most. As experienced advisers, we help you understand your options and choose cover that fits your life, your goals, and your peace of mind. Whether you're protecting your income, your health, or your family's future, we’re here to make the process clear, personal, and empowering."   />
            
                                
                            </div>
                                            
                        </div>


                        {/* third section */}
      

                        <div className="bg-(--color-primary) py-20 px-8">
                            
                                <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
                                    <SectionHeading minorHeading="what we offer" mainHeading="Our Insurance Products" minorHeadingColor='text-(--color-secondary)'  mainHeadingColor='text-(--color-secondary)' />
                
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                        {products.map((i,index)=>(
                                        <InsuranceProducts image={i.image} tagline={i.tagline} title={i.title} description={i.description} key={index} />
                                        ))}
                                    </div>
                                </div>
                                                
                        </div>

                        {/* get in touch section */}

                        <GetinTouchSection/>
    </div>
  )
}
