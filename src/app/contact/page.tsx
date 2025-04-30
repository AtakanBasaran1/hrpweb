import React from 'react';
import { Fade } from '@mui/material';

import Form from '@/components/contact/form';
import Maps from '@/components/contact/google-maps';

export default function page() {
    return ( 
        <Fade in={true} timeout={500}>
                    <div className='bg-gray-100'>
                    <div className='w-full flex flex-col items-center sm:p-24 p-12 '>
                    <h1 className=" cursor-pointer text-7xl font-bold m-3 h-24 bg-gradient-to-r from-blue-600 via-sky-600 to-sky-300 text-transparent bg-clip-text">
                        İletişim
                    </h1>
                    <p className="sm:text-xl text-lg m-2 text-center text-gray-700">
                        "Bizimle İletişime Geçiniz." 
                    </p>
                </div>
                <Form />
                <Maps />
            </div>
        </Fade>

    );
}
