import PageBanner from '@/components/common/PageBanner'
import SubPagesFirstSection from '@/components/common/SubPagesFirstSection'
import React from 'react'
import SectionHeading from '@/components/common/SectionHeading'
import { features, steps, youWillNeed } from '@/data/trade-loans/data'
import { CircleCheckBig } from 'lucide-react';
import IconCard from '@/components/common/IconCard'
import Image from 'next/image'
import ScheduleCallButton from '@/components/common/ScheduleCallButton'
import BookingButton from '@/components/common/BookingButton'
import ImageCard from '@/components/common/ImageCard'
import ParagraphSection from '@/components/common/ParagraphSection'
import GetinTouchSection from '@/components/Homepage/GetinTouchSection'

export default function page() {
  return (
    <div className='flex flex-col'>
        <PageBanner title="trade loans" breadCrumbs={[
            {
                label : 'trade loans',
                href : '/trade-loans'
            }
        ]} />

        {/* second section */}

        <SubPagesFirstSection minorHeading="businessfunding"  mainHeading="Trade Loans" paragraph="Need funds for an opportunity or to support cash flow? Enjoy fast, easy application on a Small Business Loan or a Line of Credit, with funding possible in 24 hours."  image="/images/trade-loans.jpg"  />

        {/* third section */}

        <div className="bg-(--color-neutral) py-20 px-8">
                                                
                            <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
                                        <SectionHeading  minorHeading="features" mainHeading="why kripa ?" />
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                            {features.map((i,index)=>(
                                            <IconCard key={index}  icon={<CircleCheckBig/>}  description={i.description}  />
                                            ))}
                                        </div>
                            </div>
                                            
        </div>


        {/* fourth section */}

         <div className="bg-(--color-secondary) py-20 px-8">
                                                 
                             <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">

                                <SectionHeading minorHeading="the process" mainHeading="what are the steps ?"  />

                                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
            
                                        {steps.map((i,index)=>(
                                            <div className="flex flex-col gap-3" key={index}>
                                                <h1 className="text-base font-bold uppercase tracking-wider text-(--color-primary) text-center">Step {i.step}</h1>
                                                <ImageCard image={i.image} title={i.title} description={i.description}  />
                                            </div>
                                        ))}
                                 </div>
                 
                                 
                             </div>
                                                                     
                 </div>


                 <div className="bg-(--color-primary) py-20 px-8">
                                                 
                             <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">

                                <SectionHeading minorHeadingColor="text-(--color-secondary)" mainHeadingColor="text-(--color-secondary)" paragraphColor="text-(--color-secondary)" minorHeading="qualification" mainHeading="Does your business qualify?" paragraph="If your business has a turnover of more than $6,000 per month and can demonstrate at least 6 months of trading, we can help." />

                                 
                                 
                             </div>
                                                                     
                 </div>



                 <div className="bg-(--color-neutral) py-20 px-8">
                                                
                            <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
                                        <SectionHeading  minorHeading="what next" mainHeading="Next steps" paragraph="We or our lending partner will call you for a quick chat to see if you have any questions, Then, if you're comfortable to proceed, you will be guided through the application." />
                                        <div className="flex flex-col gap-4">
                                                <h6 className="font-medium text-sm text-center uppercase"> you'll need</h6>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                    {youWillNeed.map((i,index)=>(
                                                    <IconCard key={index}  icon={i.icon}  title={i.title}  />
                                                    ))}
                                                </div>
                                        </div>

                                        <ParagraphSection class="justify-center items-center text-start" paragraph={
                                            <>
                                                <p>For funding over $150K, you'll also need some basic financial statements.</p>
                                                <p>By submitting your details, you authorise this information being shared with our Partner and consent to our Privacy Policy.</p>
                                                <p>Eligibility and approval is subject to standard credit assessment and not all amounts, term lengths or rates will be available to all applicants. Fees, terms and conditions apply. FSP663891.</p>
                                            </>
                                        } />
                            </div>
                                            
        </div>

        <GetinTouchSection/>
      
    </div>
  )
}
