'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
    {
        title: 'Akıllı Ev Sistemleri',
        image: '/images/projects/akilliev.jpg',
        description: 'Uzaktan kontrol edilebilir, enerji tasarruflu ev otomasyon sistemi.',
        tags: ['IoT', 'Arduino', 'Sensör']
    },
    {
        title: 'PLC Otomasyon Pano',
        image: '/images/projects/plc.jpg',
        description: 'Endüstriyel üretim hatları için tasarlanmış kontrol panosu.',
        tags: ['Otomasyon', 'PLC', 'Endüstri']
    },
    {
        title: 'Çizgi İzleyen Robot',
        image: '/images/projects/arduino-robot-kollu-4wd-mobil-araba-kiti-demonte-montajsiz-cizgi-izleyen-robot-jsumo-5320-23-O.jpg',
        description: 'Otonom hareket kabiliyetine sahip, sensör tabanlı robotik araç.',
        tags: ['Robotik', 'C++', 'Mobil']
    },
    {
        title: 'Güneş Enerjisi Sistemi',
        image: '/images/projects/günes.jpg',
        description: 'Yenilenebilir enerji kaynaklarıyla çalışan prototip şarj istasyonu.',
        tags: ['Enerji', 'Yenilenebilir', 'Prototip']
    },
    {
        title: 'LED Matrix Ekran',
        image: '/images/projects/8x8-LED-Matrix-MAX7219-Arduino.jpg',
        description: 'Kayan yazı ve animasyon gösterebilen programlanabilir ekran.',
        tags: ['Gömülü Sistem', 'LED', 'Ekran']
    },
    {
        title: 'Güç Elektroniği',
        image: '/images/projects/2700_buyuk-500x295.jpg',
        description: 'Motor kontrol sürücüleri ve güç regülasyon devreleri.',
        tags: ['Devre', 'Güç', 'Elektronik']
    },
];

export default function ProjectsSection() {
    return (
        <section id="projeler" className="py-24 bg-white transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="md:w-2/3">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Öğrenci Projeleri
                        </h2>
                        <p className="text-lg text-gray-600">
                            Teorik bilgiyi pratiğe dönüştüren öğrencilerimizin, atölye ortamında geliştirdiği yenilikçi çözümler.
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 md:mt-0 px-8 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-colors"
                    >
                        Tüm Projeleri Gör
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-gray-100 rounded-3xl overflow-hidden cursor-pointer"
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent pt-20">
                                <div className="flex gap-2 mb-3 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs font-bold bg-blue-600 text-white px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-300 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
