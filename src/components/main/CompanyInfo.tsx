
"use client";
import { FaAngleRight } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { GoShieldCheck } from "react-icons/go";
import { FaRegLightbulb } from "react-icons/fa6";
import { LuLayers3 } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";
import { HiOutlineTruck } from "react-icons/hi2";
import { useRouter } from "next/navigation";


export default function CompanyInfo() {
    const router=useRouter();
    const handleServicePageRoute = () => {
        router.push("/services"); 
    };

    return (
        <div className="h-auto w-full text-white mb-12">

            <div className="w-full h-auto p-12 sm:p-16 sm:flex items-center justify-center gap-3" style={{ background: '#0A0046' }}>

                <h1 className="text-8xl font-bold">
                    Neden <br />
                    Biz?
                </h1>
                <div className="gap-2 m-4">
                    <p>İşinizi gerçekten anlayan, pratik ve güvenilir çözümler sunan bir teknoloji ortağıyız. <br />
                        Süreçlerinizi sadeleştirir, operasyonel yükünüzü hafifletir ve her adımda yanınızda oluruz.
                    </p>
                    <button onClick={(e)=>handleServicePageRoute()} className='mt-3 float-right cursor-pointer hover:bg-white hover:text-black rounded-2xl py-2 px-4 flex items-center justify-center gap-2 bg-transparent border-1 border-white transition duration-300'>
                        <p>Hizmetlerimiz</p>
                        <FaAngleRight />
                    </button>
                </div>
            </div>



            <div className="mt-12 sm:w-auto w-full flex flex-wrap gap-4 p-3 sm:mx-24 justify-center ">

                <div className="sm:w-1/4 w-full rounded-3xl hover:rounded-sm border-2 border-blue-900 p-6 gap-2 text-black transition-all duration-150" style={{ color: '#0A0046' }} >
                    <IoRocketOutline className="text-6xl" />
                    <h1 className="text-md  font-bold my-3">Hızlı Yanıt</h1>
                    <p className="text-xs">Önceliğimiz müşterilerimize her durumda hızlı yanıt verip hızla çözüm üretmek.</p>
                </div>

                <div className="sm:w-1/4 w-full rounded-3xl hover:rounded-sm border-2 border-blue-900 p-6 gap-1 text-black transition-all duration-150" style={{ color: '#0A0046' }}>
                    <GoShieldCheck className="text-6xl" />
                    <h1 className="text-md font-bold my-3">Ürün Garantisi</h1>
                    <p className="text-xs">Ürünlerimiz firmamızın teknis servisinin garantisi altındadır.</p>
                </div>


                <div className="sm:w-1/4 w-full rounded-3xl hover:rounded-sm border-2 border-blue-900 p-6 gap-1 text-black transition-all duration-150" style={{ color: '#0A0046' }}>
                    <FaRegLightbulb className="text-6xl" />
                    <h1 className="text-md font-bold my-3">Kalıcı Çözümler</h1>
                    <p className="text-xs">Uçtan uca çözüm sunuyor, çözümlerimizin kalıcılığına önem gösteriyoruz.</p>
                </div>

                <div className="sm:w-1/4 w-full rounded-3xl hover:rounded-sm border-2 border-blue-900 p-6 gap-1 text-black transition-all duration-150" style={{ color: '#0A0046' }}>
                    <LuLayers3 className="text-6xl" />
                    <h1 className="text-md font-bold my-3">Geniş Ürün Portföyü</h1>
                    <p className="text-xs">Geniş ürün yelpazemiz ile, tüm ihtiyaçlarınızda yanınızdayız.</p>
                </div>
                <div className="sm:w-1/4 w-full rounded-3xl hover:rounded-sm border-2 border-blue-900 p-6 gap-1 text-black transition-all duration-150" style={{ color: '#0A0046' }}>
                    <VscTools className="text-6xl" />
                    <h1 className="text-md  font-bold my-3">Kurulum Hizmeti</h1>
                    <p className="text-xs">Projeleriniz baştan sonra anahtar teslim olacak şekilde tamamlanır.</p>
                </div>

                <div className="sm:w-1/4 w-full rounded-3xl hover:rounded-sm border-2 border-blue-900 p-6 gap-1 text-black transition-all duration-150" style={{ color: '#0A0046' }}>
                    <HiOutlineTruck className="text-6xl" />
                    <h1 className="text-md  font-bold my-3">Yerinde Teknik Servis</h1>
                    <p className="text-xs">Arızalı cihazlarınıza yerinde müdahale ediyor, operasyonunuzu aksatmıyoruz.</p>
                </div>


            </div>

            <div className="w-full flex items-center justify-center">
                <div className="w-[80%] my-24" style={{ background: '#0A0046', height: '1px' }}></div>


            </div>


        </div>
    );
}
