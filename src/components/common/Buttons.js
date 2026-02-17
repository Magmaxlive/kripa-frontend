'use client';
import { House,MoveRight,ShieldCheck,MessageCircle   } from 'lucide-react';


import { Link, Element } from "react-scroll";


export default function Buttons(props) {
  return (
    <Link to={props.link} smooth={true} duration={600} offset={-100} className="mt-4 bg-(--color-primary) text-(--color-secondary) w-fit flex gap-2 justify-center items-center rounded-xl lg:py-3 lg:px-6 p-3 cursor-pointer capitalize font-semibold">
        {props.buttonText}  {props.buttonIcon ? props.buttonIcon :<MoveRight/> }
    </Link>
  )
}
