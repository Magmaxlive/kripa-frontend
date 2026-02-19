'use client';

import Link from "next/link";
import { ChevronRight } from 'lucide-react';

export default function Dropdown({ submenus, dropdown }) {
  if (!dropdown) return null;

  return (
    <ul className="absolute left-0 top-full flex flex-col bg-(--color-neutral) shadow-lg p-6 w-max min-w-[300px] z-[999]">
    {submenus.map((item, index) => (
      <li key={index}>
        <Link
          href={item.link}
          className="flex text-base items-center gap-1 capitalize hover:bg-gray-100 hover:text-(--color-primary) hover:underline underline-offset-4 whitespace-nowrap"
        >
         <ChevronRight size={15} /> {item.label}
        </Link>
        
      </li>
    ))}
  </ul>
  );
}
