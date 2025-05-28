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


export default function Carousel() {
    const { services_posts } = useProduct();
    const swiperRef = useRef<SwiperType | null>(null);


    return (
        <div className="w-full relative">

            {/* SOL GİZLİ BUTON */}
            <button
                className="hidden md:block absolute left-0 top-0 h-full w-1/3 z-10"
                onClick={() => swiperRef.current?.slidePrev()}
            />

            {/* SAĞ GİZLİ BUTON */}
            <button
                className="md:block absolute right-0 top-0 h-full w-1/3 z-10"
                onClick={() => swiperRef.current?.slideNext()}
            />

            <Swiper
                effect={'cards'}
                grabCursor={true}
                pagination={{ clickable: true }}
                modules={[EffectCards, Pagination]}
                className="mySwiper"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {services_posts.map((post) => (
                    <SwiperSlide key={post.id} className="flex justify-center items-center ">
                        <div className="relative w-full max-w-[calc(100%-2rem)] h-[calc(100vh-2rem)] rounded-3xl overflow-hidden">
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
                                            width={64}
                                            height={64}
                                            alt='Logo'
                                        />
                                    </div>
                                    <h1 className='text-xl p-1 font-semibold'>
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

