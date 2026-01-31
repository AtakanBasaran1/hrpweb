"use client";

import React from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaTwitter, href: '#', label: 'Twitter' },
        { icon: FaInstagram, href: '#', label: 'Instagram' },
        { icon: FaYoutube, href: '#', label: 'YouTube' },
        { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    ];

    const footerLinks = {
        okul: [
            { label: 'Anasayfa', href: '/' },
            { label: 'Hakkımızda', href: '/about' },
            { label: 'Yönetim Kadrosu', href: '#' }, // Placeholder link
            { label: 'Tarihçe', href: '#' }, // Placeholder link
            { label: 'Stratejik Plan', href: '#' }, // Placeholder link
        ],
        bolumler: [
            { label: 'Elektrik-Elektronik Tekn.', href: '/' }, // Main department page
            { label: 'Bilişim Teknolojileri', href: '#' }, // Placeholder
            { label: 'Makine Teknolojisi', href: '#' }, // Placeholder
            { label: 'Metal Teknolojisi', href: '#' }, // Placeholder
            { label: 'Mobilya ve İç Mekan', href: '#' }, // Placeholder
        ],
        egitim: [
            { label: '9. Sınıf Müfredatı', href: '/sinif-9' },
            { label: '10. Sınıf Müfredatı', href: '/sinif-10' },
            { label: '11. Sınıf Müfredatı', href: '/sinif-11' },
            { label: '12. Sınıf & Staj', href: '/sinif-12' },
            { label: 'Öğrenci Projeleri', href: '/projelerimiz' },
        ]
    };

    return (
        <footer className="relative bg-[#050510] text-gray-300 overflow-hidden font-sans border-t border-white/5">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-2xl">
                                    H
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-white leading-tight">Halil Rıfat Paşa</h2>
                                    <p className="text-xs text-blue-400 font-bold tracking-wider uppercase">Mesleki ve Teknik Anadolu Lisesi</p>
                                </div>
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400 pr-4">
                            "Meslek Lisesi, Memleket Meselesi" düsturuyla, çağın gerektirdiği teknolojik donanıma sahip, ahlaklı ve nitelikli bireyler yetiştirmeyi hedefliyoruz.
                        </p>
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-transparent transition-all duration-300"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1: Okul */}
                    <div className="lg:col-span-2 lg:col-start-6 space-y-6">
                        <h4 className="text-white font-bold text-lg tracking-wide">Okulumuz</h4>
                        <ul className="space-y-3">
                            {footerLinks.okul.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Column 2: Eğitim */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-white font-bold text-lg tracking-wide">Eğitim & Bölümler</h4>
                        <ul className="space-y-3">
                            {footerLinks.egitim.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3 space-y-6">
                        <h4 className="text-white font-bold text-lg tracking-wide">İletişim</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-4 text-sm text-gray-400 group">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors">
                                    <HiOutlineLocationMarker size={16} />
                                </div>
                                <span className="leading-relaxed">
                                    Halil Rıfat Paşa Mah. Yüzer Havuz Sk. No: 1<br />Şişli / İstanbul
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-sm text-gray-400 group">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors">
                                    <HiOutlinePhone size={16} />
                                </div>
                                <span className="hover:text-white transition-colors">
                                    0 (212) 220 38 47
                                </span>
                            </li>
                            <li className="flex items-center gap-4 text-sm text-gray-400 group">
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors">
                                    <HiOutlineMail size={16} />
                                </div>
                                <a href="mailto:info@halilrifatpasa.meb.k12.tr" className="hover:text-white transition-colors">
                                    info@halilrifatpasa.meb.k12.tr
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-gray-500 font-medium">
                        &copy; {currentYear} Halil Rıfat Paşa Mesleki ve Teknik Anadolu Lisesi. Tüm hakları saklıdır.
                    </p>
                    <div className="flex gap-8 text-xs font-semibold tracking-wider uppercase text-gray-500">
                        <Link href="https://www.meb.gov.tr" target="_blank" className="hover:text-blue-400 transition-colors">MEB</Link>
                        <Link href="https://e-okul.meb.gov.tr" target="_blank" className="hover:text-blue-400 transition-colors">E-Okul</Link>
                        <Link href="#" className="hover:text-blue-400 transition-colors">Kullanım Şartları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}