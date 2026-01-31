import "./globals.css";

import { poppins } from "@/app/ui/fonts";

import { ProductProvider } from "@/context/ProductContext";

import ClientLayoutWrapper from "./ClientLayout";

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Elektrik-Elektronik Teknolojisi | Halil Rıfat Paşa MTAL",
  description: "Halil Rıfat Paşa Mesleki ve Teknik Anadolu Lisesi Elektrik-Elektronik Teknolojisi Bölümü - 9, 10, 11 ve 12. Sınıf eğitim programları hakkında bilgi",
  icons: "/regedit_logo.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProductProvider>
      <html lang="tr">
        <body className={`${poppins.className} antialiased bg-white text-gray-900 transition-colors duration-300`}>


          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </body>
      </html>
    </ProductProvider>
  );
}