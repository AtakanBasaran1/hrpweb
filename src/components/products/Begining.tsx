"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Beginning() {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 20,
    });

    // PC Sinematik Hareketler (Lg ve üstü için aktif)
    const imageY = useTransform(smoothProgress, [0, 1], [0, -100]);
    const contentOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
    const contentY = useTransform(smoothProgress, [0, 0.3], [0, -40]);

    const scrollToProducts = () => {
        const nextSection = window.innerHeight * 1.0;
        window.scrollTo({
            top: nextSection,
            behavior: 'smooth'
        });
    };

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen lg:min-h-[120vh] w-full flex items-center justify-center overflow-hidden transition-colors duration-1000 py-10 lg:py-0 bg-[#f8f9fa]"
        >
            {/* Arka Plan Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-5%] lg:top-[-25%] left-[-10%] w-full lg:w-[80%] h-[60%] lg:h-[90%] rounded-full blur-[80px] lg:blur-[200px] opacity-20 transition-colors duration-1000 bg-blue-400"
                />
            </div>

            {/* Ana Grid */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                {/* İÇERİK BÖLÜMÜ */}
                <motion.div
                    // Mobilde yavaşça kaybolma efektini devre dışı bırakıyoruz (opsiyonel)
                    style={{
                        opacity: typeof window !== 'undefined' && window.innerWidth > 1024 ? contentOpacity : 1,
                        y: typeof window !== 'undefined' && window.innerWidth > 1024 ? contentY : 0
                    }}
                    className="flex flex-col space-y-6 lg:space-y-10 order-1 lg:order-2 lg:col-span-7 lg:pl-16 text-center lg:text-left items-center lg:items-start"
                >
                    <div className="space-y-4 lg:space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-7xl xl:text-[100px] font-black tracking-tighter leading-[0.9] text-blue-900"
                        >
                            ÜRÜNLERİMİZ
                        </motion.h1>

                        <p className="text-base lg:text-2xl font-light leading-relaxed max-w-xl transition-colors duration-500 text-gray-600">
                            İleri düzey mühendisliği minimalist tasarımla buluşturduk. İşletmenizi geleceğe taşıyan <span className="font-bold text-sky-500 underline decoration-sky-500/30 underline-offset-8">ekosistemi</span> keşfedin.
                        </p>
                    </div>

                    {/* Eylem ve İstatistikler */}
                    <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-10 pt-4 w-full lg:w-auto">
                        <button
                            onClick={scrollToProducts}
                            className="group relative flex items-center justify-center gap-4 px-8 lg:px-12 py-4 lg:py-6 rounded-2xl lg:rounded-[2rem] font-black text-xs lg:text-lg tracking-widest transition-all duration-700 w-full sm:w-auto bg-blue-600 text-white hover:bg-blue-400"
                        >
                            <span className="relative z-10 uppercase">Göz At</span>
                            <HiOutlineArrowRight className="relative z-10 text-xl lg:text-2xl group-hover:translate-x-2 transition-transform duration-500" />
                        </button>

                        <div className="flex gap-6 lg:gap-10 border-t-2 sm:border-t-0 sm:border-l-2 pt-6 sm:pt-0 sm:pl-10 transition-colors w-full sm:w-auto justify-center sm:justify-start border-black/10">
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-xl lg:text-4xl font-black text-slate-950">%100</span>
                                <span className="text-[7px] lg:text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-1">Verimlilik</span>
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <span className="text-xl lg:text-4xl font-black text-slate-950">4K</span>
                                <span className="text-[7px] lg:text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-1">Ultra HD</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* GÖRSEL BÖLÜMÜ */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? imageY : 0 }}
                    className="relative order-2 lg:order-1 lg:col-span-5 flex justify-center items-center"
                >
                    <div className="relative w-full max-w-[280px] md:max-w-[400px] lg:max-w-none aspect-square lg:aspect-[3/4] max-h-[45vh] lg:max-h-none">
                        {/* Arka Glow (Görsel Altı) */}
                        <div className="absolute inset-0 blur-[40px] lg:blur-[100px] rounded-full scale-90 opacity-30 bg-blue-600"
                        />
                        <Image
                            src="/images/hardware/kiosk5.png"
                            alt="Hrp Kiosk Elite"
                            fill
                            priority
                            className="object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] lg:drop-shadow-[0_80px_120px_rgba(0,0,0,0.4)]"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Alt Geçiş Katmanı */}
            <div className="absolute bottom-0 left-0 w-full h-24 lg:h-48 z-20 pointer-events-none bg-gradient-to-t from-[#f8f9fa] to-transparent"
            />

            {/* Scroll Indicator (PC Only) */}
            <motion.div
                animate={{ opacity: [0.3, 1, 0.3], y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:block"
            >
                <div className="w-[1px] h-16 bg-black/10" />
            </motion.div>
        </section>
    );
}