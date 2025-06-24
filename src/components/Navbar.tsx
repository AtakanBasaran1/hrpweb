'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Hakkımızda', href: '/about' },
    { label: 'Ürünlerimiz', href: '/products' },
    { label: 'Örnek Projeler', href: '/services' },
    { label: 'Referanslar', href: '/referances' },
    { label: 'İletişim', href: '/contact' },
  ];

  const menuRef = useRef<HTMLDivElement>(null);
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Header scroll davranışı
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setShowHeader(false);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Menü dışı tıklama
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Link rengi
  const getLinkColor = (itemHref: string) => {
    const isActive = pathname === itemHref;
    if (isActive) {
      return isDarkMode
        ? "text-white border-b-2 border-white"
        : "text-black border-b-2 border-black";
    }
    return isDarkMode ? "text-white" : "text-black";
  };

  // Hover efekti
  const getHoverClass = () => "hover:opacity-70";

  // Logo seçimi (tüm sayfalarda aynı)
  const getLogoSrc = () => isDarkMode ? "/images/regedit_white.png" : "/images/regedit_blue.png";

  // Navbar arkaplanı
  const getNavbarBg = () => {
    if (pathname === '/') {
      if (isDarkMode) return showHeader ? "bg-transparent" : "bg-black";
      return showHeader ? "bg-transparent" : "bg-white";
    }
    return showHeader ? "bg-transparent" : (isDarkMode ? "bg-black" : "bg-white");
  };

  return (
    <nav className={`w-full z-50 fixed top-0 left-0  shadow-2xl transition-all duration-800 ${isDarkMode ? 'dark' : ''}`}>
      <div
        className={`backdrop-blur-md transition-colors duration-300 ${getNavbarBg()} flex items-center justify-between px-4 md:px-20 py-2 h-[10lvh]`}
        ref={menuRef}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src={getLogoSrc()}
            alt="Regedit Informatics"
            className="h-16 md:h-20 rounded-md"
          />
        </Link>

        {/* Masaüstü Menü */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg transition-colors flex items-center gap-2 ${getLinkColor(item.href)} ${getHoverClass()}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Tema Butonu ve Mobil Menü Butonu */}
        <div className="flex items-center gap-2">
          {/* Tema Değiştirici */}
          <motion.button
            onClick={toggleTheme}
            className="relative w-12 h-7 rounded-full bg-gray-200 dark:bg-gray-700 p-1 transition-colors duration-300 flex items-center shadow-lg"
            whileTap={{ scale: 0.95 }}
            aria-label="Tema Değiştir"
          >
            <motion.div
              className="w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
              animate={{
                x: isDarkMode ? 20 : 0,
                backgroundColor: isDarkMode ? "#123466" : "#fbbf24"
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {isDarkMode ? (
                <FaMoon className="text-white text-xs" />
              ) : (
                <FaSun className="text-yellow-400 text-xs" />
              )}
            </motion.div>
          </motion.button>

          {/* Mobil Menü Butonu */}
          <button
            className={`md:hidden ${isDarkMode ? "text-white" : "text-black"} ml-2`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`fixed top-[10lvh] left-0 w-full ${isDarkMode ? "bg-black" : "bg-white"} flex flex-col items-center px-6 py-4 md:hidden z-40 border-b border-black/30`}
          >
            <nav className="flex flex-col w-full space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-xl py-2 w-full text-left transition-colors flex items-center gap-2 ${isActive
                      ? (isDarkMode
                        ? "text-white border-b-2 border-white"
                        : "text-black border-b-2 border-black")
                      : (isDarkMode
                        ? "text-white"
                        : "text-black")} ${getHoverClass()}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}