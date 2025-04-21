'use client';
import { createContext, useContext, useState, ReactNode } from "react";


export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

interface ProductContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  products: Product[];
  filteredProducts: Product[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tüm Ürünler");

  const products: Product[] = [
    

    {
      id: 1, name: "Kioks",
      description: "EXAMPLE",
      image: "/images/kioks3.png", category: "Kioks"
    },


    {
      id: 2, name: "Kioks Masa Tipi",
      description: "EXAMPLE",
      image: "/images/hardware/kioks7.jpeg", category: "Kioks"
    },
    
    
    
    {
      id: 3, name: "Regedit Sektörel Pos Cihazı RGT-50",
      description: "Ekran boyutu: True Flat 15 Capacitive Touch Screen İşlemci: İntel Celeron J6412 Quad Core (Fansız) Ram: Kingston DDR4 8 GB. Kingston 128 GB M.2 Sata - Dahili Wifi - Dahili Hoparlör 6 Adet Usb Port(4 adet Usb 3.0, 2 adet Usb 2.0) • 1 Adet RJ11 (Para Çekmecesi Port) • 1 Adet VGA Port • 1 Adet Ethernet Port • 1 Adet Audio Port • 3 Adet ComPort • Harici Müşteri Göstergesi Portu • Harici Kart Okuyucu Portu",
      image: "/images/hardware/dual.JPG", category: "RGT Bilgisayarlar"
    },


    {
      id: 4, name: "Regedit Sektörel Pos Cihazı RGT-59",
      description:"Ekran boyutu: True Flat 18.5 Capacitive Touch Screen İşlemci: İntel Celeron J6412 Quad Core (Fansız) Ram: Kingston DDR4 8 GB.Kingston 128 gb M.2 Sata - Dahili Wifi - Dahili Hoparlör 6 Adet Usb Port(4 adet Usb 3.0, 2 adet Usb 2.0) • 1 Adet RJ11 (Para Çekmecesi Port) • 1 Adet VGA Port • 1 Adet Ethernet Port • 1 Adet Audio Port • 3 Adet ComPort • Harici Müşteri Göstergesi Portu • Harici Kart Okuyucu Portu",
      image: "/images/hardware/dual.JPG", category: "RGT Bilgisayarlar"
    },

    {
      id: 5, name: "Regedit Sektörel Android Pos Cihazı RGT-40A",
      description:"Ekran boyutu: True Flat 15,6 Capacitive Touch Screen İşlemci: RK 3568 Ram: DDR4 4 GB. EMMC FLASH 128 gb - Dahili Wifi - Dahili Hoparlör 6 Adet Usb Port(4 adet Usb 2.0, 2 adet Usb 3.0) • 1 Adet RJ11 (Para Çekmecesi Port) • 1 Adet Ethernet Port • 1 Adet Audio Port • 2 Adet ComPort • Harici Müşteri Göstergesi Portu • Harici Kart Okuyucu Portu",
      image: "/images/hardware/android.jpeg", category: "RGT Bilgisayarlar"
    },


    {
      id: 6, name: "Regedit Termal Yazıcı RGT-60",
      description:"80 mm Termal Printer; 203 DPI. YAZDIRMA HIZI: 230mm/s USB+ETHERNET Port - Metal Termal Kafa",
      image: "/images/hardware/yazici.png", category: "Yazıcı"
    },



    {
      id: 7, name: "Regedit Para Çekmecesi RGT-80",
      description:"5 Kağıt/8 Bozuk Para Haznesi. RJ11 1.5 m Kablo 410x420x100mm",
      image: "/images/hardware/rgt-80c.jpg", category: "Yazar Kasa"
    },

    {
      id: 8, name: "Regedit Müşteri Göstergesi RGT-90",
      description:"9,7 Lcd Ekran",
      image: "/images/hardware/dual2.JPG", category: "RGT Bilgisayarlar"
    },

    {
      id: 9, name: "Regedit Mobil Terminal RGT-70",
      description:"İşlemci: Qualcomm MSM8916 @ 1.2GHz Quad-Core APQ8016. İşlemci Hız:1.2 GHz Ram: 2 GB - Bellek:16 GB Ekran Boyut:5.0 - Ekran Çözünürlük:720x1280 Batarya: 4000 mAh NFC.IP67’yi destekleyen zorlu çalışma koşullarına yüksek performans Capacitive dokunmatik ekranla; Geniş görüş açısı ve gün ışığında okuma kolaylığı Darbeye karşı yüksek dayanıklılık.",
      image: "/images/hardware/elterminali2.png", category: "El Terminali"
    },
    

    {
      id: 10, name: "Profilo S900 Yazarkasa",
      description:"Yeni Nesil ÖKC Pos Yazılım sistemleri ile entegre çalışı",
      image: "/images/hardware/profilos900.png", category: "Pos Cihazı"
    },

    {
      id:11, name: "Profilo S900 Yazarkasa",
      description:"Yeni Nesil ÖKC Pos Yazılım sistemleri ile entegre çalışı",
      image: "/images/hardware/ingenico.jpg", category: "Pos Cihazı"
    },


    {
      id: 12, name: "Acces Point",
      description:"300 Mbps, Merkezi Yönetim Platformu, Tavan Montajlı ,Toz Koruyuculu Tasarım",
      image: "/images/hardware/profilos900.png", category: "Bağlantı"
    },


    {
      id: 13, name: "Ubiquiti UniFi AC Lite",
      description:"example",
      image: "/images/hardware/aclite.png", category: "Bağlantı"
    },


  ];

  const filteredProducts = selectedCategory === "Tüm Ürünler"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <ProductContext.Provider value={{ selectedCategory, setSelectedCategory, products, filteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProduct must be used within a ProductProvider");
  return context;
};