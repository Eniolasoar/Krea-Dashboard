"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "../utils/cn";
import { SlideIn, Transition } from "../ui/transition";
import { TextReveal } from "../ui/Typography";
import { 
    HiHome,       
    HiPhotograph,  
    HiVideoCamera,  
    HiSparkles,    
    HiPencil,       
    
    HiFolder,       
    HiOutlinePhotograph
    ,     HiBell,
    HiCube,
    HiSun           
  } from "react-icons/hi";

  import { FiHeadphones,FiCompass  } from "react-icons/fi";

  import {  AnimatePresence } from "framer-motion";
import {  HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";





import { HiChevronDown } from "react-icons/hi";
import { AnimatedThemeToggle } from "./AnimatedThemeToggle";

interface NavLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface HeaderProps {
  title?: string;
  links?: NavLink[];
  avatarUrl?: string;
  username?: string;
  userIcon?: React.ReactNode; 
}

export const Header = ({
  title = "Krea Dashboard",
  links = [
    { label: "Gallery", href: "/gallery", icon: <HiOutlinePhotograph /> },
    { label: "Support", href: "/support", icon: <FiHeadphones /> },
  ],
  avatarUrl,
  username = "benevolentremblebut",
  userIcon = <HiCube />,
}: HeaderProps) => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "bg-white/80 dark:bg-gray-900/70 border-gray-200 dark:border-gray-800"
      )}
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">

        <div className="flex items-center space-x-4 ">
          <svg
            aria-label="Krea Logo"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21" />
            <path d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793" />
          </svg>

          <span className="ml-5 flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white">
            <motion.span
              className="w-4 h-4 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400"
              animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="flex items-center space-x-1">
              <span>{username}</span>
              <HiChevronDown className="text-gray-500" />
            </span>
          </span>
        </div>

  
        <div className=" flex items-center space-x-2 bg-gray-100 p-2 rounded-2xl">
          {[HiHome, HiPhotograph, HiVideoCamera, HiSparkles, HiPencil, FiCompass, HiFolder].map((Icon, idx) => {
            const isActive = idx === 0;
            return (
              <button
                key={idx}
                className={cn(
                  "py-2 px-3 rounded-xl text-gray-700 text-xl hover:bg-gray-200 hover:cursor-pointer",
                  isActive && "bg-white  rounded-sm"
                )}
              >
                <Icon />
              </button>
            );
          })}
        </div>

        <div className="flex items-center space-x-2">

          {links.map((link, i) => (
            <Transition key={link.href} transition={{ delay: 0.1 * i }}>
              <Link
                href={link.href}
                className="flex items-center space-x-1 px-3 py-2 text-sm bg-gray-100 font-medium rounded-xl text-gray-700 hover:bg-gray-300"
              >
                {link.icon && <span className="text-base">{link.icon}</span>}
                <span>{link.label}</span>
              </Link>
            </Transition>
          ))}

     
          <div className="flex gap-2 items-center space-x-2 p-2 rounded-full">
            <button className="p-2 rounded-xl bg-gray-100 hover:bg-gray-300 hover:cursor-pointer">
              <HiBell className="text-gray-700 text-xl" />
            </button>
           <AnimatedThemeToggle/>

          </div>

          <motion.div
            className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-400"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </div>
    </motion.header>
  );
};


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
          "https://lh3.googleusercontent.com/aida-public/AB6AXuB7RHwT375j77aG8YLvo6uV5Ci2nVSaIfQz21d5yJeDFTycTBDJJMVsKKuEZ40KiSSgOdj28yetO6XU_GFmqetZVaWgzNi7Dy73ddvNyvwxbW6wrG2BKSglJHrofpisxDa-8VjxaWNg4IqkgKGYLivLoSSzvcHykekwfLUYLshcP9OAKp50i8bk8uQcKBJZ5fE2dvfH07LGk_E6dGFS9hoetphiLrDuuMR1CyjuR9_twMtRXO7lvjoBACbkgNQ70ljPhoY-FR6GoA",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCLUFyL9NODape61CE06SPgaVFVIHv-lqbscW-opWWZYMLobH4K3GP7pwW-Zvel4kVZqiZx2au5JR7Hy821Hhh4Fj901_sSQPLaxiQpQCo_yM5PIN66ToZEkyMPuGIgCU89yUiHSt7joo5-TIMuh5WxtoFnwn_bQIqKEg9aM7VeZRi7Pw-OR5FmomzqxCfRqUdUk-prtq8eRXPPFMPojW3pgMPS38AgOrlBP6KxDimqVP5J4JqcpNLG5OwGVFypLfWk-Sf3LxyDtA",
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBAfVgyhAuMcJGNqiUh94DF47bj63s2EhwkkD7vRS41yGlMlCoa1kjBGjDXstXcO4tRLBd_cQHhTSji5uHFuHTO0RpwIOB73g0MT9Plo3aOWxZoqt5GQWrMup-_lkwN5FA1V96nhp8LaEn7nigw07LeRdzbgSma1VhRkgy7NRRP0zusd7QiReiHcNa-jQjfxlKoc8YOJgsidMPCoP65bgAeDtMLsQPxruRe5j9aUywx5Byk7Scrm0TnOlxO3Qc-iu6ndM1CNlijzw"
        ],
        buttonText: "Try WAN 2.2",
      },
   
  ];