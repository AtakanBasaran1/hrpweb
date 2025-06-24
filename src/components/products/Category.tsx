import React from 'react';
import { BiSolidCategory } from "react-icons/bi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaMobileScreen } from "react-icons/fa6";
import { PiDeviceMobileLight } from "react-icons/pi";
import { TiPrinter } from "react-icons/ti";
import { CiCreditCard1 } from "react-icons/ci";
import { PiCashRegister } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { MdBarcodeReader } from "react-icons/md";
import { IoReceiptOutline } from "react-icons/io5";
import { useProduct } from '@/context/ProductContext';

export default function Category() {
  const buttonList = [
    { name: "Tüm Ürünler", icon: BiSolidCategory },
    { name: "Kioks", icon: PiDeviceMobileLight },
    { name: "POS Bilgisayarlar", icon: HiMiniComputerDesktop },
    { name: "Termal Yazıcı", icon: TiPrinter },
    { name: "Para Çekmecesi", icon: PiCashRegister },
    { name: "El Terminali", icon: FaMobileScreen },
    { name: "Pos Cihazı", icon: CiCreditCard1 },
    { name: "Bağlantı", icon: FaWifi },
    { name: "Barkod Okuyucular", icon: MdBarcodeReader },
    { name: "Yazar Kasa", icon: IoReceiptOutline },
  ];

  const { selectedCategory, setSelectedCategory } = useProduct();

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl border-b border-gray-200 px-2 py-3">
        <ul className="flex flex-nowrap gap-3 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-transparent md:justify-center md:overflow-x-visible">
          {buttonList.map((item, index) => {
            const Icon = item.icon;
            const isActive = selectedCategory === item.name;
            return (
              <li key={index} className="flex-shrink-0">
                <button
                  onClick={() => handleCategoryChange(item.name)}
                  className={`
                    flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg border
                    transition-all duration-200 shadow-sm min-w-[90px]
                    ${isActive
                      ? "bg-gradient-to-b from-blue-600 to-blue-400 text-white border-blue-600 shadow-md scale-105"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50 hover:text-blue-700"}
                  `}
                >
                  <Icon className={`text-2xl mb-1 ${isActive ? "text-white" : "text-blue-600"}`} />
                  <span className={`text-xs font-semibold tracking-tight ${isActive ? "text-white" : "text-gray-700"}`}>
                    {item.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}