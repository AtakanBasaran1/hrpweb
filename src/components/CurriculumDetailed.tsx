'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBookOpen, FaMicrochip, FaRobot, FaIndustry } from 'react-icons/fa';

const curriculum = [
    {
        grade: 9,
        icon: FaBookOpen,
        title: 'Mesleğe Giriş ve Temel Beceriler',
        description: '9. Sınıf, öğrencilerimizin meslekle tanıştığı ve temel disiplinleri kazandığı yıldır. İş güvenliği kültürü ve el becerileri ön plandadır.',
        details: [
            'Temel Elektrik-Elektronik Atölyesi: El aletleri kullanımı, kablo çeşitleri ve ek yapma teknikleri.',
            'Ölçme Teknikleri: Avometre, Ampermetre, Voltmetre kullanımı.',
            'Temel Devre Uygulamaları: Seri, paralel ve karışık devrelerin kurulumu ve analizi.',
            'İş Sağlığı ve Güvenliği: Atölye kuralları ve güvenlik standartları.'
        ],
        skills: ['El Becerisi', 'Devre Analizi', 'Ölçme Aletleri Kullanımı', 'Güvenlik Bilinci']
    },
    {
        grade: 10,
        icon: FaMicrochip,
        title: 'Elektronik ve Devre Tasarımı',
        description: 'Öğrencilerimiz analog ve dijital elektroniğin temellerini öğrenir, bilgisayar destekli tasarım programlarını kullanmaya başlar.',
        details: [
            'Elektrik-Elektronik Esasları: Ohm yasası, Kirchoff kanunları, Manyetizma.',
            'Teknik Resim: Devre şeması çizimi ve standart semboller.',
            'Bilgisayarla Devre Dizaynı: Proteus/ISIS gibi yazılımlar ile simülasyon ve PCB çizimi.',
            'Elektronik Atölyesi: Diyot, transistör, FET gibi yarı iletken elemanların incelenmesi ve uygulamaları.'
        ],
        skills: ['Devre Simülasyonu', 'PCB Tasarımı', 'Analog Elektronik', 'Lehimleme Teknikleri']
    },
    {
        grade: 11,
        icon: FaIndustry,
        title: 'Otomasyon ve Arduino',
        description: 'Uzmanlaşmanın başladığı bu seviyede, endüstriyel otomasyon sistemleri ve Arduino ile mikrodenetleyici programlama üzerine yoğunlaşılır.',
        details: [
            'Arduino ile Programlama: C++ temelli kodlama, sensör kullanımı ve robotik projeler.',
            'Endüstriyel Kontrol: Kontaktörler, röleler ve asenkron motor kumanda teknikleri.',
            'Dijital Elektronik: Mantık kapıları, flip-floplar, sayıcılar ve kaydediciler.',
            'Pano Montörlüğü: Elektrik panolarının tasarımı ve montaj standartları.'
        ],
        skills: ['Arduino Kodlama', 'PLC Temelleri', 'Motor Kontrol', 'Sensör Entegrasyonu']
    },
    {
        grade: 12,
        icon: FaRobot,
        title: 'Profesyonellik ve Projeler',
        description: 'Mezuniyet yılı olan 12. sınıfta, öğrencilerimiz staj ile iş hayatını tanır ve bitirme projeleri ile yetkinliklerini kanıtlar.',
        details: [
            'İşletmelerde Beceri Eğitimi: Haftanın 3 günü sektörde staj.',
            'Robotik ve Kodlama: İleri seviye sensör uygulamaları ve otonom robotlar.',
            'Akıllı Ev Sistemleri: IoT tabanlı bina otomasyonu.',
            'Bitirme Projesi: Yıl boyunca geliştirilen kapsamlı bir ürün veya sistem.'
        ],
        skills: ['Sektörel Deneyim', 'Proje Yönetimi', 'Sorun Çözme', 'Takım Çalışması']
    }
];

export default function CurriculumDetailed() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="egitim" className="py-24 bg-gray-50 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600 mb-6">
                        Eğitim Müfredatı
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        4 yıllık kapsamlı eğitim programımızla öğrencilerimizi hem akademik hem de mesleki hayata en iyi şekilde hazırlıyoruz.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                    {/* Tabs Navigation */}
                    <div className="lg:w-1/3 flex flex-col gap-4">
                        {curriculum.map((item, index) => (
                            <button
                                key={item.grade}
                                onClick={() => setActiveTab(index)}
                                className={`flex items-center p-6 rounded-2xl text-left transition-all duration-300 border-2
                  ${activeTab === index
                                        ? 'bg-white border-blue-500 shadow-xl scale-105 z-10'
                                        : 'bg-white border-transparent hover:bg-gray-100 opacity-70 hover:opacity-100'}`}
                            >
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl mr-4 shrink-0 transition-colors
                  ${activeTab === index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                                    <item.icon />
                                </div>
                                <div>
                                    <span className={`block text-sm font-bold uppercase tracking-wider mb-1
                    ${activeTab === index ? 'text-blue-600' : 'text-gray-500'}`}>
                                        {item.grade}. Sınıf
                                    </span>
                                    <h3 className={`text-lg font-bold ${activeTab === index ? 'text-gray-900' : 'text-gray-700'}`}>
                                        {item.title}
                                    </h3>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 h-full"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="text-6xl font-black text-blue-100">
                                        {curriculum[activeTab].grade}
                                    </span>
                                    <div>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                                            {curriculum[activeTab].title}
                                        </h3>
                                        <p className="text-gray-500 font-medium">
                                            Bölüm Müfredatı Detayları
                                        </p>
                                    </div>
                                </div>

                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    {curriculum[activeTab].description}
                                </p>

                                <div className="mb-10">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4 border-b border-gray-100 pb-2">
                                        Ders İçeriği ve Kazanımlar
                                    </h4>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {curriculum[activeTab].details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 shrink-0" />
                                                <span className="text-gray-700 text-sm leading-relaxed">
                                                    {detail}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 mb-4">
                                        Kazanılan Yetkinlikler
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {curriculum[activeTab].skills.map((skill, idx) => (
                                            <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors cursor-default">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
