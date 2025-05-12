import Begining from '@/components/products/Begining'
import React from 'react'
import { Fade } from '@mui/material';
import MiddleOfPage from '@/components/products/Middle-of-Page';
import Category from '@/components/products/Category';
import SEO from '@/components/SEO';

export default function page() {
  return (
    <Fade in={true} timeout={500}>
      <div>
      <SEO 
        title="Ürünlerimiz | RegeditPos"
        description="RegeditPos olarak ürünlerimizin performansı ile öne çıkıyoruz."
        image="/images/regedit_logo.ico"
      />
        <Begining />
        <MiddleOfPage />
      
      </div>
    </Fade>
  )
}
