"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function Begining() {
    const { isDarkMode } = useTheme();

    return (
        <div className={`relative h-screen w-full overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            {/* Üstteki soft mavi ışık geçişli gradient */}
            <div className={`absolute top-[-180px] left-1/2 -translate-x-1/2 w-full md:w-[1100px] h-[600px] rounded-full blur-[140px] pointer-events-none z-0
                ${isDarkMode
                    ? 'bg-gradient-to-b from-[#60a5fa]/80 via-[#38bdf8]/70 to-white/30 opacity-90'
                    : 'bg-gradient-to-b from-[#e0f2fe]/90 via-[#60a5fa]/80 to-[#2563eb]/60 opacity-90'
                }`}
            />

            {/* Ürün görseli ve alt blur */}
            <div className="bottom-[-100px] hd:bottom-[-200px] left-1/2 -translate-x-1/2 w-[500px] z-0 opacity-95 relative">
                <Image
                    src="/images/hardware/kioks5.png"
                    alt="Ürün Görseli"
                    width={500}
                    height={500}
                    priority
                    className="rounded-md"
                />
                {/* Alt kısma geçişli blur efekti */}
                <div className="absolute bottom-0 left-0 w-full sm:h-[550px] h-[450px] " />
            </div>

            {/* En altta sabit yazılar */}
            <div className='absolute bottom-0 w-full p-9 z-10 flex flex-col items-center justify-center'>
                <motion.h1
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
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className={`p-2 sm:text-9xl text-6xl font-bold m-3 bg-gradient-to-r 
                        ${isDarkMode
                            ? 'from-[#93c5fd] via-[#38bdf8] to-[#2563eb]'
                            : 'from-[#38bdf8] via-[#2563eb] to-[#0ea5e9]'
                        } text-transparent bg-clip-text`}
                >
                    Ürünlerimiz
                </motion.h1>
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-900'} text-center`}>
                    RegeditPos olarak ürünlerimizin <span className='text-sky-400'>performansı</span> ile öne çıkıyoruz.
                </p>
            </div>
        </div>
    )
}