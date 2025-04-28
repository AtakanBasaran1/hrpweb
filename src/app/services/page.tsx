"use client";
import React from 'react'
import { Fade } from '@mui/material';
import Carousel from '@/components/services/Carousel';
import ShortBegining from '@/components/services/ShortBegining';


export default function page() {
  return (
    <Fade in={true} timeout={500}>
      <div className='h-auto w-full items-center justify-center px-64 py-24'>
        <ShortBegining></ShortBegining>
        <Carousel></Carousel>
      </div>
    </Fade>
  )
}
