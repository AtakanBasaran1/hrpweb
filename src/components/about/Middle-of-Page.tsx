"use client";
import React from 'react'
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import TypingTitle from '../hooks/animations/TypingTitle';
import AnimatedImage from '../hooks/animations/AnimatedImage';

export default function MiddleOfPage() {
    const router = useRouter();
    const handleContactPageRoute = () => {
        router.push("/contact");
    };

    return (
        <div className='h-auto w-full flex flex-col items-center  justfiy-center'>
            <h1 style={{ marginTop: '100px' }} className="sm:text-6xl text-4xl text-center font-extrabold">
                Biz Kimiz?

            </h1>
            <p className="text-md sm:m-10 m-5 text-gray-800 text-center">
                Restoranların arka plandaki görünmeyen kahramanıyız. Mutfakta işler hızlı, kasada kuyruk kısa, müşteri memnun...  <br />  Hepsinin arkasında, size zaman kazandıran ve işinizi kolaylaştıran teknolojilerimiz var.

            </p>

            <div className="flex mb-24 items-center mt-24 justify-center h-auto my-2  p-0 sm:p-2">
                <div className='w-[95%]  gap-6 sm:w-[75%] sm:flex'>
                    <div className="sm:w-[30%] h-auto">
                        <Image
                            className='cursor-pointer'
                            src="/images/aboutpage321.webp"
                            alt="Logo"
                            width={400}
                            height={500}
                            layout="responsive"
                        />
                        
                    </div>
                    <div className='sm:w-[70%] ml-3 flex items-center h-auto sm:pt-9 sm:pr-9 sm:pb-9'>
                        <div>
                           
                            <TypingTitle classNameProps="sm:text-4xl text-3xl font-bold m-3 bg-gradient-to-r from-blue-700 via-sky-500 to-gray-400 text-transparent bg-clip-text" fullText='İşletmenizin Yanında, Her Aşamada.'/>
                            <p className='text-left m-3'>
                                Sipariş ilk alındığı andan, fiş son kez yazdırılana kadar sizinleyiz. Yoğun bir öğle servisinde hızınız, sakin bir akşamda ise konforunuz oluyoruz. Kasa başında, mutfakta, servis alanında... Nerede ihtiyaç varsa oradayız. Cihazlarımız sadece çalışmaz, işletmenizi anlar, sizinle birlikte büyür. Kurulumdan desteğe, yazılımdan donanıma her adımda yanınızda duran bir çözüm ortağıyız. Çünkü biz, sadece satış yapmıyoruz; restoranınızın ritmine ayak uyduruyor, her aşamasına eşlik ediyoruz.
                            </p>
                        </div>



                    </div>
                </div>

            </div>

            <div className="flex  items-center mt-24 justify-center h-auto my-2 p-2">
                <div className='w-[95%] gap-6 sm:w-[75%] sm:flex'>

                    <div className="order-1 sm:order-2  sm:w-[30%] h-auto">
                       
                        <AnimatedImage
                        srcname='/images/aboutpageimage2.webp'
                        classNameProps='cursor-pointer'
                        height={500}
                        width={400}
                        layoutProps='responsive'
                    
                        />
                    </div>
                    <div className='order-2 sm:order-1 flex items-center sm:w-[70%] h-auto sm:pt-9 sm:pr-9 sm:pb-9'>
                        <div>
                            <h1 className="sm:text-4xl text-3xl font-bold m-3 bg-gradient-to-r from-blue-700 via-sky-500 to-gray-400 text-transparent bg-clip-text">
                                Bizi Neden Tercih etmelisiniz?
                            </h1>
                            <p className='text-left m-3'>

                                 POS cihazlarımızdan kiosk çözümlerimize kadar her ürünümüz, restoran operasyonlarını daha akıllı, hızlı ve keyifli hale getirmek için tasarlandı. Sadece cihaz değil; konfor, güven ve gelecek sunuyoruz. Çünkü biz, bugünü kolaylaştırmakla kalmayıp, sizi yarına hazırlıyoruz.
                              
                              
                                </p>
                            <button onClick={(e) => handleContactPageRoute()} className='mt-3 mx-3 cursor-pointer hover:bg-blue-900 hover:text-white rounded-2xl py-2 px-4 flex items-center justify-center gap-2 bg-transparent border-1 border-black transition duration-300'>
                                <p>İletişime Geç</p>
                                <FaAngleRight />

                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
