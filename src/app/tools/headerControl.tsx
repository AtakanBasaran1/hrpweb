'use client';

import { useEffect, useState } from "react"; 

  export default function HeaderControl({setShowHeader, setLastScrollY, lastScrollY}: {setShowHeader: React.Dispatch<React.SetStateAction<boolean>>, setLastScrollY: React.Dispatch<React.SetStateAction<number>>, lastScrollY: number}) {
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
        
        return () => {
          window.removeEventListener("scroll", handleScroll); 
        };
      }, [lastScrollY]);

      return (null);

  }
  
