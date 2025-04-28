'use client';
import { createContext, useContext, useState, ReactNode } from "react";

export interface ProductImage {
  img: string;
  default: boolean;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  image: ProductImage[];
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
      id: 1,
      name: "Kioks",
      description: "EXAMPLE",
      image: [
        { img: "/images/hardware/kioks33.png", default: true },
        { img: "/images/hardware/dual.JPG", default: true },
        { img: "/images/hardware/androidtransparent.png", default: false }],
      category: "Kioks"
    },
    {
      id: 2,
      name: "Kioks Masa Tipi",
      description: "EXAMPLE",
      image: [{ img: "/images/hardware/kioks2transparent.png", default: true }],
      category: "Kioks"
    },
    {
      id: 3,
      name: "Regedit Sektörel Pos Cihazı RGT-50",
      description: "Ekran boyutu: True Flat 15 Capacitive Touch Screen İşlemci: İntel Celeron J6412 Quad Core (Fansız) Ram: Kingston DDR4 8 GB. Kingston 128 GB M.2 Sata - Dahili Wifi - Dahili Hoparlör 6 Adet Usb Port(4 adet Usb 3.0, 2 adet Usb 2.0) • 1 Adet RJ11 (Para Çekmecesi Port) • 1 Adet VGA Port • 1 Adet Ethernet Port • 1 Adet Audio Port • 3 Adet ComPort • Harici Müşteri Göstergesi Portu • Harici Kart Okuyucu Portu",
      image: [
        { img: "/images/hardware/dualtransparent2.png", default: true },
        { img: "/images/hardware/androidtransparent.png", default: false }
      ],
      category: "RGT Bilgisayarlar"
    },
    {
      id: 4,
      name: "Regedit Sektörel Pos Cihazı RGT-59",
      description: "Ekran boyutu: True Flat 18.5 Capacitive Touch Screen İşlemci: İntel Celeron J6412 Quad Core (Fansız) Ram: Kingston DDR4 8 GB.Kingston 128 gb M.2 Sata - Dahili Wifi - Dahili Hoparlör 6 Adet Usb Port(4 adet Usb 3.0, 2 adet Usb 2.0) • 1 Adet RJ11 (Para Çekmecesi Port) • 1 Adet VGA Port • 1 Adet Ethernet Port • 1 Adet Audio Port • 3 Adet ComPort • Harici Müşteri Göstergesi Portu • Harici Kart Okuyucu Portu",
      image: [{ img: "/images/hardware/dualtransparent2.png", default: true }],
      category: "RGT Bilgisayarlar"
    },
    {
      id: 5,
      name: "Regedit Sektörel Android Pos Cihazı RGT-40A",
      description: "Ekran boyutu: True Flat 15,6 Capacitive Touch Screen İşlemci: RK 3568 Ram: DDR4 4 GB. EMMC FLASH 128 gb - Dahili Wifi - Dahili Hoparlör 6 Adet Usb Port(4 adet Usb 2.0, 2 adet Usb 3.0) • 1 Adet RJ11 (Para Çekmecesi Port) • 1 Adet Ethernet Port • 1 Adet Audio Port • 2 Adet ComPort • Harici Müşteri Göstergesi Portu • Harici Kart Okuyucu Portu",
      image: [{ img: "/images/hardware/androidtransparent.png", default: true }],
      category: "RGT Bilgisayarlar"
    },
    {
      id: 6,
      name: "Regedit Termal Yazıcı RGT-60",
      description: "80 mm Termal Printer; 203 DPI. YAZDIRMA HIZI: 230mm/s USB+ETHERNET Port - Metal Termal Kafa",
      image: [{ img: "/images/hardware/yazicitransparent.png", default: true }],
      category: "Yazıcı"
    },
    {
      id: 7,
      name: "Regedit Para Çekmecesi RGT-80",
      description: "5 Kağıt/8 Bozuk Para Haznesi. RJ11 1.5 m Kablo 410x420x100mm",
      image: [{ img: "/images/hardware/rgt-80ctransparent.png", default: true }],
      category: "Para Çekmecesi"
    },
    {
      id: 8,
      name: "Regedit Müşteri Göstergesi RGT-90",
      description: "9,7 Lcd Ekran",
      image: [{ img: "/images/hardware/dual2transparent.png", default: true }],
      category: "RGT Bilgisayarlar"
    },
    {
      id: 9,
      name: "Regedit Mobil Terminal RGT-70",
      description: "İşlemci: Qualcomm MSM8916 @ 1.2GHz Quad-Core APQ8016. İşlemci Hız:1.2 GHz Ram: 2 GB - Bellek:16 GB Ekran Boyut:5.0 - Ekran Çözünürlük:720x1280 Batarya: 4000 mAh NFC.IP67’yi destekleyen zorlu çalışma koşullarına yüksek performans Capacitive dokunmatik ekranla; Geniş görüş açısı ve gün ışığında okuma kolaylığı Darbeye karşı yüksek dayanıklılık.",
      image: [{ img: "/images/hardware/elterminali2.png", default: true }],
      category: "El Terminali"
    },
    {
      id: 10,
      name: "Profilo S900 Yazarkasa",
      description: "Yeni Nesil ÖKC Pos Yazılım sistemleri ile entegre çalışı",
      image: [{ img: "/images/hardware/profilos900.png", default: true }],
      category: "Pos Cihazı"
    },
    {
      id: 11,
      name: "INGENİCO",
      description: "example",
      image: [{ img: "/images/hardware/ingenicotransparent.png", default: true }],
      category: "Pos Cihazı"
    },
    {
      id: 12,
      name: "Acces Point",
      description: "300 Mbps, Merkezi Yönetim Platformu, Tavan Montajlı ,Toz Koruyuculu Tasarım",
      image: [{ img: "/images/hardware/accesstransparent.png", default: true }],
      category: "Bağlantı"
    },
    {
      id: 13,
      name: "Ubiquiti UniFi AC Lite",
      description: "example",
      image: [{ img: "/images/hardware/aclite2.png", default: true }],
      category: "Bağlantı"
    }
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
