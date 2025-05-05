import React, { useEffect, useState } from 'react'
import { BiSolidCategory } from "react-icons/bi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaMobileScreen } from "react-icons/fa6";
import { PiDeviceMobileLight } from "react-icons/pi";
import { TiPrinter } from "react-icons/ti";
import { CiCreditCard1 } from "react-icons/ci";
import { PiCashRegister } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { useProduct } from '@/context/ProductContext';
import { SiOnlyoffice } from "react-icons/si";

export default function Category() {
  const buttonList = [
    { name: "Tüm Ürünler", icon: BiSolidCategory },
    { name: "Kioks", icon: PiDeviceMobileLight },
    { name: "RGT Bilgisayarlar", icon: HiMiniComputerDesktop },
    { name: "Yazıcı", icon: TiPrinter },
    { name: "Para Çekmecesi", icon: PiCashRegister },
    { name: "El Terminali", icon: FaMobileScreen },
    { name: "Pos Cihazı", icon: CiCreditCard1 },
    { name: "Bağlantı", icon: FaWifi },
    { name: "Sarf Malzemeler", icon: SiOnlyoffice },
  ];


  const { selectedCategory, setSelectedCategory } = useProduct();

  // Kategori değiştirme fonksiyonu
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category); // Butona tıklanıldığında kategori ayarlanır
   
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full h-auto border-b border-gray-400 px-4 py-2 overflow-x-auto">
        <ul className="flex flex-nowrap gap-2">
          {buttonList.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index} className="flex-shrink-0">
                <button
                  onClick={() => handleCategoryChange(item.name)}
                  className={`flex items-center justify-center gap-2 border p-3 rounded-xl transition-all duration-150
                    ${selectedCategory === item.name
                      ? "bg-black text-white"
                      : "bg-white text-black hover:text-white hover:bg-black"}
                  `}
                >
                  <Icon className="text-2xl" />
                  <p className="text-sm font-bold">{item.name}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
  
}
