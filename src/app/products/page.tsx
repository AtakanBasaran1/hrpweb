"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Beginning from '@/components/products/Begining';
import MiddleOfPage from '@/components/products/Middle-of-Page';
import SEO from '@/components/SEO';

/**
 * Ürünler Sayfası - Profesyonel Mimari
 * Bu sayfa, merkezi tema yönetimini kullanarak dark/light mode geçişlerini yönetir.
 */
export default function ProductsPage() {
    const { isDarkMode } = useTheme();

    return (
        <main className={`min-h-screen transition-colors duration-700 ${
            isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#fafafa] text-neutral-900'
        }`}>
            {/* Dinamik SEO Yönetimi */}
            <SEO 
                title="Ürünlerimiz | RegeditPos"
                description="İleri düzey mühendislik ve minimalist tasarımın buluştuğu RegeditPos donanım ekosistemini keşfedin."
                image="/images/regedit_logo.ico"
            />

            {/* Sayfa Geçiş Animasyonu */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={isDarkMode ? 'dark' : 'light'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Hero Bölümü */}
                    <Beginning />

                    {/* İçerik Bölümü */}
                    <div className="relative z-10">
                        <MiddleOfPage />
                    </div>

                    {/* Buraya gelecekte eklenecek olan Category vb. bileşenler 
                        için uygun boşluk ve yapı hazır. */}
                </motion.div>
            </AnimatePresence>

            {/* Sayfa Sonu Yumuşak Geçiş (Dekoratif) */}
            <div className={`h-32 w-full ${
                isDarkMode 
                ? 'bg-gradient-to-t from-[#0a0a0a] to-transparent' 
                : 'bg-gradient-to-t from-neutral-100 to-transparent'
            }`} />
        </main>
    );
}