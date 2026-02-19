import PageBanner from "@/components/common/PageBanner";
import SubPagesFirstSection from "@/components/common/SubPagesFirstSection";
import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";
import ParagraphSection from "@/components/common/ParagraphSection";
import ScheduleCallButton from "@/components/common/ScheduleCallButton";
import { advantages, keyfacts, whyKripa } from "@/data/commercial-loans/data";
import IconCard from "@/components/common/IconCard";
import IconBox from "@/components/common/IconBox";


export default function page() {
  return (
    <div className="flex flex-col">

        <PageBanner bannerBg='/images/commercial-loans-banner.jpg' title="commercial loans" breadCrumbs={[
            {
                label : 'commercial loans',
                href : '/commercial-loans'
            }
        ]}  />

        {/* first section */}
        <SubPagesFirstSection minorHeading="business funding" mainHeading="commercial loans" paragraph="Everything you need to know about commercial loans" image="/images/commercial-loans.webp" />

        {/* second section */}

        <div className="bg-(--color-neutral) py-20 px-8">
                                
            <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
                <SectionHeading minorHeading="what is commercial loan ?" mainHeading="Commercial Loans: Everything you need to know" />

                <div className="grid grid-cols-1 lg:grid-cols-2  gap-10">
                   <Image
                        src='/images/mortage.jpg'
                        width={800} // desired width
                        height={500} // desired height
                        alt="commercial loans"
                        className="rounded-xl object-cover"
                    />

                    <div className="flex flex-col gap-6">
                        <ParagraphSection class="text-start" paragraph={
                            <>
                                 <p>
                                        A <strong>Commercial Loan</strong> is used to purchase a property or business that is a registered commercial establishment and will be used exclusively to operate a business. Examples include office buildings, retail shops, shopping complexes, warehouses, godowns, factories, and more.
                                    </p>

                                    <p>
                                        Like other property loans, a commercial loan is a <strong>secured loan</strong>, where the purchased property serves as collateral.
                                    </p>

                                    <p>
                                        Commercial loans are commonly used to acquire:
                                    </p>

                                    <ul className="list-disc list-inside  space-y-1">
                                        <li>Offices – from a single suite to an entire floor or full commercial building</li>
                                        <li>Showrooms and retail premises – from small shops to large shopping centres</li>
                                        <li>Residential and retirement buildings or facilities</li>
                                        <li>Structures used for agriculture-based businesses</li>
                                        <li>Industrial units such as factories, warehouses, and godowns</li>
                                    </ul>
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
                <SectionHeading minorHeadingColor="text-(--color-secondary)" mainHeadingColor="text-(--color-secondary)" minorHeading="advantages" mainHeading="So, why buy a commercial property?" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {advantages.map((i,index)=>(
                            <IconCard key={index} iconColor="text-(--color-secondary)" iconbg="bg-(--color-primary)" bgColor="bg-(--color-neutral)" icon={i.icon} title={i.title} description={i.description}  />
                            ))}
                        </div>
                
            </div>
                            
        </div>

        {/* fourth section */}


        <div className="bg-(--color-secondary) py-20 px-8">
                                
            <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">

                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
                   
                    <div className="flex flex-col justify-center items-center gap-6">
                        <SectionHeading minorHeading="Take advantage" mainHeading="Take advantage of lower business expenses and higher profits" paragraph="If you are running a business, having your commercial property to run the company will save you lease expenses. Therefore lowering your operating expenses and increasing profits."  />

                        <ScheduleCallButton/>
                    </div>

                    <Image
                        src='/images/lending_solutions.jpg'
                        width={800} // desired width
                        height={500} // desired height
                        alt="commercial loans"
                        className="rounded-xl object-cover"
                    />

                </div>
            </div>
                                                    
        </div>


         {/* fifth section */}

        <div className="bg-(--color-neutral) py-20 px-8">
                                
            <div className="flex flex-col justify-center items-center gap-12 mx-auto max-w-[1200px]">
                <SectionHeading minorHeading="KEY FACTS" mainHeading="Commercial Loans" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {keyfacts.map((i,index)=>(
                    <IconCard number={index+1} key={index} title={i.title} description={i.description} />
                  ))}
                </div>
            </div>
                                                    
        </div>

        {/* sixth section */}

       
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


      
    </div>
  )
}
