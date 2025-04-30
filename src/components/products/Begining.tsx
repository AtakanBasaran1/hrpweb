"use client";
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';

export default function Begining() {
    return (
        <div className='relative h-screen w-full bg-white overflow-hidden'>

            {/* Üstteki gradient ışık süzmesi */}
            <div className="flex flex-col absolute top-[-150px] left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[500px] bg-gradient-to-b from-[#123466] via-blue-500 to-transparent rounded-full blur-[120px] opacity-90 pointer-events-none z-0" />

            <div className="bottom-[-100px] left-1/2 -translate-x-1/2 w-[500px] z-0 opacity-90 relative">
                <Image
                    src="/images/hardware/kioks5.png"
                    alt="Ürün Görseli"
                    width={500}
                    height={500}
                    priority
                    className="rounded-md"
                />

                {/* Alt kısma geçişli blur efekti */}
                <div className="absolute bottom-0 left-0 w-full h-[450px] bg-gradient-to-t from-white/95 to-transparent pointer-events-none" />
            </div>



            {/* En altta sabit yazılar */}
            <div className='absolute bottom-0 w-full p-9 z-10 flex flex-col items-center justify-center'>

                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                        filter: "blur(10px)",
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    transition={{
                        delay: 0.3, // Gecikme süresi
                        duration: 0.8, // Geçiş süresi
                        ease: "easeOut", // Geçiş şekli
                    }}
                    className="cursor-pointer sm:text-9xl text-6xl font-bold m-3 bg-gradient-to-r from-[#123466] via-blue-600 to-blue-400 text-transparent bg-clip-text"
                >
                    Ürünlerimiz
                </motion.h1>
                <p className='text-gray-900 text-center'>
                    RegeditPos olarak ürünlerimizin <span className='text-sky-400'>performansı</span>  ile öne çıkıyoruz.
                </p>

            </div>

        </div>
    )
}
