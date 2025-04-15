export default function Begining() {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-black overflow-hidden">
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
                className="before:ease relative overflow-hidden shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40 bg-blue-900 cursor-pointer h-auto py-2 px-4 m-9 rounded-3xl shadow-2xl font-bold text-2xl text-white"
                style={{
                    boxShadow: '0 4px 6px rgba(255, 255, 255, 0.3)' // Beyaz gölge
                }}
            >
                Bizi Tanıyın
            </button>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#8072FF] rounded-full blur-3xl opacity-50 pointer-events-none" />
        </div>
    );
}
