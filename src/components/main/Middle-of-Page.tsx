"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { useTheme } from '@/context/ThemeContext';

export default function MiddleOfPage() {
    const router = useRouter();
    const { isDarkMode } = useTheme();

    const handleProductPageRoute = () => {
        router.push("/products");
    };

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <section className={`w-full py-24 md:py-0 transition-colors duration-1000 overflow-hidden ${isDarkMode ? 'bg-[#020202]' : 'bg-[#fcfcfc]'}`}>
            
            {/* --- ÜST BAŞLIK ALANI --- */}
            <div className="max-w-[1250px] mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                    <div className="md:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <span className="w-16 h-[1.5px] bg-blue-600"></span>
                            <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-blue-600">TEKNOLOJİ & TASARIM</span>
                        </motion.div>
                        <motion.h2 
                            {...fadeIn}
                            className={`text-6xl md:text-[7rem] ml-5 font-black tracking-tighter leading-[0.9] ${isDarkMode ? 'text-white' : 'text-[#0A0046]'}`}
                        >
                            Neler <br /> <span className="text-blue-600">Yapıyoruz?</span>
                        </motion.h2>
                    </div>
                    <div className="md:col-span-4">
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className={`text-2xl font-light leading-relaxed border-l-2 pl-6 ${isDarkMode ? 'text-neutral-500 border-white/10' : 'text-neutral-400 border-black/5'}`}
                        >
                            100% yerli bir firma olarak işletmenize maksimum kalitede ürettiğimiz donanım ve yazılım ürünlerimizle işletmenize ekosistem kuruyoruz.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* --- KIOSK SHOWCASE --- */}
            <div className="max-w-[1400px] mx-auto px-6 mb-12">
                <motion.div 
                    {...fadeIn}
                    className={`relative overflow-hidden rounded-[3.5rem] border transition-all duration-700
                    ${isDarkMode ? 'bg-[#080808] border-white/5 shadow-2xl' : 'bg-white border-neutral-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.04)]'}`}
                >
                    <div className="flex flex-col lg:flex-row items-stretch">
                        <div className="w-full lg:w-1/2 p-10 md:p-20 flex flex-col justify-center relative z-10">
                            <div className="space-y-10">
                                <div className="space-y-4">
                                    <h3 className={`text-5xl md:text-7xl font-black tracking-tighter leading-tight ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                                        Yeni Nesil <br /> Sipariş Deneyimi
                                    </h3>
                                    <p className={`text-xl font-light leading-relaxed max-w-sm ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                                       Personel yükünü minimize edin, sipariş hızını maksimize edin. Endüstriyel dayanıklılığa sahip kiosklarımızla sıfır hata, maksimum memnuniyet sağlayın.
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    {['Teknolojik Tasarım', 'Kesintisiz Performans', 'Modern Yapı', '7/24 Operasyon'].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 group cursor-default">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                            <span className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-white/40 group-hover:text-white' : 'text-black/40 group-hover:text-black'} transition-colors`}>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className={`w-full lg:w-1/2 relative min-h-[500px] flex items-center justify-center py-20
                            ${isDarkMode ? 'bg-gradient-to-br from-white/[0.01] to-transparent' : 'bg-gradient-to-br from-blue-50/50 to-transparent'}`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative z-10"
                            >
                                <Image
                                    alt='Kiosk'
                                    height={650}
                                    width={420}
                                    src='/images/hardware/kioks4.png'
                                    className='drop-shadow-[0_50px_60px_rgba(0,0,0,0.3)]'
                                    priority
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* --- EKOSİSTEM VE CTA --- */}
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    
                    {/* Görsel Kartı */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`lg:col-span-7 rounded-[3.5rem] p-12 flex items-center justify-center relative overflow-hidden group
                        ${isDarkMode ? 'bg-[#080808] border border-white/5' : 'bg-neutral-100 border border-neutral-200'}`}
                    >
                        <Image
                            alt='Hardware Ecosystem'
                            src='/images/hardware/dualtransparent2.png'
                            height={400}
                            width={700}
                            className="relative z-10 transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] font-black text-8xl tracking-tighter select-none uppercase">
                            Regedıt Pos
                        </div>
                    </motion.div>

                    {/* Metin Kartı */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`lg:col-span-5 rounded-[3.5rem] p-12 md:p-16 flex flex-col justify-between relative overflow-hidden
                        ${isDarkMode ? 'bg-blue-600 text-white shadow-2xl shadow-blue-900/20' : 'bg-[#0A0046] text-white shadow-xl'}`}>
                        
                        <div className="space-y-6 relative z-10">
                            <h3 className="text-4xl md:text-5xl font-black ">
                                Uçtan Uca <br /> Optimizasyon.
                            </h3>
                            <p className="text-lg font-light opacity-80 leading-relaxed">
                                İşletmenizin üretim aşamasından son kullanıcıya kadar tüm süreçlerini tek bir sistem ile yöneterek minimum karmaşıklık maksimum verim sağlıyoruz.
                            </p>
                        </div>

                        <button 
                            onClick={handleProductPageRoute} 
                            className="group cursor-pointer relative flex items-center justify-between w-full py-6 px-10 mt-10 bg-white rounded-4xl transition-all duration-300 hover:shadow-2xl active:scale-95"
                        >
                            <span className={`font-black text-[11px] tracking-[0.3em] uppercase ${isDarkMode ? 'text-black' : 'text-[#0A0046]'}`}>
                                Tüm Ürünlerimiz
                            </span>
                            <div className={`p-2 rounded-full ${isDarkMode ? 'bg-black text-white' : 'bg-[#0A0046] text-white'} transition-transform group-hover:rotate-45`}>
                                <HiOutlineArrowUpRight size={20} />
                            </div>
                        </button>

                        {/* Arka plan dekorasyonu */}
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 blur-3xl -mb-32 -mr-32 rounded-full" />
                    </motion.div>
                                
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto mt-24 px-6">
                <div className={`h-[1px] w-full opacity-10 ${isDarkMode ? 'bg-white' : 'bg-black'}`} />
            </div>
        </section>
    );
}