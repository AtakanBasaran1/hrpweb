import React from 'react';
import { Fade } from '@mui/material';

import Form from '@/components/contact/form';
import Maps from '@/components/contact/google-maps';

export default function page() {
    return ( 
        <Fade in={true} timeout={500}>
            <div>
                <Form />
                <Maps />
            </div>
        </Fade>

    );
}
