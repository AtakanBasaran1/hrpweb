"use client";
import React from 'react';
import { Fade } from '@mui/material';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineAcademicCap, HiOutlineTrophy, HiOutlineSparkles } from 'react-icons/hi2';
import Image from 'next/image';

export default function Projelerimiz() {

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    // Öğrenci projeleri - Gerçek proje görselleri ile güncellendi
    const projeler = [
        {
            id: 1,
            baslik: "Arduino ile Akıllı Ev Sistemi",
            sinif: "11. Sınıf",
            aciklama: "Arduino kullanarak ev otomasyonu projesi. Aydınlatma, ısıtma ve güvenlik sistemlerini kontrol eden akıllı sistem.",
            kategoriler: ["Arduino", "Otomasyon", "IoT"],
            ogrenciler: ["Öğrenci Adı 1", "Öğrenci Adı 2"],
            resim: "/images/projects/akilliev.jpg"
        },
        {
            id: 2,
            baslik: "PLC ile Endüstriyel Kontrol Paneli",
            sinif: "12. Sınıf",
            aciklama: "Siemens PLC kullanarak endüstriyel bir kontrol paneli tasarımı ve programlaması. Motor kontrolü ve sensör entegrasyonu.",
            kategoriler: ["PLC", "Endüstriyel Kontrol", "Otomasyon"],
            ogrenciler: ["Öğrenci Adı 3", "Öğrenci Adı 4"],
            resim: "/images/projects/plc.jpg"
        },
        {
            id: 3,
            baslik: "Güneş Enerjili Şarj İstasyonu",
            sinif: "10. Sınıf",
            aciklama: "Yenilenebilir enerji kaynaklarını kullanarak mobil cihazlar için şarj istasyonu. Güneş paneli ve batarya yönetim sistemi.",
            kategoriler: ["Yenilenebilir Enerji", "Elektronik", "Güç Elektroniği"],
            ogrenciler: ["Öğrenci Adı 5"],
            resim: "/images/projects/günes.jpg"
        },
        {
            id: 4,
            baslik: "Robotik Kol Kontrolü",
            sinif: "11. Sınıf",
            aciklama: "Servo motorlar ile kontrol edilen robotik kol. Arduino ve PID kontrol algoritması kullanılarak geliştirildi.",
            kategoriler: ["Robotik", "Arduino", "Motor Kontrolü"],
            ogrenciler: ["Öğrenci Adı 6", "Öğrenci Adı 7", "Öğrenci Adı 8"],
            resim: "/images/projects/arduino-robot-kollu-4wd-mobil-araba-kiti-demonte-montajsiz-cizgi-izleyen-robot-jsumo-5320-23-O.jpg"
        },
        {
            id: 5,
            baslik: "Elektrik Makineleri Test Düzeneği",
            sinif: "12. Sınıf",
            aciklama: "AC ve DC motorların performans testlerini yapabilen otomatik test düzeneği. Veri toplama ve analiz sistemi.",
            kategoriler: ["Elektrik Makineleri", "Test & Ölçüm", "Veri Toplama"],
            ogrenciler: ["Öğrenci Adı 9", "Öğrenci Adı 10"],
            resim: "/images/projects/2700_buyuk-500x295.jpg"
        },
        {
            id: 6,
            baslik: "LED Matris Gösterge Paneli",
            sinif: "9. Sınıf",
            aciklama: "Temel elektronik bilgilerini kullanarak geliştirilen LED matris gösterge paneli. Metin ve animasyon gösterme özelliği.",
            kategoriler: ["Temel Elektronik", "LED", "Görüntü İşleme"],
            ogrenciler: ["Öğrenci Adı 11", "Öğrenci Adı 12"],
            resim: "/images/projects/8x8-LED-Matrix-MAX7219-Arduino.jpg"
        }
    ];

    const istatistikler = [
        { icon: <HiOutlineLightBulb size={32} />, sayi: "50+", baslik: "Tamamlanan Proje" },
        { icon: <HiOutlineAcademicCap size={32} />, sayi: "150+", baslik: "Katılımcı Öğrenci" },
        { icon: <HiOutlineTrophy size={32} />, sayi: "25+", baslik: "Ödüllü Proje" },
        { icon: <HiOutlineSparkles size={32} />, sayi: "12+", baslik: "Kategori" }
    ];

    return (
        <Fade in={true} timeout={500}>
            <div className="min-h-screen transition-colors duration-1000 bg-white">
                <SEO
                    title="Öğrenci Projeleri | Elektrik-Elektronik Teknolojisi - Halil Rıfat Paşa MTAL"
                    description="Halil Rıfat Paşa MTAL Elektrik-Elektronik Teknolojisi Bölümü öğrencilerinin gerçekleştirdiği projeler ve çalışmalar."
                    image="/images/regedit_logo.ico"
                />

                {/* Hero Section */}
                <section className="relative min-h-[70vh] flex flex-col items-center justify-center w-full px-6 pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">

                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-30 blur-[120px] bg-blue-100" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 w-full max-w-5xl text-center"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block text-blue-600 font-black tracking-[0.5em] uppercase text-[11px] mb-6"
                        >
                            ÖĞRENCİ ÇALIŞMALARI
                        </motion.span>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-neutral-950">
                            Öğrenci <br />
                            <span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-700 via-blue-500 to-indigo-700">
                                Projeleri
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed text-neutral-600">
                            Öğrencilerimizin teorik bilgilerini pratiğe dökerek geliştirdikleri yenilikçi projeleri keşfedin.
                            Her proje, öğrencilerimizin mesleki gelişimlerinin birer kanıtıdır.
                        </p>
                    </motion.div>
                </section>

                {/* İstatistikler Section */}
                <section className="w-full py-16 transition-colors duration-1000 bg-blue-600">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {istatistikler.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="flex justify-center mb-4 text-white">
                                        {stat.icon}
                                    </div>
                                    <div className="text-4xl md:text-5xl font-black text-white mb-2">
                                        {stat.sayi}
                                    </div>
                                    <div className="text-sm md:text-base font-medium text-white/80">
                                        {stat.baslik}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projeler Grid Section */}
                <section className="w-full py-24 transition-colors duration-1000 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-blue-600 font-black tracking-[0.5em] uppercase text-[11px] mb-4 block">
                                PROJE GALERİSİ
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-neutral-950">
                                Öğrencilerimizin <span className="text-blue-600">Başarıları</span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {projeler.map((proje, index) => (
                                <motion.div
                                    key={proje.id}
                                    {...fadeIn}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 cursor-pointer bg-white border-neutral-200/60 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-600/20"
                                >
                                    {/* Proje Görseli */}
                                    <div className="relative aspect-video overflow-hidden">
                                        <Image
                                            src={proje.resim}
                                            alt={proje.baslik}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-blue-600">
                                                {proje.sinif}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Proje İçeriği */}
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-xl font-black tracking-tight text-neutral-950">
                                            {proje.baslik}
                                        </h3>
                                        <p className="text-sm leading-relaxed line-clamp-2 text-neutral-600">
                                            {proje.aciklama}
                                        </p>

                                        {/* Kategoriler */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {proje.kategoriler.map((kategori, i) => (
                                                <span
                                                    key={i}
                                                    className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700"
                                                >
                                                    {kategori}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Öğrenciler */}
                                        <div className="pt-2 border-t border-white/5">
                                            <p className="text-xs font-medium text-neutral-400">
                                                Öğrenciler: {proje.ogrenciler.join(", ")}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover Effect */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full py-24 transition-colors duration-1000 bg-neutral-50">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-neutral-950"
                        >
                            Kendi Projenizi <span className="text-blue-600">Geliştirin</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl mb-8 text-neutral-600"
                        >
                            Elektrik-Elektronik Teknolojisi Bölümünde eğitim alarak siz de bu başarılı projeler gibi çalışmalar gerçekleştirebilirsiniz.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <a
                                href="/sinif-9"
                                className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors"
                            >
                                Bölümü Keşfet →
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-colors"
                            >
                                İletişime Geç
                            </a>
                        </motion.div>
                    </div>
                </section>
            </div>
        </Fade>
    );
}
