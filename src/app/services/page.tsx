"use client";
import React from 'react'
import { Fade } from '@mui/material';
import Carousel from '@/components/services/Carousel';



export default function page() {
  return (
    <Fade in={true} timeout={500}>
      <div className='h-screen w-full flex items-center justify-center'>
        <Carousel></Carousel>
      </div>
    </Fade>
  )
}
