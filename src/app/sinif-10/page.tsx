'use client';

import { motion } from 'framer-motion';
import { FaLaptopCode, FaMicrochip, FaDraftingCompass, FaBolt } from 'react-icons/fa';
import Image from 'next/image';

const modules = [
    {
        icon: FaBolt,
        title: 'Elektrik-Elektronik Esasları',
        description: 'Elektriğin temel kanunları, doğru ve alternatif akım devre analizleri konularının işlendiği teorik ve uygulamalı derstir.',
        topics: ['Ohm ve Kirchoff Kanunları', 'Manyetizma ve Elektromanyetizma', 'Doğru Akım (DC) Devre Analizi', 'Alternatif Akım (AC) Esasları']
    },
    {
        icon: FaMicrochip,
        title: 'Elektronik Devreler ve Uygulamaları',
        description: 'Yarı iletken devre elemanlarının yapısı, çalışması ve elektronik devrelerdeki kullanım alanları.',
        topics: ['Diyotlar ve Doğrultmaç Devreleri', 'Transistörler (BJT, FET) ve Anahtarlama', 'Güç Kaynağı Tasarımı', 'Sensörler ve Transdüserler']
    },
    {
        icon: FaDraftingCompass,
        title: 'Teknik Resim ve Çizim',
        description: 'Mühendislik dilinin temeli olan teknik resim standartları ve devre şeması okuma/çizme becerisi.',
        topics: ['Görünüş Çıkarma', 'Elektrik Sembolleri ve Standartları', 'Tesisat Proje Çizimi', 'Ölçeklendirme']
    },
    {
        icon: FaLaptopCode,
        title: 'Bilgisayarla Devre Dizaynı',
        description: 'Simülasyon programları kullanarak devre tasarımı ve baskı devre (PCB) çizimi eğitimi.',
        topics: ['Proteus / ISIS ile Simülasyon', 'ARES ile PCB Çizimi', 'Baskı Devre Çıkarma Yöntemleri', 'Elektronik Atölye Uygulamaları']
    }
];

export default function Sinif10Page() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 pt-24 pb-16 px-4 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                        Temel Uzmanlaşma
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-500">
                        10. Sınıf: Elektronik ve Tasarım
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Öğrencilerimiz bu yıl elektronik dünyasının derinliklerine iner, devre elemanlarını tanır ve bilgisayar destekli tasarımlar yapmaya başlarlar.
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
                        alt="10. Sınıf Elektronik Çalışması"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <p className="text-white text-lg font-medium">Baskı devre (PCB) tasarımı ve montajı uygulamaları.</p>
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
