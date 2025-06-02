import React from 'react'
import Image from 'next/image';
import TiltImage from '../hooks/animations/TiltImage';

export default function LogoSection() {
    return (
        <div className='w-full flex items-center justify-center'>
            <TiltImage/>
        </div>
    )
}
