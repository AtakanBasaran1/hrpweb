import React from 'react';
import { Fade } from '@mui/material';
import Image from 'next/image'
import Begining from '@/components/about/Begining';
import MiddleOfPage from '@/components/about/Middle-of-Page';
import MissionAndVision from '@/components/about/Mission-and-vision';
// import LogoSection from '@/components/about/LogoSection';
import SEO from '@/components/SEO';

export default function page() {
    return (
        <Fade in={true} timeout={500}>
            <div>
                <SEO
                    title="Hakkımızda | Elektrik-Elektronik Teknolojisi - Halil Rıfat Paşa MTAL"
                    description="Halil Rıfat Paşa Mesleki ve Teknik Anadolu Lisesi Elektrik-Elektronik Teknolojisi Bölümü hakkında bilgi. Bölüm tarihçesi, misyon ve vizyon."
                    image="/hrp_logo.ico"
                />

                <Begining />    
                <MiddleOfPage />
                <MissionAndVision />
                {/* <LogoSection /> */}
            </div>
        </Fade>

    );
}
