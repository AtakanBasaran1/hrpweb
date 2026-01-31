"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";
import { FaRegLightbulb } from "react-icons/fa6";
import { LuLayers3 } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";
import { HiOutlineTruck } from "react-icons/hi2";

export default function CompanyInfo() {
    const router = useRouter();

    const handleAboutRoute = () => {
        router.push("/about");
    };

    const features = [
        { icon: <IoRocketOutline />, title: "Modern Eğitim", desc: "Güncel teknoloji ve yöntemlerle, endüstrinin ihtiyaçlarına uygun eğitim programları sunuyoruz." },
        { icon: <GoShieldCheck />, title: "Pratik Odaklı", desc: "Teorik bilgileri atölyelerimizde uygulama fırsatı bulan öğrenciler, gerçek dünya deneyimi kazanırlar." },
        { icon: <FaRegLightbulb />, title: "Kapsamlı Program", desc: "9. sınıftan 12. sınıfa kadar kademeli olarak derinleşen, kapsamlı bir eğitim programı." },
        { icon: <LuLayers3 />, title: "Endüstriyel Uygulamalar", desc: "Temel bilgilerden endüstriyel kontrol sistemlerine kadar geniş bir yelpazede eğitim." },
        { icon: <VscTools />, title: "Atölye İmkanları", desc: "2 modern atölye ile öğrencilerimiz pratik becerilerini geliştirme imkanı bulurlar." },
        { icon: <HiOutlineTruck />, title: "Staj ve Proje", desc: "12. sınıfta staj ve proje çalışmaları ile iş hayatına hazırlanma fırsatı." },
    ];

    return (
        <section className="w-full py-32 transition-colors duration-1000 overflow-hidden bg-[#fafafa]">

            {/* ÜST PANEL: KURUMSAL KİMLİK */}
            <div className="max-w-[1400px] mx-auto px-6 mb-24">
                <div className="relative overflow-hidden rounded-[3rem] p-12 md:p-24 transition-all duration-700 bg-[#0A0046] shadow-2xl shadow-blue-900/40">

                    {/* Arka Plan Dekoratif Blur Elementleri */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">
                        <div className="space-y-4">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-block text-blue-400 font-black tracking-[0.5em] uppercase text-[10px]"
                            >
                                BÖLÜM HAKKINDA
                            </motion.span>
                            <h2 className="text-6xl md:text-[7rem] font-black text-white ">
                                Neden <br /> <span className="text-blue-500">Bu Bölüm?</span>
                            </h2>
                        </div>

                        <div className="max-w-md space-y-10">
                            <p className="text-xl md:text-2xl text-blue-100/60 font-light leading-relaxed">
                                2018-2019 eğitim-öğretim yılında okul bünyesine dahil edilen Elektrik-Elektronik Teknolojisi Bölümü, öğrencilerimize endüstriyel bakım ve onarım konularında uzmanlaşma imkanı sunar.
                                <span className="text-white font-medium"> Temel bilgilerden endüstriyel uygulamalara kadar kapsamlı bir eğitim programı ile geleceğinize yatırım yapın.</span>
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleAboutRoute}
                                className="group cursor-pointer flex items-center gap-6 py-5 px-10 rounded-2xl bg-white text-[#0A0046] hover:bg-blue-600 hover:text-white transition-all duration-500 font-black tracking-widest uppercase text-[11px] shadow-xl"
                            >
                                Bölüm Hakkında
                                <FaAngleRight className="group-hover:translate-x-2 transition-transform duration-300" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ALT PANEL: FEATURE GRID */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group p-10 rounded-[2.5rem] border transition-all duration-500 bg-white border-neutral-200/60 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-600/20"
                    >
                        <div className="mb-12 w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-4xl transition-all duration-500 group-hover:scale-110 bg-[#0A0046]/5 text-[#0A0046]">
                            {feature.icon}
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-black tracking-tight text-[#0A0046]">
                                {feature.title}
                            </h3>
                            <p className="text-[15px] leading-relaxed font-medium text-neutral-400">
                                {feature.desc}
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="w-8 h-[2px] bg-blue-600" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-blue-600">HRP MTAL</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Sayfa Altı Bağlam Çizgisi */}
            <div className="max-w-7xl mx-auto mt-32 px-6 flex justify-center">
                <div className="w-32 h-1 rounded-full bg-neutral-200" />
            </div>
        </section>
    );
}