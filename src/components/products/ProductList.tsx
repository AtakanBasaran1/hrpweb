"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import { useProduct } from '@/context/ProductContext';
import { Product } from '@/context/ProductContext';
import ProductModal from '../ProductModal';
import { Fade } from '@mui/material';




export default function ProductList() {
  const { filteredProducts } = useProduct();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = (product: Product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className='w-full flex items-center mb-48'>
      <div className='w-full h-auto flex flex-wrap justify-center m-12 gap-3'>
        {
          filteredProducts.map((product) => (
            <Fade  key={product.id} in={true} timeout={800}>

            <div
             
              onClick={() => handleOpen(product)}
              className='sm:w-[32%] w-full cursor-pointer gap-2 shadow bg-gray-100 rounded flex flex-col items-center p-5'
            >
              <span className='text-gray-600 text-md w-full'>/{product.category}</span>
              <span className='text-2xl font-bold w-full'>{product.name}</span>
              <button className='w-full cursor-pointer mb-3 text-sky-600 flex gap-2 hover:gap-3 items-center transition-all duration-150'>
                <p>İncele</p>
                <IoIosArrowForward />
              </button>
              <Image
                src={product.image}
                alt={product.name}
                width={1000}
                height={600}
                layout="responsive"
              />
            </div>
            </Fade>
          ))
        }
      </div>

      {/* Popup modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={handleClose}
      />
    </div>
  );
}

