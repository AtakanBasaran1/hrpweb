import React from 'react';
import { Fade } from '@mui/material';
import Image from 'next/image'
import Begining from '@/components/about/Begining';
import MiddleOfPage from '@/components/about/Middle-of-Page';
import MissionAndVision from '@/components/about/Mission-and-vision';
import LogoSection from '@/components/about/LogoSection';

export default function page() {
    return (

        <Fade in={true} timeout={500}>
            <div>


                
                <Begining />
                <MiddleOfPage />
                <MissionAndVision/>
                <LogoSection/>
            </div>
        </Fade>

    );
}
