import { ContactCard_description, ContactItems, socialMedia } from "@/data/homepage/GetinTouchData";
import Link from "next/link";
import { Phone, Mail, MapPin} from "lucide-react";
import { FaWhatsapp,FaFacebookF,FaInstagram,FaLinkedin    } from "react-icons/fa";




export default function ContactCard() {

const iconMap = {
  phone: Phone,
  email: Mail,
  location: MapPin,
  whatsapp : FaWhatsapp
};

const socialIcons = {
    instagram : FaInstagram ,
    facebook : FaFacebookF,
    linkedin : FaLinkedin 
}

function getContactLink(title, content) {
  switch (title.toLowerCase()) {
    case 'phone':
      return `tel:${content.replace(/\s+/g, '')}`;
    case 'email':
      return `mailto:${content}`;
    case 'whatsapp':
        return `https://wa.me/${content.replace(/\D+/g, '')}`;
    default:
      return null;
  }
}
  return (
    <div className="bg-(--color-neutral) flex rounded-xl flex-col gap-8 p-10">
        <h5 className="font-semibold text-2xl">Contact Information</h5>

            <div className="flex flex-col gap-3 mt-2">
                {ContactCard_description.map((i,index)=>
                
                    (
                        <div key={index} className="flex flex-col gap-3">
                            <h5 className="font-medium text-lg" key={index}>{i.title}</h5>
                            <p className="font-normal">{i.description}</p>
                            <Link href={i.link} className="mt-4 bg-(--color-primary) text-(--color-secondary) w-fit flex gap-2 justify-center items-center rounded-full hover:border hover:border-gray-700 hover:text-(--color-primary) hover:bg-(--color-secondary) lg:py-3 lg:px-6 p-3  font-semibold">
                                                    {i.buttonText}  
                            </Link>
                        </div>

                    ))
                }
                
            </div>

            <div className="flex flex-col gap-6">
                
            {ContactItems.map((i, index) => {
                const Icon = iconMap[i.title.toLowerCase()];
                const link = getContactLink(i.title, i.content);

                return (
                <div className="flex gap-3 items-start" key={index}>
                    <a href={link} target="_blank" className="bg-(--color-button-bg) hover:bg-(--color-primary) hover:text-(--color-secondary) cursor-pointer rounded-3xl h-fit w-fit p-4 text-(--color-primary)">
                        {Icon && <Icon className="w-5 h-5" />}
                    </a>

                    <div className="flex flex-col gap-2">
                    <h6 className="font-normal text-sm">{i.title}</h6>

                    {link ? (
                        <a href={link} target="_blank" className="hover:underline font-medium">
                        {i.content}
                        </a>
                    ) : (
                        <p className="font-medium">{i.content}</p>
                    )}
                    </div>
                </div>
                );
            })}
            </div>

            <div className="flex flex-col gap-4">
                <h6 className="font-medium text-lg">Follow Us</h6>
                <div className="flex  gap-3 cursor-pointer">
                    {socialMedia.map((i, index) => {
                        const Icon = socialIcons[i.name.toLowerCase()];

                        return (
                        <div className="flex gap-3 items-start" key={index}>
                            <a href={i.link} target="_blank" className="bg-(--color-button-bg) hover:bg-(--color-primary) hover:text-(--color-secondary) cursor-pointer rounded-3xl h-fit w-fit p-4 text-(--color-primary)">
                                {Icon && <Icon className="w-5 h-5" />}
                            </a>

                        </div>
                        );
                    })}
                </div>
            </div>
            

      
    </div>
  )
}
