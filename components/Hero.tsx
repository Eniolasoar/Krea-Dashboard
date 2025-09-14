"use client";

import { motion } from "framer-motion";
import { TextReveal } from "../ui/TextReveal";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { heroCards } from "./json/heroCards";

interface HeroCardProps {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  imgSrc: string[];
  buttonText?: string;
}

const HeroCard = ({ title, subtitle, description, badge, imgSrc, buttonText }: HeroCardProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden h-90 shadow-lg">
      {/* Images grid */}
      <div className={`absolute inset-0 flex ${imgSrc.length > 1 ? "overflow-x-auto" : ""}`}>
        {imgSrc.map((src, idx) => (
          <img
            key={idx}
            className={imgSrc.length > 1 ? "flex-none w-full md:w-1/3 h-full object-cover" : "w-full h-full object-cover"}
            src={src}
            alt={`${title} image ${idx + 1}`}
          />
        ))}
      </div>

      {/* Badge */}
      <div className="absolute top-4 left-4 bg-opacity-70 text-white font-bold text-xs px-2 py-1 rounded-full font-medium">
        {badge}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 w-full bg-gradient-to-t from-black/60 to-transparent">
        <motion.h2 className="text-5xl md:text-7xl font-bold mb-5 sm:mb-10 text-center w-full text-white">
          <TextReveal>{title}</TextReveal>
        </motion.h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full text-white">
          <div className="flex flex-col gap-2 md:max-w-lg">
            <motion.h3 className="text-xl sm:text-2xl font-semibold">
              <TextReveal>{subtitle}</TextReveal>
            </motion.h3>
            <motion.p className="text-sm  w-[90%]">
              <TextReveal>{description}</TextReveal>
            </motion.p>
          </div>
          {buttonText && (
            <motion.button
              className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-100 hover:cursor-pointer transition text-[14px]"
              whileHover={{ scale: 1.05 }}
            >
              {buttonText}
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

const DotNavigation = ({
  totalDots,
  currentIndex,
  onDotClick,
  onPrev,
  onNext,
}: {
  totalDots: number;
  currentIndex: number;
  onDotClick: (i: number) => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  return (
    <div className="flex items-center justify-between mt-4 px-4 lg:px-10">
  {/* Dots in the center-left */}
  <div className="flex gap-2 mx-auto">
    {Array.from({ length: totalDots }).map((_, idx) => (
      <span
        key={idx}
        className={`w-3 h-3 rounded-full cursor-pointer transition ${
          idx === currentIndex ? "bg-black" : "bg-gray-400/70"
        }`}
        onClick={() => onDotClick(idx)}
      />
    ))}
  </div>

  {/* Arrows on the right */}
  <div className="flex gap-2">
    <button
      onClick={onPrev}
      className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 hover:cursor-pointer"
    >
      <HiChevronLeft className="text-gray-700 w-5 h-5" />
    </button>
    <button
      onClick={onNext}
      className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 hover:cursor-pointer"
    >
      <HiChevronRight className="text-gray-700 w-5 h-5" />
    </button>
  </div>
</div>

  );
};

export default function Hero() {
  

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (i: number) => setCurrentIndex(i);
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? heroCards.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === heroCards.length - 1 ? 0 : prev + 1));

  return (
    <>
 <div className="pl-4 lg:pl-5 py-6">
 <div className="relative overflow-hidden px-4">
  <div className="flex">

    <div className="flex-shrink-0 w-full sm:w-3/5">
      <HeroCard {...heroCards[currentIndex]} />
    </div>


    {heroCards[currentIndex + 1] && (
      <div className="flex-shrink-0 w-1/2 relative ml-12">
        <HeroCard {...heroCards[currentIndex + 1]} />
      </div>
    )}
  </div>
</div>




      <DotNavigation
        totalDots={heroCards.length}
        currentIndex={currentIndex}
        onDotClick={handleDotClick}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>

    </>
   
    
    


  );
}
