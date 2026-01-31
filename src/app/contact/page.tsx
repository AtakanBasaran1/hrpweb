"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import Maps from '@/components/contact/google-maps';
import SEO from '@/components/SEO';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white relative">
            <SEO
                title="İletişim - Halil Rıfat Paşa MTAL"
                description="Bizimle iletişime geçin. Adres, telefon ve iletişim formu."
            />

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent -z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 -z-10 bg-blend-multiply"></div>

            {/* Content Container - Centered */}
            <div className="container mx-auto px-4 pt-40 pb-20">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <span className="text-blue-600 font-bold tracking-[0.2em] text-sm uppercase mb-4 block">
                        Bize Ulaşın
                    </span>
                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        İletişime Geçelim
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">
                        Halil Rıfat Paşa MTAL Elektrik-Elektronik Teknolojisi alanı ile ilgili soru, görüş ve önerileriniz için aşağıdaki kanalları kullanabilirsiniz.
                    </p>
                </motion.div>

                {/* Contact Info Cards - Horizontal row */}
                <div className="mb-20">
                    <ContactInfo centered={true} />
                </div>

                {/* Form & Map Grid - Centered Layout */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* Left: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <ContactForm />
                    </motion.div>

                    {/* Right: Map & Extra content */}
                    <div className="flex flex-col gap-8 h-full min-h-[500px]">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white"
                        >
                            <Maps />
                        </motion.div>

                        {/* Additional aesthetic block */}
                        <div className="bg-slate-900 rounded-[2rem] p-8 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full blur-[50px] opacity-20"></div>
                            <h4 className="text-lg font-bold mb-2">Okul Ziyaret Saatleri</h4>
                            <p className="text-slate-400 text-sm mb-4">Eğitim öğretim saatleri içerisinde okulumuzu ziyaret edebilirsiniz.</p>
                            <div className="flex justify-between items-center text-sm font-medium border-t border-white/10 pt-4">
                                <span>Pzt - Cum</span>
                                <span>08:30 - 17:00</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
