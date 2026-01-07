'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

interface LazyImageProps extends Omit<ImageProps, 'src'> {
  src?: string | null | any;
  blurSrc?: string;
}

export default function LazyImage({ 
  src, 
  alt, 
  blurSrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwM4li8XRAAAAABJRU5ErkJggg==", 
  className,
  ...props 
}: LazyImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // KRİTİK DÜZELTME: Gelen yolu Next.js'in istediği formata sokuyoruz
  const getCleanSrc = () => {
    if (error || !src || typeof src !== 'string' || src.trim() === "") {
      return "/next.svg"; // Yedek resim
    }

    const trimmedSrc = src.trim();

    // Eğer yol "http" ile başlamıyorsa ve başında "/" yoksa, başına "/" ekle
    if (!trimmedSrc.startsWith('http') && !trimmedSrc.startsWith('/')) {
      return `/${trimmedSrc}`;
    }

    return trimmedSrc;
  };

  const finalSrc = getCleanSrc();

  useEffect(() => {
    setIsLoading(true);
    setError(false);
  }, [src]);

  return (
    <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
      <Image
        {...props}
        src={finalSrc}
        alt={alt || "product-image"}
        placeholder="blur"
        blurDataURL={blurSrc}
        onLoad={() => setIsLoading(false)}
        onError={() => setError(true)}
        className={`
          transition-all duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl opacity-0' : 'scale-100 blur-0 opacity-100'}
          ${className || ''}
        `}
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}