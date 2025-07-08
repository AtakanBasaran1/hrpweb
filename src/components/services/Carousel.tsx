'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { useProduct } from '@/context/ProductContext';
import { Swiper as SwiperType } from 'swiper';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Carousel() {
    const { services_posts } = useProduct();
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="w-full relative">

            <button
                className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white rounded-full p-2 shadow-md active:scale-95 transition"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <ChevronLeft size={24} />
            </button>

            <button
                className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white rounded-full p-2 shadow-md active:scale-95 transition"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <ChevronRight size={24} />
            </button>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                pagination={{ clickable: true }}
                modules={[EffectCards, Pagination]}
                className="mySwiper z-10"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {services_posts.map((post) => (
                    <SwiperSlide
                        key={post.id}
                        className="flex justify-center items-center pointer-events-none"
                    >
                        <div className="relative w-full max-w-[calc(100%-2rem)] h-[calc(100vh-2rem)] rounded-3xl overflow-hidden pointer-events-auto">
                            <Image
                                src={post.image}
                                alt="İmage"
                                fill
                                objectFit="cover"
                                priority
                            />
                            <div className="absolute bottom-0 w-full p-6 flex flex-col items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent rounded-b-3xl">
                                <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl w-full max-w-3xl p-6 text-center flex items-center gap-2">
                                    <div className='flex items-center p-2 shadow-xl rounded-3xl justify-center'>
                                        <Image
                                            src="/images/regedit_black.png"
                                            width={48}
                                            height={48}
                                            alt='Logo'
                                        />
                                    </div>
                                    <h1 className='text-base md:text-xl p-1 font-semibold'>
                                        {post.description}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
