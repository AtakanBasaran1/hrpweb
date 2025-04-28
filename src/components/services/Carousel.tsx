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

                    <SwiperSlide className="bg-sky-400 rounded-3xl flex">
                        <div className="relative w-full h-screen">
                            <Image
                                src="/images/services1.jpeg" // public klasöründe olmalı
                                alt="Shelby Background"
                                layout="fill"
                                
                                objectFit="cover"
                                priority
                            />

                            <div className="absolute bottom-0 w-full p-6 flex flex-col items-center justify-center">
                                <div className='flex items-center bg-white rounded-3xl w-full gap-3 py-6 px-3'>
                                    <h1 className='text-3xl font-bold'>RegeditPos</h1>
                                    <p>Lorem, ipsum dolor sit amet consectlorum. Eligendi libero quae, iste quo tenetur atque rerum vel amet pariatur.</p>

                                </div>
                            </div>
                        </div>


                    </SwiperSlide>
                </Swiper>
            </div>
    );
}
