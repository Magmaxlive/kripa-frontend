'use client';

import SectionHeading from "../common/SectionHeading";
import { FaStar } from "react-icons/fa";
import { testimonials } from "@/data/homepage/Testimonial";
import { useEffect, useState } from "react";



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
    <div className="bg-[var(--color-primary)] py-20 px-8">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-10">

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
            <div className="flex flex-col gap-4 p-6 bg-[var(--color-secondary)] rounded-xl h-full">
              <div className="flex gap-1">
                {[...Array(i.rating)].map((_, r) => (
                  <FaStar
                    key={r}
                    size={18}
                    className="text-[var(--color-accent)]"
                  />
                ))}
              </div>

              <p className="italic font-medium">
                “{i.testimonial}”
              </p>

              <div className="flex gap-2 items-center">
                <div className="bg-[var(--color-button-bg)] font-bold rounded-full px-4 py-2 text-[var(--color-primary)]">
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
      </div>
    </div>
  );
}
