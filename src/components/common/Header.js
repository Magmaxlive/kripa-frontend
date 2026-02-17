'use client';
import Image from "next/image";
import { Links } from "@/data/Links";
import Link from "next/link";
import { Phone,Menu,X } from 'lucide-react';
import { useState } from "react";
import BookingButton from "./BookingButton";



export default function Header() {
    const [drawerOpen,setDrawerOpen] = useState(false)

    const toggleNavbar = () =>{
        setDrawerOpen(!drawerOpen)
    }
  return (
    <>
        <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg bg-(--color-secondary) border-b border-(--color-secondary)">
            <div className="container px-6 mx-auto relative text-sm max-w-[1200px]">
                <div className="flex justify-between items-center text-base">
                
                        <div className="flex items-center flex-shrik-0">
                            <Image src='/images/kripalogo.svg' width={80} height={100} alt="Kripa logo" />
                        </div>
                    
                        <ul className="hidden lg:flex space-x-8 text-(--color-muted) font-medium ">
                            {Links.map((i,index)=>
                                (
                                <li key={index}><Link href={i.link}  className="cursor-pointer capitalize">{i.label}</Link></li> 
                                )
                            )}
                        </ul>

                        <div className="hidden lg:flex gap-6 items-center justify-center text-(--color-text) font-semibold">
                            {/* <div className="flex gap-2">
                                <Phone />
                                <h6>022 587 0762</h6>
                            </div> */}

                            <BookingButton/>
                            
                        </div>

                        <div className="lg:hidden md:flex flex gap-4 justify-end">
                            
                            <button onClick={toggleNavbar} className="cursor-pointer text-(--color-text)">
                                {drawerOpen ? <X/>:<Menu/>}
                            </button>
                        </div> 
                </div>
            </div>

            {drawerOpen &&
                <div className="fixed right-0 p-8  bg-(--color-secondary) z-20 w-full flex flex-col justify-start  gap-4 lg:hidden">
                    <ul className="flex flex-col text-(--color-muted) font-medium gap-3">
                            {Links.map((i,index)=>
                                (
                                <li key={index}><Link to={i.link} smooth={true} duration={600} offset={-100} className="cursor-pointer">{i.label}</Link></li> 
                                )
                            )}
                    </ul>
                    <hr className="my-2"/>

                    <div className="flex flex-col gap-6  justify-start text-(--color-text) font-semibold ">
                            <div className="flex gap-2">
                                <Phone />
                                <h6>022 587 0762</h6>
                            </div>

                            <BookingButton/>
                            
                    </div>
                </div>
            }
        </nav>
      
    </>
  )
}
