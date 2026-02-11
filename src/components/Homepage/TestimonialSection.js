'use client';

import SectionHeading from "../common/SectionHeading";
import { FaStar } from "react-icons/fa";
import { testimonials } from "@/data/homepage/Testimonial";
import { useEffect, useState } from "react";
import { accreditedMembers } from "@/data/homepage/Testimonial";



export default function TestimonialSection() {
  const items = testimonials;
  const total = items.length;

  // clone for infinite loop
  const slides = [
    items[total - 1],
    ...items,
    items[0],
  ];

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const [slideWidth, setSlideWidth] = useState(100);


  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => i + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // loop jump
  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 300);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(slides.length - 2);
      }, 300);
    }
  }, [index]);

        useEffect(() => {
        const updateWidth = () => {
            setSlideWidth(window.innerWidth >= 1024 ? 33.333 : 100);
        };

        updateWidth(); // initial
        window.addEventListener("resize", updateWidth);

        return () => window.removeEventListener("resize", updateWidth);
        }, []);


  
  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  return (
    <div className="bg-(--color-primary) py-20 px-8" id="testimonials">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center  gap-10">

        <SectionHeading
          minorHeading="Real Stories"
          mainHeading="Families we've helped succeed"
          minorHeadingColor="text-[var(--color-secondary)]"
          mainHeadingColor="text-[var(--color-secondary)]"
          class="text-center"
        />

      
        {/* SLIDER */}
        <div className="w-full overflow-hidden">
      <div
        className="flex"
        style={{
          transform: `translateX(-${index * slideWidth}%)`,
          transition: transition ? "transform 0.4s ease" : "none",
        }}
      >
        {slides.map((i, idx) => (
          <div
            key={idx}
            className="min-w-full lg:min-w-[33.333%] px-2"
          >
            <div className="flex flex-col gap-4 p-8 bg-(--color-secondary) rounded-xl h-full">
              <div className="flex gap-1">
                {[...Array(i.rating)].map((_, r) => (
                  <FaStar
                    key={r}
                    size={18}
                    className="text-(--color-accent)"
                  />
                ))}
              </div>

              <p className="italic font-medium">
                “{i.testimonial}”
              </p>

              <div className="flex gap-2 items-center">
                <div className="bg-(--color-button-bg) font-bold rounded-full px-4 py-2 text-(--color-primary)">
                  {i.author[0]}
                </div>
                <h6 className="font-semibold">{i.author}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i + 1)}
            className={`h-2 w-2 rounded-full transition ${
              index - 1 === i
                ? "bg-white"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
      </div>

      {/* accredited members */}

        <div className="flex flex-col justify-center items-center py-8 gap-4">
          <hr className="w-full text-gray-500 mb-2"  />
          <h6 className="uppercase text-gray-300 font-semibold text-sm tracking-wider">accredited member</h6>
          <div className="flex lg:flex-row flex-col gap-3 justify-center items-center">
            {accreditedMembers.map((i,index)=>(
              <h6 className="text-(--color-secondary) font-semibold text-sm tracking-wider" key={index}>{i.name}</h6>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
