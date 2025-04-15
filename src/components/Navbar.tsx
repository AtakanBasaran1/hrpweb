'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: 'Anasayfa', href: '/' },
    { label: 'Hakkımızda', href: '/about' },
    { label: 'Ürünlerimiz', href: '/urunlerimiz' },
    { label: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
    { label: 'Medya', href: '/medya' },
    { label: 'İletişim', href: '/iletisim' },
  ];

  return (
    <nav className="fixed top-4 z-50 left-0 right-0 px-4 flex justify-center">
      <div className="w-full max-w-7xl rounded-3xl backdrop-blur-md bg-black/10 border border-white/30 text-white flex items-center px-4 sm:px-6 py-4 overflow-hidden">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Regedit Informatics" className="h-12 rounded-md" />
        </Link>

        {/* Ortada yer alan metinler */}
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full max-w-7xl rounded-3xl backdrop-blur-md bg-black/30 border border-white/10 text-white flex flex-col items-center px-6 py-4 md:hidden">
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
        </div>
      )}
    </nav>
  );
}
