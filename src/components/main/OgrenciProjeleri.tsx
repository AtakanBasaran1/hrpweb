"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { HiOutlineArrowUpRight, HiOutlineLightBulb, HiOutlineAcademicCap } from 'react-icons/hi2';
import Image from 'next/image';

export default function OgrenciProjeleri() {
    const router = useRouter();

    const handleProjelerRoute = () => {
        router.push("/projelerimiz");
    };

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    // Öne çıkan projeler (ana sayfada gösterilecek)
    const featuredProjects = [
        {
            id: 1,
            baslik: "Akıllı Ev Sistemi",
            sinif: "11. Sınıf",
            aciklama: "Arduino ile geliştirilen ev otomasyonu projesi",
            resim: "/images/projects/akilliev.jpg",
            kategori: "IoT & Otomasyon"
        },
        {
            id: 2,
            baslik: "PLC Kontrol Paneli",
            sinif: "12. Sınıf",
            aciklama: "Endüstriyel kontrol ve motor yönetimi",
            resim: "/images/projects/plc.jpg",
            kategori: "Endüstriyel Kontrol"
        },
        {
            id: 3,
            baslik: "Güneş Enerjili Şarj İstasyonu",
            sinif: "10. Sınıf",
            aciklama: "Yenilenebilir enerji kaynakları projesi",
            resim: "/images/projects/günes.jpg",
            kategori: "Yenilenebilir Enerji"
        }
    ];

    return (
        <section className="w-full py-32 transition-colors duration-1000 bg-[#fafafa]">

            {/* Üst Başlık */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-16 h-[1.5px] bg-blue-600"></span>
                    <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-blue-600">ÖĞRENCİ ÇALIŞMALARI</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
                    <div className="md:col-span-8">
                        <motion.h2
                            {...fadeIn}
                            className="text-6xl md:text-[7rem] ml-5 font-black tracking-tighter leading-[0.9] mb-6 text-[#0A0046]"
                        >
                            Öğrenci <br /> <span className="text-blue-600">Projeleri</span>
                        </motion.h2>
                    </div>
                    <div className="md:col-span-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl font-light leading-relaxed border-l-2 pl-6 text-neutral-400 border-black/5"
                        >
                            Öğrencilerimizin teorik bilgilerini pratiğe dökerek geliştirdikleri yenilikçi projeler.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* Proje Kartları */}
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuredProjects.map((proje, index) => (
                        <motion.div
                            key={proje.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            onClick={handleProjelerRoute}
                            className="group relative overflow-hidden rounded-[3rem] border transition-all duration-700 cursor-pointer bg-white border-neutral-200 shadow-lg hover:shadow-2xl hover:border-blue-600/50"
                        >
                            {/* Görsel */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={proje.resim}
                                    alt={proje.baslik}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                                {/* Sinif Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md bg-white/90 text-blue-600">
                                        {proje.sinif}
                                    </span>
                                </div>

                                {/* İçerik - Görsel Üzerinde */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-2 block">
                                        {proje.kategori}
                                    </span>
                                    <h3 className="text-2xl font-black mb-2">{proje.baslik}</h3>
                                    <p className="text-sm text-white/80">{proje.aciklama}</p>
                                </div>
                            </div>

                            {/* Hover Indicator */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex justify-center"
                >
                    <button
                        onClick={handleProjelerRoute}
                        className="group flex items-center gap-6 py-6 px-12 rounded-4xl font-bold transition-all duration-500 cursor-pointer bg-[#0A0046] text-white hover:bg-blue-700 shadow-xl"
                    >
                        <div className="flex items-center gap-3">
                            <HiOutlineLightBulb size={24} />
                            <span className="text-[11px] tracking-[0.2em] uppercase">Tüm Projeleri İncele</span>
                        </div>
                        <HiOutlineArrowUpRight size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                    </button>
                </motion.div>
            </div>

            {/* İstatistikler */}
            <div className="max-w-7xl mx-auto mt-24 px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 rounded-[3rem] border bg-blue-50 border-blue-100">
                    {[
                        { sayi: "50+", baslik: "Tamamlanan Proje", icon: <HiOutlineLightBulb size={28} /> },
                        { sayi: "150+", baslik: "Katılımcı Öğrenci", icon: <HiOutlineAcademicCap size={28} /> },
                        { sayi: "25+", baslik: "Ödüllü Proje", icon: <HiOutlineLightBulb size={28} /> },
                        { sayi: "12+", baslik: "Farklı Kategori", icon: <HiOutlineAcademicCap size={28} /> }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                            className="text-center"
                        >
                            <div className="flex justify-center mb-4 text-blue-600">
                                {stat.icon}
                            </div>
                            <div className="text-4xl md:text-5xl font-black mb-2 text-[#0A0046]">
                                {stat.sayi}
                            </div>
                            <div className="text-sm font-medium text-neutral-600">
                                {stat.baslik}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 px-6">
                <div className="h-[1px] w-full opacity-10 bg-black" />
            </div>
        </section>
    );
}
