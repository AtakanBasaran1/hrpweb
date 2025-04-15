import React from 'react'
import Image from 'next/image'

export default function Begining() {
    return (
        <div className='relative h-screen w-full bg-black overflow-hidden'>

            <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#A066FF] via-[#5B2EFF] to-transparent rounded-full blur-[120px] opacity-70 pointer-events-none z-0" />

            <div className=' w-full h-auto m-2 p-9 flex flex-row justify-center' style={{ marginTop: '150px' }}>

                <div className='w-[40%] flex'>
                    <Image
                        className='cursor-pointer'
                        src="/images/regeditlogo2.png"
                        alt="Logo"
                        width={300}
                        height={100}


                    />
                </div>
                <div className='w-[60%]'>

                    <h1 className="cursor-pointer sm:text-7xl text-4xl font-bold m-3 bg-gradient-to-r from-white via-gray-200 to-sky-300 text-transparent bg-clip-text">
                        15 Yıllık Tecrübe,
                    </h1>

                    <h1 className=" cursor-pointer sm:text-6xl text-4xl  font-bold m-3 bg-gradient-to-r from-blue-600 via-sky-200 to-gray-300 text-transparent bg-clip-text">
                        Güvenilir Teknoloji,
                    </h1>

                    <h1 className="cursor-pointer sm:text-6xl text-4xl  font-bold m-3 bg-gradient-to-r from-white via-gray-200 to-sky-300  text-transparent bg-clip-text">
                        Kalıcı Çözümler
                    </h1>



                </div>

            </div>

        </div>
    )
}
