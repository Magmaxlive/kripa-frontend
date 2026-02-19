'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Dropdown from "./Dropdown";

export default function MenuItems({ item }) {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdown]);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      {item.submenu ? (
        <>
          <h1
            className="inline-flex items-center gap-1 cursor-pointer capitalize"
          >
            {item.label}
            <span className="text-xs">▾</span>
          </h1>

          <Dropdown submenus={item.submenu} dropdown={dropdown} />
        </>
      ) : (
        <Link href={item.link} className="capitalize cursor-pointer">
          {item.label}
        </Link>
      )}
    </li>
  );
}
