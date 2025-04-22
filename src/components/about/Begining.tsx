import React from 'react'
import Image from 'next/image'

export default function Begining() {
    return (
        <div className='relative h-screen w-full bg-black overflow-hidden'>

            <div className="flex flex-col absolute top-[-150px] mt-200 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[500px] bg-gradient-to-b from-[#A066FF] via-[#5B2EFF] to-transparent rounded-full blur-[120px] opacity-70 pointer-events-none z-0" />

            
            
            
            <div className='flex flex-col-reverse w-full h-auto m-2 sm:p-9 items-center  md:flex-row justify-center' style={{ marginTop: '150px' }}>

                <div className='order-2 sm:order-1 sm:w-[40%] flex my-12 sm:m-0 justify-center '>
                    <Image
                        className='cursor-pointer'
                        src="/images/regeditlogo2.png"
                        alt="Logo"
                        width={300}
                        height={100}


                    />
                </div>
                <div className='order-1 sm:order-2 sm:w-[60%]'>

                    <h1 className="cursor-pointer sm:text-8xl text-4xl font-bold m-3 bg-gradient-to-r from-white via-gray-200 to-sky-300 text-transparent bg-clip-text">
                        15 Yıllık Tecrübe,
                    </h1>

                    <h1 className=" cursor-pointer sm:text-6xl text-3xl  font-bold m-3 bg-gradient-to-r from-blue-600 via-sky-200 to-gray-300 text-transparent bg-clip-text">
                        Güvenilir Teknoloji,
                    </h1>

                    <h1 className="cursor-pointer sm:text-6xl text-2xl  font-bold m-3 bg-gradient-to-r from-blue-600 via-sky-200 to-gray-300  text-transparent bg-clip-text">
                        Kalıcı Çözümler
                    </h1>



                </div>

            </div>
           
            <div className='flex text-gray-400 justify-center items-center sm:text-xl text-md text-center h-auto w-full mt-12  p-2'>
                <p>Regedit Bilişim olarak, sektördeki deneyimimiz ve uzman ekibimizle, <br /> işletmeniz için sürdürülebilir ve yenilikçi çözümler sunuyoruz.
                </p>
            </div>

        </div>
    )
}
