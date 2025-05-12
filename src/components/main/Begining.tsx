"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";

export default function Begining() {
    const router = useRouter();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind 'sm' breakpoint
        };

        handleResize(); // İlk yüklemede kontrol
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleButtonClick = () => {
        router.push("/about");
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center w-full bg-black overflow-hidden pt-[7lvh]">
            <div className="h-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 80, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.6 }}
                    className="shadow-xl text-white text-center font-bold text-5xl sm:text-7xl p-9 leading-tight"
                >
                    Restoranlarınızı Geleceğe <br /> Taşıyan Akıllı Çözümler
                </motion.h1>

            </div>

            <div className="h-auto">
                <p className="shadow-xl text-gray-300 text-center font-bold text-md sm:text-lg p-3">
                    Zincir restoran operasyonlarınızı tek bir sistemle yönetin, zamandan ve maliyetten tasarruf edin.
                </p>
            </div>

            <div className="flex justify-center items-center p-4">
                <motion.button
                    onClick={handleButtonClick}
                    animate={{
                        background: [
                            "linear-gradient(90deg, #9333EA 0%, #7E22CE 50%, #6B21A8 100%)",
                            "linear-gradient(90deg, #3667d1 0%, #1156ed 50%, #1041ad 100%)",
                            "linear-gradient(90deg, #b542e3 0%, #b626f0 50%, #9f09db 100%)",
                            "linear-gradient(90deg, #9333EA 0%, #7E22CE 50%, #9333EA 100%)",
                        ]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="cursor-pointer relative flex rounded-3xl py-3 px-8 items-center justify-center overflow-hidden text-white shadow-2xs shadow-black"
                >
                    <span className="relative text-3xl z-10">Bizi Tanıyın</span>
                </motion.button>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[600px] bg-gradient-to-r from-[#8072FF] via-[#4D2DFF] to-[#1F1DFF] rounded-full blur-[120px] opacity-40 pointer-events-none shadow-2xl" />
        </div>
    );
}

