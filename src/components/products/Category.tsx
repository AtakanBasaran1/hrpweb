import React from 'react'
import { BiSolidCategory } from "react-icons/bi";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaMobileScreen } from "react-icons/fa6";
import { PiDeviceMobileLight } from "react-icons/pi";
import { TiPrinter } from "react-icons/ti";
import { CiCreditCard1 } from "react-icons/ci";
import { PiCashRegister } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { useProduct } from '@/context/ProductContext';

export default function Category() {
  const buttonList = [
    { name: "Tüm Ürünler", icon: BiSolidCategory },
    { name: "Kioks", icon: PiDeviceMobileLight },
    { name: "RGT Bilgisayarlar", icon: HiMiniComputerDesktop },
    { name: "El Terminali", icon: FaMobileScreen },
    { name: "Pos Cihazı", icon: CiCreditCard1 },
    { name: "Yazıcı", icon: TiPrinter },
    { name: "Yazar Kasa", icon: PiCashRegister },
    { name: "Bağlantı", icon: FaWifi },
  ];

  const { setSelectedCategory } = useProduct();

  // Kategori değiştirme fonksiyonu
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category); // Butona tıklanıldığında kategori ayarlanır
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full h-auto flex items-center border-b-1 border-gray-400 m-12">
        <ul className="flex">
          {buttonList.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <button
                  onClick={() => handleCategoryChange(item.name)} // Butona tıklanıldığında kategori seçilir
                  className="flex items-center justify-center gap-2 m-2 border-1 p-3 rounded-xl hover:text-white hover:bg-black transition-all duration-150"
                >
                  <Icon className="text-2xl" />
                  <p className="text-sm font-bold"> {item.name}</p>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
