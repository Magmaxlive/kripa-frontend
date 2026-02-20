import SectionHeading from "./SectionHeading"
import ScheduleCallButton from "./ScheduleCallButton"
import Image from "next/image"



export default function SubPagesFirstSection({minorHeading,mainHeading,paragraph,image}) {
  return (
    <div className="bg-(--color-secondary) py-20 px-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto max-w-[1200px]">
                              <div className="flex flex-col justify-center items-center gap-6">
                                <SectionHeading minorHeading={minorHeading} mainHeading={mainHeading} paragraph={paragraph}  />
            
                                 <ScheduleCallButton/>
                              </div>
            
                              <Image
                                  src={image}
                                  width={500} // desired width
                                  height={500} // desired height
                                  alt={minorHeading}
                                  className="rounded-xl object-cover"
                                />
                                                  
                            </div>
                          </div>
  )
}
