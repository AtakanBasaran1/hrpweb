"use client";
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion';

export default function Begining() {
    const titles=[
        {
            id:1,
            text: "15 Yıllık Tecrübe",
            gradient: "bg-gradient-to-r from-white via-gray-200 to-sky-300",
            textSize: "sm:text-8xl text-4xl",
          },
          {
            id:2,

            text: "Güvenilir Teknoloji",
            gradient: "bg-gradient-to-r from-blue-600 via-sky-200 to-gray-300",
            textSize: "sm:text-6xl text-3xl",
          },
          {
            id:3,

            text: "Kalıcı Çözümler",
            gradient: "bg-gradient-to-r from-blue-600 via-sky-200 to-gray-300",
            textSize: "sm:text-6xl text-2xl",
          },
    ];
    return (
        <div className='relative h-screen w-full bg-black overflow-hidden pt-[10lvh]'>
            <div className="flex flex-col absolute top-[-150px] mt-200 left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[500px] bg-gradient-to-b from-[#A066FF] via-[#5B2EFF] to-transparent rounded-full blur-[120px] opacity-70 pointer-events-none z-0" />
                <div className='flex flex-col-reverse w-full h-auto m-2 sm:p-9 items-center  md:flex-col-reverse space-y-12 justify-center' style={{ marginTop: '150px' }}>
                    <div className='order-1 sm:order-2 flex flex-col items-center sm:w-[60%]'>
                        {titles.map((item,index)=>(
                            <motion.h1 key={item.id}
                            initial={{
                                opacity: 0,
                                y: 20,
                                filter: "blur(10px)",
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                              }}
                              transition={{
                                delay: index * 0.3,
                                duration: 0.8,
                                ease: "easeOut",
                              }}
                              className={`cursor-pointer font-bold m-3 text-transparent bg-clip-text ${item.textSize} ${item.gradient}`}
                              >

                                {item.text}
                            </motion.h1>

                        ))}
                    </div>
                </div>
           
            <div className='flex text-gray-400 justify-center items-center sm:text-xl text-sm text-center h-auto w-full mt-12  p-2'>
                <p>Regedit Bilişim olarak, sektördeki deneyimimiz ve uzman ekibimizle, <br className='hidden sm:inline'/> işletmeniz için sürdürülebilir ve yenilikçi çözümler sunuyoruz.
                </p>
            </div>
        </div>
    )
}
