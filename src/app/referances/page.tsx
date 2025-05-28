import React from 'react'
import { Fade } from '@mui/material';
import SEO from '@/components/SEO';
import Referances from '@/components/main/Referances';

export default function page() {
    return (
        <Fade in={true} timeout={500}>
            <div style={{marginTop:"100px"}}>
                <SEO
                    title="Referanslarımız | RegeditPos"
                    description="Restoranını geleceğe taşıyan markalar bizimle çalışıyor."
                    image="/images/regedit_logo.ico"
                />
                <Referances></Referances>


            </div>
        </Fade>
    )
}
