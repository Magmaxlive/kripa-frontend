import IconBox from "./IconBox"
import NumberBox from "./NumberBox"

export default function IconCard({icon,title,description,bgColor,textColor,textSize,textTransform,iconbg,number}) {
  return (
    <div  className={`flex flex-col justify-center items-center gap-6 p-6 ${bgColor || 'bg-(--color-button-bg)'} rounded-xl  transition-transform duration-300 hover:scale-105 cursor-pointer`}>
                {icon && 
                    <IconBox icon={icon} bg={iconbg}/>

                }

                {number && 
                    <NumberBox number={number} bg={iconbg}/>

                }
              <h1 className={`${textSize || 'text-base' } ${textColor || 'text-(--color-primary)'} font-semibold ${textTransform || 'uppercase'} tracking-wider`}>
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
