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
      description: "Doyuyo Adana Turgut Özal Bulvarı Kiosk ve Pos Sistem Projesi ",
      image: "/images/adana123.png",
    },

    {
      id: 3,
      description: "21.5” Tabletop Kiosk Ürünümüz",
      image: "/images/services/image.png",
    },

    {
      id: 4,
      description: "Doyuyo Marmara Forum Avm Kiosk ve Pos Sistem Projesi",
      image: "/images/services/servicesphoto1.jpg",
    },


    {
      id: 5,
      description: "Green Salads Tema World Avm Kiosk Kurulumu",
      image: "/images/services/servicesphoto2.jpg",
    },


    {
      id: 6,
      description: "Sofra Grup Şekerbank Cafe Kurulumu",
      image: "/images/services/servicesphoto3.jpg",
    },

    {
      id: 7,
      description: "Burger Yiyelim Aqua Florya Avm Kurulumu",
      image: "/images/services/servicesphoto4.jpg",
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
      description: "21,5' MASAÜSTÜ KIOSK INTELJ6412 CPU (Fan Yok), KINGSTON 8G DDR4 RAM, KINGSTON 128G (M2)SSD, WIN10 İşletim Sistemi, USB, WIFI, LAN Modül: QR-Kod Okuyucu, Epson Termal Yazıcı, POS Bağlantı Aparatı.",
      image: [
        { img: "/images/hardware/kioks2transparent.png", default: true },
        { img: "/images/hardware/kioks15.jpg", default: false },
        { img: "/images/hardware/kioks16.jpg", default: false },

      ],
      category: "Kioks"
    },
    {
      id: 3,
      name: "Regedit Sektörel Pos Cihazı RGT-50",
      description: "Ekran boyutu: True Flat 15 Capacitive Touch Screen İşlemci: İntel Celeron J6412 Quad Core (Fansız) Ram: Kingston DDR4 8 GB. Kingston 128 GB M.2 Sata - Dahili Wifi - Dahili Hoparlör 6 Adet Usb Port(4 adet Usb 3.0, 2 adet Usb 2.0) • 1 Adet RJ11 (Para Çekmecesi Port) • 1 Adet VGA Port • 1 Adet Ethernet Port • 1 Adet Audio Port • 3 Adet ComPort • Harici Müşteri Göstergesi Portu • Harici Kart Okuyucu Portu",
      image: [
        { img: "/images/hardware/new_hardware/window/rgt1.png", default: true },
        { img: "/images/hardware/new_hardware/window/rgt2.png", default: false },
        { img: "/images/hardware/new_hardware/window/rgt3.png", default: false },
        { img: "/images/hardware/new_hardware/window/rgt4.png", default: false },
        { img: "/images/hardware/new_hardware/window/rgt5.png", default: false },
        { img: "/images/hardware/new_hardware/window/rgt6.png", default: false },



      ],
      category: "POS Bilgisayarlar"
    },

    {
      id: 4,
      name: "Regedit Sektörel Android Pos Cihazı RGT-40A",
      description: "Ekran boyutu: True Flat 15,6 Capacitive Touch Screen İşlemci: RK 3568 Ram: DDR4 4 GB. EMMC FLASH 128 gb - Dahili Wifi - Dahili Hoparlör 6 Adet Usb Port(4 adet Usb 2.0, 2 adet Usb 3.0) • 1 Adet RJ11 (Para Çekmecesi Port) • 1 Adet Ethernet Port • 1 Adet Audio Port • 2 Adet ComPort • Harici Müşteri Göstergesi Portu • Harici Kart Okuyucu Portu",
      image: [{ img: "/images/hardware/androidtransparent.png", default: true }],
      category: "RGT Bilgisayarlar"
    },
    {
      id: 5,
      name: "Regedit Termal Yazıcı RGT-60",
      description: "80 mm Termal Printer; 203 DPI. YAZDIRMA HIZI: 230mm/s USB+ETHERNET Port - Metal Termal Kafa",
      image: [
        { img: "/images/hardware/yazicitransparent.png", default: true },
        { img: "/images/hardware/printer2.png", default: false }


      ],
      category: "Termal Yazıcı"
    },
    {
      id: 6,
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
      id: 7,
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
      name: "INGENİCO",
      description: " Temassız, çipli ve manyetik kart desteği, hızlı işlemci ile yüksek işlem hızı, geniş ve dokunmatik ekran, dahili yazıcı, Wi-Fi, 4G ve Bluetooth bağlantı seçenekleri (modeline göre değişir), sağlam ve şık tasarım, restoran, mağaza ve saha satışları için uygundur.",
      image: [{ img: "/images/hardware/ingenicotransparent.png", default: true }],
      category: "Pos Cihazı"
    },

    {
      id: 11,
      name: "Acces Point",
      description: " 802.11ac Dual Band (2.4GHz & 5GHz), 2.4GHz’de 300 Mbps ve 5GHz’de 867 Mbps hız, yaklaşık 122 metre kapsama alanı, 1 adet Gigabit Ethernet portu, 802.3af PoE desteği (adaptör dahil değildir), duvar ve tavan montajına uygun, iç mekan kullanımına uygundur, UniFi Controller ile merkezi yönetim.",
      image: [{ img: "/images/hardware/aclite2.png", default: true }],
      category: "Bağlantı"
    },
    {
      id: 12,
      name: "1D/2D Lazer Kablolu/Kablosuz Barkod Okuyucu",
      description: "1D veya 2D barkod okuma seçenekleri, kablolu (USB) veya kablosuz (Bluetooth) modeller, yüksek okuma hızı ve hassasiyet, dayanıklı ve ergonomik tasarım, otomatik tarama modu, perakende, depo ve lojistik kullanımına uygundur.",
      image: [{ img: "/images/hardware/barcode.png", default: true }],
      category: "Barkod Okuyucular"
    },

      {
      id: 13,
      name: "Pavo UN20",
      description: "İşletim Sistemi: Android 11.0, İşlemci: 2.0  GHZ Quad-Core Cortex  A53 Güvenlik Çipi İşlemci, Hafıza: 2GB Ram+8GB Flash, İletişim: 4G, Wi-Fi, LAN, Bluetooth, Bağlantı: 1 x USB Type-A, 1 x USB Type-C, 1 x LAN, 2 x RS232, 1 x MDB Master & Executive, 1 x MDB Slave 1,  x Digital I/O, 1 x SMA, Kamera: Üst Kamera 2mp, Alt Kamera 2mp, Ekran: 5.0” HD 1280×720 Renkli LCD Kapasitif Dokunmatik Ekran, E-imza Destekler), Ölçüler/Ağırlık: 146*101*57mm Kesme Boyutu: 108.7mm*86.4mm, Sertifikalar: PCI 6.x, EMV L1&L2, EMV CL1, QPBOC L1, Quickpass, Paypass, Paywave, TQM, JCB, Discover, Amex. IP65, IK08, ATEX, CE, RoHS, Çevresel: Çalışma Sıcaklığı : -20°C – 70°C , Depolama Sıcaklığı : -30°C – 80°C, Nem: 10% – 95% (Yoğuşmasız), Su Geçirmez ve Toz Geçirmez: Match IP65 Standartı.",
      image: [{ img: "/images/hardware/un20.png", default: true }],
      category: "Yazar Kasa"
    },
     {
      id: 14,
      name: "Pavo N86",
      description: "İşletim Sistemi: Android 9.0, İşlemci: Quad-Core işlemcili Güvenlik Çipi, Hafıza: 2GB Ram+16GB Flash, İletişim: 4G/3G/2G, Wi-Fi, Bluetooth, Lokasyon: GPS, GLONASS, BEIDOU, Yazıcı: Yüksek Hızlı Termal Yazıcı Kağıt Rulo Genişliği: 58mm Çap:40mm, Kamera: Arka Kamera 5mp, AF, Flash 2MB FF(Opsiyonel), Ön Kamera: 2MP, FF(Opsiyonel) Barkod, Okuyucu 1D & 2D, Pil: 2600mAh Şarj edilebilir Li-on Pil, Ekran:5.0” HD 1280×720 Renkli LCD Kapasitif Dokunmatik Ekran, E-imza Destekler), Ölçüler/Ağırlık: 194 mm Ux82 mm Gx68mm Y 417g (Pil Dahil), Güvenlik: PCI5, UPTS 2.0 Onaylı.",
      image: [{ img: "/images/hardware/n86.png", default: true }],
      category: "Yazar Kasa"
    },
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
