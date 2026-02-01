'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes, FaGraduationCap } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Anasayfa', href: '/' },
    { label: '9. Sınıf', href: '/sinif-9' },
    { label: '10. Sınıf', href: '/sinif-10' },
    { label: '11. Sınıf', href: '/sinif-11' },
    { label: '12. Sınıf', href: '/sinif-12' },
    { label: 'Projeler', href: '/#projeler' },
    { label: 'İletişim', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <nav className={`relative flex items-center justify-between px-6 py-3 transition-all duration-500 rounded-full
          ${scrolled || isOpen
            ? 'bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg'
            : 'bg-transparent border border-transparent'}`}>

          {/* LOGO */}
          <Link href="/" className="relative z-[1001] flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
              <FaGraduationCap size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tighter leading-none text-white">
                HRP<span className="text-blue-600">MTAL</span>
              </span>
              <span className="text-[0.6rem] font-bold uppercase tracking-widest text-gray-500">
                Elektrik Elektronik
              </span>
            </div>
          </Link>

          {/* PC MENU */}
          <div className="hidden md:flex items-center gap-1 bg-white/50 p-1.5 rounded-full border border-white/20 backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300
                    ${isActive
                      ? 'text-blue-600 bg-white shadow-sm'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-white/40'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-3 relative z-[1001]">
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen
                ? <FaTimes size={18} className="text-black" />
                : <FaBars size={18} className="text-black" />
              }
            </button>
          </div>
        </nav>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[9999] md:hidden flex flex-col bg-white h-[100dvh]"
          >
            {/* MENU HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white/50 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white shadow-md">
                  <FaGraduationCap size={16} />
                </div>
                <span className="text-lg font-black tracking-tighter leading-none text-gray-900">
                  HRP<span className="text-blue-600">MTAL</span>
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-red-50 hover:text-red-500 transition-colors border border-gray-100"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex-1 overflow-y-auto py-8 px-6">
              <div className="flex flex-col gap-3">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (idx * 0.05) }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between p-4 rounded-xl text-lg font-semibold text-gray-800 transition-all hover:bg-blue-50 hover:text-blue-600 group"
                    >
                      {item.label}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 text-sm">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* FOOTER */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <div className="flex flex-col gap-2 text-center">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">İletişim</p>
                <p className="text-sm text-gray-600">info@hrpmtal.k12.tr</p>
                <p className="text-sm text-gray-600">+90 (212) 123 45 67</p>
                <div className="mt-4 pt-4 border-t border-gray-200/50">
                  <p className="text-[10px] text-gray-400">© {new Date().getFullYear()} HRP MTAL Elektrik Elektronik</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}