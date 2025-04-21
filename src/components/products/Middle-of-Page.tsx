'use client';
import React, { useEffect } from 'react'
import Category from '@/components/products/Category';
import ProductList from './ProductList';
import { useProduct } from '@/context/ProductContext';

export default function MiddleOfPage() {
  useEffect(()=>{
    handleCategoryChange("Tüm Ürünler");

  },[]);

  const { setSelectedCategory } = useProduct();
 
      
  // Kategori değiştirme fonksiyonu
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category); // Butona tıklanıldığında kategori ayarlanır
  };

 
  return (
    <div className='h-auto w-full mt-24'>
      <Category></Category>
      <ProductList></ProductList>     
    </div>
  )

  

}
