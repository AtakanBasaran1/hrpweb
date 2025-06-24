import React from 'react';
import { Fade } from '@mui/material';

import Form from '@/components/contact/form';
import Maps from '@/components/contact/google-maps';
import Begining from '@/components/contact/Begining';

export default function page() {
    return ( 
        <Fade in={true} timeout={500}>
                    <div className='bg-gray-100'>
                    <div className='w-full flex flex-col items-center pt-0 '>
                                 <Begining/>

                </div>
                <Form />
                <Maps />
            </div>
        </Fade>

    );
}
