'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Hakkımızda', href: '/about' },
    { label: 'Ürünlerimiz', href: '/products' },
    { label: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
    { label: 'Medya', href: '/medya' },
    { label: 'İletişim', href: '/iletisim' },
  ];

  // Menü dışına tıklanınca menüyü kapat
  const menuRef = useRef<HTMLDivElement>(null); // ✅ doğru tip

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
      <div className="w-full backdrop-blur-md bg-white border-b border-black/30 text-white flex items-center px-8 md:px-20 py-2 overflow-hidden self-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/regedit_blue.png" alt="Regedit Informatics" className="h-12 rounded-md" />
        </Link>

        <div className="flex-1 flex justify-center z-50">
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href} 
                  className={`navbar-text hover:text-gray-300 transition-colors text-black flex items-center gap-2 ${isActive && 'border-b-2 border-black'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        <button
          className="md:hidden text-white ml-auto"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <FaAngleUp size={28} color="#000" /> : <FaAngleDown size={28} color="#000" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: '-150%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-150%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="w-full bg-white flex flex-col items-center px-6 py-4 md:hidden -z-10 border-b border-black/30"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 w-full text-left hover:text-gray-300 transition-colors flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <span className={`font-bold text-black ${isActive ? 'opacity-100' : 'opacity-0'}`}>|</span> 
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
