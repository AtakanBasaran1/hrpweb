"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import { MdOutlineTrackChanges, MdVisibility } from 'react-icons/md';

export default function MissionAndVision() {
    const { isDarkMode } = useTheme();

    return (
        <section className={`w-full mb-30 px-6 transition-colors duration-1000 ${isDarkMode ? 'bg-[#050505]' : 'bg-[#fcfcfc]'}`}>
            <div className="max-w-7xl mx-auto">
                
               

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* MISYON KARTI */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className={`relative group p-12 md:p-20 rounded-[3.5rem] overflow-hidden border transition-all duration-700
                            ${isDarkMode 
                                ? 'bg-[#0A0046] border-white/10 text-white' 
                                : 'bg-[#0A0046] border-[#0A0046] text-white shadow-2xl shadow-blue-900/20'}`}
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
                                 Deneyimimizi teknolojiyle birleştiriyor, her ölçekteki işletmenin operasyonel verimliliğini artırmak için çalışıyoruz. <br />
                                 Amacımız; sadeleştiren sistemler, hızlandıran cihazlar ve güven veren bir iş ortaklığı ile her müşterimizin yanında olmak.
                                </p>
                            </div>
                            
                            <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-black tracking-widest uppercase opacity-40">
                                <span>Verimlilik • Güven • Teknoloji</span>
                                <span className="text-xl">01</span>
                            </div>
                        </div>

                        {/* Arka Plan Dekoratif Blur */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-white/10 transition-colors duration-700" />
                    </motion.div>

                    {/* VIZYON KARTI */}
                    <motion.div
                        whileHover={{ y: -10 }}
                        className={`relative group p-12 md:p-20 rounded-[3.5rem] overflow-hidden border transition-all duration-700
                            ${isDarkMode 
                                ? 'bg-white/[0.02] border-white/5 text-white' 
                                : 'bg-white border-neutral-200 text-neutral-900 shadow-xl shadow-neutral-200/50'}`}
                    >
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <div className="flex items-center gap-4 mb-12">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md
                                        ${isDarkMode ? 'bg-white/10 text-white' : 'bg-blue-600/10 text-blue-600'}`}>
                                        <MdVisibility size={24} />
                                    </div>
                                    <span className={`font-black tracking-[0.3em] uppercase text-[10px] opacity-60 ${isDarkMode ? '' : 'text-blue-600'}`}>Gelecek Tasarımı</span>
                                </div>
                                <h3 className={`text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none ${isDarkMode ? 'text-white' : 'text-[#0A0046]'}`}>
                                    Vizyon
                                </h3>
                                <p className={`text-lg md:text-xl leading-relaxed font-medium ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                                    Restoran ve hizmet sektöründe ödeme teknolojilerinde yeniliğin öncüsü olmak; işletmelere sadece bugünü değil, geleceği de kolaylaştıran çözümler sunarak sektöre yön vermek. Teknolojiyi bir araç değil, işletme kültürünün bir parçası haline getiriyoruz.
                                </p>
                            </div>

                            <div className={`mt-12 pt-8 border-t flex justify-between items-center text-[10px] font-black tracking-widest uppercase opacity-40
                                ${isDarkMode ? 'border-white/10' : 'border-neutral-200'}`}>
                                <span>İnovasyon • Global Etki • Liderlik</span>
                                <span className="text-xl">02</span>
                            </div>
                        </div>

                        {/* Arka Plan Dekoratif Blur (Light Mode için) */}
                        {!isDarkMode && (
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full -ml-20 -mb-20" />
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}