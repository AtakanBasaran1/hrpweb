import React from 'react'
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa";

export default function MiddleOfPage() {
    return (
        <div className='h-auto w-full flex flex-col items-center  justfiy-center'>
            <h1 style={{ marginTop: '100px' }} className="sm:text-6xl text-4xl text-center font-extrabold">
                Biz Kimiz?

            </h1>
            <p className="text-md sm:m-10 m-5 text-gray-800 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Quasi suscipit recusandae voluptatum veritatis magnam ipsum laudantium, natus soluta, nisi, <br /> aspernatur pariatur obcaecati fugit nemo distinctio! Debitis reiciendis obcaecati delectus dolores.

            </p>

            <div className="flex mb-24 items-center mt-24 justify-center h-auto my-2 p-2">
                <div className='w-[95%] gap-6 sm:w-[75%] sm:flex'>
                    <div className="sm:w-[30%] h-auto">
                        <Image
                            className='cursor-pointer'
                            src="/images/created2.webp"
                            alt="Logo"
                            width={400}
                            height={500}
                            layout="responsive"
                        />
                    </div>
                    <div className='sm:w-[70%]  h-auto sm:pt-9 sm:pr-9 sm:pb-9'>
                        <h1 className="sm:text-4xl text-3xl font-bold m-3 bg-gradient-to-r from-blue-700 via-sky-500 to-gray-400 text-transparent bg-clip-text">
                            İşletmenizin Yanında,
                            Her Aşamada
                        </h1>
                        <p className='sm:text-center m-3 text-left'>LOREMYalnızca yazılım değil, donanımda da yanınızdayız.
                            Yüksek performanslıanslı, dayanıklı ve kullanım kolaylığıyla öne çıkan POS cihazlarımız, restoran
                            operasyonlarınızı hızlandırmak ve müşterilerinize kusursuz bir deneyim sunmak için tasarlandı.
                            yapısıyla, uzun ömürlü ve güvenilir çözümler sunuyoruz.</p>
                    </div>
                </div>

            </div>

            <div className="flex  items-center mt-24 justify-center h-auto my-2 p-2">
                <div className='w-[95%] gap-6 sm:w-[75%] sm:flex'>

                    <div className="order-1 sm:order-2  sm:w-[30%] h-auto">
                        <Image
                            className='cursor-pointer'
                            src="/images/created3.webp"
                            alt="Logo"
                            width={400}
                            height={500}
                            layout="responsive"
                        />
                    </div>
                    <div className='order-2 sm:order-1   sm:w-[70%] h-auto sm:pt-9 sm:pr-9 sm:pb-9'>
                        <h1 className="sm:text-4xl text-3xl font-bold m-3 bg-gradient-to-r from-blue-700 via-sky-500 to-gray-400 text-transparent bg-clip-text">
                            Bizi Neden Tercih etmelisiniz?
                        </h1>
                        <p className='sm:text-center m-3 sm:text-left'>LOREMYalnızca yazılım değil, donanımda da yanınızdayız.
                            Yüksek performanslıanslı, dayanıklı ve kullanım kolaylığıyla öne çıkan POS cihazlarımız, restoran
                            operasyonlarınızı hızlandırmak ve müşterilerinize kusursuz bir deneyim sunmak için tasarlandı.
                            yapısıyla, uzun ömürlü ve güvenilir çözümler sunuyoruz.</p>
                        <button className='mt-3 mx-3 cursor-pointer hover:bg-blue-900 hover:text-white rounded-2xl py-2 px-4 flex items-center justify-center gap-2 bg-transparent border-1 border-black transition duration-300'>
                            <p>İletişime Geç</p>
                            <FaAngleRight />

                        </button>
                    </div>

                </div>

            </div>

        </div>
    )
}
