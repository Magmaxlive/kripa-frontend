

import Image from "next/image";

export default function BlogSection({image,title,excerpt,slug,id}) {
  return (
        <div className="flex flex-col justify-between gap-3 bg-(--color-secondary) border border-gray-300 rounded-lg p-6 text-black">
                                                <div className="relative w-full" style={{height:'200px'}}>
                                                    <Image src={image} alt={title} fill  className="object-cover object-[center_30%] rounded-md"/>
                                                </div>
            
                                                <h3 className="font-bold capitalize text-xl text-(--color-primary)">
                                                    {title}
                                                </h3>
            
                                                <div className="text-sm text-(--color-primary)/80">
                                                    {excerpt}
                                                </div>
                            
                            
                                                <button
                                                className="text-(--color-primary) hover:underline underline-offset-4 mt-4 font-medium  cursor-pointer"
                                                >
                                                Read more
                                                </button>
        </div>
      

  )
}
