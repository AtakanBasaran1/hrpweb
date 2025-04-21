import React from 'react';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Form () {
    return(
        <div className="w-full h-[90lvh] p-4 pt-[10lvh] justify-center flex">
            <div className="w-full h-full flex md:flex-row flex-col md:w-2/3">
                <div className="w-full h-full flex flex-col border border-[#123466] rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none rounded-tr-2xl px-6 py-8">
                    <p className="text-3xl text-[#123466] font-bold mb-4">İletişim Formu</p>
 
                    <div className='w-full grid grid-cols-2 gap-5 self-center'>
                        <div className="mb-4">
                            <label htmlFor="name" className="md:text-lg text-sm text-[#123466]">Adınız Soyadınız</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Adınızı girin" 
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md md:text-lg text-sm focus:outline-none focus:ring-2 ring-[#123466]-blue-500"
                            />
                        </div>
    
                        <div className="mb-4">
                            <label htmlFor="email" className="md:text-lg text-sm text-[#123466]">E-posta Adresiniz</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="E-posta adresinizi girin" 
                                className="w-full p-3 mt-2 border border-gray-300 rounded-md md:text-lg text-sm focus:outline-none focus:ring-2 ring-[#123466]-blue-500"
                            />
                        </div>
                    </div>
                    
 
                    <div className="mb-4">
                        <label htmlFor="subject" className="md:text-lg text-sm text-[#123466]">Konu</label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            placeholder="Konu girin" 
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md md:text-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#123466]-500"
                        />
                    </div>
 
                    <div className="mb-4">
                        <label htmlFor="message" className="md:text-lg text-sm text-[#123466]">Açıklama</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            placeholder="Mesajınızı yazın"  
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md md:text-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#123466] md:min-h-36 min-h-24"
                        ></textarea>
                    </div> 
                    <button 
                        type="submit" 
                        className="md:w-min bg-[#123466] text-white md:px-14 md:py-4 py-3 text-xl rounded-xl hover:bg-blue-600 transition duration-300"
                    >
                        Gönder
                    </button>
                </div>

                <div className="md:w-[35vw] w-full md:h-full flex flex-col border border-[#123466] bg-[#123466] md:rounded-tr-2xl md:rounded-bl-none rounded-bl-2xl rounded-br-2xl justify-around py-2">
                    <div className="text-white flex flex-col items-center px-10 text-center md:pt-8 pb-4 md:gap-4 gap-2">
                        <p className="md:text-4xl text-xl">Regedit Bilişim</p>
                        <p className='md:text-lg text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error laboriosam, officia accusamus aliquid nesciunt natus voluptas nam quam tempora blanditiis architecto facilis facere nulla praesentium. Est excepturi eveniet quo iste quas ullam odio earum, delectus ipsa labore facilis sunt blanditiis?</p>
                    </div>

                    {/* <div className='bg-amber-500 h-full justify-around flex flex-col'> */}
                    <div className='grid grid-cols-2 md:grid-cols-none md:h-full md:justify-around md:w-full md:flex md:flex-col'>
                        <div className="text-white flex flex-col items-center text-center mb-4 md:gap-4 gap-2">
                            <p className="md:text-4xl text-xl">Bize Ulaşın</p>
                            <div>
                                <p className='md:text-lg text-xs'>Adres: Regedit Ofis, İstanbul</p>
                                <p className='md:text-lg text-xs'>Telefon: +90 555 555 55 55</p>
                                <p className='md:text-lg text-xs'>E-posta: info@regedit.com</p>
                            </div>
                        
                        </div>

                        <div className="text-white flex flex-col items-center text-center mb-4 md:gap-4 gap-2">
                            <p className="md:text-4xl text-xl">Sosyal Medya</p>
                            <div className="flex space-x-4">
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className='md:text-5xl text-2xl' /> 
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className='md:text-5xl text-2xl' /> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}