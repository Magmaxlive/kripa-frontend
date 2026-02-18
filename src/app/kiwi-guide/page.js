import IconCard from "@/components/common/IconCard"
import ImageCard from "@/components/common/ImageCard"
import PageBanner from "@/components/common/PageBanner"
import ParagraphSection from "@/components/common/ParagraphSection"
import SectionHeading from "@/components/common/SectionHeading"
import { commonMisconseptions, impDocuments, InsuranceFeatures, mortageSteps, whereToInvest, whyInvest, whyInvestInNewHomes } from "@/data/kiwiGuide/Data"

export default function page() {
  return (
    <div className="flex flex-col">

{/* page banner */}
      <PageBanner title="kiwi guide"
        bannerBg="/images/mustknowbg.jpg"
       breadCrumbs={[
        {
                label: 'kiwi guide',href:"/kiwi-guide"
        },
      ]}/>


{/* first section - why invest in property */}

      <div className="bg-(--color-secondary) py-20 px-8">
        <div className="flex flex-col gap-12 mx-auto max-w-[1200px]">
          <SectionHeading minorHeading="Secure Your Future" mainHeading="Why Invest In Property"   />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyInvest.map((i,index)=>(
              <IconCard title={i.title} key={index} icon={i.icon} bgColor="bg-(--color-button-bg) border-2 border-gray-200 " textTransform='capitalize' textSize='text-base text-center'  />
            ))}
          </div>
        </div>
      </div>


{/* second section - types of property */}

      <div className="bg-(--color-primary) py-20 px-8">
        <div className="flex flex-col gap-12 mx-auto max-w-[1200px]">
          <SectionHeading minorHeadingColor="text-(--color-secondary)" mainHeadingColor="text-(--color-secondary)"  minorHeading="where i invest ?" mainHeading="Types of properties we help you invest in"   />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whereToInvest.map((i,index)=>(
              <ImageCard title={i.title} key={index} image={i.image} textTransform='uppercase' textSize='text-base text-center' bgColor="bg-(--color-neutral)"  />
            ))}
          </div>
        </div>
      </div>


{/* third section - why invest in new homes */}

      <div className="bg-(--color-neutral) py-20 px-8">
        <div className="flex flex-col gap-12 mx-auto max-w-[1200px]">
          <SectionHeading minorHeading="why homes ?" mainHeading="Why Invest In New Homes"  />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyInvestInNewHomes.map((i,index)=>(
              <IconCard title={i.title} key={index} icon={i.icon}  textTransform='capitalize' textSize='text-base text-center'  />
            ))}
          </div>


{/* important documents section */}

          <SectionHeading minorHeading="Important Documents every Homebuyer Should Have"  />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impDocuments.map((i,index)=>(
              <IconCard title={i.title} key={index} icon={i.icon}  textTransform='capitalize' textSize='text-base text-center'  />
            ))}
          </div>
        </div>
      </div>


{/* fourth section - why personal risk */}

      <div className="bg-(--color-secondary) py-20 px-8">
        <div className="flex flex-col gap-12 mx-auto max-w-[1200px]">
          <SectionHeading minorHeading="Protecting Your Assets and Income" mainHeading="Why Personal Risk Insurance Matters in Property Ownership?"  paragraph="Protecting your family, your health, your assets, and your future is a responsibility we take very seriously at Kripa Financial Solutions. "  />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {InsuranceFeatures.map((i,index)=>(
              <IconCard title={i.title} key={index} number={index+1} bgColor="bg-(--color-primary)" iconbg="bg-(--color-secondary)" textColor="text-(--color-secondary)"  textTransform='capitalize' textSize='text-base text-center'  />
            ))}
          </div>

          <ParagraphSection paragraph="We work closely with you to design insurance cover that is tailored to your specific life stage, family structure, income sources, and financial commitments, rather than offering generic one-size-fits-all policies."/>

    {/* common Misconceptions */}

            <SectionHeading minorHeading="Think Again" mainHeading="Common Misconceptions" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commonMisconseptions.map((i,index)=>(
                <ImageCard image={i.image} title={i.title} key={index} textTransform='capitalize' textSize='text-lg' />
              ))}
            </div>


        </div>
      </div>

      {/* last section - connect with */}

      <div className="bg-(--color-neutral) py-20 px-8">
              <div className="flex flex-col gap-12 mx-auto max-w-[1200px]">
                <SectionHeading minorHeading="connect now" mainHeading="Connect With A Trusted Mortgage Advisor" paragraph="First crucial step - decision to buy a home in NZ -What to prepare?" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {mortageSteps.map((i,index)=>(
                    <IconCard title={i.title} key={index} number={index+1} iconbg='bg-(--color-secondary)' textTransform='capitalize' textSize='text-base text-center' bgColor='bg-(--color-primary)' textColor='text-(--color-secondary)'  />
                  ))}
                </div>

              </div>
            </div>



    </div>
  )
}
