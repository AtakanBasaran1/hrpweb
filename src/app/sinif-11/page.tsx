'use client';

import { motion } from 'framer-motion';
import { FaCogs, FaRobot, FaServer, FaMicrochip } from 'react-icons/fa';
import Image from 'next/image';

const modules = [
    {
        icon: FaCogs,
        title: 'Endüstriyel Kontrol ve Arıza Analizi',
        description: 'Fabrika otomasyonunda kullanılan motorlar, sensörler ve kumanda tekniklerinin öğretildiği derstir.',
        topics: ['Asenkron Motor Kumanda Teknikleri', 'Sensörler ve Algılayıcılar', 'Kontaktör ve Röle Sistemleri', 'Sistem Arıza Takibi']
    },
    {
        icon: FaMicrochip,
        title: 'Arduino ve Mikrodenetleyici Programlama',
        description: 'Öğrencilerin algoritma mantığını kavrayarak sensörler ve motorlar ile gerçek hayat projeleri geliştirdiği uygulamalı eğitim.',
        topics: [
            'Arduino IDE ve C++ Temelleri',
            'Dijital ve Analog Giriş/Çıkış Kontrolü',
            'Sensör Entegrasyonu (Ultrasonik, Sıcaklık, Gaz)',
            'Motor Sürücü Devreleri ve Robotik Uygulamalar',
            'LCD Ekran ve Haberleşme Protokolleri (I2C, UART)'
        ]
    },
    {
        icon: FaServer,
        title: 'Pano Tasarım ve Montajı',
        description: 'Endüstriyel standartlara uygun elektrik panolarının projelendirilmesi ve montajı.',
        topics: ['Otomasyon Panoları', 'Klemens ve Kablolama Standartları', 'Bara Sistemleri', 'Pano İçi Yerleşim Planı']
    },
    {
        icon: FaRobot,
        title: 'Dijital Elektronik',
        description: 'Sayısal sistemlerin mantığı, lojik kapılar ve dijital devre tasarımı.',
        topics: ['Lojik Kapılar (AND, OR, NOT)', 'Flip-Floplar ve Sayıcılar', 'Kaydediciler', 'ADC/DAC Dönüştürücüler']
    }
];

export default function Sinif11Page() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 pt-24 pb-16 px-4 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                        İleri Seviye ve Otomasyon
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                        11. Sınıf: Arduino ve Otomasyon
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Endüstrinin kalbi olan otomasyon sistemleri, PLC, Arduino ile robotik kodlama ve pano montajı konularında uzmanlaşma başlar.
                    </p>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-16 shadow-2xl"
                >
                    <Image
                        src="/images/WhatsApp Image 2026-01-23 at 14.21.07.jpeg" // Updated to match 9. Sınıf image
                        alt="11. Sınıf PLC ve Otomasyon"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <p className="text-white text-lg font-medium">Endüstriyel otomasyon laboratuvarımızda PLC ve Arduino uygulamaları.</p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {modules.map((module, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                        >
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl mb-6">
                                <module.icon />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">{module.title}</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {module.description}
                            </p>

                            <div className="bg-gray-50 rounded-xl p-4">
                                <h4 className="text-sm font-bold uppercase text-gray-500 mb-3 tracking-wider">
                                    Ders İçeriği
                                </h4>
                                <ul className="space-y-2">
                                    {module.topics.map((topic, i) => (
                                        <li key={i} className="flex items-center text-gray-700 text-sm">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}