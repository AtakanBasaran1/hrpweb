import React from 'react';
import { Fade } from '@mui/material';
import Image from 'next/image'
import Begining from '@/components/about/Begining';
import MiddleOfPage from '@/components/about/Middle-of-Page';

export default function page() {
    return (

        <Fade in={true} timeout={500}>
            <div>
                <Begining />
                <MiddleOfPage />
            </div>
        </Fade>

    );
}
