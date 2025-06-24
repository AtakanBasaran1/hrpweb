"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'; 
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

export default function Begining() {
  const { isDarkMode, toggleTheme } = useTheme();
  const titles = [
    {
      id: 1,
      text: "15 Yıllık Tecrübe",
      textSize: "sm:text-8xl text-4xl",
    },
    {
      id: 2,
      text: "Güvenilir Teknoloji",
      textSize: "sm:text-6xl text-3xl",
    },
    {
      id: 3,
      text: "Kalıcı Çözümler",
      textSize: "sm:text-6xl text-2xl",
    },
  ];
  return (
    <div className={`relative h-screen w-full overflow-hidden pt-[5lvh] ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Tema butonu */}
     
      {/* Gradient arka plan */}
      <div className={`flex flex-col absolute left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 ${isDarkMode ? 'top-[-150px] bg-gradient-to-b from-[#2563eb] via-[#38bdf8] to-transparent opacity-70' : 'bottom-[-100px] bg-gradient-to-t from-[#e0f2fe] via-[#38bdf8] to-[#2563eb] opacity-70'}`} />
      {/* Başlıklar */}
      <div className='flex flex-col-reverse w-full h-auto m-2 sm:p-9 items-center md:flex-col-reverse space-y-12 justify-center' style={{ marginTop: '150px' }}>
        <div className='order-1 sm:order-2 flex flex-col items-center sm:w-[60%]'>
          {titles.map((item, index) => (
            <motion.h1
              key={item.id}
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.3,
                duration: 0.8,
                ease: "easeOut",
              }}
              className={`font-extrabold m-3 text-transparent bg-clip-text drop-shadow-[0_4px_24px_rgba(59,130,246,0.7)] ${item.textSize} ${
                isDarkMode
                  ? 'bg-gradient-to-r from-[#2563eb] via-[#38bdf8] to-[#0ea5e9]'
                  : 'bg-gradient-to-r from-[#38bdf8] via-[#2563eb] to-[#0ea5e9]'
              }`}
            >
              {item.text}
            </motion.h1>
          ))}
        </div>
      </div>
      {/* Açıklama */}
      <div className={`flex justify-center items-center sm:text-xl text-sm text-center h-auto w-full mt-8 p-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-900'}`}>
        <p>
          Regedit Bilişim olarak, sektördeki deneyimimiz ve uzman ekibimizle, <br className='hidden sm:inline' />
          işletmeniz için sürdürülebilir ve yenilikçi çözümler sunuyoruz.
        </p>
      </div>
    </div>
  )
}