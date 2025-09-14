"use client";

import { motion } from "framer-motion";
import { TextReveal } from "../ui/TextReveal";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

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
        <motion.h2 className="text-5xl md:text-7xl font-bold mb-10 text-center w-full text-white">
          <TextReveal>{title}</TextReveal>
        </motion.h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full text-white">
          <div className="flex flex-col gap-2 md:max-w-lg">
            <motion.h3 className="text-2xl font-semibold">
              <TextReveal>{subtitle}</TextReveal>
            </motion.h3>
            <motion.p className="text-sm w-[90%]">
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
    const heroCards = [
        {
          title: "WAN 2.2",
          subtitle: "WAN 2.2 Image generation",
          description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
          badge: "NEW IMAGE MODEL",
          imgSrc: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB7RHwT375j77aG8YLvo6uV5Ci2nVSaIfQz21d5yJeDFTycTBDJJMVsKKuEZ40KiSSgOdj28yetO6XU_GFmqetZVaWgzNi7Dy73ddvNyvwxbW6wrG2BKSglJHrofpisxDa-8VjxaWNg4IqkgKGYLivLoSSzvcHykekwfLUYLshcP9OAKp50i8bk8uQcKBJZ5fE2dvfH07LGk_E6dGFS9hoetphiLrDuuMR1CyjuR9_twMtRXO7lvjoBACbkgNQ70ljPhoY-FR6GoA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCLUFyL9NODape61CE06SPgaVFVIHv-lqbscW-opWWZYMLobH4K3GP7pwW-Zvel4kVZqiZx2au5JR7Hy821Hhh4Fj901_sSQPLaxiQpQCo_yM5PIN66ToZEkyMPuGIgCU89yUiHSt7joo5-TIMuh5WxtoFnwn_bQIqKEg9aM7VeZRi7Pw-OR5FmomzqxCfRqUdUk-prtq8eRXPPFMPojW3pgMPS38AgOrlBP6KxDimqVP5J4JqcpNLG5OwGVFypLfWk-Sf3LxyDtA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBAfVgyhAuMcJGNqiUh94DF47bj63s2EhwkkD7vRS41yGlMlCoa1kjBGjDXstXcO4tRLBd_cQHhTSji5uHFuHTO0RpwIOB73g0MT9Plo3aOWxZoqt5GQWrMup-_lkwN5FA1V96nhp8LaEn7nigw07LeRdzbgSma1VhRkgy7NRRP0zusd7QiReiHcNa-jQjfxlKoc8YOJgsidMPCoP65bgAeDtMLsQPxruRe5j9aUywx5Byk7Scrm0TnOlxO3Qc-iu6ndM1CNlijzw"
          ],
          buttonText: "Try WAN 2.2",
        },
        {
          title: "OpenSour",
          subtitle: "FLUX.1 Krea",
          description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
          badge: "OPEN SOURCE MODEL",
          imgSrc: ["https://lh3.googleusercontent.com/aida-public/AB6AXuDgcNJAF53TLBg-Ex8-QA7H0saK8OzVkxw1f85DWJVYitj5eCOFca10YUC2jzQTomAJVOGdIXRy_MXOJEUldE8VxCsAEElDinKvNyYYmvPaF-vSqX1P-_FQEE8r-3nxk1TAXCcvWAEFPqsM6rXgAmAj_yZnhPTMtP0Nl621D4z5n2U1UDC3xboLzqMg5KjBQ9aPgRMZx9iVnZW1bgr7bstMH5czenBJGgR2JMo9d2tpukabAMgn20E8330y3F_JhnNPlw5bnV1YaQ"],
          buttonText: "Try FLUX.1",
        },
        {
          title: "WAN 2.2",
          subtitle: "WAN 2.2 Image generation",
          description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
          badge: "NEW IMAGE MODEL",
          imgSrc: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDeHHOV67bqmM05EnzwXz65IqOwxZ7_P02Oa1vGlfFOBm2jgPjxTEFAb89mIA94MqJTkN9EujzoX1GDlXKx8V52owNJHlztt53Z1MD-bjxB4FOQ39Ld0tu6bPCD7SxmAgH4e9JjOz9rtxd1yC8NXfF4hT5FTMaYU-MgkyVU6I9Pg6mQWukD9jbGaOjnXigBm1bwxLFnT9MPEuXO86qYEY4mbOBt3aX9ld80cm_3TWJmjDMbSThd7NErNLy6hpjJ9b7FihDBzlZidg"
          ],
          buttonText: "Try WAN 2.2",
        },
        {
          title: "OpenSour",
          subtitle: "FLUX.1 Krea",
          description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
          badge: "OPEN SOURCE MODEL",
          imgSrc: ["https://lh3.googleusercontent.com/aida-public/AB6AXuD8f2e04VLJgJeXcQmajK8sfil2slpp5ngXiOhF6HvqhJvvkVRIGzQiLkTVylzqTEqKZtA9JFAsyuqfKEZS9IEDgOHc0AnqBt4QIXpeyVQqCoRln1QDwPdT_VAd7ZhgaAonpnWdmiIXSmbuxtztadOrHwb5WCJqW_M5Ga9OpJqo7QOplnvmD-4cNfH0kxgAqlBBGV5FU_G4wMCjbQKrRfy8DHuEY7dlEafxTQ5vh3fAiQS2_m1EDMi_TOMxqSa7yyGGF3OcRvuCQA"],
          buttonText: "Try FLUX.1",
        },
        {
          title: "WAN 2.2",
          subtitle: "WAN 2.2 Image generation",
          description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
          badge: "NEW IMAGE MODEL",
          imgSrc: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB7RHwT375j77aG8YLvo6uV5Ci2nVSaIfQz21d5yJeDFTycTBDJJMVsKKuEZ40KiSSgOdj28yetO6XU_GFmqetZVaWgzNi7Dy73ddvNyvwxbW6wrG2BKSglJHrofpisxDa-8VjxaWNg4IqkgKGYLivLoSSzvcHykekwfLUYLshcP9OAKp50i8bk8uQcKBJZ5fE2dvfH07LGk_E6dGFS9hoetphiLrDuuMR1CyjuR9_twMtRXO7lvjoBACbkgNQ70ljPhoY-FR6GoA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCLUFyL9NODape61CE06SPgaVFVIHv-lqbscW-opWWZYMLobH4K3GP7pwW-Zvel4kVZqiZx2au5JR7Hy821Hhh4Fj901_sSQPLaxiQpQCo_yM5PIN66ToZEkyMPuGIgCU89yUiHSt7joo5-TIMuh5WxtoFnwn_bQIqKEg9aM7VeZRi7Pw-OR5FmomzqxCfRqUdUk-prtq8eRXPPFMPojW3pgMPS38AgOrlBP6KxDimqVP5J4JqcpNLG5OwGVFypLfWk-Sf3LxyDtA",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBAfVgyhAuMcJGNqiUh94DF47bj63s2EhwkkD7vRS41yGlMlCoa1kjBGjDXstXcO4tRLBd_cQHhTSji5uHFuHTO0RpwIOB73g0MT9Plo3aOWxZoqt5GQWrMup-_lkwN5FA1V96nhp8LaEn7nigw07LeRdzbgSma1VhRkgy7NRRP0zusd7QiReiHcNa-jQjfxlKoc8YOJgsidMPCoP65bgAeDtMLsQPxruRe5j9aUywx5Byk7Scrm0TnOlxO3Qc-iu6ndM1CNlijzw"
          ],
          buttonText: "Try WAN 2.2",
        },
        {
          title: "OpenSour",
          subtitle: "FLUX.1 Krea",
          description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
          badge: "OPEN SOURCE MODEL",
          imgSrc: ["https://lh3.googleusercontent.com/aida-public/AB6AXuBAfVgyhAuMcJGNqiUh94DF47bj63s2EhwkkD7vRS41yGlMlCoa1kjBGjDXstXcO4tRLBd_cQHhTSji5uHFuHTO0RpwIOB73g0MT9Plo3aOWxZoqt5GQWrMup-_lkwN5FA1V96nhp8LaEn7nigw07LeRdzbgSma1VhRkgy7NRRP0zusd7QiReiHcNa-jQjfxlKoc8YOJgsidMPCoP65bgAeDtMLsQPxruRe5j9aUywx5Byk7Scrm0TnOlxO3Qc-iu6ndM1CNlijzw"],
          buttonText: "Try FLUX.1",
        },
        {
          title: "WAN 2.2",
          subtitle: "WAN 2.2 Image generation",
          description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
          badge: "NEW IMAGE MODEL",
          imgSrc: [
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCU7Ybxt9300Zzq40l00XOyU4R1Z0YAsq6vRK812bpjB8B0BXR6Upv15duV1Ezw9pAQout-6q1hT2-gXcVu0y4sEeJnadT9hCB43Kx7ZXcO7j0qdJD_rqFveTY1_XrJyK4-8Cl454hT1tIowGXHDoi0Cl-E06De7J5_UZKTvFRL4ySVb-gFQiBj2Pt0vnPvLQCAyYBA3x9UaoEjyp1gzoKyiGckT_2QxhjtbABlRZW6yDduRitkMZK9lu7xcsHBc4kJZulTkZ28aA"
          ],
          buttonText: "Try WAN 2.2",
        },
        {
          title: "OpenSour",
          subtitle: "FLUX.1 Krea",
          description: "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
          badge: "OPEN SOURCE MODEL",
          imgSrc: ["https://lh3.googleusercontent.com/aida-public/AB6AXuCYgE33Evj8kyLRfSu95f5ikcHEWiNA1W-i3s72nFPbjTfYUtKYSHzOhpXXtAxXJpnyZWtMsdLnQ6KDg8Lc9PuM24xGIcQc7ILinZ4DS_p0DrvX2ZnFbRPlnPGa8JT2kB_Q-oSOArb7PGuItPiSExTDzxurzrZB65vMA66NJhq07CCav7doa96et6zpE5harCOI8Izq7Gv-yWDLL0VZ6Eg37JBpDIHZE7cKvS0PPH9OEUFWq0u7wjey05rooE9gYNWd-hBGWDWNAA"],
          buttonText: "Try FLUX.1",
        },
        {
            title: "WAN 2.2",
            subtitle: "WAN 2.2 Image generation",
            description: "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
            badge: "NEW IMAGE MODEL",
            imgSrc: [
              "https://lh3.googleusercontent.com/aida-public/AB6AXuARhdykqDcDOH0yfS6KQBcERXAXP44e1WlHPgIzp0Ro_jDDMIBSPNCZPPXGAt_mxhRDK8XmyAFaiCPE474X5TJY73j1x06PNQbud7zh0xNowGgek807QCQhErldJ7cAc6t-tjk5SquYvmG-vNpbunRY--l_M7yxxc5Z6N7RxgWJ_tDYxgvNxVO9sK3Aeu4VVfwDEdoo6Rz_56-XVKHLMLI-MrAd3sjgcKl2L_aG4_MXbCBRi7ANGbrkeKrnPhTsy2puHQcIIWWJQg"
            ],
            buttonText: "Try WAN 2.2",
          },
        // Add more cards here
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (i: number) => setCurrentIndex(i);
  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? heroCards.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === heroCards.length - 1 ? 0 : prev + 1));

  return (
    <>
 <div className="pl-4 lg:pl-5 py-6">
 <div className="relative overflow-hidden px-4">
  <div className="flex">

    <div className="flex-shrink-0 w-3/5">
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

<div className="bg-white text-gray-800 dark:bg-red-900 dark:text-white p-4">
  Hello Dark Mode!
</div>
    </>
   
    
    


  );
}
