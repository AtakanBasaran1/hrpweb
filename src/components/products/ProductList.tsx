"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { useProduct, Product } from '@/context/ProductContext';
import { useTheme } from '@/context/ThemeContext';
import ProductModal from '../ProductModal';
import LazyImage from '../LazyImage';

export default function ProductList() {
    const { filteredProducts } = useProduct();
    const { isDarkMode } = useTheme();
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpen = (p: Product) => { setSelectedProduct(p); setModalOpen(true); };
    const handleClose = () => { setModalOpen(false); setTimeout(() => setSelectedProduct(null), 400); };

    const getGridLayout = () => {
        const c = filteredProducts.length;
        if (c === 1) return "max-w-[450px] mx-auto grid-cols-1";
        if (c === 2) return "max-w-[950px] mx-auto md:grid-cols-2 grid-cols-1";
        return "max-w-[1400px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    };

    return (
        <section className={`relative w-full min-h-screen py-32 px-6 ${isDarkMode ? 'bg-[#030303]' : 'bg-white'}`}>
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-[10%] left-[20%] w-[40%] h-[30%] blur-[150px] rounded-full opacity-20 ${isDarkMode ? 'bg-sky-500' : 'bg-sky-200'}`} />
            </div>

            <div className="relative z-10 w-full">
                <motion.div layout className={`grid gap-12 transition-all duration-700 ${getGridLayout()}`}>
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((product, index) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                                onClick={() => handleOpen(product)}
                                className="group flex flex-col cursor-pointer"
                            >
                                <div className={`relative aspect-square rounded-[2.5rem] border overflow-hidden transition-all duration-700
                                    ${isDarkMode ? 'bg-white/[0.02] border-white/10 group-hover:bg-white/[0.05] shadow-2xl shadow-black' : 'bg-black/[0.02] border-black/[0.05] group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-blue-500/10'}`}>
                                    <div className="absolute inset-0 p-12 flex items-center justify-center">
                                        <div className="relative w-full h-full transition-all duration-1000 group-hover:scale-110 group-hover:-translate-y-4">
                                            <LazyImage src={product.image.find(img => img.default)?.img || "/images/logo.png"} alt={product.name} width={1000} height={1000} className="object-contain w-full h-full relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]" />
                                        </div>
                                    </div>
                                    <div className="absolute top-8 right-8 overflow-hidden">
                                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all transform translate-x-16 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}`}><HiOutlineArrowUpRight size={22} /></div>
                                    </div>
                                </div>
                                <div className="mt-8 text-center sm:text-left px-4">
                                    <span className={`text-[11px] font-black tracking-[0.25em] uppercase transition-colors ${isDarkMode ? 'text-sky-500/80' : 'text-sky-600'}`}>{product.category}</span>
                                    <h3 className={`text-3xl font-bold mt-2 transition-colors ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{product.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
            <ProductModal product={selectedProduct} isOpen={modalOpen} onClose={handleClose} />
        </section>
    );
}