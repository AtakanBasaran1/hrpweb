'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

export default function Carousel() {
    return (
        <div className="w-full">
            <Swiper
                effect={'cards'}
                grabCursor={true}
                pagination={{ clickable: true }}
                modules={[EffectCards, Pagination]}
                className="mySwiper">

                <SwiperSlide className="flex justify-center items-center p-12">
                    <div className="relative w-full max-w-[calc(100%-2rem)] h-[calc(100vh-2rem)] rounded-3xl overflow-hidden">
                        <Image
                            src="/images/services1.jpeg" 
                            alt="Shelby Background"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />

                        <div className="absolute bottom-0 w-full p-6 flex flex-col items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent rounded-b-3xl">
                            <div className='bg-white rounded-3xl w-full max-w-3xl p-6 text-center'>
                                <h1 className='text-3xl font-bold mb-4'>RegeditPos</h1>
                                <p>Lorem, ipsum dolor sit amet consectlorum. Eligendi libero quae, iste quo tenetur atque rerum vel amet pariatur.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center p-12">
                    <div className="relative w-full max-w-[calc(100%-2rem)] h-[calc(100vh-2rem)] rounded-3xl overflow-hidden">
                        <Image
                            src="/images/shelby.jpg" 
                            alt="Shelby Background"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />

                        <div className="absolute bottom-0 w-full p-6 flex flex-col items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent rounded-b-3xl">
                            <div className='bg-white rounded-3xl w-full max-w-3xl p-6 text-center'>
                                <h1 className='text-3xl font-bold mb-4'>RegeditPos</h1>
                                <p>Lorem, ipsum dolor sit amet consectlorum. Eligendi libero quae, iste quo tenetur atque rerum vel amet pariatur.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
}
