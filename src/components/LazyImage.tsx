'use client';
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface LazyImageProps extends ImageProps {
  blurSrc?: string; 
}

export default function LazyImage({ blurSrc = '/images/blur.png', ...props }: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-auto">
      <Image
        {...props}
        placeholder="blur"
        blurDataURL={blurSrc}
        onLoadingComplete={() => setIsLoading(false)}
        className={`transition-opacity duration-500 ease-in-out ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } ${props.className || ''}`}
      />
    </div>
  );
}
