import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"
import 'swiper/css'
import { useProduct } from '@/context/ProductContext';

export default function ResponsiveCarousel() {
  const { services_posts } = useProduct();

  return (
    <div className='w-full'>
      <Swiper
        modules={[Navigation]}
        className="mySwiper">

        {
          services_posts.map((post) => (

            <SwiperSlide key={post.id} className='my-24'>
              <div className='h-96 relative '>
                <Image
                  src={post.image}
                  alt="Image"
                  fill
                  className='object-cover'
                  priority
                />
                <div className="absolute top-1/2 -translate-y-1/2 left-4 text-white/50 text-4xl pointer-events-none z-10">
                  <FaAngleLeft />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 text-white/50 text-4xl pointer-events-none z-10">
                  <FaAngleRight />
                </div>

                <div className="absolute bottom-0 w-full p-3 flex flex-col items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent rounded-b-3xl">
                  <div className="bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl rounded-3xl w-full max-w-3xl p-2 text-center flex items-center gap-2">
                    <div className='flex items-center p-2 shadow-xl rounded-3xl justify-center'>
                      <Image
                        src="/images/regedit_black.png"
                        width={64}
                        height={64}
                        alt='Logo'
                      />
                    </div>
                    <h1 className='text-sm p-1 text-left font-semibold'>
                    {post.description}
                    </h1>
                  </div>
                </div>

              </div>
            </SwiperSlide>

          ))
        }






      </Swiper>

    </div>
  )
}
