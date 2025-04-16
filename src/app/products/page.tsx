import Begining from '@/components/products/Begining'
import React from 'react'
import { Fade } from '@mui/material';
import MiddleOfPage from '@/components/products/Middle-of-Page';

export default function page() {
  return (
    <Fade in={true} timeout={500}>
      <div>
        <Begining />
        <MiddleOfPage />
      </div>
    </Fade>
  )
}
