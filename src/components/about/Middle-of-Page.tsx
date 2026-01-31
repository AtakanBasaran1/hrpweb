"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { HiOutlineArrowRight } from "react-icons/hi2";

/**
 * HrpPos - About Section (Minimalist & Professional)
 * Fokus: Okunabilirlik, Net Hiyerarşi, Temiz Boşluklar.
 */
export default function MiddleOfPage() {
    const router = useRouter();

    const handleContactPageRoute = () => router.push("/contact");

    const fadeInUp = {
        initial: { opacity: 0, y: 15 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <section className="w-full py-32 transition-colors duration-700 bg-white">

            {/* --- HEADER: BİZ KİMİZ? --- */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="max-w-4xl">
                    <motion.p
                        {...fadeInUp}
                        className="text-blue-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-8"
                    >
                        Bölüm Tanıtımı
                    </motion.p>
                    <motion.h1
                        {...fadeInUp}
                        className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-10 text-neutral-950"
                    >
                        Bölümümüz
                    </motion.h1>
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl text-neutral-500"
                    >
                        Halil Rıfat Paşa Mesleki ve Teknik Anadolu Lisesi, 2010-2011 eğitim-öğretim yılında genel liseden meslek lisesine dönüştürülerek eğitim faaliyetlerine başlamıştır. <br />
                        2018-2019 eğitim-öğretim yılında Elektrik-Elektronik Teknolojisi Alanı okul bünyesine dahil edilmiştir.
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
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-neutral-900">
                            Eğitim Programımız
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed font-light">
                            <p className="text-neutral-600">
                                Bölümümüzde öğrenciler, temel elektrik-elektronik bilgileri edinerek endüstriyel bakım ve onarım konularında uzmanlaşmaktadır. 9. sınıftan 12. sınıfa kadar kademeli olarak derinleşen, kapsamlı bir eğitim programı sunuyoruz.
                            </p>
                            <p className="opacity-60 text-neutral-500">
                                Bölümümüzde 2 modern atölye bulunmaktadır ve öğrencilerimiz pratik eğitimlerini bu atölyelerde gerçekleştirmektedir. Teorik bilgilerini uygulama fırsatı bulan öğrenciler, gerçek dünya deneyimi kazanırlar.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* --- SECTION 2: NEDEN HRP? (Inverted Layout) --- */}
            <div className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div {...fadeInUp} className="order-2 lg:order-1 space-y-8">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-neutral-900">
                            Neden <span className="text-blue-600">Bu Bölüm?</span>
                        </h2>
                        <p className="text-lg leading-relaxed font-light text-neutral-600">
                            Elektrik-Elektronik Teknolojisi bölümü, günümüzün en hızlı gelişen teknoloji alanlarından biridir. Mezunlarımız, elektrik tesisat teknisyenliğinden PLC programcılığına, endüstriyel bakım teknisyenliğinden kontrol sistemleri teknisyenliğine kadar geniş bir yelpazede kariyer fırsatlarına sahiptir.
                        </p>

                        <button
                            onClick={handleContactPageRoute}
                            className="group cursor-pointer flex items-center gap-4 py-4 px-8 rounded-full border transition-all duration-300 border-black text-black hover:bg-black hover:text-white"
                        >
                            <span className="font-bold text-sm tracking-widest uppercase">İletişime Geç</span>
                            <HiOutlineArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="order-1 lg:order-2 relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-100">
                        <Image
                            src="/images/aboutpageimage2.webp"
                            alt="Neden Hrp"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Alt Sınır Çizgisi */}
            <div className="max-w-7xl mx-auto px-6">
                <div className="h-[1px] w-full bg-black/5" />
            </div>
        </section>
    );
}