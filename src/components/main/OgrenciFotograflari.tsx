"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { HiOutlineUserGroup, HiOutlineCamera, HiOutlineSparkles } from 'react-icons/hi2';

export default function OgrenciFotograflari() {

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    // Öğrenci proje görselleri - Gerçek proje fotoğrafları
    // Not: Gerçek öğrenci fotoğrafları kullanıldığında veli izinleri gerekir
    const fotoKategorileri = [
        {
            kategori: "Atölye Çalışmaları",
            aciklama: "Öğrencilerimizin atölyelerde pratik eğitim aldığı anlar ve projeleri",
            fotograflar: [
                { src: "/images/projects/8x8-LED-Matrix-MAX7219-Arduino.jpg", alt: "LED Matris Atölye Çalışması" },
                { src: "/images/projects/arduino-robot-kollu-4wd-mobil-araba-kiti-demonte-montajsiz-cizgi-izleyen-robot-jsumo-5320-23-O.jpg", alt: "Robotik Atölye Çalışması" },
                { src: "/images/projects/akilliev.jpg", alt: "Akıllı Ev Projesi Atölye Çalışması" },
                { src: "/images/projects/günes.jpg", alt: "Güneş Enerjisi Projesi Atölye Çalışması" },
            ]
        },
        {
            kategori: "Proje Sunumları",
            aciklama: "Öğrencilerimizin projelerini sunduğu etkinlikler",
            fotograflar: [
                { src: "/images/projects/plc.jpg", alt: "PLC Projesi Sunumu" },
                { src: "/images/projects/2700_buyuk-500x295.jpg", alt: "Test Düzeneği Projesi Sunumu" },
                { src: "/images/projects/akilliev.jpg", alt: "Akıllı Ev Projesi Sunumu" },
                { src: "/images/projects/günes.jpg", alt: "Güneş Enerjisi Projesi Sunumu" },
            ]
        },
        {
            kategori: "Proje Görselleri",
            aciklama: "Öğrencilerimizin tamamladığı başarılı projeler",
            fotograflar: [
                { src: "/images/projects/8x8-LED-Matrix-MAX7219-Arduino.jpg", alt: "LED Matris Projesi" },
                { src: "/images/projects/arduino-robot-kollu-4wd-mobil-araba-kiti-demonte-montajsiz-cizgi-izleyen-robot-jsumo-5320-23-O.jpg", alt: "Robotik Projesi" },
                { src: "/images/projects/plc.jpg", alt: "PLC Kontrol Paneli Projesi" },
                { src: "/images/projects/2700_buyuk-500x295.jpg", alt: "Elektrik Makineleri Test Düzeneği" },
            ]
        }
    ];

    return (
        <section className="w-full py-32 transition-colors duration-1000 bg-white">

            {/* Üst Başlık */}
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="flex items-center gap-4 mb-6">
                    <span className="w-16 h-[1.5px] bg-blue-600"></span>
                    <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-blue-600">ÖĞRENCİ FOTOĞRAFLARI</span>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end"
                >
                    <div className="md:col-span-8">
                        <h2 className="text-6xl md:text-[7rem] ml-5 font-black tracking-tighter leading-[0.9] mb-6 text-[#0A0046]">
                            Okul <br /> <span className="text-blue-600">Hayatımız</span>
                        </h2>
                    </div>
                    <div className="md:col-span-4">
                        <p className="text-2xl font-light leading-relaxed border-l-2 pl-6 text-neutral-400 border-black/5">
                            Öğrencilerimizin eğitim sürecindeki en güzel anları ve başarılarını paylaşıyoruz.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Fotoğraf Kategorileri */}
            {fotoKategorileri.map((kategori, kategoriIndex) => (
                <div key={kategoriIndex} className="max-w-7xl mx-auto px-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: kategoriIndex * 0.2 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-4 mb-3">
                            <div className="p-3 rounded-xl bg-blue-50">
                                {kategoriIndex === 0 && <HiOutlineUserGroup size={24} className="text-blue-600" />}
                                {kategoriIndex === 1 && <HiOutlineSparkles size={24} className="text-blue-600" />}
                                {kategoriIndex === 2 && <HiOutlineCamera size={24} className="text-blue-600" />}
                            </div>
                            <div>
                                <h3 className="text-3xl font-black text-neutral-950">
                                    {kategori.kategori}
                                </h3>
                                <p className="text-sm mt-1 text-neutral-500">
                                    {kategori.aciklama}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Fotoğraf Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {kategori.fotograflar.map((foto, fotoIndex) => (
                            <motion.div
                                key={fotoIndex}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (kategoriIndex * 0.2) + (fotoIndex * 0.1) }}
                                className="group relative aspect-square overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer bg-neutral-100 border-neutral-200 hover:border-blue-600/50 shadow-sm hover:shadow-lg"
                            >
                                <Image
                                    src={foto.src}
                                    alt={foto.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Zoom Icon */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md bg-white/90 border border-white">
                                        <HiOutlineCamera size={20} className="text-blue-600" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Bilgi Notu */}
            <div className="max-w-7xl mx-auto px-6 mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-2xl border text-center bg-blue-50 border-blue-200"
                >
                    <p className="text-sm text-neutral-600">
                        <span className="font-bold">Not:</span> Tüm öğrenci fotoğrafları veli izinleri alınarak yayınlanmaktadır.
                        Fotoğraflarınızın kaldırılmasını isterseniz lütfen bizimle iletişime geçin.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto mt-24 px-6">
                <div className="h-[1px] w-full opacity-10 bg-black" />
            </div>
        </section>
    );
}
