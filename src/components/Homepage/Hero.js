import Image from "next/image";
import { ShieldCheck,Dot,Check  } from 'lucide-react';
import { items } from "@/data/homepage/bannerDescription";
import { FeatureItems } from "@/data/homepage/bannerFeatures";
import BookingButton from "../common/BookingButton";
import VideoHero from "./HeroVideo";


export default function Hero() {
  return (
    <div className="relative w-full bg-[var(--color-secondary)] ">

        {/* gradient color */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#00453914_0%,transparent_50%),radial-gradient(circle_at_80%_70%,#d5ad6714_0%,transparent_50%)]"></div>

        {/* floating images */}
                <img
                src="/images/floating.svg"
                className="float-el z-[1]"
                style={{ "--d": "0s", "--l": "10%", "--s": "15s" }}
            />

            <img
                src="/images/floating.svg"
                className="float-el z-[1]"
                style={{ "--d": "4s", "--l": "30%", "--s": "18s" }}
            />

            <img
                src="/images/floating.svg"
                className="float-el z-[1]"
                style={{ "--d": "8s", "--l": "60%", "--s": "20s" }}
            />

            <img
                src="/images/floating.svg"
                className="float-el z-[1]"
                style={{ "--d": "12s", "--l": "80%", "--s": "16s" }}
            />


        {/* hero content */}
        <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 py-16 lg:py-26 px-8 gap-8">

                {/* left column */}
                <div className="flex flex-col gap-6">

                    {/* badge */}
                    <div className="flex  gap-3 text-[var(--color-primary)]  w-fit lg:px-4 lg:py-3 p-2 rounded-full font-medium bg-[var(--color-button-bg)] lg:text-lg text-sm">
                        <ShieldCheck /> Your Trust is Our Priority
                    </div>

                    <div className="flex flex-col gap-8">
                        {/* main heading */}

                        <h1 className="lg:text-[4.5rem] text-[3rem] tracking-tight font-extrabold leading-none uppercase text-[var(--color-text)] ">
                            WAKE UP <br/>
                            TO THE <span className="text-[var(--color-primary)]">KRIPA<br/>
                            ADVANTAGE</span> 
                        </h1>

                        {/* short description */}

                        <div className="flex gap-2">
                            {items.map((i,index)=>(
                                <div key={index} className="flex gap-1 items-center text-xs lg:text-lg text-[var(--color-muted)] ">
                                    {index > 0 &&
                                        <Dot size={30}/>
                                    }
                                     {i.content}
                                </div>
                            ))}
                            

                        </div>

                        {/* features */}

                        <div className="flex flex-col gap-2">
                            {FeatureItems.map((i,index)=>(
                                <div key={index} className="flex gap-4 items-center text-sm lg:text-lg text-[var(--color-muted)]">
                                    
                                    <Check className="text-[var(--color-primary)]" />
                                     {i.content}
                                </div>
                            ))}
                            

                        </div>

                        <BookingButton/>

                    </div>
                </div>


                {/* right column */}

                <div className="flex flex-row">
                    <VideoHero/>
                </div>

            </div>
            
        </div>
    </div>
  )
}
