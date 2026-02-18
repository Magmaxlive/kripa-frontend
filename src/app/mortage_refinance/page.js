import BookingButton from "@/components/common/BookingButton";
import PageBanner from "@/components/common/PageBanner";
import SectionHeading from "@/components/common/SectionHeading";
import Image from "next/image";


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
      
    </div>
  )
}
