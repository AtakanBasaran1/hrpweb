import React from 'react'
import { Fade } from '@mui/material';
export default function page() {
  return (
    <Fade in={true} timeout={500}>
      <div className='bg-gray-100 h-screen w-full flex items-center justify-center'>
        <div className='bg-white rounded-2xl shadow-xl w-[85%]'>

        </div>
      </div>
    </Fade>
  )
}
