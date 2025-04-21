// components/ProductModal.tsx
"use client";

import React from "react";
import { Product } from "@/context/ProductContext";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { Fade } from '@mui/material';

interface Props {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: Props) {
  if (!isOpen || !product) return null;

  return (
    <Fade in={true} timeout={500}>

      <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur bg-black/40">

        <div className="bg-gray-100 rounded-lg p-6 w-full max-w-2xl relative shadow-lg">
       
        </div>

      </div>
    </Fade>

  );
}
