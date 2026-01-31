'use client';

import { motion } from 'framer-motion';
import { FaTools, FaRulerCombined, FaHardHat, FaPencilRuler } from 'react-icons/fa';
import Image from 'next/image';

const modules = [
    {
        icon: FaTools,
        title: 'Temel Elektrik-Elektronik Atölyesi',
        description: 'Öğrencilerin el aletlerini tanıdığı, kablo çeşitlerini öğrendiği ve temel devre bağlantılarını uyguladığı derstir.',
        topics: ['El aletleri kullanımı', 'Kablo soyma ve ek yapma', 'Lehimleme teknikleri', 'Buton ve zil tesisatları']
    },
    {
        icon: FaRulerCombined,
        title: 'Ölçme Teknikleri',
        description: 'Elektriksel ve fiziksel büyüklüklerin doğru ölçülmesi ve raporlanması eğitimi verilir.',
        topics: ['Avometre kullanımı', 'Direnç, voltaj ve akım ölçümü', 'Kumpas ve mikrometre kullanımı', 'Osiloskop tanıtımı']
    },
    {
        icon: FaHardHat,
        title: 'İş Sağlığı ve Güvenliği',
        description: 'Atölye ortamında güvenli çalışma prensipleri ve kişisel koruyucu donanımların önemi.',
        topics: ['Atölye kuralları', 'Kişisel koruyucu donanımlar', 'Acil durum prosedürleri', 'İlk yardım temelleri']
    },
    {
        icon: FaPencilRuler,
        title: 'Mesleki Gelişim',
        description: 'Meslek ahlakı, ahilik kültürü ve temel iletişim becerilerinin kazandırıldığı ders.',
        topics: ['İletişim teknikleri', 'Meslek ahlakı', 'Girişimcilik', 'Proje hazırlama temelleri']
    }
];

export default function Sinif9Page() {
    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 pt-24 pb-16 px-4 transition-colors duration-300">
            <div className="container mx-auto max-w-6xl">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                        Başlangıç Seviyesi
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-500">
                        9. Sınıf: Mesleğe İlk Adım
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Elektrik-Elektronik dünyasına giriş yaptığımız bu yılda, öğrencilerimiz atölye kültürünü, temel el becerilerini ve iş güvenliği disiplinini kazanırlar.
                    </p>
                </motion.div>

                {/* Hero Image / Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-16 shadow-2xl"
                >
                    <Image
                        src="/images/WhatsApp Image 2026-01-23 at 14.21.07.jpeg" // Using an existing image
                        alt="9. Sınıf Atölye Çalışması"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                        <p className="text-white text-lg font-medium">Öğrencilerimiz temel devre uygulamalarını atöly ortamında deneyimlerken.</p>
                    </div>
                </motion.div>

                {/* Modules Grid */}
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
