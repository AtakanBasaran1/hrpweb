'use client';
import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { useSnackbar } from 'notistack';
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function Form() {
    const { enqueueSnackbar } = useSnackbar();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submissionTime, setSubmissionTime] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { name, email, subject, message, phone } = formData;
        if (!name || !email || !subject || !message || !phone) {
            enqueueSnackbar("Lütfen tüm alanları doldurun.", { variant: 'error' });
            return;
        }
        setIsLoading(true);
        const currentTime = new Date().toLocaleString();
        setSubmissionTime(currentTime);
        try {
            await emailjs.send(
                "service_3fj7cmb",
                "template_iuc7iy6",
                {
                    title: formData.subject,
                    name: formData.name,
                    time: currentTime,
                    message: formData.message,
                    email: formData.email,
                    phone: formData.phone,
                },
                "oX09rEWUpbyJHSpoe"
            );
            enqueueSnackbar(`Mesajınız başarıyla gönderildi! Gönderim Zamanı: ${currentTime}`, { variant: 'success' });
            setFormData({ name: "", email: "", subject: "", message: "", phone: "" });
        } catch (error) {
            console.error("Mesaj gönderme hatası:", error);
            enqueueSnackbar("Mesaj gönderilirken bir hata oluştu.", { variant: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 from-[#e0e7ff] via-white to-[#f0f9ff] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Form */}
                    <div className="w-full md:w-2/3 px-6 py-8 sm:p-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-[#123466]">
                                        Adınız Soyadınız
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Adınızı girin"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#123466] focus:border-transparent transition duration-200"
                                        disabled={isLoading}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-[#123466]">
                                        Telefon Numarası
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Telefon numarası girin"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#123466] focus:border-transparent transition duration-200"
                                        disabled={isLoading}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="block text-sm font-medium text-[#123466]">
                                    E-posta Adresiniz
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="E-posta adresinizi girin"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#123466] focus:border-transparent transition duration-200"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="block text-sm font-medium text-[#123466]">
                                    Konu
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Konu girin"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#123466] focus:border-transparent transition duration-200"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-[#123466]">
                                    Açıklama
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Mesajınızı yazın"
                                    rows={6}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#123466] focus:border-transparent transition duration-200 resize-none"
                                    disabled={isLoading}
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="w-full md:w-auto px-12 py-4 bg-[#123466] drop-shadow text-white text-lg font-medium rounded-xl hover:bg-blue-900 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                                            Gönderiliyor...
                                        </>
                                    ) : (
                                        'Gönder'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* Ofis Bilgileri */}
                    <div className="w-full md:w-1/3 bg-gradient-to-b from-[#123466]/90 to-blue-400/80 text-white flex flex-col justify-center p-8 gap-8">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                <MdLocationOn className="text-3xl text-white/90" />
                                Ofisimiz
                            </h3>
                            <p className="text-base font-medium pl-9">
                                Topselvi Mah. Arkoz Sk. No: 6 İç Kapı No:1<br />
                                KARTAL / İSTANBUL
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                <MdPhone className="text-2xl text-white/90" />
                                Telefon
                            </h3>
                            <a href="tel:02162350035" className="text-base font-medium pl-9 hover:underline">
                                0 216 235 00 35
                            </a>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                                <MdEmail className="text-2xl text-white/90" />
                                E-Mail
                            </h3>
                            <a href="mailto:info@regeditpos.com" className="text-base font-medium pl-9 hover:underline break-all">
                                info@regeditpos.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}