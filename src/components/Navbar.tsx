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
    } else {
      document.body.style.overflow = 'unset';
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
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[990] md:hidden flex flex-col pt-28 px-6 bg-white"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block p-4 rounded-2xl text-2xl font-bold transition-all border text-gray-900 bg-gray-50 border-gray-100"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto mb-10 text-center">
              <p className="text-sm font-medium text-gray-400">HRP MTAL © {new Date().getFullYear()}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}