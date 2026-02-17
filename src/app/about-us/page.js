import BookingButton from "@/components/common/BookingButton";
import IconBox from "@/components/common/IconBox";
import PageBanner from "@/components/common/PageBanner";
import SectionHeading from "@/components/common/SectionHeading";
import VideoHero from "@/components/Homepage/HeroVideo";
import { coreValues } from "@/data/about-page/coreValues";
import Image from "next/image";
import { mission_visson } from "@/data/about-page/Misson";
import { Mainteam,mortageAdvisors,otherMembers } from "@/data/about-page/Team";
import TeamCard from "@/components/common/TeamCard";
import OtherTeam from "@/components/common/OtherTeam";


export default function page() {
  return (
    <div className="flex flex-col">
        <PageBanner title="about us" bannerBg="/images/aboutpagebanner.jpg" breadCrumbs={[
            {
                label: 'about us',href:"/about-us"
            },
        ]} />
        
        {/* about section */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-(--color-secondary) gap-10 py-20 px-8 max-w-[1200px] mx-auto">

            
            <VideoHero/>

            <div className="flex flex-col gap-6">
                {/* main heading and paragraph */}
                <SectionHeading  
                class="md:justify-start justify-center md:items-start items-center"
                minorHeading="about us" 
                mainHeading={
                            <div className="md:text-start">
                                Welcome to Kripa Financial Solutions
                            </div>
                            }  

                paragraph={
                    <div className="space-y-3">
                        <p>
                            Kripa Financial Solutions Limited was established at the end of 2020 by Simi Sethu and Sethu Arjunan.
                        </p>

                        <p>
                            Our name “Kripa” reflects grace and compassion—values that guide every client interaction.
                        </p>

                        <p>
                            We exist because of the trust our clients have placed in us throughout their property journeys.
                        </p>

                        <p>
                            From first homes to investment portfolios, refinances, and commercial ventures, we treat each deal as our own, giving 100% effort to open doors to a better financial future—for you, your family, and the community.
                        </p>
                        </div>
                }
                />


                

                <BookingButton/>
            </div>
           

        </div>

        {/* mission */}

        <div className="bg-(--color-neutral) px-8 py-20">
            <div className="mx-auto flex flex-col gap-12 max-w-[1200px]">

                <SectionHeading minorHeading="mission & vision" mainHeading="Kripa's Mission & vision" class="text-center" />
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                            {mission_visson.map((i,index)=>(
                                <div className="flex flex-col gap-4 bg-(--color-secondary) border border-gray-300 rounded-lg p-6 text-black" key={index}>
                                    <div className='bg-(--color-button-bg) rounded-full h-fit w-fit p-4 text-(--color-primary)'>
                                        {i.icon}
                                    </div>
                                    <h3 className="font-semibold text-lg text-(--color-primary)">
                                        {i.title}
                                    </h3>
                                    <div className="text-sm">
                                        {i.content}
                                    </div>
                
                
                                    {/* <Buttons link={i.link} buttonText={i.buttonText} buttonIcon={i.buttonIcon}/> */}
                                </div>
                            ))}
                            
                        </div>
            </div>


        </div>


        {/* core values */}

        <div className="bg-(--color-secondary) px-8 py-20">
            <div className="mx-auto flex flex-col gap-12 max-w-[1200px]">
                <SectionHeading class="text-center" minorHeading="our Core Values" mainHeading="Why Choose Kripa" />

                <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreValues.map((i,index)=>(
                        <div key={index} className="flex flex-col justify-center items-center gap-3 p-4 bg-(--color-button-bg) rounded-xl  transition-transform duration-300 hover:scale-105 cursor-pointer">
                            <IconBox icon={i.icon}/>
                            <h1 className="text-base font-semibold uppercase tracking-wider">
                                {i.title}
                            </h1>
                            <p className="text-xs text-center">
                                {i.description}
                            </p>
                        </div>
                        
                    ))}
                </div>
            </div>


        </div>


        {/* team section */}

       

        <div className="bg-(--color-neutral) px-8 py-20">
            <div className="mx-auto flex flex-col gap-12 max-w-[1200px]">

                <SectionHeading 
                minorHeading="Our Team" 
                mainHeading="The People Behind Kripa" 
                paragraph="Experienced, Dedicated, and Client-Focused
                        Decades of global and local expertise in banking, finance, operations and
                        advisory.Passionate about simplifying complexity and delivering personalized solutions."
                class="justify-center items-center" />
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {Mainteam.map((i,index)=>(
                                <TeamCard data={i} key={index}/>
                            ))}
                            
                </div>

                <SectionHeading 
                minorHeading="mortage advisers" 
                class="justify-center items-center" />
               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {mortageAdvisors.map((i,index)=>(
                                <TeamCard data={i} key={index}/>
                            ))}
                            
                </div>

                <SectionHeading minorHeading="other key members" class="text-center" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {otherMembers.map((i,index)=>(
                                <OtherTeam data={i} key={index}/>
                            ))}
                            
                </div>
            </div>


        </div>


      
    </div>
  )
}
