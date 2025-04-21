export default function Begining() {
    return (
        <div className="h-screen flex flex-col items-center justify-center w-full bg-black overflow-hidden">
            <div className="h-auto">
                <h1 className="shadow-xl text-white text-center font-bold text-5xl sm:text-7xl p-9">
                    Restoranlarınızı <span className="text-purple-500">Geleceğe</span> <br />
                    Taşıyan Akıllı Çözümler
                </h1>

            </div>
            <div className="h-auto">
                <p className="shadow-xl text-gray-300 text-center font-bold text-lg sm:text-md">
                    Zincir restoran operasyonlarınızı tek bir sistemle yönetin, zamandan ve maliyetten tasarruf edin.
                </p>

            </div>
            <button
                className="bg-blue-900 rounded-full font-medium md:text-3xl text-xl text-white md:py-4 md:px-8 py-2 px-6 m-9 shadow-2xl shadow-white/30 hover:shadow-blue-700 duration-500 before:ease relative overflow-hidden hover:before:-translate-x-40  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 cursor-pointer "
                // style={{
                //     boxShadow: '0 4px 6px rgba(255, 255, 255, 0.2)' 
                // }}
            >
                Bizi Tanıyın
            </button>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-[400px] bg-[#8072FF] rounded-full blur-3xl opacity-50 pointer-events-none" />
        </div>
    );
}
