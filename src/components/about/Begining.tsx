"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MdHistoryEdu, MdOutlineSecurity, MdAutoGraph } from 'react-icons/md';

export default function Begining() {

  // Scroll tabanlı hafif parallax derinliği
  const { scrollY } = useScroll();
  const yTranslate = useTransform(scrollY, [0, 500], [0, -80]);

  const titles = [
    {
      id: 1,
      text: "2018 Yılında Kuruldu",
      // Mobilde text-4xl'e çekildi, PC'de aynı kaldı
      textSize: "text-4xl sm:text-5xl md:text-[8rem]",
      icon: <MdHistoryEdu />,
      gradient: "from-blue-900 via-blue-700 to-indigo-800"
    },
    {
      id: 2,
      text: "Modern Atölyeler",
      // Mobilde text-3xl'e çekildi, PC'de aynı kaldı
      textSize: "text-3xl sm:text-4xl md:text-[6rem]",
      icon: <MdOutlineSecurity />,
      gradient: "from-blue-600 via-sky-600 to-neutral-900"
    },
    {
      id: 3,
      text: "Kapsamlı Eğitim",
      // Mobilde text-2xl'e çekildi, PC'de aynı kaldı
      textSize: "text-2xl sm:text-3xl md:text-[5rem]",
      icon: <MdAutoGraph />,
      gradient: "from-indigo-900 to-blue-800"
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center transition-colors duration-1000 bg-[#fafafa]">

      {/* ATMOSFERİK ARKA PLAN */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[700px] rounded-full blur-[150px] bottom-[-20%] bg-gradient-to-t from-blue-400/20 to-transparent"
        />

        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`, backgroundSize: '48px 48px' }} />
      </div>

      {/* İÇERİK MERKEZİ - pt-20 eklenerek mobilde navbar'ın altına girmesi engellendi */}
      <motion.div
        style={{ y: yTranslate }}
        className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center pt-24 md:pt-0"
      >
        {/* Üst Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 md:mb-16 mt-0 px-6 py-2 rounded-full border text-[9px] md:text-[11px] font-black tracking-[0.3em] md:tracking-[0.5em] uppercase backdrop-blur-xl text-center bg-blue-50 border-blue-100 text-blue-700"
        >
          Bölüm Hakkında
        </motion.div>

        {/* ANA BAŞLIKLAR */}
        <div className="flex flex-col items-center space-y-2 md:space-y-4 w-full">
          {titles.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: index * 0.2, duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="group relative w-full text-center"
            >
              <h1 className={`font-black tracking-tighter leading-[1.1] md:leading-[0.9] bg-gradient-to-r bg-clip-text text-transparent transition-all duration-700 cursor-default
                group-hover:tracking-tight group-hover:opacity-80 ${item.textSize} ${item.gradient} break-words`}>
                {item.text}
              </h1>

              <div className="hidden md:block absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-transparent transition-all duration-1000 group-hover:w-full opacity-50" />
            </motion.div>
          ))}
        </div>

        {/* ALT AÇIKLAMA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 md:mt-24 max-w-3xl w-full relative"
        >
          <div className="absolute -inset-1 rounded-[2.5rem] blur-2xl opacity-20 bg-blue-300" />
        </motion.div>
      </motion.div>

      {/* SAYFA SONU DEKORASYONU - Mobilde gizlendi veya küçültüldü */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 flex flex-col items-center gap-3 opacity-30"
      >
        <div className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-blue-500 to-transparent" />
      </motion.div>
    </section>
  );
}