'use client';

import { useState } from "react";
import Image from "next/image";



export default function TeamCard({data}) {
    const [showMore,setShowMore] = useState(false);
     const paragraphs = data.description.props.children;

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
    
                                        <div className="text-sm space-y-2">
                                            {Array.isArray(paragraphs) ? paragraphs[0] : paragraphs}

                                            {showMore && Array.isArray(paragraphs) &&
                                                paragraphs.slice(1)
                                            }

                                            {/* Button */}
                                            {Array.isArray(paragraphs) && paragraphs.length > 1 && (
                                                <button
                                                onClick={() => setShowMore(!showMore)}
                                                className="text-(--color-primary) mt-4 font-medium cursor-pointer"
                                                >
                                                {showMore ? "Read less" : "Read more"}
                                                </button>
                                            )}

                                        </div>
                    
                    
                                        {/* <Buttons link={i.link} buttonText={i.buttonText} buttonIcon={i.buttonIcon}/> */}
                </div>
  )
}
