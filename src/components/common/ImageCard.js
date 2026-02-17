import Image from "next/image"
import Link from "next/link"

export default function ImageCard({image,title,description,bgColor,textSize,textTransform,textColor}) {
  return (
    <div  className={`flex flex-col justify-center items-center gap-6 p-4 ${bgColor || 'bg-(--color-button-bg)'} rounded-xl  transition-transform duration-300 hover:scale-105 cursor-pointer`}>

                    {image && 
                        
                      <div
                          style={{ height: "240px" }}
                          className="relative w-full overflow-hidden rounded-md">
                          <Image
                            src={image}
                            alt={title || "image"}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                        
                    }

                      <h1 className={`${textSize || 'text-base' } ${textColor || 'text-(--color-primary)'} font-bold ${textTransform || 'uppercase'} tracking-wider`}>
                          {title}
                      </h1>

                  {description &&
                    <p className="text-xs text-center">
                                    {description}
                    </p>
                  }  

                          
    </div>
  )
}
