"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'; // App Router'da yönlendirme için useRouter kullanılır

export default function Begining() {
    const text = "Restoranlarınızı Geleceğe\nTaşıyan Akıllı Çözümler";
    const router = useRouter();

    const handleButtonClick = () => {
        router.push("/about"); // /about sayfasına yönlendir
    };
    return (
        <div className="h-screen flex flex-col items-center justify-center w-full bg-black overflow-hidden pt-[7lvh]">
            <div className="h-auto">
                <h1 className="shadow-xl text-white text-center font-bold text-5xl sm:text-7xl p-9 leading-tight">
                    {text.split("").map((char, index) => {
                        if (char === "\n") {
                            return <br key={index} />;
                        }
                        const randomY = Math.random() * 40 - 20; // -20px ile +20px arasında rastgele Y pozisyonu
                        const randomDelay = 0.02 * index + Math.random() * 0.05; // index'e göre + hafif rastgele

                        return (
                            <motion.span
                                key={index}
                                initial={{
                                    opacity: 0,
                                    y: randomY,
                                    scale: 0.8,
                                    textShadow: "0px 0px 0px #9333ea", // Morumsu ışık yokken
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    textShadow: "0px 0px 8px #9333ea", // Mor ışık parlaması
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: randomDelay,
                                    ease: "easeOut",
                                }}
                                className="inline-block"
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        );
                    })}
                </h1>

            </div>
            <div className="h-auto">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="shadow-xl text-gray-300 text-center font-bold text-lg sm:text-md"
                >
                    Zincir restoran operasyonlarınızı tek bir sistemle yönetin, zamandan ve maliyetten tasarruf edin.
                </motion.p>

            </div>
            <button onClick={handleButtonClick} className="cursor-pointer relative flex m-4 rounded-3xl py-3 px-8 items-center justify-center overflow-hidden md:bg-gray-600 bg-blue-800 text-white shadow-2xl hover:rounded-sm transition-all duraiton-300">
                <span className="relative text-3xl z-10">Bizi Tanıyın</span>
            </button>
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[600px] bg-gradient-to-r from-[#8072FF] via-[#4D2DFF] to-[#1F1DFF] rounded-full blur-[120px] opacity-40 pointer-events-none shadow-2xl" />

        </div>
    );
}