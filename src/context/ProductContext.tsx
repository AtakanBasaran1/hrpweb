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


export interface Post {
  id: number;
  description: string;
  image: string;
}


interface ProductContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  products: Product[];
  filteredProducts: Product[];
  services_posts: Post[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tüm Ürünler");

  const services_posts: Post[] = [
    {
      id: 1,
      description: "Doyuyo Bursa Anatolium Avm Kiosk ve Pos Sistem Kurulumu",
      image: "/images/services1.jpeg",
    },
    {
      id: 2,
      description: "Green Salads Tema World Avm Kiosk Kurulumu",
      image: "/images/services2.jpeg",
    },
    {
      id: 3,
      description: "Doyuyo Marmara Forum Avm Kiosk ve Pos Sistem Projesi ",
      image: "/images/services3.jpeg",
    },

    {
      id: 4,
      description: "Doyuyo Adana Turgut Özal Bulvarı Kiosk ve Pos Sistem Projesi ",
      image: "/images/doyuyoadana.jpeg",
    },
    {
      id: 5,
      description: "21.5” Tabletop Kiosk Ürünümüz",
      image: "/images/services5.png",
    },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Kioks",
      description: "27' STAND KİOSKU INTELJ6412 CPU (No Fan), KINGSTON 8G DDR4 RAM, KINGSTON 128G (M2)SSD, WIN10 OS, USB, WIFI, LAN Modül: QR- Kod Okuyucu, Epson Termal Yazıcı, POS Bağlantı Aparatı, Numaratör ve Pos Bağlantısı Özel Olarak Tasarlanmış Numaratör Aparatı ve Pos Cihazı Bağlantı Aparatı (Tüm Pos Cihazlarına Uyumlu), Kilitli Açılır Ön Panel. Yüksek Kalite Ekran Kapasitif Dokunmatik Ekran 1920*1080, Yüksek Çözünürlük ve 700nits Parlaklık. 21,5' MASAÜSTÜ KIOSK INTELJ6412 CPU (Fan Yok), KINGSTON 8G DDR4 RAM, KINGSTON 128G (M2)SSD, WIN10 İşletim Sistemi, USB, WIFI, LAN Modül: QR-Kod Okuyucu, Epson Termal Yazıcı, POS Bağlantı Aparatı.",
      image: [
        { img: "/images/hardware/kioks33.png", default: true },
        { img: "/images/hardware/kioks2.png", default: false },
        { img: "/images/hardware/kioks12.jpg", default: false },
        { img: "/images/hardware/kioks13.jpg", default: false },
        { img: "/images/hardware/kioks14.jpg", default: false },


      ],
      category: "Kioks"
    },
    {
      id: 2,
      name: "Kioks Masa Tipi",
      description: "example",
      image: [
        { img: "/images/hardware/kioks2transparent.png", default: true },
        { img: "/images/hardware/kioks15.jpg", default: true },
        { img: "/images/hardware/kioks16.jpg", default: true },

      ],
      category: "Kioks"
    },
    {
      id: 3,
      name: "Regedit Sektörel Pos Cihazı RGT-50",
      description: "Ekran boyutu: True Flat 15 Capacitive Touch Screen İşlemci: İntel Celeron J6412 Quad Core (Fansız) Ram: Kingston DDR4 8 GB. Kingston 128 GB M.2 Sata - Dahili Wifi - Dahili Hoparlör 6 Adet Usb Port(4 adet Usb 3.0, 2 adet Usb 2.0) • 1 Adet RJ11 (Para Çekmecesi Port) • 1 Adet VGA Port • 1 Adet Ethernet Port • 1 Adet Audio Port • 3 Adet ComPort • Harici Müşteri Göstergesi Portu • Harici Kart Okuyucu Portu",
      image: [
        { img: "/images/hardware/dualtransparent2.png", default: true },
      ],
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
      image: [
        { img: "/images/hardware/yazicitransparent.png", default: true },
        { img: "/images/hardware/printer2.png", default: false }


      ],
      category: "Termal Yazıcı"
    },
    {
      id: 7,
      name: "Regedit Para Çekmecesi RGT-80",
      description: "5 Kağıt/8 Bozuk Para Haznesi. RJ11 1.5 m Kablo 410x420x100mm",
      image: [
        { img: "/images/hardware/rgt-80ctransparent.png", default: true },
        { img: "/images/hardware/new_hardware/cekmece1.png", default: false },
        { img: "/images/hardware/new_hardware/cekmece2.png", default: false },
      ],
      category: "Para Çekmecesi"
    },
    {
      id: 8,
      name: "Regedit Müşteri Göstergesi RGT-90",
      description: "9,7 Lcd Ekran",
      image: [
        { img: "/images/hardware/dual2transparent.png", default: true },
        { img: "/images/hardware/new_hardware/mg1.png", default: false },
        { img: "/images/hardware/new_hardware/mg2.png", default: false },
        { img: "/images/hardware/new_hardware/mg3.png", default: false },
        { img: "/images/hardware/new_hardware/mg4.png", default: false },





      ],
      category: "RGT Bilgisayarlar"
    },
    {
      id: 9,
      name: "Regedit Mobil Terminal RGT-70",
      description: "İşlemci: Qualcomm MSM8916 @ 1.2GHz Quad-Core APQ8016. İşlemci Hız:1.2 GHz Ram: 2 GB - Bellek:16 GB Ekran Boyut:5.0 - Ekran Çözünürlük:720x1280 Batarya: 4000 mAh NFC.IP67’yi destekleyen zorlu çalışma koşullarına yüksek performans Capacitive dokunmatik ekranla; Geniş görüş açısı ve gün ışığında okuma kolaylığı Darbeye karşı yüksek dayanıklılık.",
      image: [
        { img: "/images/hardware/new_hardware/mobilett.png", default: true },
        { img: "/images/hardware/new_hardware/mobilett2.png", default: false }

      ],
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
    },
    {
      id: 14,
      name: "Corpex CR-9520 2D Lazer Kablosuz Barkod Okuyucu",
      description: "example",
      image: [{ img: "/images/hardware/barcode.png", default: true }],
      category: "Barkod Okuyucular"
    }
  ];


  const filteredProducts = selectedCategory === "Tüm Ürünler"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <ProductContext.Provider value={{ selectedCategory, setSelectedCategory, products, filteredProducts, services_posts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error("useProduct must be used within a ProductProvider");
  return context;
};
