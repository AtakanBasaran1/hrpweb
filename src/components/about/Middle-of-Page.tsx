"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { HiOutlineArrowRight } from "react-icons/hi2";

/**
 * RegeditPos - About Section (Minimalist & Professional)
 * Fokus: Okunabilirlik, Net Hiyerarşi, Temiz Boşluklar.
 */
export default function MiddleOfPage() {
    const router = useRouter();
    const { isDarkMode } = useTheme();

    const handleContactPageRoute = () => router.push("/contact");

    const fadeInUp = {
        initial: { opacity: 0, y: 15 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <section className={`w-full py-32 transition-colors duration-700 ${isDarkMode ? 'bg-[#020202]' : 'bg-white'}`}>
            
            {/* --- HEADER: BİZ KİMİZ? --- */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="max-w-4xl">
                    <motion.p 
                        {...fadeInUp}
                        className="text-blue-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-8"
                    >
                        Kurumsal Kimlik
                    </motion.p>
                    <motion.h1 
                        {...fadeInUp}
                        className={`text-6xl md:text-8xl font-black tracking-tighter leading-none mb-10 ${isDarkMode ? 'text-white' : 'text-neutral-950'}`}
                    >
                        Biz Kimiz?
                    </motion.h1>
                    <motion.p 
                        {...fadeInUp}
                        transition={{ delay: 0.1 }}
                        className={`text-xl md:text-2xl font-light leading-relaxed max-w-3xl ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}
                    >
                       Restoran ve kafelerin arka plandaki görünmeyen kahramanlarıyız. Mutfakta işler hızlı, kasada kuyruk kısa, müşteri memnun.. <br />
                       Hepsinin arkasında, size zaman kazandıran ve işinizi kolaylaştıran teknolojilerimiz var.
                    </motion.p>
                </div>
            </div>

            {/* --- SECTION 1: OPERASYON (Z-Pattern Layout) --- */}
            <div className="max-w-7xl mx-auto px-6 mb-48">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div {...fadeInUp} className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-100">
                        <Image
                            src="/images/aboutpage321.webp"
                            alt="İşletme Çözümleri"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                    
                    <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="space-y-8">
                        <h2 className={`text-4xl md:text-5xl font-black tracking-tighter leading-tight ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                            Operasyonun Her Saniyesinde Sizinleyiz.
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed font-light">
                            <p className={isDarkMode ? 'text-neutral-300' : 'text-neutral-600'}>
                                Siparişin ilk dokunuşundan, mutfaktaki hazırlık sürecine ve ödeme anına kadar tüm akışı yönetiyoruz. Cihazlarımız sadece birer araç değil; işletmenizin ritmini öğrenen, karmaşayı basitleştiren, hıza dönüştüren ve sizinle birlikte ölçeklenen akıllı asistanlardır.
                            </p>
                            <p className={`opacity-60 ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                                Kurulumdan desteğe, yazılımdan donanıma her adımda yanınızda duran bir çözüm ortağıyız. Çünkü biz, sadece satış yapmıyoruz; restoranınızın ritmine ayak uyduruyor, her aşamasına eşlik ediyoruz.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- SECTION 2: NEDEN REGEDIT? (Inverted Layout) --- */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div {...fadeInUp} className="order-2 lg:order-1 space-y-8">
                        <h2 className={`text-4xl md:text-5xl font-black tracking-tighter leading-tight ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>
                            Neden <span className="text-blue-600">Regedit Pos?</span>
                        </h2>
                        <p className={`text-lg leading-relaxed font-light ${isDarkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                            Her bir ürünümüz, restoran operasyonlarını daha akıllı ve verimli hale getirmek için ileri seviye mühendislikle tasarlandı. Bizden sadece bir cihaz değil; güvenilir bir teknik altyapı, 7/24 destek ve işletmenizi yarına taşıyacak bir vizyon satın alırsınız.
                        </p>
                        
                        <button 
                            onClick={handleContactPageRoute} 
                            className={`group cursor-pointer flex items-center gap-4 py-4 px-8 rounded-full border transition-all duration-300
                                ${isDarkMode 
                                    ? 'border-white text-white hover:bg-white hover:text-black' 
                                    : 'border-black text-black hover:bg-black hover:text-white'}`}
                        >
                            <span className="font-bold text-sm tracking-widest uppercase">İletişime Geç</span>
                            <HiOutlineArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="order-1 lg:order-2 relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-100">
                        <Image
                            src="/images/aboutpageimage2.webp"
                            alt="Neden Regedit"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Alt Sınır Çizgisi */}
            <div className="max-w-7xl mx-auto px-6">
                <div className={`h-[1px] w-full ${isDarkMode ? 'bg-white/10' : 'bg-black/5'}`} />
            </div>
        </section>
    );
}