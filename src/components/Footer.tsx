"use client";

import React from 'react';
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    const navItems = [
        { label: 'Anasayfa', href: '/' },
        { label: 'Hakkımızda', href: '/about' },
        { label: 'Ürünlerimiz', href: '/products' },
        { label: 'Örnek Projeler', href: '/services' },
        { label: 'Referanslar', href: '/referances' },
        { label: 'İletişim', href: '/contact' },
    ];

    return (
        <footer className="relative bg-[#0A0046] text-white overflow-hidden">
            {/* Dekoratif Arka Plan Işığı */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
            <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8">
                    
                    {/* MARKA BÖLÜMÜ */}
                    <div className="space-y-8 max-w-sm">
                        <motion.img 
                            whileHover={{ opacity: 0.8 }}
                            src="/images/regedit_white.png" 
                            alt="Regedit POS Logo" 
                            className="w-48 h-auto" 
                        />
                        <p className="text-blue-100/60 text-sm leading-relaxed font-light">
                            Restoran teknolojilerinde 15 yıllık tecrübe ile geleceğin ödeme ve yönetim sistemlerini bugünden inşa ediyoruz.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/company/regeditpos/' },
                                { icon: <FaInstagram />, href: 'https://www.instagram.com/regeditposs/' }
                            ].map((social, i) => (
                                <a 
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#0A0046] hover:scale-110"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* HIZLI LİNKLER */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Navigasyon</h4>
                            <ul className="flex flex-col gap-4">
                                {navItems.slice(0, 3).map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} className="text-sm font-medium text-blue-100/70 hover:text-white transition-colors duration-300">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Kurumsal</h4>
                            <ul className="flex flex-col gap-4">
                                {navItems.slice(3).map((item) => (
                                    <li key={item.href}>
                                        <Link href={item.href} className="text-sm font-medium text-blue-100/70 hover:text-white transition-colors duration-300">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden sm:block space-y-6">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400">Destek</h4>
                            <div className="flex flex-col gap-4">
                                <a href="mailto:destek@regeditpos.com" className="flex items-center gap-2 text-sm text-blue-100/70 hover:text-white transition-colors">
                                    <HiOutlineMail size={18} />
                                    <span>Mail Gönder</span>
                                </a>
                                <p className="text-[11px] text-blue-100/40 leading-tight">7/24 Teknik Destek <br />Hattı Aktiftir.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ALT BİLGİ VE ADRES */}
                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        className="group flex items-center gap-4 text-xs md:text-sm text-blue-100/50 hover:text-white transition-all duration-300"
                    >
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                            <HiOutlineLocationMarker size={16} />
                        </div>
                        <span className="max-w-[300px] md:max-w-none">
                            Topselvi Mah. Arkoz Sk. No: 6 İç Kapı No:1 Kartal / İstanbul
                        </span>
                    </a>

                    <div className="flex flex-col items-center md:items-end gap-2">
                        <p className="text-xs font-bold tracking-widest text-blue-100/30">
                            REGEDIT POS © {new Date().getFullYear()}
                        </p>
                        <div className="flex gap-6 text-[10px] uppercase tracking-widest text-blue-100/20">
                            <span className="hover:text-blue-400 cursor-pointer transition-colors">KVKK</span>
                            <span className="hover:text-blue-400 cursor-pointer transition-colors">Çerez Politikası</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}