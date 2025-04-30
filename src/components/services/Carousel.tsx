'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import { useProduct } from '@/context/ProductContext';

export default function Carousel() {
    const { services_posts } = useProduct();

    return (
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-10">
            <Swiper
                effect="cards"
                grabCursor={true}
                pagination={{ clickable: true }}
                modules={[EffectCards, Pagination]}
                className="mySwiper max-w-full"
            >
                {services_posts.map((post) => (
                    <SwiperSlide key={post.id} className="flex justify-center items-center">
                        <div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-[80vh] sm:h-[75vh] md:h-[70vh] lg:h-[60vh] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src={post.image}
                                alt="İmage"
                                fill
                                className="object-cover"
                                priority
                            />

                            <div className="absolute bottom-0 w-full p-4 sm:p-6 flex flex-col items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent rounded-b-3xl">
                                <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl w-full p-4 sm:p-6 text-center flex items-center gap-2 sm:gap-4">
                                    <div className="flex items-center justify-center p-2 shadow-xl rounded-2xl">
                                        <Image
                                            src="/images/regedit_black.png"
                                            width={48}
                                            height={48}
                                            className="sm:w-12 sm:h-12"
                                            alt="Logo"
                                        />
                                    </div>
                                    <h1 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
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
