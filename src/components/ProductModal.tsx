// components/ProductModal.tsx
"use client";

import React from "react";
import { Product } from "@/context/ProductContext";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

interface Props {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: Props) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl relative shadow-lg">
        <button
          className="absolute top-3 right-3 text-xl text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <IoClose />
        </button>
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-sm text-gray-500 mb-4">Kategori: {product.category}</p>
        <Image
          src={product.image}
          alt={product.name}
          width={800}
          height={500}
          layout="responsive"
          className="rounded"
        />
        <p className="mt-4 text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}
