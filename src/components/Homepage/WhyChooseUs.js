import SectionHeading from "../common/SectionHeading";
import { Phone} from 'lucide-react';
import Link from "next/link";
import { CircleCheckBig } from 'lucide-react';
import { whyChooseFeatures,CountData,cardData,achievements } from "@/data/homepage/WhychooseUs_Data";
import Image from "next/image";


export default function WhyChooseUs() {
  return (
    <div className="bg-[var(--color-secondary)] py-20 px-8">
        <div className="flex flex-col gap-10 mx-auto justify-center items-center max-w-[1440px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* left column */}
                <div className="flex flex-col gap-8">
                    <SectionHeading
                        class="md:justify-start justify-center md:items-start items-center"
                        minorHeading="Building Better Futures"
                        mainHeading={
                            <div className="md:text-start">
                                Better home loan deals <br />
                                • Tailored funding  • <br/> Family protection
                            </div>
                            } 
                        paragraph="
                            Since 2020, helping Kiwis from all backgrounds. Talking to us costs nothing. Your trust drives everything."
                    />

                        {/* button */}
                        <Link href="#" className="bg-[var(--color-primary)] text-[var(--color-secondary)] w-xs flex gap-2 justify-center items-center rounded-xl lg:py-3 lg:px-6 p-3 text-[#14181f] font-semibold">
                            <Phone/>  Book a Chat
                        </Link>

                        {/* features */}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {whyChooseFeatures.map((i,index)=>(
                                <div className="flex gap-2 justify-start items-center text-[var(--color-text)] text-sm" key={index}>
                                    <CircleCheckBig className="text-[var(--color-primary)]" /> {i.content}
                                </div>
                            ))}
                            
                        </div>

                        <hr className="text-gray-400" />

                        {/* counter data */}

                        <div className="grid grid-cols-3 md:place-items-center">
                            {CountData.map((i,index)=>(
                                <div className="flex flex-col gap-2" key={index}>
                                    <h1 className="text-[var(--color-primary)] lg:text-4xl text-3xl font-bold">{i.count}</h1>
                                    <h6 className="text-[var(--color-muted)] font-medium text-sm lg:text-base">{i.description}</h6>
                                </div>
                            ))}
                            
                        </div>


                </div>

                {/* right column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cardData.map((i,index)=>(
                        <div className="flex flex-col gap-4 bg-[var(--color-neutral)] rounded-xl p-6" key={index}>
                            <div className='bg-[var(--color-button-bg)] rounded-3xl h-fit w-fit p-4 text-[var(--color-primary)]'>
                                {i.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-[var(--color-text)]">
                                {i.title}
                            </h3>

                            <p className="text-sm text-[var(--color-muted)] lg:max-w-[250px]">
                                {i.description}
                            </p>
                        </div>
                    ))}
                </div>
                
            </div>

            <div className="flex flex-col">
                <SectionHeading minorHeading="our achievements" class="text-center" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {achievements.map((i,index)=>(
                        <div key={index}>
                            <Image src={i.image} alt={i.alt} height={200} width={150}/>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      
    </div>
  )
}
