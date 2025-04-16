import React from 'react'
import Image from 'next/image'

export default function Begining() {
    return (
        <div className='relative h-screen w-full bg-white overflow-hidden'>

            {/* Üstteki gradient ışık süzmesi */}
            <div className="flex flex-col absolute top-[-150px] left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[500px] bg-gradient-to-b from-[#A066FF] via-[#5B2EFF] to-transparent rounded-full blur-[120px] opacity-90 pointer-events-none z-0" />

            {/* En altta sabit bar */}
            <div className='absolute bottom-0 w-full p-9 z-10 flex flex-col items-center jusftify-center'>

                <h1 className="cursor-pointer sm:text-9xl text-4xl font-bold m-3 bg-gradient-to-r from-sky-600 via-blue-500 to-gray-400 text-transparent bg-clip-text">
                    Ürünlerimiz
                </h1>
                <p className='text-gray-500'>
                    RegeditPos olarak ürünlerimizin performansı ile öne çıkıyoruz.
                </p>


            </div>

        </div>
    )
}
