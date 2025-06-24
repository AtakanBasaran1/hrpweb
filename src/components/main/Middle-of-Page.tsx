"use client";
import Image from 'next/image'
import { FaAngleRight } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import TypingTitle from '../hooks/animations/TypingTitle';
import { motion } from 'framer-motion';
import AnimatedImage from '../hooks/animations/AnimatedImage';


export default function MiddleOfPage() {

    const router = useRouter();
    const handleProductPageRoute = () => {
        router.push("/products");
    };

    return (
        <div id='whitezone' className="h-auto w-full mb-24">

            <div className="text-center mx-9" style={{ marginTop: '60px' }}>
                <motion.h1
                    className="text-6xl font-bold m-3, mb-15"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    Ne Üretiyoruz?
                </motion.h1>
                <p className="text-md m-4 text-gray-700">RegeditPos olarak POS cihazlarından ödeme yazılımlarına kadar geniş bir yelpazede
                    müşterilerine çeşitlilik ve kalite sunuyoruz. <br /> <br className='inline sm:hidden' />
                    Güvenilir teknoloji ve sektördeki
                    deneyimimizle işletmelerin ödeme süreçlerini iyileştirmeyi hedefliyoruz.
                </p>
            </div>

            <div className="flex items-center mt-24 justify-center h-auto my-2 p-2">
                <div className='w-[95%] sm:w-[75%] sm:flex'>

                    <div className="sm:w-1/2 h-auto p-1 flex justify-center">
                        <Image
                            alt='Pos Cihazı'
                            className='cursor-pointer'
                            height={600}
                            width={400}
                            src='/images/hardware/kioks4.png'

                        />

                    </div>

                    <div className='sm:w-1/2 h-auto'>

                        <span className='text-2xl'>Kaliteli Kiosk Cihazlarımızla Tanışın!</span>


                        <p className="text-center sm:text-left">
                            Yüksek performanslı, dayanıklı ve kullanım kolaylığıyla öne çıkan cihazlarımız, restoran operasyonlarınızı hızlandırmak ve müşterilerinize kusursuz bir deneyim sunmak için tasarlandı. Kaliteden ödün vermeyen yapısıyla, uzun ömürlü ve güvenilir çözümler sunuyoruz.
                        </p>

                    </div>
                </div>

            </div>

            <div className="w-full h-auto gap-2">

                <div className='w-full h-auto flex justify-center items-center'>
                    <TypingTitle classNameProps='sm:text-6xl text-4xl text-center font-bold m-3 bg-gradient-to-r from-blue-900 via-sky-500 to-gray-400 text-transparent bg-clip-text' fullText="Her zaman bir adım önde olun!" />
                </div>

                <div className="flex items-center mt-24 justify-center h-auto my-2 p-2">

                    <div className="w-[95%] sm:w-[80%] flex flex-col-reverse sm:flex-row">
                        <div className="sm:w-[60%] flex justify-center h-auto">
                            <p
                                className='sm:text-left text-md m-4 sm:m-0'>

                                İşinizi bir adım öteye taşıyan kiosklar, el terminalleri ve donanım çözümlerimizle tanışın. Siparişten ödemeye tüm süreçleri hızlandıran bu cihazlar, personel yükünü azaltır, müşteri memnuniyetini artırır. Şık tasarımı ve sezgisel arayüzüyle kiosklarımız, self-servis deneyimini kolaylaştırır, markanızın teknolojik imajını güçlendirir.
                                Yazıcılar, para çekmeceleri ve diğer ekipmanlarla operasyonlarınızı uçtan uca optimize ediyor, zaman kazandırıyor, verimliliği artırıyoruz.


                                <br /><br />
                                <span className='bg-gradient-to-r from-gray-600 via-sky-500 to-blue-900 text-transparent bg-clip-text'>Bugünün ihtiyaçlarına, yarının çözümleriyle cevap veriyoruz.</span>

                                <button onClick={(e) => handleProductPageRoute()} className='mt-3 cursor-pointer hover:bg-blue-900 hover:text-white rounded-2xl py-2 px-4 flex items-center justify-center gap-2 bg-transparent border-1 border-black transition duration-300'>
                                    <p>Tüm Ürünler</p>
                                    <FaAngleRight />

                                </button>
                            </p>
                        </div>
                        <div className="sm:w-[40%] h-auto ">
                            <Image
                                alt='Kiokslar'
                                src='/images/hardware/dualtransparent2.png'
                                className='cursor-pointer p-6'
                                height={600}
                                width={1000}
                                layout='responsive'
                            />




                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

