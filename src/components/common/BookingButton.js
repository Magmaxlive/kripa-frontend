'use client';

import { Link, Element } from "react-scroll";
import { MoveRight } from 'lucide-react';

export default function BookingButton() {
  return (
    <Link to="contact" smooth={true} duration={600} offset={-100}className="bg-(--color-accent) w-fit flex gap-2 justify-center items-center rounded-xl lg:py-3 lg:px-6 p-3 text-[#14181f] font-semibold cursor-pointer">
            Book Consultation
            <MoveRight/>
    </Link>
  )
}

