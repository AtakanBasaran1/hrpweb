"use client";
import React from 'react'
import { Fade } from '@mui/material';
import Carousel from '@/components/services/Carousel';
import ShortBegining from '@/components/services/ShortBegining';
import ResponsiveCarousel from '@/components/services/ResponsiveCarousel';

export default function page() {
  return (
    <Fade in={true} timeout={500}>
      <div className='h-auto w-full flex flex-col justify-center sm:px-64 py-24'>
        <ShortBegining></ShortBegining>
        <div className="hidden md:block">
          <Carousel />
        </div>
        <div className="block md:hidden">
          <ResponsiveCarousel />
        </div>
      </div>
    </Fade>
  )
}
