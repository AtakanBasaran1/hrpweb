"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SEO from '@/components/SEO';
import ShortBegining from '@/components/services/ShortBegining';
import Carousel from '@/components/services/Carousel';
import ResponsiveCarousel from '@/components/services/ResponsiveCarousel';

export default function ServicesPage() {

  return (
    <main className="min-h-screen transition-colors duration-1000 overflow-x-hidden bg-[#fafafa]">

      <SEO
        title="Hizmetlerimiz | Hrp Informatics"
        description="Projeleriniz baştan sona anahtar teslim olacak şekilde, Hrp güvencesi ve üstün teknoloji altyapısıyla tamamlanır."
        image="/hrp_logo.ico"
      />

      {/* Sayfa Giriş Animasyonu */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        {/* Üst Başlık Bölümü */}
        <div className="pt-20">
          <ShortBegining />
        </div>

        {/* Carousel Showcase Bölümü */}
        <section className="w-full max-w-[1200px] mx-auto px-4 md:px-10 pb-32">
          {/* Masaüstü Görünüm */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Carousel />
            </motion.div>
          </div>

          {/* Mobil & Tablet Görünüm */}
          <div className="block lg:hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ResponsiveCarousel />
            </motion.div>
          </div>
        </section>
      </motion.div>

      {/* Dekoratif Arka Plan Elemanları */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] blur-[150px] rounded-full opacity-20 bg-blue-400/10" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] blur-[130px] rounded-full opacity-10 bg-indigo-400/10" />
      </div>
    </main>
  );
}