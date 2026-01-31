'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaProjectDiagram, FaIndustry } from 'react-icons/fa';
import Image from 'next/image';

const modules = [
    {
        icon: FaBriefcase,
        title: 'İşletmelerde Beceri Eğitimi (Staj)',
        description: 'Öğrencilerimiz haftanın 3 günü sektörün önde gelen işletmelerinde staj yaparak gerçek iş deneyimi kazanırlar.',
        topics: ['Sektörel Deneyim', 'İş Ahlakı ve Disiplini', 'Uygulamalı Eğitim', 'Profesyonel Ağ Oluşturma']
    },
    {
        icon: FaProjectDiagram,
        title: 'İleri Mikrodenetleyici Uygulamaları',
        description: 'Karmaşık problemlerin çözümü için ileri seviye sensörler ve kablosuz haberleşme modülleri ile proje geliştirme.',
        topics: ['IoT (Nesnelerin İnterneti)', 'Wi-Fi ve Bluetooth Modülleri', 'Otonom Robot Projeleri', 'Mobil Uygulama Entegrasyonu']
    },
    {
        icon: FaIndustry,
        title: 'Endüstriyel Sistemler',
        description: 'PLC, SCADA ve Operatör Panelleri (HMI) gibi endüstriyel kontrol sistemlerinin programlanması.',
        topics: ['İleri PLC Programlama', 'HMI Dokunmatik Panel Tasarımı', 'Servo Motor Kontrolü', 'Otomasyon Hattı Simülasyonu']
    },
    {
        icon: FaGraduationCap,
        title: 'Bitirme Projesi',
        description: '4 yıllık eğitimin sonunda, öğrencinin tüm bilgi birikimini kullanarak ortaya koyduğu kapsamlı mezuniyet projesi.',
        topics: ['Proje Yönetimi', 'Raporlama ve Sunum Teknikleri', 'Ürün Geliştirme Süreci', 'Maliyet Analizi']
    }
];

export default function Sinif12Page() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 pt-24 pb-16 px-4 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                        Mezuniyet ve Kariyer
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-500">
                        12. Sınıf: Sektöre Hazırlık
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Eğitimin son yılında öğrencilerimiz staj ile iş hayatına adım atar, ileri teknoloji projeleri ile yetkinliklerini kanıtlar ve mezuniyete hazırlanır.
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
                        src="/images/akilliev.jpg" // Using an existing image related to smart projects/capstone
                        alt="12. Sınıf Proje ve Staj"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <p className="text-white text-lg font-medium">Akıllı ev sistemleri ve IoT tabanlı bitirme projeleri.</p>
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
