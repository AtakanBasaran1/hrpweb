import React from 'react'
import Image from 'next/image';
export default function LogoSection() {
    return (
        <div className='w-full pt-12 pb-24 flex items-center justify-center'>


            <Image
                className='cursor-pointer'
                src="/images/regeditlogo2.png" alt="Logo"
                width={400}
                height={500}
            />

        </div>
    )
}
