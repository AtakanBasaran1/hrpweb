"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/context/ProductContext";
import { IoClose } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { Fade } from '@mui/material';

interface Props {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (product) {
      const defaultIndex = product.image.findIndex(img => img.default);
      setCurrentImageIndex(defaultIndex !== -1 ? defaultIndex : 0);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === product.image.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.image.length - 1 : prev - 1
    );
  };

  return (
    <Fade in={true} timeout={500}>
      <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur bg-black/60">
        <button className="absolute top-3 right-3 text-3xl text-white hover:text-gray-400 transition" onClick={onClose}> 
          <IoClose className="cursor-pointer"/>
        </button>

        <div className="bg-white rounded-lg p-6 md:w-full md:max-w-7xl w-[90vw] shadow-xl gap-6 flex flex-col md:flex-row">
          <div className="md:w-1/2 w-full relative flex items-center justify-center">
            <img
              src={product.image[currentImageIndex].img}
              alt={product.name}
              className="rounded md:aspect-square object-cover md:w-112 w-full"
            />
 
            {product.image.length > 1 && (
              <>
                <button
                  className="absolute left-0 text-white p-4 md:p-6 rounded-full aspect-square cursor-pointer"
                  onClick={handlePrev}
                >
                  <FaArrowLeft className="md:text-2xl text-xl text-black"/>
                </button>
                <button
                  className="absolute right-0  text-white p-4 md:p-6 rounded-full aspect-square cursor-pointer"
                  onClick={handleNext}
                >
                  <FaArrowRight className="md:text-2xl text-xl text-black"/>
                </button>
              </>
            )}
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-4 justify-between">
           
            <div>
            <h2 className="md:text-3xl text-2xl font-bold text-gray-800">{product.name}</h2>
            <span className="md:text-sm text-sm font-medium text-gray-500">
              /{product.category}
            </span>
            <p className="md:text-md  text-gray-600 whitespace-pre-line">{product.description}</p>
            </div>
            <a href="/contact" className='mt-3 self-end float-right cursor-pointer hover:bg-[#123466] hover:text-white rounded-2xl py-2 px-4 flex items-center justify-center gap-2 bg-transparent border-1 border-[#123466] transition duration-300'>
              <p>İletişime Geç</p>
              <FaAngleRight />
            </a>
          
          </div>
        </div>
      </div>
    </Fade>
  );
}
