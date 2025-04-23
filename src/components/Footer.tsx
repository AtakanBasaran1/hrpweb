import React from 'react'
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from 'next/link';

export default function Footer() {

    const navItems = [
        { label: 'Anasayfa', href: '/' },
        { label: 'Hakkımızda', href: '/about' },
        { label: 'Ürünlerimiz', href: '/products' },
        { label: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
        { label: 'Medya', href: '/medya' },
        { label: 'İletişim', href: '/contact' },
      ];
    return (
        <footer className="text-white h-auto px-2 py-4 flex flex-col items-center justify-between bg-[#0A0046] xl:gap-3 gap-1 rounded-tr-xl rounded-tl-xl xl:rounded-none">

            <div className='xl:w-[80%] w-full flex xl:flex-row flex-col justify-between self-center items-center'>
                <img src="/images/regedit_white.png" alt="Logo" className='w-48 h-auto rounded-xl text-center' />
                <div className='w-full h-full'>
                    <ul className='sm:flex flex flex-wrap gap-6 xl:text-xl justify-center items-center'>
                        {navItems.map((item) => { 
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href} 
                                    className={`cursor-pointer transition  transform hover:scale-105 duration-300`}
                                    >
                                        {item.label}
                                </Link>
                            );
                        })} 
                    </ul>
                </div>
                
                <ul className='gap-3 m-5 flex xl:text-3xl text-2xl'>
                    <FaLinkedin  className='cursor-pointer transition transform hover:scale-105 duration-300'/>
                    <FaInstagram className='cursor-pointer transition transform hover:scale-105 duration-300'/>
                    <IoMdMail    className='cursor-pointer transition transform hover:scale-105 duration-300'/>
                </ul>
            </div>

            <a href='https://maps.app.goo.gl/dVG1dRuZHV7VBYKJ9' className='xl:text-xl text-sm text-center flex flex-row items-start xl:gap-4 px-4 cursor-pointer' target="_blank"><img src='https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg' className='w-5'></img>Topselvi Mah. Arkoz Sk. No: 6 İç Kapı No:1 KARTAL / İSTANBUL</a>

            <p className='xl:text-xl text-sm text-white'>RegeditPos © 2025</p>



        </footer>


    )
}
