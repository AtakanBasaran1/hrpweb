"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import Referances from '@/components/main/Referances';

export default function ReferancesPage() {

    return (
        <main className="min-h-screen -mt-20 transition-colors duration-1000 bg-[#fafafa]">
            {/* SEO Bileşeni - Meta verileri en başta yüklenir */}
            <SEO
                title="Referanslarımız | Regedit Informatics"
                description="Türkiye'nin önde gelen restoran zincirleri ve işletmeleri RegeditPos ekosistemi ile dijital dönüşümünü tamamlıyor."
                image="/images/regedit_logo.ico"
            />

            {/* Sayfa İçeriği Animasyonu */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pt-32 md:pt-44 pb-20"
            >
                {/* Referanslar Bölümü */}
                <div className="relative z-10">
                    <Referances />
                </div>

                {/* Dekoratif Arka Plan Işıması (Opsiyonel) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none overflow-hidden opacity-50">
                    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[120px] rounded-full bg-blue-400/5" />
                </div>
            </motion.div>
        </main>
    );
}