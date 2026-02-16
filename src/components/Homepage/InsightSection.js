import BookingButton from "../common/BookingButton";
import SectionHeading from "../common/SectionHeading";
import Videosection from "./InsightVideo";
import { InsightData } from "@/data/homepage/InsightSectionData";


export default function InsightSection() {
  return (
    <div className="bg-(--color-secondary) py-20 px-8" id="insights">
        <div className="flex flex-col gap-12 mx-auto items-center max-w-[1200px]">
            <SectionHeading class="text-center" minorHeading="Expert Insights" mainHeading="Learn From Our Principal Adviser" paragraph="Watch Simi Sethu share valuable insights on homeownership and property investment in New Zealand." />

            <div className="flex gap-3">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {InsightData.map((i,index)=>(
                        <div className="flex flex-col gap-2 bg-(--color-neutral)  shadow-xl rounded-xl border border-gray-300" key={index}>
                            <Videosection videoUrl={i.videoURL}/>
                            <div className="flex flex-col p-6 gap-4">
                                <h3 className="text-xl font-semibold">
                                {i.title}
                                </h3>
                                <p className="text-sm font-base">
                                    {i.description}
                                </p>
                                <BookingButton/>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}
