
import Image from "next/image";

export default function OtherTeam({data}) {

  return (
    <div className="flex flex-col gap-3 bg-(--color-secondary) border border-gray-300 rounded-lg p-6 text-black">
                                        <div className="relative w-full h-100">
                                            <Image src={data.image} alt={data.name} fill  className="object-cover object-[center_30%] rounded-md"/>
                                        </div>
    
                                        <h3 className="font-bold capitalize text-xl text-(--color-primary)">
                                            {data.name}
                                        </h3>
    
                                        <h3 className="font-semibold capitalize text-base text-(--color-primary)/80">
                                            {data.position}
                                        </h3>
    
                                       
                    
                    
                                        {/* <Buttons link={i.link} buttonText={i.buttonText} buttonIcon={i.buttonIcon}/> */}
                </div>
  )
}
