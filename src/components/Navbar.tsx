'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Hakkımızda', href: '/about' },
    { label: 'Ürünlerimiz', href: '/products' },
    { label: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
    { label: 'Medya', href: '/medya' },
    { label: 'İletişim', href: '/iletisim' },
  ];

  return (
    <nav className="fixed top-4 z-50 left-0 right-0 px-4 flex flex-col gap-2 justify-center">
      <div className="w-full md:max-w-7xl rounded-3xl backdrop-blur-md bg-black/10 border border-white/30 text-white flex items-center px-4 sm:px-6 py-4 overflow-hidden self-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Regedit Informatics" className="h-12 rounded-md" />
        </Link>
 
        <div className="flex-1 flex justify-center">
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="navbar-text hover:text-gray-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
 
        <button
          className="md:hidden text-white ml-auto"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
 
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="w-full rounded-3xl backdrop-blur-md bg-black/20 border text-white flex flex-col items-center px-6 py-4 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 w-full text-center hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
