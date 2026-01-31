"use client";

import React, { useState, useRef } from 'react';
import emailjs from "emailjs-com";
import { useSnackbar } from 'notistack';
import { motion } from 'framer-motion';
import ReCAPTCHA from "react-google-recaptcha";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";

export default function ContactForm() {
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

        // Note: ReCAPTCHA check skipped for demo if token missing, normally enable this
        // if (!captchaToken) {
        //     enqueueSnackbar("Lütfen güvenlik doğrulamasını tamamlayın.", { variant: 'info' });
        //     return;
        // }

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
            enqueueSnackbar("Mesajınız başarıyla iletildi. En kısa sürede dönüş yapacağız.", { variant: 'success' });
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
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
        >
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bize Yazın</h3>
                <p className="text-gray-500 text-sm">Sorularınız için aşağıdaki formu doldurabilirsiniz.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Ad Soyad</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
                            placeholder="Adınız Soyadınız"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Telefon</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
                            placeholder="05XX XXX XX XX"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">E-Posta</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium"
                        placeholder="ornek@email.com"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Konu</label>
                    <select
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium appearance-none"
                    >
                        <option value="">Seçiniz</option>
                        <option value="Ogrenci Isleri">Öğrenci İşleri</option>
                        <option value="Kayit Bilgisi">Kayıt Bilgisi</option>
                        <option value="Proje Isbirligi">Proje İşbirliği</option>
                        <option value="Diger">Diğer</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Mesajınız</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium resize-none"
                        placeholder="Mesajınızı buraya yazınız..."
                    />
                </div>

                <div className="pt-2">
                    {/* <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="YOUR_RECAPTCHA_SITE_KEY" 
                        onChange={setCaptchaToken}
                        theme="light"
                    /> */}
                    <div className="text-xs text-gray-400 mb-4 mt-2">
                        * Kişisel verileriniz KVKK kapsamında korunmaktadır.
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <FaSpinner className="animate-spin" /> Gönderiliyor...
                            </>
                        ) : (
                            <>
                                <FaPaperPlane /> Mesajı Gönder
                            </>
                        )}
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
