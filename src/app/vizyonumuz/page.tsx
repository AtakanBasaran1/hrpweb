'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const VisionPage = () => {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src="/vision-hero.jpg"
          alt="Vision Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white text-center"
          >
            Vizyonumuz
          </motion.h1>
        </div>
      </div>

      {/* Vision Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Geleceği Şekillendiriyoruz
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Biz, teknoloji ve inovasyonun gücüyle geleceği şekillendirmeyi hedefliyoruz. 
              Her projemizde, müşterilerimizin ihtiyaçlarını en üst düzeyde karşılamak ve 
              sürdürülebilir çözümler sunmak için çalışıyoruz.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/vision-illustration.jpg"
              alt="Vision Illustration"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'İnovasyon',
                description: 'Sürekli gelişim ve yenilikçi çözümler üretiyoruz.',
                icon: '🚀'
              },
              {
                title: 'Müşteri Odaklılık',
                description: 'Müşterilerimizin ihtiyaçlarını en iyi şekilde anlıyor ve karşılıyoruz.',
                icon: '💡'
              },
              {
                title: 'Sürdürülebilirlik',
                description: 'Çevreye ve topluma karşı sorumluluklarımızın bilincindeyiz.',
                icon: '🌱'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Bizimle Geleceği Keşfedin
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Siz de vizyonumuza ortak olun ve geleceği birlikte şekillendirelim.
          </p>
          <button 
            onClick={handleContactClick}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Bizimle İletişime Geçin
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionPage; 