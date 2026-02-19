import BookingButton from "@/components/common/BookingButton";
import PageBanner from "@/components/common/PageBanner";
import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";
import ParagraphSection from "@/components/common/ParagraphSection";
import { refinance_blogs } from "@/data/refinance/blogs";
import BlogSection from "@/components/common/BlogSection";
import GetinTouchSection from "@/components/Homepage/GetinTouchSection";


export default function page() {
  return (
    <div className="flex flex-col">
        <PageBanner title="mortage refinance" breadCrumbs = {[
          {
                label: 'mortage refinance',href:"/mortage_refinance"
          },
        ]} />


        {/* first section - manage your loan */}
        
              <div className="bg-(--color-secondary) py-20 px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto max-w-[1200px]">
                  <div className="flex flex-col justify-center items-center gap-6">
                    <SectionHeading minorHeading="manage your loan" mainHeading="mortage refinance" paragraph={
                        <>
                          <p>looking to renew or refinance your home loan?</p>
                          <p>seize the abundant long-term prospects.</p>
                        </>
                      }  />

                      <BookingButton/>
                  </div>

                  <Image
                      src="/images/mortage.jpg"
                      width={800} // desired width
                      height={500} // desired height
                      alt="mortgage refinance"
                      className="rounded-xl object-cover"
                    />
                                      
                </div>
              </div>


              {/* second section */}
      

                <div className="bg-(--color-neutral) py-20 px-8">
               
                  <div className="flex flex-col justify-center items-center gap-6 mx-auto max-w-[1200px]">
                    <SectionHeading minorHeading="why refinance ?" mainHeading="Renewing your mortgage may feel easy, but it could cost you thousands over time." paragraph="When your mortgage term comes up for renewal, it's crucial to thoroughly review your current loan structure instead of automatically re-signing. Our team of highly-trained mortgage experts can provide customized refix and refinance solutions tailored to your changed circumstances and financial goals. Whether you've experienced major life events like a new baby, job promotion, or relocation, your needs likely differ from when you first signed your mortgage. We take the time to understand your unique situation and goals in order to structure an optimal new mortgage, saving you money over the long run compared to sticking with the status quo. Don't miss out on substantial interest cost savings by blindly renewing - let us advise you on the best refix or refinance option for your future."   />

                      
                  </div>

                               
                </div>


                {/* we are here to help you */}


                <div className="bg-(--color-primary) py-20 px-8">
                                <div className="flex flex-col gap-12 mx-auto max-w-[1200px]">
                                  <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                
                                    <SectionHeading minorHeading="we guide you" mainHeading={
                                      <>
                                        We are here <br/> for you!
                                      </>
                                    } mainHeadingColor="text-(--color-secondary)"  minorHeadingColor="text-(--color-secondary)"    />
                
                                    <div className="flex flex-col gap-8">
                                        <ParagraphSection class="justify-start items-center"  paragraphColor="text-(--color-secondary)" paragraph={
                                        <>
                                          <p>At Kripa Financial Solutions, our mission is to help Kiwis achieve their dreams of homeownership. Our team of seasoned mortgage experts will work tirelessly on your behalf to secure the optimal financing solution.</p> 
                                          <p>We take pride in being your trusted guides throughout the mortgage process. We will explain every step and detail to you in simple terms, ensuring you feel empowered when making this important investment. With decades of combined experience in the New Zealand mortgage market, we have established relationships with over lenders across the market.</p>
                                          <p>This allows us to access loan options you may not find on your own, and negotiate the most competitive terms, rates and fees tailored to your budget and goals. We are your tireless advocates, leveraging our expertise to hunt for your perfect mortgage deal.</p>
                                        </>
                                      }  />

                                      <BookingButton/>
                                    </div>
                
                                    
                                  </div>
                                  
                                </div>
                            </div>



                            {/* blogs section */}

                          <div className="bg-(--color-neutral) py-20 px-8">
                        
                            <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
                              <SectionHeading minorHeading="blogs" mainHeading="Check out our blog articles on mortgage refinance" />

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                  {refinance_blogs.map((i,index)=>(
                                    <BlogSection image={i.image} title={i.title} excerpt={i.excerpt} key={index} />
                                  ))}
                                </div>

                            </div>

                                        
                          </div>

                          {/* get in touch section */}


                          <GetinTouchSection/>

               
              
    </div>
  )
}
