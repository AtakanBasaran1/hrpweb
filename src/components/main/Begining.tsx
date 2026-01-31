"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Begining() {
    const router = useRouter();

    // Daha hafif scroll efektleri (Okunabilirliği bozmamak için)
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const yTranslate = useTransform(scrollY, [0, 300], [0, 50]);

    const handleButtonClick = () => {
        router.push("/sinif-9");
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center w-full transition-colors duration-1000 px-6 bg-white">

            {/* ATMOSFERİK DERİNLİK (Daha Soft) */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-30 blur-[120px] bg-blue-100" />
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
                    className="text-5xl md:text-[6rem] mt-20 font-black tracking-tighter leading-[1.05] md:leading-[1.1] mb-12 text-neutral-950"
                >
                    Elektrik-Elektronik <br />
                    <span className="bg-gradient-to-r bg-clip-text text-transparent pb-2 from-blue-700 via-blue-500 to-indigo-700">
                        Teknolojisi Bölümü
                    </span>
                </motion.h1>

                {/* 3. ALT METİN (Okunabilirlik Odaklı) */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg md:text-2xl font-normal max-w-2xl leading-relaxed mb-14 text-neutral-400"
                >
                    Halil Rıfat Paşa Mesleki ve Teknik Anadolu Lisesi'nde elektrik-elektronik teknolojisi alanında eğitim görün.
                    <span className="text-neutral-900"> Temel bilgilerden endüstriyel uygulamalara kadar kapsamlı bir eğitim programı. </span>
                </motion.p>

                {/* 4. BUTON (Erişilebilir & Modern) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <button
                        onClick={handleButtonClick}
                        className="group flex items-center gap-8 py-7 px-12 rounded-4xl font-bold transition-all duration-500 cursor-pointer bg-neutral-950 text-white hover:bg-blue-700 shadow-2xl shadow-blue-900/20"
                    >
                        <span className="text-[11px] tracking-[0.2em] uppercase">9. Sınıf Eğitim Programını Keşfedin</span>
                        <div className="w-8 h-[1px] transition-all duration-500 group-hover:w-12 bg-white" />
                        <HiOutlineArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                </motion.div>
            </motion.div>

        </section>
    );
}