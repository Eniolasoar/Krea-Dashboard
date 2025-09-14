"use client";

import { motion } from "framer-motion";
import {
  HiPhotograph,
  HiVideoCamera,
  HiWifi,
  HiSparkles,
  HiPencil,
  HiMicrophone,
  HiOutlineWifi,
  HiCubeTransparent,
} from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";

import { FiActivity } from "react-icons/fi";

const tools = [
  { icon: <HiPhotograph />, color: "text-blue-500", title: "Image", badge: "New", desc: "Generate images with custom styles." },
  { icon: <HiVideoCamera />, color: "text-yellow-500", title: "Video", desc: "Generate videos with Haiius, Pika, Runway, etc." },
  { icon: <HiWifi />, color: "text-cyan-500", title: "Realtime", desc: "Realtime AI rendering on a canvas." },
  { icon: <HiSparkles />, color: "text-purple-500", title: "Enhancer", badge: "New", desc: "Upscale and enhance up to 22K." },
  { icon: <HiPencil />, color: "text-red-500", title: "Edit", badge: "New", desc: "Add objects, change style, expand photos." },
  { icon: <HiMicrophone />, color: "text-green-500", title: "Video Lipsync", badge: "New", desc: "Lip sync any video to any audio." },
  { icon: <FiActivity />, color: "text-indigo-500", title: "Motion Transfer", badge: "New", desc: "Animate characters with motion." },
  { icon: <HiCubeTransparent />, color: "text-pink-500", title: "Train", desc: "Teach Krea to replicate your style." },
];

export default function GenerateSection() {
  return (
    <div className="mt-1 p-6">
    

<div className="flex justify-between items-center mb-4">
  <h2 className="text-2xl font-semibold flex items-center gap-6">
    Generate
  </h2>
  <div className='flex gap-1 items-center'>
  <HiChevronDown className="w-4 h-4 text-blue-500" />
  <a href="#" className="text-sm text-blue-500 hover:underline flex items-center gap-1">
    Show all
    
  </a>
  </div>
 
</div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {tools.map((t, idx) => (
          <motion.div
            key={t.title}
            className="p-2 rounded-xl flex items-center justify-between"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg text-white`}
                style={{ backgroundColor: t.bgColor || `hsl(${idx * 45}, 70%, 50%)` }}
              >
                <span className="text-[20px]">{t.icon}</span>
              </div>

              <div>
                <h3 className="font-semibold flex items-center gap-2 text-sm">
                  {t.title}
                  {t.badge && (
                    <span className="ml-1 bg-blue-500 text-white px-1 py-0.5 text-xs rounded-full">
                      {t.badge}
                    </span>
                  )}
                </h3>
                <p className="mt-[1px] text-xs text-gray-500">{t.desc}</p>
              </div>
            </div>

            <span className="bg-gray-100 text-gray-700 text-[12px] px-3 py-1 rounded-xl hover:cursor-pointer hover:bg-gray-200">Open</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
