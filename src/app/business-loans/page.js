import PageBanner from "@/components/common/PageBanner";
import SubPagesFirstSection from "@/components/common/SubPagesFirstSection";
import Image from "next/image";
import ScheduleCallButton from "@/components/common/ScheduleCallButton";
import SectionHeading from "@/components/common/SectionHeading";
import { howMuchCanBorrow, keyFacts, process, steps, typesOfBusinessLoan, whatisBusinessLoan } from "@/data/business-loans/Data";
import IconCard from "@/components/common/IconCard";
import BusinessNewsSection from "@/components/common/BusinessNewsSection";

export default function page() {
  return (
    <div className="flex flex-col">
        <PageBanner title="business loans" breadCrumbs={[
            {
                label : 'business loans',
                href : '/business-loans'
            }
        ]} />


        <SubPagesFirstSection minorHeading="businessfunding" mainHeading="Business Loans" paragraph="Everything you need to know about business loans." image="/images/business-loan.webp" />


    {/* second section */}

        <div className="bg-(--color-neutral) py-20 px-8">
                                        
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
                                <SectionHeading minorHeading="loans" mainHeading="Business Loans" paragraph={
                                    <>
                                        <p>Obtaining a business loan could be an unnerving process for any new business owner. We are sure this article will help you with the information you need.</p>
                                        <p>Here's the most important thing you need to know. Kripa Financial Solutions Limited could help you get the whole or part of your Business Loan at considerably lower interest rates! </p>
                                    </>
                                } />
        
                                <ScheduleCallButton/>
                            </div>
        
                        </div>
        
                        
                    </div>
                                                            
        </div>

        {/* third section */}

         <div className="bg-(--color-primary) py-20 px-8">
                                        
                    <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
                        <SectionHeading minorHeadingColor="text-(--color-secondary)" mainHeadingColor="text-(--color-secondary)" paragraphColor="text-(--color-secondary)" minorHeading="business loan ?" mainHeading="So, what is a Business Loan?" paragraph="Business Loans or Commercial Business Loans are loans you could take from a lender or bank for any of the following reasons." />
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {whatisBusinessLoan.map((i,index)=>(
                                    <IconCard key={index} iconColor="text-(--color-secondary)" iconbg="bg-(--color-primary)" bgColor="bg-(--color-neutral)" number={index+1} title={i.title} description={i.description}  />
                                    ))}
                                </div>
                        
                    </div>
                                    
        </div>


                {/* fourth section */}


         <div className="bg-(--color-secondary) py-20 px-8">
                                        
                    <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
                        <SectionHeading  minorHeading="what are the types?" mainHeading="Business Loan: Types" paragraph="Knowing the types of Business Loans will help you better understand what loan works best for your business." />
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {typesOfBusinessLoan.map((i,index)=>(
                                    <IconCard key={index} iconColor="text-(--color-secondary)" iconbg="bg-(--color-primary)"  number={index+1} title={i.title} description={i.description}  />
                                    ))}
                                </div>
                        
                    </div>
                                    
        </div>

        {/* fifth section */}

         <div className="bg-(--color-neutral) py-20 px-8">
                                        
                    <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
                        <SectionHeading  minorHeading="key facts" mainHeading="the factors that a lender/bank would examine " paragraph="While business loans are here to help new and seasoned entrepreneurs alike, here are the factors that a lender/bank would examine before sanctioning you a loan." />
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {keyFacts.map((i,index)=>(
                                    <IconCard key={index} paraStyle="text-start" iconColor="text-(--color-primary)" textColor="text-(--color-secondary)"  iconbg="bg-(--color-secondary)" bgColor="bg-(--color-primary)"  number={index+1} title={i.title} description={i.description}  />
                                    ))}
                                </div>
                        
                    </div>
                                    
        </div>


    {/* sixth section */}
        <div className="bg-(--color-secondary) py-20 px-8">
                                        
                    <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
                                <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                                    {process.map((i,index)=>(
                                    <IconCard key={index} paraStyle="text-start"  title={i.title} description={i.description}  />
                                    ))}
                                </div>
                        
                    </div>
                                    
        </div>

    {/* seventh section */}
        <div className="bg-(--color-primary) py-20 px-8">
                                        
                    <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
                                <SectionHeading minorHeadingColor="text-(--color-secondary)" mainHeadingColor="text-(--color-secondary)" paragraphColor="text-(--color-secondary)" minorHeading="how much i get" mainHeading="Business Loan: How much can you borrow?" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {howMuchCanBorrow.map((i,index)=>(
                                    <IconCard key={index} iconColor="text-(--color-secondary)" iconbg="bg-(--color-primary)" bgColor="bg-(--color-neutral)" number={index+1} title={i.title} description={i.description}  />
                                    ))}
                                </div>
                    </div>
                                    
        </div>


        {/* eight section */}

        <div className="bg-(--color-secondary) py-20 px-8">
                                        
                    <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
        
                        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
        
                            <Image
                                src='/images/business-loan.webp'
                                width={800} // desired width
                                height={500} // desired height
                                alt="business loans"
                                className="rounded-xl object-cover"
                            />
                           
                            <div className="flex flex-col justify-center items-center gap-6">
                                <SectionHeading minorHeading="Business Loan" mainHeading="The required documentation" paragraph={
                                    <>
                                        <p>This varies with every bank/lending organization. But with our experience in the Financial Solutions business, here is an exhaustive list of documents you need to keep ready before initiating a Business Loan application.</p>
                                        <p>A professional presentation clearly lays out the business plan and clearly states the business's objectives. It should also have previous statements and financial projections. Remember - getting a Business Loan is very similar to obtaining funds from a Venture Capital funds company. In this sense - you need to be able to pitch your business strongly to the Bank/Lender. It would be wise to keep the answers ready for questions you can foresee. For example - are there any gaps in your business plan? If yes, then how do you plan on addressing them? If you are looking for resources to draft an excellent business plan, try this.</p>
                                    </>
                                } />
        
                                <ScheduleCallButton/>
                            </div>
        
                        </div>
        
                        
                    </div>
                                                            
        </div>

        {/* nine section */}

        <div className="bg-(--color-neutral) py-20 px-8">
                                        
                    <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
                                <SectionHeading  minorHeading="the steps" mainHeading="Things to do" />
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {steps.map((i,index)=>(
                                    <IconCard key={index} paraStyle="text-start" iconColor="text-(--color-primary)" textColor="text-(--color-secondary)"  iconbg="bg-(--color-secondary)" bgColor="bg-(--color-primary)" number={index+1} title={i.title} description={i.description}  />
                                    ))}
                                </div>
                    </div>
                                    
        </div>

        <BusinessNewsSection/>
      
    </div>
  )
}
