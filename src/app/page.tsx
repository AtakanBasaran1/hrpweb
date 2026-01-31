'use client';

import Header from '@/components/Header';
import CurriculumDetailed from '@/components/CurriculumDetailed';
import ProjectsSection from '@/components/ProjectsSection';
import AtaturkCorner from '@/components/AtaturkCorner';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white overflow-x-hidden"
    >
      <SEO
        title="Halil Rıfat Paşa MTAL - Elektrik Elektronik Teknolojisi"
        description="Geleceğin teknolojisini tasarlayan, yenilikçi ve donanımlı bireyler yetiştiriyoruz. 9, 10, 11 ve 12. sınıf detaylı eğitim müfredatı."
        image="/images/whatsapp-image-2026-01-23-at-14-21-07.jpeg"
      />

      {/* Hero Header */}
      <Header />

      {/* Detailed Curriculum Section */}
      <CurriculumDetailed />

      {/* Student Projects Section */}
      <ProjectsSection />

      {/* Atatürk Corner - Replaces Vision/CTA Section */}
      <AtaturkCorner />

    </motion.main>
  );
}
