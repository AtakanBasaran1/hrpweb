"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { useTheme } from '@/context/ThemeContext';

export default function Begining() {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleButtonClick = () => {
        router.push("/about");
    };

    return (
        <div className={`h-screen flex flex-col items-center justify-center w-full ${isDarkMode ? 'bg-black' : 'bg-gray-100'} overflow-hidden pt-[0lvh] relative`}>
            {/* Soft geçişli arka plan */}
            {isDarkMode ? (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[600px] bg-gradient-to-r from-[#8072FF] via-[#4D2DFF] to-[#1F1DFF] rounded-full blur-[120px] opacity-40 pointer-events-none shadow-2xl" />
            ) : (
                <div className="flex flex-col absolute top-[-150px] left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[500px] bg-gradient-to-b from-[#123466] via-blue-500 to-transparent rounded-full blur-[120px] opacity-90 pointer-events-none z-0" />
            )}

            <div className="h-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 80, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.6 }}
                    className={`${isDarkMode ? 'text-white' : 'text-[#123466]'} text-center font-bold text-5xl sm:text-7xl p-9 leading-tight`}
                >
                    İletişim
                </motion.h1>
            </div>

            <div className="h-auto">
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-[#123466]'} text-center font-bold text-md sm:text-lg p-3`}>
                Her türlü soru, öneri ve iş birliği talepleriniz için lütfen bizimle irtibata geçiniz.
                </p>
            </div>

            <div className="flex justify-center items-center p-4">
                <motion.button
                    onClick={handleButtonClick}
                    animate={{
                        background: [
                            "linear-gradient(90deg, #1a365d 0%, #2c5282 50%, #2b6cb0 100%)",
                            "linear-gradient(90deg, #2c5282 0%, #2b6cb0 50%, #1e40af 100%)",
                            "linear-gradient(90deg, #1e40af 0%, #123466 50%, #2c5282 100%)",
                            "linear-gradient(90deg, #1a365d 0%, #2c5282 50%, #1a365d 100%)",
                        ]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="cursor-pointer relative flex rounded-3xl py-3 px-8 items-center justify-center overflow-hidden text-white shadow-2xs shadow-black"
                >
                    <span className="relative text-3xl z-10">Bizi Tanıyın</span>
                </motion.button>
            </div>
        </div>
    );
}