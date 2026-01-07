"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from '@/context/ThemeContext';
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Begining() {
    const router = useRouter();
    const { isDarkMode } = useTheme();
    
    // Daha hafif scroll efektleri (Okunabilirliği bozmamak için)
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const yTranslate = useTransform(scrollY, [0, 300], [0, 50]);

    const handleButtonClick = () => {
        router.push("/about");
    };

    return (
        <section className={`relative min-h-screen flex flex-col items-center justify-center w-full transition-colors duration-1000 px-6
            ${isDarkMode ? 'bg-[#050505]' : 'bg-white'}`}>
            
            {/* ATMOSFERİK DERİNLİK (Daha Soft) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-30 blur-[120px]
                    ${isDarkMode ? 'bg-blue-900/20' : 'bg-blue-100'}`} />
            </div>

            <motion.div 
                style={{ opacity, y: yTranslate }}
                className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center"
            >
           

                {/* 2. ANA BAŞLIK (Net & İddialı) */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`text-5xl md:text-[6rem] mt-20 font-black tracking-tighter leading-[1.05] md:leading-[1.1] mb-12
                        ${isDarkMode ? 'text-white' : 'text-neutral-950'}`}
                >
                    Restoranlarınızı Geleceğe <br />
                    <span className={`bg-gradient-to-r bg-clip-text text-transparent pb-2
                        ${isDarkMode 
                            ? 'from-blue-400 via-sky-300 to-indigo-400' 
                            : 'from-blue-700 via-blue-500 to-indigo-700'}`}>
                        Taşıyan Akıllı Çözümler
                    </span>
                </motion.h1>

                {/* 3. ALT METİN (Okunabilirlik Odaklı) */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className={`text-lg md:text-2xl font-normal max-w-2xl leading-relaxed mb-14
                        ${isDarkMode ? 'text-neutral-500' : 'text-neutral-400'}`}
                >
                    Yarının teknolojisiyle bugünün satışlarını yönetin. 
                    <span className={isDarkMode ? 'text-neutral-200' : 'text-neutral-900'}> En hızlı donanım ve en akıllı yazılımın kusursuz uyumunu keşfedin. </span>
                </motion.p>

                {/* 4. BUTON (Erişilebilir & Modern) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <button
                        onClick={handleButtonClick}
                        className={`group flex items-center gap-8 py-7 px-12 rounded-4xl font-bold transition-all duration-500 cursor-pointer
                            ${isDarkMode 
                                ? 'bg-white text-black hover:bg-blue-600 hover:text-white' 
                                : 'bg-neutral-950 text-white hover:bg-blue-700 shadow-2xl shadow-blue-900/20'}`}
                    >
                        <span className="text-[11px] tracking-[0.2em] uppercase">Regedıt Pos Dünyasını Keşfedin</span>
                        <div className={`w-8 h-[1px] transition-all duration-500 group-hover:w-12
                            ${isDarkMode ? 'bg-black group-hover:bg-white' : 'bg-white'}`} />
                        <HiOutlineArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </motion.div>
            </motion.div>

        </section>
    );
}