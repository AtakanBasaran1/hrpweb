'use client';

import Image from 'next/image';
import { useRef } from 'react';

const TiltImage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      className="w-fit [perspective:1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={ref}
        className="transition-transform duration-200 ease-out"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Image
          className="rounded-xl cursor-pointer"
          src="/images/regeditlogo2.png"
          alt="Logo"
          width={400}
          height={500}
        />
      </div>
    </div>
  );
};

export default TiltImage;
