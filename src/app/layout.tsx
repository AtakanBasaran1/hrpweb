'use client'; 

import "./globals.css";
import { poppins } from '@/app/ui/fonts';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useState,useEffect } from "react";

import ScrollHide from "./tools/scrollHide"; 
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY <= 0) {
        setShowHeader(true); 
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(true);  
      } else {
        setShowHeader(false);  
      }
  
      setLastScrollY(currentScrollY);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  
  return (
    <html lang="en">
     <body className={`${poppins.className} antialiased bg-black text-white`}>
      <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <Navbar />
      </div>
 
      {children} 
      <Footer/>

      <ScrollHide /> 
    </body>
  </html>
  );
}
