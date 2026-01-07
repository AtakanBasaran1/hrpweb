"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Product } from "@/context/ProductContext";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

interface Props {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: Props) {
  const { isDarkMode } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  useEffect(() => {
    if (product) {
      const defaultIndex = product.image.findIndex((img) => img.default);
      setCurrentImageIndex(defaultIndex !== -1 ? defaultIndex : 0);
    }
  }, [product]);

  const handleNext = useCallback(() => {
    if (!product) return;
    setCurrentImageIndex((prev) => (prev === product.image.length - 1 ? 0 : prev + 1));
  }, [product]);

  const handlePrev = useCallback(() => {
    if (!product) return;
    setCurrentImageIndex((prev) => (prev === 0 ? product.image.length - 1 : prev - 1));
  }, [product]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 lg:p-12">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal Container - Boyutlar Optimize Edildi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`relative w-full max-w-5xl mt-20 h-[80vh] md:h-auto md:max-h-[80vh] overflow-hidden rounded-[2rem] shadow-2xl flex flex-col md:flex-row
              ${isDarkMode ? "bg-[#0f0f0f] border border-white/10" : "bg-white"}`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className={`absolute top-4 right-4 z-[110] p-2 rounded-full transition-all duration-300
                ${isDarkMode ? "bg-white/5 hover:bg-white/10 text-white" : "bg-black/5 hover:bg-black/10 text-black"}`}
            >
              <IoClose size={22} />
            </button>

            {/* SOL: Görsel Galerisi (Kompaktlaştırıldı) */}
            <div className={`relative w-full md:w-1/2 h-[35vh] md:h-auto flex items-center justify-center p-6 md:p-10
              ${isDarkMode ? "bg-white/[0.01]" : "bg-neutral-50"}`}>
              
              <motion.div 
                key={currentImageIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative w-full h-full"
              >
                <Image
                  src={product.image[currentImageIndex].img}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain drop-shadow-xl"
                />
              </motion.div>

              {/* Navigasyon Okları - Daha Kibar */}
              {product.image.length > 1 && (
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <button onClick={handlePrev} className={`pointer-events-auto p-2 rounded-lg backdrop-blur-md ${isDarkMode ? "bg-white/5 text-white" : "bg-black/5 text-black"}`}>
                    <IoChevronBack size={18} />
                  </button>
                  <button onClick={handleNext} className={`pointer-events-auto p-2 rounded-lg backdrop-blur-md ${isDarkMode ? "bg-white/5 text-white" : "bg-black/5 text-black"}`}>
                    <IoChevronForward size={18} />
                  </button>
                </div>
              )}
            </div>

            {/* SAĞ: İçerik Detayları (Tipografi Ölçeklendi) */}
            <div className="w-full md:w-1/2 flex flex-col p-6 md:p-10 overflow-y-auto">
              <div className="flex-1">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <span className={`text-[8px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-md border
                    ${isDarkMode ? "text-sky-400 border-sky-400/20 bg-sky-400/5" : "text-sky-600 border-sky-600/20 bg-sky-50"}`}>
                    {product.category}
                  </span>
                  <h2 className={`text-2xl md:text-4xl font-extrabold mt-4 tracking-tight
                    ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
                    {product.name}
                  </h2>
                </motion.div>

                <div className={`h-[1px] w-8 my-6 ${isDarkMode ? "bg-white/10" : "bg-black/5"}`} />

                <p className={`text-sm md:text-base font-normal leading-relaxed opacity-80
                  ${isDarkMode ? "text-neutral-300" : "text-neutral-600"}`}>
                  {product.description}
                </p>

                {/* Öne Çıkan Özellikler (Opsiyonel Ekstra Stil) */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className={`p-3 rounded-xl border ${isDarkMode ? "border-white/5 bg-white/5" : "border-black/5 bg-black/[0.02]"}`}>
                    <p className="text-[10px] uppercase tracking-tighter opacity-50 font-bold">Teknoloji</p>
                    <p className="text-xs font-semibold">Yeni Nesil</p>
                  </div>
                  <div className={`p-3 rounded-xl border ${isDarkMode ? "border-white/5 bg-white/5" : "border-black/5 bg-black/[0.02]"}`}>
                    <p className="text-[10px] uppercase tracking-tighter opacity-50 font-bold">Destek</p>
                    <p className="text-xs font-semibold">7/24 Kesintisiz</p>
                  </div>
                </div>
              </div>

              {/* Aksiyon Alanı - Daha Az Yer Kaplar */}
              <motion.div className="mt-8 pt-6 border-t border-white/5">
                <a 
                  href="/contact" 
                  className={`group flex items-center justify-between w-full p-4 rounded-xl font-bold transition-all duration-300
                    ${isDarkMode 
                      ? "bg-white text-black hover:bg-sky-500 hover:text-white" 
                      : "bg-neutral-900 text-white hover:bg-blue-600"}`}
                >
                  <span className="text-sm uppercase tracking-wider">Teklif Al</span>
                  <HiOutlineArrowUpRight className="text-xl group-hover:rotate-45 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}