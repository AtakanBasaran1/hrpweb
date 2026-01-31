"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactInfo({ centered = false }: { centered?: boolean }) {

    // Default vertical layout, but flexible
    const cards = [
        {
            icon: HiOutlinePhone,
            title: "Telefon",
            text: "0 (212) 220 38 47",
            sub: "Pzt - Cum: 09:00 - 17:00",
            color: "text-emerald-500",
            bg: "bg-emerald-50",
            href: "tel:+902122203847"
        },
        {
            icon: HiOutlineMail,
            title: "E-Posta",
            text: "info@halilrifatpasa.meb.k12.tr",
            sub: "7/24 Mail Gönderebilirsiniz",
            color: "text-blue-500",
            bg: "bg-blue-50",
            href: "mailto:info@halilrifatpasa.meb.k12.tr"
        },
        {
            icon: HiOutlineLocationMarker,
            title: "Adres",
            text: "Halil Rıfat Paşa Mh. Yüzer Havuz Sk.",
            sub: "Şişli / İstanbul",
            color: "text-indigo-500",
            bg: "bg-indigo-50",
            action: "Yol Tarifi Al",
            href: "https://maps.google.com"
        }
    ];

    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto`}>
            {cards.map((card, idx) => (
                <motion.a
                    key={idx}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
                >
                    <div className={`w-16 h-16 ${card.bg} ${card.color} rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform`}>
                        <card.icon />
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
                    <p className="text-slate-600 font-medium mb-1 break-words w-full px-2">{card.text}</p>
                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">{card.sub}</span>

                    {/* Hover Overlay */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </motion.a>
            ))}
        </div>
    );
}
