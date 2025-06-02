'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';
import path from 'path';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { isDarkMode} = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Hakkımızda', href: '/about' },
    { label: 'Ürünlerimiz', href: '/products' },
    { label: 'Örnek Projeler', href: '/services' },
    { label: 'Referanslar', href: '/referances' },
    { label: 'İletişim', href: '/contact' },
  ];

  // Menü dışına tıklanınca menüyü kapat
  const menuRef = useRef<HTMLDivElement>(null);
  const [showHeader, setShowHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => { // ✅ doğru event tipi
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

  return (
    <nav className="flex flex-col justify-center z-50 w-full" ref={menuRef}>
      <div className={`w-full backdrop-blur-md  
        ${pathname === '/products'
          ? "bg-transparent"
          : pathname === '/contact'
            ? showHeader
              ? "bg-transparent"
              : "bg-[#123466]"
            : pathname === '/' || pathname === '/about'
              ? isDarkMode
                ? showHeader
                  ? "bg-transparent"
                  : "bg-black"
                : showHeader
                  ? "bg-transparent"
                  : "bg-transparent"
              : showHeader
                ? "bg-transparent"
                : "bg-white"}
        flex items-center px-8 md:px-20 py-2 overflow-hidden self-center h-[7lvh] `}>
        <Link href="/" className="flex items-center space-x-2">
          <img
            src={
              pathname === '/products'
                ? showHeader
                  ? "/images/regedit_black.png"
                  : "/images/regedit_blue.png"
                : pathname === '/contact'
                  ? showHeader
                    ? "/images/regedit_black.png"
                    : "/images/regedit_white.png"
                  : pathname === '/' || pathname === '/about'
                    ? isDarkMode
                      ? showHeader
                        ? "/images/regedit_black.png"
                        : "/images/regedit_white.png"
                      : "/images/regedit_black.png"
                    : showHeader
                      ? "/images/regedit_black.png"
                      : "/images/regedit_black.png"
            }
            alt="Regedit Informatics"
            className="h-26 rounded-md"
          />
        </Link>

        <div className="flex-1 flex justify-center z-50 w-full">
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg hover:text-gray-300 transition-colors ${
                    pathname === '/products'
                      ? showHeader
                        ? "text-black"
                        : "text-white"
                      : pathname === '/contact'
                        ? showHeader
                          ? "text-black"
                          : "text-white"
                        : pathname === '/' || pathname === '/about'
                          ? isDarkMode
                            ? showHeader
                              ? "text-black"
                              : "text-white"
                            : showHeader
                              ? "text-black"
                              : "text-white"
                          : showHeader
                            ? "text-black"
                            : "text-black"
                  } flex items-center gap-2 ${isActive && 'border-b-2'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <Link href="/" className="items-center space-x-2 md:flex hidden opacity-0">
          <img
            src={
              pathname === '/products'
                ? "/images/regedit_blue.png"
                : showHeader
                  ? "/images/regedit_black.png"
                  : "/images/regedit_white.png"
            }
            alt="Regedit Informatics"
            className="h-20 rounded-md"
          />
        </Link>

        <button
          className="md:hidden text-white ml-auto"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ?
            <FaAngleUp size={28} color={`${pathname === '/products'
                ? "#123466"
                :
                showHeader
                  ? "#000"
                  :
                  pathname === '/contact'
                    ? "#FFF"
                    : "#FFF"}`} />

            :

            <FaAngleDown size={28} color={`${pathname === '/products'
                ? "#123466"
                :
                showHeader
                  ? "#000"
                  :
                  pathname === '/contact'
                    ? "#FFF"
                    : "#FFF"}`} />
          }


        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-150%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-150%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="w-full bg-white flex flex-col items-center px-6 py-4 md:hidden z-10 border-b border-black/30"
          >
            <div className="flex-1 flex justify-center w-full">
              <nav className="flex flex-col w-full space-y-4">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                  className="text-xl py-2 w-full text-left hover:text-gray-300 transition-colors flex items-center gap-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={`font-bold text-black ${isActive ? 'opacity-100' : 'opacity-0'}`}>|</span>
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
