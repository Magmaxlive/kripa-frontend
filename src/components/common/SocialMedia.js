import { FaWhatsapp,FaFacebookF,FaInstagram,FaLinkedin    } from "react-icons/fa";
import { ContactCard_description, ContactItems, socialMedia } from "@/data/homepage/GetinTouchData";


export default function SocialMedia({bgColor}) {
    const socialIcons = {
        instagram : FaInstagram ,
        facebook : FaFacebookF,
        linkedin : FaLinkedin 
    }
    
  return (
    <div className="flex  gap-3 cursor-pointer">
                    {socialMedia.map((i, index) => {
                        const Icon = socialIcons[i.name.toLowerCase()];

                        return (
                        <div className="flex gap-3 items-start" key={index}>
                            <a href={i.link} target="_blank" className={`${bgColor || 'bg-(--color-button-bg)'} hover:bg-(--color-primary) hover:text-(--color-secondary) cursor-pointer rounded-3xl h-fit w-fit p-2 text-(--color-primary)`}>
                                {Icon && <Icon className="w-3 h-3" />}
                            </a>

                        </div>
                        );
                    })}
    </div>
  )
}
