'use client';

import { firstSectionData, serviceLinks,resourcesLinks, Emails } from "@/data/footer/footerData"
import { Link, Element } from "react-scroll";
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp,FaFacebookF,FaInstagram,FaLinkedin    } from "react-icons/fa";
import { ContactItems } from "@/data/homepage/GetinTouchData";
import SocialMedia from "./SocialMedia";




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
            <div className="flex flex-col gap-12">
                <div className="flex lg:flex-row flex-col  gap-10 justify-between">
                    <div className="flex flex-col gap-4 text-white">
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
                        <h6 className="font-semibold text-base">Emails</h6>
                        <div className="flex flex-col gap-4" >
                            {Emails.map((i,index)=>(
                                
                                    <a href={`mailto:${i.email}`} key={index} target="_blank" className="font-normal text-sm text-(--color-secondary)/80 hover:underline underline-offset-4">
                                        {i.email}
                                    </a>
                                
                            ))}
                        </div>
                        
                    </div>

                    <div className="flex flex-col gap-6 text-white">
                        <h6 className="font-semibold text-base">Resources</h6>
                        <div className="flex flex-col gap-4" >
                        {resourcesLinks.map((i,index)=>(
                                <Link href={i.link} key={index} className="font-normal text-sm text-(--color-secondary)/80 hover:underline underline-offset-4">
                                    {i.name}
                                </Link>
                        ))}
                        </div>
                        
                    </div>

                    <div className="flex flex-col gap-6 text-white">
                        <h6 className="font-semibold text-base">Contact Us</h6>
                        <div className="flex flex-col gap-4">
                        {ContactItems.map((i, index) => {
                                        const Icon = iconMap[i.title.toLowerCase()];
                                        const link = getContactLink(i.title, i.content);
                        
                                        return (
                                        <div className="flex gap-3 items-start font-normal text-sm text-(--color-secondary)/80" key={index}>
                                            <a href={link} target="_blank" className=" text-(--color-secondary)/80 cursor-pointer">
                                                {Icon && <Icon className="w-5 h-5" />}
                                            </a>
                        
                                            <div className="flex flex-col gap-3">
                                           
                                            {link ? (
                                                <a href={link} target="_blank" className="hover:underline underline-offset-4 font-medium">
                                                {i.content}
                                                </a>
                                            ) : (
                                                <a href={i.link} target="_blank" className="hover:underline underline-offset-4 font-medium">
                                                {i.content}
                                                </a>
                                            )}
                                            </div>
                                        </div>
                                        );
                                    })}
                            </div>
                        
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col gap-10 justify-between">

                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-base">
                            Subscribe to our newsletter
                        </h1>
                        
                            <form action="" method="post">
                                <div className="flex gap-4">
                                    <input type="email" name="email" placeholder="Enter Your Email" className="border rounded-2xl p-3 border-gray-300 text-(--color-secondary)"  required/>

                                    <button type="submit" disabled className="bg-(--color-accent) w-fit flex gap-2 justify-center items-center rounded-xl  p-3 text-[#14181f] font-semibold text-sm cursor-pointer">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                       
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold text-base">
                            Follow us on
                        </h1>

                        <SocialMedia bgColor="bg-(--color-secondary)"/>
                        
                            
                       
                    </div>

                </div>

                <hr className="text-(--color-secondary)/50" />

                <div className="flex md:flex-row flex-col justify-center text-(--color-secondary)/80 text-sm gap-4">
                    <p className="md:text-start text-center">© {new Date().getFullYear()} Kripa Financial Solutions Limited. All rights reserved.</p>
                    
                </div>
            </div>
        </div>
      
    </div>
  )
}
