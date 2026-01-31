"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowUpRight } from "react-icons/hi2";

export default function MiddleOfPage() {
    const router = useRouter();

    const handleClassRoute = (className: string) => {
        router.push(`/sinif-${className}`);
    };

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <section className="w-full py-24 md:py-0 transition-colors duration-1000 overflow-hidden bg-[#fcfcfc]">

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
                            <span className="text-[11px] font-bold tracking-[0.5em] uppercase text-blue-600">EĞİTİM & GELİŞİM</span>
                        </motion.div>
                        <motion.h2
                            {...fadeIn}
                            className="text-6xl md:text-[7rem] ml-5 font-black tracking-tighter leading-[0.9] text-[#0A0046]"
                        >
                            Sınıf <br /> <span className="text-blue-600">Programları</span>
                        </motion.h2>
                    </div>
                    <div className="md:col-span-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl font-light leading-relaxed border-l-2 pl-6 text-neutral-400 border-black/5"
                        >
                            9. sınıftan 12. sınıfa kadar her seviyede elektrik-elektronik teknolojisi alanında kapsamlı eğitim programımızla öğrencilerimizi geleceğe hazırlıyoruz.
                        </motion.p>
                    </div>
                </div>
            </div>

            {/* --- SINIF KARTLARI --- */}
            <div className="max-w-[1400px] mx-auto px-6 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 9. Sınıf Kartı */}
                    <motion.div
                        {...fadeIn}
                        onClick={() => handleClassRoute('9')}
                        className="relative overflow-hidden rounded-[3.5rem] border transition-all duration-700 cursor-pointer group bg-white border-neutral-100 shadow-xl hover:shadow-2xl hover:border-blue-600/50"
                    >
                        <div className="p-10 md:p-16 flex flex-col justify-between h-full min-h-[400px]">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="text-6xl md:text-7xl font-black text-blue-600">9</div>
                                    <div className="w-16 h-[1.5px] bg-blue-600"></div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-neutral-900">
                                    Temel <br /> Elektrik-Elektronik
                                </h3>
                                <p className="text-lg font-light leading-relaxed text-neutral-500">
                                    Okula ilk geldiğinizde elektrik-elektronik alanının temel kavramlarını öğrenmeye başlayacaksınız. Temel Elektrik-Elektronik Atölyesi dersleri ile alanın temellerini kavrayacaksınız.
                                </p>
                                <div className="flex items-center gap-2 mt-8 text-blue-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                                    <span>Detayları İncele</span>
                                    <HiOutlineArrowUpRight size={18} />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
                    </motion.div>

                    {/* 10. Sınıf Kartı */}
                    <motion.div
                        {...fadeIn}
                        onClick={() => handleClassRoute('10')}
                        className="relative overflow-hidden rounded-[3.5rem] border transition-all duration-700 cursor-pointer group bg-white border-neutral-100 shadow-xl hover:shadow-2xl hover:border-blue-600/50"
                    >
                        <div className="p-10 md:p-16 flex flex-col justify-between h-full min-h-[400px]">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="text-6xl md:text-7xl font-black text-blue-600">10</div>
                                    <div className="w-16 h-[1.5px] bg-blue-600"></div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-neutral-900">
                                    Esaslar & <br /> Kumanda Kontrol
                                </h3>
                                <p className="text-lg font-light leading-relaxed text-neutral-500">
                                    Elektrik-Elektronik Esasları ve Kumanda ve Kontrol Atölyesi dersleri ile daha ileri düzeyde teorik ve pratik bilgiler edineceksiniz. Temel bilgilerinizi pekiştirip uygulamaya geçeceksiniz.
                                </p>
                                <div className="flex items-center gap-2 mt-8 text-blue-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                                    <span>Detayları İncele</span>
                                    <HiOutlineArrowUpRight size={18} />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
                    </motion.div>

                    {/* 11. Sınıf Kartı */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        onClick={() => handleClassRoute('11')}
                        className="relative overflow-hidden rounded-[3.5rem] border transition-all duration-700 cursor-pointer group bg-white border-neutral-100 shadow-xl hover:shadow-2xl hover:border-blue-600/50"
                    >
                        <div className="p-10 md:p-16 flex flex-col justify-between h-full min-h-[400px]">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="text-6xl md:text-7xl font-black text-blue-600">11</div>
                                    <div className="w-16 h-[1.5px] bg-blue-600"></div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-neutral-900">
                                    Elektrik Makineleri & <br /> Endüstriyel Kontrol
                                </h3>
                                <p className="text-lg font-light leading-relaxed text-neutral-500">
                                    Elektrik Makineleri ve Kontrol Sistemleri, Endüstriyel Kontrol dersleri ile endüstriyel uygulamalara yönelik bilgi ve becerilerinizi geliştireceksiniz. Gerçek dünya uygulamalarına hazırlanacaksınız.
                                </p>
                                <div className="flex items-center gap-2 mt-8 text-blue-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                                    <span>Detayları İncele</span>
                                    <HiOutlineArrowUpRight size={18} />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
                    </motion.div>

                    {/* 12. Sınıf Kartı */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        onClick={() => handleClassRoute('12')}
                        className="relative overflow-hidden rounded-[3.5rem] border transition-all duration-700 cursor-pointer group bg-white border-neutral-100 shadow-xl hover:shadow-2xl hover:border-blue-600/50"
                    >
                        <div className="p-10 md:p-16 flex flex-col justify-between h-full min-h-[400px]">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="text-6xl md:text-7xl font-black text-blue-600">12</div>
                                    <div className="w-16 h-[1.5px] bg-blue-600"></div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight text-neutral-900">
                                    Staj & <br /> Proje Çalışmaları
                                </h3>
                                <p className="text-lg font-light leading-relaxed text-neutral-500">
                                    Staj ve proje çalışmaları ile mesleki deneyim kazanarak mezuniyete hazırlanacaksınız. Öğrendiklerinizi uygulama fırsatı bulacak ve iş hayatına hazır hale geleceksiniz.
                                </p>
                                <div className="flex items-center gap-2 mt-8 text-blue-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                                    <span>Detayları İncele</span>
                                    <HiOutlineArrowUpRight size={18} />
                                </div>
                            </div>
                        </div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
                    </motion.div>
                </div>
            </div>

            {/* --- ATÖLYE BİLGİSİ --- */}
            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden bg-[#0A0046] text-white shadow-xl"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6">
                            <h3 className="text-4xl md:text-6xl font-black leading-tight">
                                Modern <br /> Atölye İmkanları
                            </h3>
                            <p className="text-xl font-light opacity-90 leading-relaxed">
                                Bölümümüzde 2 modern atölye bulunmaktadır. Öğrencilerimiz teorik bilgilerini bu atölyelerde pratiğe dökme fırsatı bulurlar. Endüstriyel bakım ve onarım konularında uzmanlaşarak mezun olurlar.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                {['Temel Elektrik-Elektronik Atölyesi', 'Kumanda ve Kontrol Atölyesi', 'Endüstriyel Uygulamalar', 'Pratik Eğitim'].map((feature, i) => (
                                    <div key={i} className="px-4 py-2 rounded-full bg-white/10 border border-white/20">
                                        <span className="text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-white mt-2"></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">2018-2019 Eğitim-Öğretim Yılı</h4>
                                        <p className="text-white/80">Elektrik-Elektronik Teknolojisi Alanı okul bünyesine dahil edilmiştir.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-white mt-2"></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">2 Modern Atölye</h4>
                                        <p className="text-white/80">Öğrencilerimiz pratik eğitimlerini bu atölyelerde gerçekleştirmektedir.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-white mt-2"></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Endüstriyel Bakım ve Onarım</h4>
                                        <p className="text-white/80">Öğrencilerimiz endüstriyel bakım ve onarım konularında uzmanlaşmaktadır.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Arka plan dekorasyonu */}
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 blur-3xl -mb-48 -mr-48 rounded-full" />
                </motion.div>
            </div>

            <div className="max-w-[1400px] mx-auto mt-24 px-6">
                <div className="h-[1px] w-full opacity-10 bg-black" />
            </div>
        </section>
    );
}