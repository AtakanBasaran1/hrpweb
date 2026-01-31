"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { useProduct } from '@/context/ProductContext';

// Swiper stilleri
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function ResponsiveCarousel() {
  const { services_posts } = useProduct();

  return (
    <div className="relative w-full group overflow-hidden bg-white">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        className="h-[600px] md:h-[800px] w-full"
      >
        {services_posts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="relative w-full h-full overflow-hidden">
              {/* ANA GÖRSEL */}
              <Image
                src={post.image}
                alt={post.description}
                fill
                className="object-cover transition-transform duration-[5000ms] scale-100 group-hover:scale-110"
                priority
              />

              {/* KARARTMA KATMANI (Derinlik için) */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

              {/* LOGO WATERMARK */}
              <div className="absolute top-12 left-12 z-20 opacity-50">
                <Image src="/images/regedit_white.png" width={120} height={40} alt="Regedit Logo" className="grayscale brightness-200" />
              </div>

              {/* BİLGİ PANELİ (Modern Glassmorphism) */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-5xl">
                <div className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-2xl">

                  {/* Marka İkonu */}
                  <div className="hidden md:flex shrink-0 w-20 h-20 bg-white rounded-2xl items-center justify-center shadow-inner">
                    <Image src="/images/regedit_black.png" width={48} height={48} alt="Logo" />
                  </div>

                  {/* Açıklama Metni */}
                  <div className="flex-1 space-y-2">
                    <span className="text-blue-400 text-[10px] font-black tracking-[0.4em] uppercase">Referans Projelerimiz</span>
                    <h2 className="text-white text-lg md:text-2xl font-light leading-relaxed tracking-tight">
                      {post.description}
                    </h2>
                  </div>

                  {/* Dekoratif Çizgi (Mobilde gizli) */}
                  <div className="hidden md:block w-px h-16 bg-white/10 mx-4" />

                  <div className="flex flex-col items-center md:items-end opacity-40">
                    <span className="text-[10px] text-white font-black tracking-widest uppercase">Regedit Quality</span>
                    <span className="text-[9px] text-white/60">EST. 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* ÖZEL NAVİGASYON BUTONLARI */}
        <button className="swiper-button-prev-custom absolute left-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border border-white/20 bg-black/10 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-0 transition-all duration-500 hover:bg-white hover:text-black">
          <HiOutlineChevronLeft size={24} />
        </button>
        <button className="swiper-button-next-custom absolute right-8 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full border border-white/20 bg-black/10 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-500 hover:bg-white hover:text-black">
          <HiOutlineChevronRight size={24} />
        </button>
      </Swiper>

      {/* CUSTOM PAGINATION STYLE (CSS) */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.3 !important;
          width: 8px;
          height: 8px;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 30px;
          border-radius: 4px;
          background: #3b82f6 !important;
        }
      `}</style>
    </div>
  );
}