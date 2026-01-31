"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from "framer-motion";

export default function Begining() {
    const router = useRouter();

    // Parallax etkisi için scroll takibi
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const handleButtonClick = () => {
        router.push("/about");
    };

    return (
        <section className="relative h-[100vh] flex flex-col items-center justify-center w-full overflow-hidden transition-colors duration-1000 bg-[#fafafa]">

            {/* Atmosferik Arka Plan Katmanları */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-full h-[700px] bg-gradient-to-b from-blue-500/10 via-transparent to-transparent rounded-full blur-[120px]" />
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
                />
            </div>

            <motion.div
                style={{ y: y1, opacity }}
                className="relative z-10 flex flex-col items-center max-w-4xl px-6"
            >


                {/* Ana Başlık */}
                <motion.h1
                    // Başlangıç durumu: Aşağıda, şeffaf ve bulanık
                    initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
                    // Bitiş durumu: Yerinde, görünür ve net
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    // Geçiş ayarları: Apple stili akıcı bir "ease" (cubic-bezier)
                    transition={{
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1
                    }}
                    className="text-center font-black text-6xl md:text-9xl tracking-tighter leading-none mb-8 text-blue-900"
                >
                    İLETİŞİM
                </motion.h1>

                {/* Alt Metin */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-center text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-12 text-neutral-500"
                >
                    Elektrik-Elektronik Teknolojisi Bölümü hakkında sorularınız mı var?
                    Okulumuz ve eğitim programımız ile ilgili tüm bilgiler için <span className="text-black font-medium">bize ulaşın.</span>
                </motion.p>

                {/* Aksiyon Butonu */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >

                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-300 to-transparent" />
            </motion.div>
        </section>
    );
}