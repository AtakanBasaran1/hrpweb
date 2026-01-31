"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa";

const quotes = [
    "Hayatta en hakiki mürşit ilimdir, fendir.",
    "Bütün ümidim gençliktedir.",
    "İstikbal göklerdedir.",
    "Bilim ve fen nerede ise oradan alacağız ve her ulus kişisinin kafasına koyacağız.",
    "Eğer bir gün benim sözlerim bilimle ters düşerse, bilimi seçin.",
    "Dünyada her şey için, medeniyet için, hayat için, başarı için, en hakiki mürşit ilimdir, fendir."
];

export default function AtaturkCorner() {
    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
        }, 6000); // 6 saniyede bir değişim

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image with Parallax-like Effect */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/mka/mka.jpg"
                    alt="Mustafa Kemal Atatürk"
                    fill
                    className="object-cover object-top opacity-90"
                    priority
                />
                {/* Modern Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    {/* Decorative Signature top */}
                    <div className="mb-10 opacity-80">
                        {/* Text specific to MKA */}
                        <span className="text-blue-300 font-bold tracking-[0.3em] uppercase text-sm md:text-base border-b border-blue-400/30 pb-2">
                            Cumhuriyetimizin Kurucusu
                        </span>
                    </div>

                    {/* Rotating Quote Logic */}
                    <div className="h-48 md:h-40 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentQuote}
                                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="max-w-4xl mx-auto px-4"
                            >
                                <FaQuoteLeft className="text-3xl md:text-5xl text-blue-400/40 mb-6 mx-auto" />
                                <h2 className="text-2xl md:text-5xl font-serif font-medium text-white leading-tight italic drop-shadow-lg">
                                    "{quotes[currentQuote]}"
                                </h2>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Signature */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-12 flex flex-col items-center gap-2"
                    >
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-4 opacity-50"></div>
                        <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 tracking-wide uppercase font-serif">
                            Mustafa Kemal Atatürk
                        </h3>
                        <p className="text-gray-400 text-sm tracking-widest uppercase opacity-60">1881 - ∞</p>
                    </motion.div>

                </motion.div>
            </div>

            {/* Subtle Particles/Grain effect overlay could be added here if needed */}
        </section>
    );
}
