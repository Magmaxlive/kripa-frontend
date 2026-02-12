'use client';

import { firstSectionData, serviceLinks,companyLinks,resourcesLinks } from "@/data/footer/footerData"
import { Link, Element } from "react-scroll";
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp,FaFacebookF,FaInstagram,FaLinkedin    } from "react-icons/fa";
import { ContactItems } from "@/data/homepage/GetinTouchData";




export default function Footer() {

    const iconMap = {
        phone: Phone,
        email: Mail,
        location: MapPin,
        whatsapp: FaWhatsapp
    };

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
    <div className='bg-(--color-primary) py-20 px-8 text-(--color-secondary)'>
        <div className="mx-auto max-w-[1200px]">
            <div className="flex flex-col gap-10">
                <div className="flex lg:flex-row flex-col  gap-10 justify-between">
                    <div className="flex flex-col gap-6 text-white">
                        <Image src='/images/kripalogo.svg' className="brightness-0 invert-100"  width={100} height={100} alt="Kripa logo" />
                        {firstSectionData.map((i,index)=>(
                            <div className="flex flex-col gap-4" key={index}>
                                <p className="font-normal lg:max-w-[250px] text-md text-(--color-secondary)/80">
                                    {i.description}
                                </p>

                                <p className="font-normal text-md text-(--color-secondary)/80">
                                    FSP Number : {i.fsp_number}
                                </p>
                            </div>
                        ))}
                        
                    </div>

                    

                    <div className="flex flex-col gap-6 text-white">
                        <h6 className="font-semibold text-md">Company</h6>
                        {companyLinks.map((i,index)=>(
                            <div className="flex flex-col gap-4" key={index}>
                                <Link href={i.link} className="font-normal text-sm text-(--color-secondary)/80">
                                    {i.name}
                                </Link>
                            </div>
                        ))}
                        
                    </div>

                    <div className="flex flex-col gap-6 text-white">
                        <h6 className="font-semibold text-md">Resources</h6>
                        {resourcesLinks.map((i,index)=>(
                            <div className="flex flex-col gap-4" key={index}>
                                <Link href={i.link} className="font-normal text-sm text-(--color-secondary)/80">
                                    {i.name}
                                </Link>
                            </div>
                        ))}
                        
                    </div>

                    <div className="flex flex-col gap-6 text-white">
                        <h6 className="font-semibold text-md">Contact Us</h6>
                        {ContactItems.map((i, index) => {
                                        const Icon = iconMap[i.title.toLowerCase()];
                                        const link = getContactLink(i.title, i.content);
                        
                                        return (
                                        <div className="flex gap-3 items-start font-normal text-sm text-(--color-secondary)/80" key={index}>
                                            <a href={link} target="_blank" className=" text-(--color-secondary)/80 cursor-pointer">
                                                {Icon && <Icon className="w-5 h-5" />}
                                            </a>
                        
                                            <div className="flex flex-col gap-2">
                                           
                                            {link ? (
                                                <a href={link} target="_blank" className="hover:underline font-medium">
                                                {i.content}
                                                </a>
                                            ) : (
                                                <a href={i.link} target="_blank" className="hover:underline font-medium">
                                                {i.content}
                                                </a>
                                            )}
                                            </div>
                                        </div>
                                        );
                                    })}
                        
                    </div>
                </div>

                <hr className="text-(--color-secondary)/50" />

                <div className="flex md:flex-row flex-col justify-between text-(--color-secondary)/80 text-sm gap-4">
                    <p className="md:text-start text-center">© 2026 Kripa Financial Solutions Limited. All rights reserved.</p>
                    <div className="flex flex-row justify-between gap-4">
                        <Link href="#">Privacy policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
