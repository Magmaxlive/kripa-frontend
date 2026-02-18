'use client'

import Image from "next/image";
import { Links } from "@/data/Links";
import { useState } from "react";
import MenuItems from "./MenuItems";
import BookingButton from "./BookingButton";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-4 backdrop-blur-lg bg-(--color-secondary) border-b border-(--color-secondary)">
        <div className="container px-6 mx-auto relative text-sm max-w-[1200px]">
          <div className="flex justify-between items-center text-base">

            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/images/kripalogo.svg"
                priority
                width={80}
                height={100}
                alt="Kripa logo"
                className="h-auto w-auto"
              />
            </div>

            {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-(--color-muted) font-medium">
          {Links.map((item, index) => (
            <MenuItems key={index} item={item} />
          ))}
        </ul>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex gap-6 items-center text-(--color-text) font-semibold">
              <BookingButton />
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex gap-4">
              <button
                onClick={toggleNavbar}
                className="cursor-pointer text-(--color-text)"
              >
                {drawerOpen ? <X /> : <Menu />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        {drawerOpen && (
          <div className="fixed right-0 p-8 bg-(--color-secondary) z-20 w-full flex flex-col gap-4 lg:hidden">
            <ul className="flex flex-col text-(--color-muted) font-medium gap-3">
              {Links.map((item, index) => (
                    <MenuItems key={index} item={item} />
                ))}
            </ul>

            <hr className="my-2" />

            <div className="flex flex-col gap-6 text-(--color-text) font-semibold">
              {/* <div className="flex gap-2">
                <Phone />
                <h6>022 587 0762</h6>
              </div> */}

              <BookingButton />
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
