'use client';

import "./globals.css";
import { poppins } from '@/app/ui/fonts';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import ScrollHide from "./tools/scrollHide";
import { ProductProvider } from "@/context/ProductContext";
import { usePathname, useSearchParams } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
   
  const pathname = usePathname();
  const searchParams = useSearchParams();
 
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
     
    const handleLoad = () => {
      setIsLoading(false);
    };
 
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('load', handleLoad);
    };
  }, [lastScrollY]);
 
  useEffect(() => { 
    setIsLoading(true);
     
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); 
    
    return () => clearTimeout(timer);
  }, [pathname, searchParams]); 

  return (
    <html>
      <body className={`${poppins.className} antialiased bg-black text-white`}>
        <ProductProvider>
          {isLoading && (
            <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
                <img src="/images/regedit_blue.png" className="w-48 "></img>
              </div>
            </div>
          )}
          
          <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
            <Navbar />
          </div>
          
          <div className={isLoading ? 'invisible' : 'visible'}>
            {children}
            <Footer />
            <ScrollHide />
          </div>
        </ProductProvider>
      </body>
    </html>
  );
}