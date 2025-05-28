"use client";
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'; 
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

export default function Begining() {
  const { isDarkMode, toggleTheme } = useTheme();
    const titles=[
        {
            id:1,
            text: "15 Yıllık Tecrübe",
            textSize: "sm:text-8xl text-4xl",
          },
          {
            id:2,
            text: "Güvenilir Teknoloji",
            textSize: "sm:text-6xl text-3xl",
          },
          {
            id:3,
            text: "Kalıcı Çözümler",
            textSize: "sm:text-6xl text-2xl",
          },
    ];
    return (
        <div className={`relative h-screen w-full overflow-hidden pt-[10lvh] ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
          <div className="absolute top-20 right-4 flex items-center">
                <motion.button
                    onClick={toggleTheme}
                    className="relative w-16 h-8 rounded-full bg-gray-200 dark:bg-gray-700 p-1 transition-colors duration-300 flex items-center"
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center"
                        animate={{
                            x: isDarkMode ? 32 : 0,
                            backgroundColor: isDarkMode ? "#123466" : "#fbbf24"
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                        {isDarkMode ? (
                            <FaMoon className="text-white text-sm" />
                        ) : (
                            <FaSun className="text-yellow-400 text-sm" />
                        )}
                    </motion.div>
                </motion.button>
            </div>
          <div className={`flex flex-col absolute left-1/2 -translate-x-1/2 w-full md:w-[800px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 ${isDarkMode ? 'top-[-150px] mt-200 bg-gradient-to-b from-[#A066FF] via-[#5B2EFF] to-transparent opacity-70' : 'bottom-[-100px] bg-gradient-to-t from-[#123466] via-blue-500 to-transparent opacity-70'}`} />
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
                      className={`cursor-pointer font-bold m-3 text-transparent bg-clip-text ${item.textSize} ${isDarkMode ? 'bg-gradient-to-r from-gray-300 via-gray-500 to-gray-400' : 'bg-gradient-to-r from-blue-600 via-sky-200 to-gray-300'}`}
                      >
                        {item.text}
                    </motion.h1>
                ))}
              </div>
            </div>
            
          <div className={`flex justify-center items-center sm:text-xl text-sm text-center h-auto w-full mt-12  p-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-900'}`}>
            <p>Regedit Bilişim olarak, sektördeki deneyimimiz ve uzman ekibimizle, <br className='hidden sm:inline'/> işletmeniz için sürdürülebilir ve yenilikçi çözümler sunuyoruz.
            </p>
        </div>
      </div>
    )
}
