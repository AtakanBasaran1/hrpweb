import React from 'react'
import { BiSolidCategory } from "react-icons/bi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaMobileScreen } from "react-icons/fa6";
import { PiDeviceMobileLight } from "react-icons/pi";
import { TiPrinter } from "react-icons/ti";
import { CiCreditCard1 } from "react-icons/ci";
import { PiCashRegister } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";



export default function Category() {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='w-full  h-auto flex items-center border-b-1 border-gray-400 m-12'>
                <ul className='flex'>

                    <button className='flex items-center justify-center gap-2 m-2 border-1 p-3 rounded-xl hover:text-white hover:bg-black transition-all duration-150 hover:text-white hover:bg-black transition-all duration-150'>
                        <BiSolidCategory className='text-2xl' />
                        <p className='text-md font-bold'>Tüm Ürünler</p>
                    </button>

                    <button className='flex items-center justify-center gap-2 m-2 border-1 p-3 rounded-xl hover:text-white hover:bg-black transition-all duration-150'>
                        <PiDeviceMobileLight className='text-2xl' />
                        <p className='text-md font-bold'>Kioks</p>

                    </button>

                    <button className='flex items-center justify-center gap-2 m-2 border-1 p-3 rounded-xl hover:text-white hover:bg-black transition-all duration-150'>
                        <HiMiniComputerDesktop className='text-2xl' />
                        <p className='text-md font-bold'>RGT Bilgisayarlar</p>

                    </button>

                    <button className='flex items-center justify-center gap-2 m-2 border-1 p-3 rounded-xl hover:text-white hover:bg-black transition-all duration-150'>
                        <FaMobileScreen className='text-2xl' />
                        <p className='text-md font-bold'>El Terminali</p>
                    </button>

                    <button className='flex items-center justify-center gap-2 m-2 border-1 p-3 rounded-xl hover:text-white hover:bg-black transition-all duration-150'>
                        <CiCreditCard1 className='text-2xl' />
                        <p className='text-md font-bold'>Pos Cihazı</p>
                    </button>

                    <button className='flex items-center justify-center gap-2 m-2 border-1 p-3 rounded-xl hover:text-white hover:bg-black transition-all duration-150'>
                        <TiPrinter className='text-2xl' />
                        <p className='text-md font-bold'>Yazıcı</p>
                    </button>

                    <button className='flex items-center justify-center gap-2 m-2 border-1 p-3 rounded-xl hover:text-white hover:bg-black transition-all duration-150'>
                        <PiCashRegister className='text-2xl' />
                        <p className='text-md font-bold'>Yazar Kasa</p>
                    </button>

                    <button className='flex items-center justify-center gap-2 m-2 border-1 p-3 rounded-xl hover:text-white hover:bg-black transition-all duration-150'>
                        <FaWifi className='text-2xl' />
                        <p className='text-md font-bold'>Modem</p>
                    </button>

                </ul>

            </div>
        </div>
    )
}
