"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ReferancesText from "../hooks/animations/ReferancesText";

export default function Referances() {

    const logos = [
        '1.png', '2.png', '3.png', '15.png', '8.jpeg',
        '5.jpg', '6.jpg', '7.png', '14.png', '10.jpg',
        '11.png', '12.png', '13.webp', '9.png', '16.png',
    ];

    // Animasyon varyasyonları
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <section className="w-full pt-12 pb-24 flex flex-col items-center transition-colors duration-1000 bg-[#fafafa]">

            {/* Üst Başlık Grubu - Daha Kompakt */}
            <div className="max-w-4xl w-full text-center px-6 mb-12 space-y-4">
                <div className="flex justify-center transform scale-90 md:scale-100">
                    <ReferancesText />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-base md:text-lg font-medium tracking-tight text-neutral-600"
                >
                    “Restoranını geleceğe taşıyan <span className="text-blue-600">öncü markaların</span> teknoloji ortağıyız.”
                </motion.p>
            </div>

            {/* Referans Logoları Grid Yapısı - Renkli & Canlı */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="max-w-[1200px] w-full px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
            >
                {logos.map((logo, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        whileHover={{ scale: 1.03, zIndex: 10 }}
                        className="group relative aspect-square flex items-center justify-center p-6 rounded-2xl border transition-all duration-300 bg-white border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/10"
                    >
                        {/* Logo Görseli - Full Color */}
                        <div className="relative w-full h-full">
                            <img
                                src={`/images/referances/${logo}`}
                                alt={`Referans ${i + 1}`}
                                className="w-full h-full object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300"
                            />
                        </div>

                        {/* Köşe Detayı (Profesyonel Dokunuş) */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Alt Bilgi - Sosyal Kanıt */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16 flex items-center gap-4 px-6 py-2 rounded-full border text-[10px] font-black tracking-[0.3em] uppercase bg-white border-neutral-200 text-neutral-400"
            >
                Güvenle Büyüyen İşletmeler Ekosistemi
            </motion.div>

        </section>
    );
}