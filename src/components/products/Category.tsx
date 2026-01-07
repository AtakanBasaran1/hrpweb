"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { IconType } from "react-icons";
import { BiSolidCategory } from "react-icons/bi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaMobileScreen, FaWifi } from "react-icons/fa6";
import { PiDeviceMobileLight, PiCashRegister } from "react-icons/pi";
import { TiPrinter } from "react-icons/ti";
import { MdBarcodeReader } from "react-icons/md";
import { IoReceiptOutline } from "react-icons/io5";
import { useProduct } from '@/context/ProductContext';
import { useTheme } from '@/context/ThemeContext';

interface ICategoryItem {
    id: number;
    label: string;
    icon: IconType;
}

const CATEGORY_LIST: ICategoryItem[] = [
    { id: 1, label: "Tüm Ürünler", icon: BiSolidCategory },
    { id: 2, label: "Kioks", icon: PiDeviceMobileLight },
    { id: 3, label: "POS Bilgisayarlar", icon: HiMiniComputerDesktop },
    { id: 4, label: "Termal Yazıcı", icon: TiPrinter },
    { id: 5, label: "Para Çekmecesi", icon: PiCashRegister },
    { id: 6, label: "El Terminali", icon: FaMobileScreen },
    { id: 7, label: "Bağlantı", icon: FaWifi },
    { id: 8, label: "Barkod Okuyucular", icon: MdBarcodeReader },
    { id: 9, label: "Yazar Kasa", icon: IoReceiptOutline },
];

export default function Category() {
    const { selectedCategory, setSelectedCategory } = useProduct();
    const { isDarkMode } = useTheme();
    const scrollRef = useRef<HTMLUListElement>(null);

    return (
        /* top-20 md:top-24: Mobilde Navbar'ın (header) yüksekliğine göre ayarlandı. 
           Böylece Navbar ile çakışmaz, tam altına yapışır.
        */
        <nav className={`sticky top-[72px] md:top-[88px] z-[90] w-full transition-all duration-500 backdrop-blur-xl border-b
            ${isDarkMode 
                ? "bg-black/80 border-white/5" 
                : "bg-white/90 border-gray-100"
            }`}>
            
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <ul 
                    ref={scrollRef}
                    className="flex items-center justify-start lg:justify-between gap-2 md:gap-4 py-2 md:py-4 overflow-x-auto no-scrollbar scroll-smooth touch-pan-x"
                >
                    {CATEGORY_LIST.map((item) => {
                        const Icon = item.icon;
                        const isActive = selectedCategory === item.label;

                        return (
                            <li key={item.id} className="flex-shrink-0">
                                <button
                                    onClick={() => setSelectedCategory(item.label)}
                                    className={`relative flex flex-col items-center justify-center w-[90px] md:w-[110px] py-2 md:py-3 rounded-xl transition-all duration-300 active:scale-95
                                        ${isActive 
                                            ? (isDarkMode ? "text-sky-400" : "text-blue-600") 
                                            : (isDarkMode ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-800")
                                        }`}
                                >
                                    {/* Aktif Göstergesi - Mobilde daha ince ve zarif */}
                                    {isActive && (
                                        <motion.div 
                                            layoutId="activeBar"
                                            className={`absolute -bottom-[9px] md:-bottom-[17px] left-2 right-2 h-[2px] z-10 rounded-full
                                                ${isDarkMode ? "bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.5)]" : "bg-blue-600"}`}
                                        />
                                    )}

                                    {/* Icon - Mobilde boyutu korundu, vuruşu artırıldı */}
                                    <Icon className={`text-xl md:text-2xl transition-transform duration-300 ${isActive ? 'scale-110' : 'opacity-70'}`} />

                                    {/* Label - Mobilde daha okunaklı boyut */}
                                    <span className={`mt-1.5 text-[8px] md:text-[10px] font-bold tracking-wider uppercase whitespace-nowrap
                                        ${isActive ? "opacity-100" : "opacity-60"}`}>
                                        {item.label}
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}