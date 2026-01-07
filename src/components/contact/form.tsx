"use client";

import React, { useState, useRef } from 'react';
import emailjs from "emailjs-com";
import { useSnackbar } from 'notistack';
import { MdLocationOn, MdPhone, MdEmail, MdSupportAgent, MdRocketLaunch } from "react-icons/md";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import ReCAPTCHA from "react-google-recaptcha";

/**
 * RegeditPos - Premium Contact Center
 * Fokus: Hatasız ReCAPTCHA Entegrasyonu & High-End UI
 */
export default function Form() {
    const { isDarkMode } = useTheme();
    const { enqueueSnackbar } = useSnackbar();
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    
    const [isLoading, setIsLoading] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "phone") {
            const cleaned = value.replace(/\D/g, '').slice(0, 11);
            setFormData(prev => ({ ...prev, [name]: cleaned }));
            return;
        }
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!captchaToken) {
            enqueueSnackbar("Lütfen güvenlik doğrulamasını tamamlayın.", { variant: 'info' });
            return;
        }

        const { name, email, subject, message, phone } = formData;
        if (!name || !email || !subject || !message || !phone) {
            enqueueSnackbar("Tüm alanları doldurmanız gerekmektedir.", { variant: 'warning' });
            return;
        }

        if (!validateEmail(email)) {
            enqueueSnackbar("Geçerli bir e-posta adresi giriniz.", { variant: 'error' });
            return;
        }

        setIsLoading(true);
        try {
            await emailjs.send(
                "service_3fj7cmb",
                "template_iuc7iy6",
                { ...formData, time: new Date().toLocaleString() },
                "oX09rEWUpbyJHSpoe"
            );
            enqueueSnackbar("Mesajınız başarıyla iletildi.", { variant: 'success' });
            setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
            recaptchaRef.current?.reset();
            setCaptchaToken(null);
        } catch (error) {
            enqueueSnackbar("Bir hata oluştu, lütfen tekrar deneyin.", { variant: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className={`relative py-32 px-6 transition-colors duration-1000 ${isDarkMode ? 'bg-[#020202]' : 'bg-[#fafafa]'}`}>
            
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* --- LEFT SIDE: BRANDING & INFO --- */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <motion.span 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-blue-600 font-black tracking-[0.5em] text-[10px] uppercase block"
                            >
                                İletişim & Destek
                            </motion.span>
                            <h2 className={`text-6xl md:text-8xl font-black tracking-tighter  ${isDarkMode ? 'text-white' : 'text-neutral-950'}`}>
                                Bize <br />Ulaşın
                            </h2>
                            <p className={`text-lg font-light leading-relaxed max-w-md ${isDarkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
                                Operasyonel süreçlerinizde teknolojik bir dönüşüm başlatmak için uzman ekibimizle iletişime geçin.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <ContactBento 
                                icon={<MdLocationOn size={24} />}
                                label="Merkez Ofis"
                                value="Topselvi Mah. Arkoz Sk. No: 6 İç Kapı No:1
KARTAL / İSTANBUL"
                                isDarkMode={isDarkMode}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <ContactBento 
                                    icon={<MdPhone size={20} />}
                                    label="Telefon"
                                    value="0216 235 00 35"
                                    isDarkMode={isDarkMode}
                                    href="tel:02162350035"
                                />
                                <ContactBento 
                                    icon={<MdEmail size={20} />}
                                    label="E-Posta"
                                    value="info@regeditpos.com"
                                    isDarkMode={isDarkMode}
                                    href="mailto:info@regeditpos.com"
                                />
                            </div>
                        </div>

                        <div className={`p-8 rounded-[2rem] border transition-all duration-500 flex items-center gap-6 ${isDarkMode ? 'bg-blue-600/5 border-blue-500/20' : 'bg-blue-50 border-blue-100'}`}>
                            <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-600/20">
                                <MdSupportAgent size={28} />
                            </div>
                            <div>
                                <h4 className={`text-xs font-black uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>7/24 Aktif Destek</h4>
                                <p className="text-[11px] opacity-60">Teknik ekibimiz her zaman bir tık uzağınızda.</p>
                            </div>
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: ARCHITECTURAL FORM --- */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={`lg:col-span-7 rounded-[3rem] p-8 md:p-16 border ${isDarkMode ? 'bg-[#080808] border-white/5' : 'bg-white border-neutral-200 shadow-2xl shadow-neutral-200/50'}`}
                    >
                        <form onSubmit={handleSubmit} className="space-y-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <FloatingInput label="İSİM SOYİSİM" name="name" value={formData.name} onChange={handleChange} isDarkMode={isDarkMode} />
                                <FloatingInput label="TELEFON" name="phone" value={formData.phone} onChange={handleChange} isDarkMode={isDarkMode} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <FloatingInput label="E-POSTA" name="email" type="email" value={formData.email} onChange={handleChange} isDarkMode={isDarkMode} />
                                <FloatingInput label="KONU" name="subject" value={formData.subject} onChange={handleChange} isDarkMode={isDarkMode} />
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase ml-2">Mesajınız</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className={`w-full p-6 rounded-3xl border-2 outline-none transition-all duration-500 resize-none font-medium text-sm
                                        ${isDarkMode ? 'bg-white/[0.02] border-white/5 text-white focus:border-blue-500/40' : 'bg-neutral-50 border-neutral-100 focus:border-blue-600 focus:bg-white'}`}
                                    placeholder="Talebinizi buraya detaylandırın..."
                                />
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6">
                                <div className="  transition-all duration-500">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey="6Lf4CjwsAAAAACckVfm7XlkDrMjiGbjPdKsWIxvv"
                                        onChange={(token) => setCaptchaToken(token)}
                                        theme={isDarkMode ? "dark" : "light"}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading || !captchaToken}
                                    className={`group cursor-pointer h-20 w-full md:w-64 rounded-3xl font-black tracking-[0.3em] text-[14px] uppercase transition-all duration-500 flex items-center justify-center gap-3
                                        ${isDarkMode 
                                            ? 'bg-white text-2xl text-black hover:bg-blue-600 hover:text-white disabled:bg-neutral-900 disabled:text-neutral-700' 
                                            : 'bg-neutral-950 text-white hover:bg-blue-600 disabled:bg-neutral-200 disabled:text-neutral-400'}`}
                                >
                                    {isLoading ? "İşleniyor..." : "Gönder"}
                                   
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// PREMIUM BENTO HELPER
function ContactBento({ icon, label, value, isDarkMode, href }: any) {
    const Card = (
        <div className={`p-6 rounded-[2rem] border transition-all duration-500 group
            ${isDarkMode ? 'bg-white/[0.02] border-white/5 hover:border-blue-500/40' : 'bg-white border-neutral-100 shadow-sm hover:shadow-xl'}`}>
            <div className="flex justify-between items-start mb-6">
                <div className="text-blue-600">{icon}</div>
                <HiOutlineArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-600" />
            </div>
            <p className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600 mb-1">{label}</p>
            <p className={`text-sm font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-neutral-900'}`}>{value}</p>
        </div>
    );
    return href ? <a href={href}>{Card}</a> : Card;
}

// MINIMAL FLOATING INPUT
function FloatingInput({ label, isDarkMode, ...props }: any) {
    return (
        <div className="relative group flex flex-col gap-3">
            <label className={`text-[10px] font-black tracking-[0.3em] ml-2 transition-colors duration-300
                ${isDarkMode ? 'text-neutral-600 group-focus-within:text-blue-500' : 'text-neutral-400 group-focus-within:text-blue-600'}`}>
                {label}
            </label>
            <input 
                {...props}
                className={`w-full px-6 py-5 rounded-2xl border-2 outline-none transition-all duration-500 font-bold text-sm
                    ${isDarkMode ? 'bg-white/[0.02] border-white/5 text-white focus:border-blue-500/40' : 'bg-neutral-50 border-neutral-100 focus:border-blue-600 focus:bg-white'}`}
            />
        </div>
    );
}