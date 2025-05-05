
"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

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
                <h1 className="shadow-xl text-white text-center font-bold text-5xl sm:text-7xl p-9 leading-tight">
                    Restoranlarınızı Geleceğe Taşıyan Akıllı Çözümler
                </h1>
            </div>

            <div className="h-auto">
                <p className="shadow-xl text-gray-300 text-center font-bold text-md sm:text-lg">
                    Zincir restoran operasyonlarınızı tek bir sistemle yönetin, zamandan ve maliyetten tasarruf edin.
                </p>
            </div>

            <button
                onClick={handleButtonClick}
                className="cursor-pointer relative flex m-4 rounded-3xl py-3 px-8 items-center justify-center overflow-hidden md:bg-gray-600 bg-blue-800 text-white shadow-2xl hover:bg-blue-700 transition-all duration-300"
            >
                <span className="relative text-3xl z-10">Bizi Tanıyın</span>
            </button>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[600px] bg-gradient-to-r from-[#8072FF] via-[#4D2DFF] to-[#1F1DFF] rounded-full blur-[120px] opacity-40 pointer-events-none shadow-2xl" />
        </div>
    );
}

