'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/WhatsApp Image 2026-01-23 at 14.21.07 (1).jpeg"
                    alt="Halil Rıfat Paşa MTAL Elektrik Elektronik"
                    fill
                    className="object-cover bg-center"
                    priority
                />
                {/* Modern dark overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto flex flex-col items-center">


                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight drop-shadow-2xl"
                >
                    Elektrik <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Elektronik</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 font-light leading-relaxed"
                >
                    Halil Rıfat Paşa MTAL olarak, endüstri 4.0 standartlarında eğitim ile donanımlı teknisyenler ve mühendis adayları yetiştiriyoruz.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4"
                >
                    <a href="#egitim" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50">
                        Eğitim Programını İncele
                    </a>
                    <a href="#projeler" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-bold rounded-full transition-all transform hover:scale-105">
                        Öğrenci Projeleri
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2 box-content">
                    <motion.div
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-3 bg-white rounded-full"
                    />
                </div>
            </motion.div>
        </header>
    );
}
