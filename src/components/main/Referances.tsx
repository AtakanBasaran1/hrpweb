import ReferancesText from "../hooks/animations/ReferancesText";
function Referances() {
    const logos = [
        '1.png',
        '2.png',
        '3.png',
        '4.png',
        '5.jpg',
        '6.jpg',
        '7.png',
        '8.jpeg',
        '9.png',
        '10.jpg',
        '11.png',
        '12.png',
        '13.webp',

    ];
    return (
        <div className="h-auto w-full flex flex-col items-center">
           <ReferancesText/>
            <p className="text-gray-700 text-center text-sm sm:text-lg m-5">
                “Restoranını geleceğe taşıyan markalar bizimle çalışıyor.”
            </p>

            <div className="w-[85%] h-auto p-4 flex flex-wrap justify-center md:gap-4 gap-2 my-4">
                {logos.map((logo, i) => (
                    <div
                        key={i}
                        className="w-[13.5%] cursor-pointer min-w-[100px] aspect-square bg-white m-5 flex items-center justify-center"
                    >
                        <img
                            src={`/images/referances/${logo}`}
                            alt={`Referanslarımız ${i + 1}`}
                            className="max-w-full max-h-full object-contain md:grayscale grayscale-0 hover:grayscale-0 transition duration-150"
                        />
                    </div>
                ))}
            </div>




        </div>

    );
}
export default Referances;