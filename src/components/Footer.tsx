import React from 'react'
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
    return (
        <footer className="text-white h-auto px-2 py-4 flex flex-col items-center justify-between bg-[#0A0046] md:gap-3 gap-1 rounded-tr-xl rounded-tl-xl md:rounded-none">

            <div className='md:w-[80%] w-full flex md:flex-row flex-col justify-between self-center items-center'>
                <img src="/images/regedit_white.png" alt="Logo" className='w-48 h-auto rounded-xl text-center' />
                <div className='w-full h-full'>
                    <ul className='sm:flex flex flex-wrap gap-6 md:text-xl justify-center items-center'>
                        <li className='cursor-pointer transition  transform hover:scale-105 duration-300'>Anasayfa</li>
                        <li className='cursor-pointer transition  transform hover:scale-105 duration-300'>Hakkımızda</li>
                        <li className='cursor-pointer transition  transform hover:scale-105 duration-300'>Ürünlerimiz</li>
                        <li className='cursor-pointer transition  transform hover:scale-105 duration-300'>Hizmetlerimiz</li>
                        <li className='cursor-pointer transition  transform hover:scale-105 duration-300'>Medya</li>
                        <li className='cursor-pointer transition  transform hover:scale-105 duration-300'>İletişim</li>
                    </ul>
                </div>
                
                <ul className='gap-3 m-5 flex md:text-3xl text-2xl'>
                    <FaLinkedin  className='cursor-pointer transition transform hover:scale-105 duration-300'/>
                    <FaInstagram className='cursor-pointer transition transform hover:scale-105 duration-300'/>
                    <IoMdMail    className='cursor-pointer transition transform hover:scale-105 duration-300'/>
                </ul>
            </div>

            <a href='https://maps.app.goo.gl/dVG1dRuZHV7VBYKJ9' className='md:text-lg text-sm text-center flex flex-row items-start md:gap-4 px-4 cursor-pointer' target="_blank"><img src='https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg' className='w-5'></img>Topselvi Mah. Arkoz Sk. No: 6 İç Kapı No:1 KARTAL / İSTANBUL</a>

            <p className='md:text-lg text-sm text-white'>RegeditPos © 2025</p>



        </footer>


    )
}
