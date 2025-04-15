import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
    return (
        <footer className="w-full text-white h-auto p-4 flex flex-col items-center justify-center bg-[#0A0046] text-white gap-3">

            <img src="/images/logo.png" alt="Logo" className='w-48 h-auto rounded-xl text-center' />
            <p className='text-md text-center'>Topselvi Mah. Arkoz Sk. No: 6 İç Kapı No:1 KARTAL/ İSTANBUL</p>
            <ul className='sm:flex flex flex-wrap gap-6 text-sm justify-center'>
                <li className='cursor-pointer transition  transform hover:scale-105 duration-300'>Anasayfa</li>
                <li className='cursor-pointer transition  transform hover:scale-105 duration-300'>Hakkımızda</li>
                <li className='cursor-pointer transition  transform hover:scale-105 duration-300'>Ürünlerimiz</li>
                <li className='cursor-pointer transition  transform hover:scale-105 duration-300'>Hizmetlerimiz</li>
                <li className='cursor-pointer transition  transform hover:scale-105 duration-300'>Medya</li>
                <li className='cursor-pointer transition  transform hover:scale-105 duration-300'>İletişim</li>
            </ul>
            <ul className='gap-3 m-5 flex text-3xl'>
                <FaLinkedin className='cursor-pointer transition  transform hover:scale-105 duration-300'/>
                <RiInstagramFill className='cursor-pointer transition  transform hover:scale-105 duration-300'/>
                <IoMdMail className='cursor-pointer transition  transform hover:scale-105 duration-300'/>
            </ul>
            <p className='text-sm text-white'>RegeditPos© 2025</p>



        </footer>


    )
}
