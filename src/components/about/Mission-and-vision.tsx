"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineTrackChanges, MdVisibility } from 'react-icons/md';

export default function MissionAndVision() {

    return (
        <section className="w-full mb-30 px-6 transition-colors duration-1000 bg-[#fcfcfc]">
            <div className="max-w-7xl mx-auto">



                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* MISYON KARTI */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="relative group p-12 md:p-20 rounded-[3.5rem] overflow-hidden border transition-all duration-700 bg-[#0A0046] border-[#0A0046] text-white shadow-2xl shadow-blue-900/20"
                    >
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
                                        <MdOutlineTrackChanges size={24} />
                                    </div>
                                    <span className="font-black tracking-[0.3em] uppercase text-[10px] opacity-60">Stratejik Hedef</span>
                                </div>
                                <h3 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                                    Misyon
                                </h3>
                                <p className="text-lg md:text-xl leading-relaxed text-white/70 font-medium">
                                    Elektrik-Elektronik Teknolojisi bölümü olarak, öğrencilerimize temel bilgilerden endüstriyel uygulamalara kadar kapsamlı bir eğitim programı sunmak. <br />
                                    Modern atölyelerimizde teorik bilgilerini pratiğe dökme fırsatı bulan öğrencilerimizi, sektörün ihtiyaçlarına cevap verebilen, mesleki yeterliliğe sahip teknik elemanlar olarak yetiştirmek.
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-black tracking-widest uppercase opacity-40">
                                <span>Eğitim • Uygulama • Mesleki Yeterlilik</span>
                                <span className="text-xl">01</span>
                            </div>
                        </div>

                        {/* Arka Plan Dekoratif Blur */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-white/10 transition-colors duration-700" />
                    </motion.div>

                    {/* VIZYON KARTI */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="relative group p-12 md:p-20 rounded-[3.5rem] overflow-hidden border transition-all duration-700 bg-white border-neutral-200 text-neutral-900 shadow-xl shadow-neutral-200/50"
                    >
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <div className="flex items-center gap-4 mb-12">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md bg-blue-600/10 text-blue-600">
                                        <MdVisibility size={24} />
                                    </div>
                                    <span className="font-black tracking-[0.3em] uppercase text-[10px] opacity-60 text-blue-600">Gelecek Tasarımı</span>
                                </div>
                                <h3 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none text-[#0A0046]">
                                    Vizyon
                                </h3>
                                <p className="text-lg md:text-xl leading-relaxed font-medium text-neutral-500">
                                    Elektrik-Elektronik Teknolojisi alanında öğrencilerimizi en iyi şekilde yetiştirerek, sektörün ihtiyaç duyduğu kalifiye teknik elemanları kazandırmak. Modern eğitim programları ve atölye imkanlarımızla, mezunlarımızın iş hayatında başarılı olmalarını sağlamak ve alanımızda öncü bir eğitim kurumu olmak.
                                </p>
                            </div>

                            <div className="mt-12 pt-8 border-t flex justify-between items-center text-[10px] font-black tracking-widest uppercase opacity-40 border-neutral-200">
                                <span>Kalifiye Eleman • Sektörel Başarı • Öncü Eğitim</span>
                                <span className="text-xl">02</span>
                            </div>
                        </div>

                        {/* Arka Plan Dekoratif Blur (Light Mode için) */}
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full -ml-20 -mb-20" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}