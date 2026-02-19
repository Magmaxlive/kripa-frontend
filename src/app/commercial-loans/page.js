import PageBanner from "@/components/common/PageBanner";
import SubPagesFirstSection from "@/components/common/SubPagesFirstSection";
import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";
import ParagraphSection from "@/components/common/ParagraphSection";
import ScheduleCallButton from "@/components/common/ScheduleCallButton";


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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

      
    </div>
  )
}
