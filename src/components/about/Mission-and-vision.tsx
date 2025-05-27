'use client';
import React, { useState } from 'react';

export default function MissionAndVision() {
    const [isVisionHovered, setIsVisionHovered] = useState(false);

    return (
        <div className="w-full sm:flex h-auto my-56"> 
            <div
                className={`sm:w-1/2 p-6 h-auto flex flex-col items-center justify-center transition-all duration-300 ${
                    isVisionHovered
                        ? 'bg-white text-black border border-[#0A0046]'
                        : 'bg-[#0A0046] text-white border border-[#0A0046]'
                }`}

                onClick={()=> setIsVisionHovered(false)}
            >
                <h1 className="text-6xl m-5 font-bold">Misyon</h1>
                <p>
                    RegeditPos olarak, POS cihazlarından ödeme yazılımlarına kadar uzanan ürün yelpazemizle işletmelerin ihtiyaçlarına akıllı, güvenilir ve kullanıcı dostu çözümler sunuyoruz. Deneyimimizi teknolojiyle birleştiriyor, her ölçekteki işletmenin operasyonel verimliliğini artırmak için çalışıyoruz. Amacımız; sadeleştiren sistemler, hızlandıran cihazlar ve güven veren bir iş ortaklığı ile her müşterimizin yanında olmak.
                </p>
            </div>
 
            <div
                className={`sm:w-1/2 p-6 h-auto flex flex-col items-center justify-center transition-all duration-300 ${
                    isVisionHovered
                        ? 'bg-[#0A0046] text-white border border-[#0A0046]'
                        : 'bg-white text-black border border-[#0A0046]'
                }`}
                onMouseEnter={() => setIsVisionHovered(true)}
                onMouseLeave={() => setIsVisionHovered(false)}
                onClick={()=> setIsVisionHovered(true)}
            >
                <h1 className="text-6xl m-5 font-bold">Vizyon</h1>
                <p>
                    Restoran ve hizmet sektöründe ödeme teknolojilerinde yeniliğin öncüsü olmak; işletmelere sadece bugünü değil, geleceği de kolaylaştıran çözümler sunarak sektöre yön vermek.
                </p>
            </div>
        </div>
    );
}
