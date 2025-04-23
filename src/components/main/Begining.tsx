export default function Begining() {
    return (
        <div className="h-screen flex flex-col items-center justify-center w-full bg-black overflow-hidden pt-[7lvh]">


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
            <button className="relative flex m-4 rounded-2xl py-3 px-5 items-center justify-center overflow-hidden md:bg-gray-600 bg-blue-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-blue-800 before:duration-500 before:ease-out hover:shadow-blue-800 hover:before:h-56 hover:before:w-56 duraiton-300">
                <span className="relative text-2xl z-10">Bizi Tanıyın</span>
            </button>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:w-[600px] h-[400px] bg-[#8072FF] rounded-full blur-3xl opacity-50 pointer-events-none" />
        </div>
    );
}
