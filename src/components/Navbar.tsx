"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Hakkımızda', href: '/about' },
    { label: 'Ürünlerimiz', href: '/products' },
    { label: 'Hizmetler', href: '/services' },
    { label: 'Referanslar', href: '/referances' },
    { label: 'İletişim', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü açıldığında scroll'u kesin olarak kilitler
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.height = 'auto';
    }
  }, [isOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Üst Nav Bar: Her zaman en üstte kalması için z-[1000] */}
        <nav className={`relative flex items-center justify-between px-6 py-3 transition-all duration-500 rounded-[2rem] z-[1000]
          ${scrolled 
            ? (isDarkMode ? 'bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl' : 'bg-white/80 backdrop-blur-2xl border border-black/5 shadow-xl')
            : 'bg-transparent border-transparent'}`}>
          
          {/* LOGO */}
          <Link href="/" className="relative z-[1001] flex items-center" onClick={() => setIsOpen(false)}>
            <motion.img
              src={isDarkMode ? "/images/regedit_white.png" : "/images/regedit_blue.png"}
              alt="Regedit Logo"
              className={`transition-all duration-500 object-contain ${scrolled ? 'h-10 md:h-12' : 'h-14 md:h-16'}`}
            />
          </Link>

          {/* PC MENÜ (Dokunulmadı) */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2 text-sm font-bold tracking-tight transition-colors duration-300
                    ${isActive 
                      ? (isDarkMode ? 'text-white' : 'text-blue-600') 
                      : (isDarkMode ? 'text-white/60 hover:text-white' : 'text-neutral-600 hover:text-black')}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className={`absolute inset-0 rounded-full z-[-1] ${isDarkMode ? 'bg-white/10' : 'bg-blue-50'}`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* SAĞ TARAF: BUTONLAR */}
          <div className="flex items-center gap-4 relative z-[1001]">
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border
                ${isDarkMode ? 'bg-white/5 border-white/10 text-yellow-400' : 'bg-black/5 border-black/5 text-blue-600'}`}
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen 
                ? <FaTimes size={30} className={isDarkMode ? "text-white" : "text-black"} /> 
                : <FaBars size={26} className={isDarkMode ? "text-white" : "text-black"} />
              }
            </button>
          </div>
        </nav>
      </div>

      {/* MOBİL MENÜ OVERLAY: KESİN ÇÖZÜM */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`fixed inset-0 z-[990] md:hidden flex flex-col items-center justify-center w-full h-screen
              ${isDarkMode ? "bg-black" : "bg-white"}`}
          >
            {/* Navigasyon Linkleri - Ekranın tam ortasında */}
            <div className="flex flex-col items-center gap-8 px-6 text-center">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-4xl font-extrabold tracking-tighter transition-all block
                        ${isActive 
                          ? 'text-blue-600 scale-110' 
                          : (isDarkMode ? 'text-white' : 'text-neutral-900')}`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Alt Bilgi - Sadece dekoratif */}
            <div className="absolute bottom-12 opacity-20 text-[10px] font-bold tracking-[0.4em] uppercase">
              Regedit Pos 
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}