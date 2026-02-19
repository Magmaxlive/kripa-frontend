import Image from "next/image"

export default function InsuranceProducts({image,title,tagline,description}) {
  return (
    <div className="flex flex-col justify-between gap-3 bg-(--color-secondary) border border-gray-300 rounded-lg p-6 text-black">
                                                    <div className="relative w-full" style={{height:'200px'}}>
                                                        <Image src={image} alt={title} fill  className="object-cover object-[center_30%] rounded-md"/>
                                                    </div>
                
                                                    <h3 className="font-bold capitalize text-xl text-(--color-primary)">
                                                        {title}
                                                    </h3>
                
                                                    <div className="text-sm font-semibold text-(--color-primary)/80">
                                                        {tagline}
                                                    </div>

                                                    <div className="text-sm text-(--color-muted)">
                                                        {description}
                                                    </div>
                                
                                
            </div>
          
    
  )
}
