/* eslint-disable react/prop-types */
import Logo from "../global/Logo";

function Banner({ image, text, bgColor ,logoColor}) {
    return (
        <div className={`bg-${bgColor} flex justify-center items-center flex-col gap-8`}>
            <div className="absolute top-[5%] left-[5%]">
                <Logo logoColor={logoColor} />
            </div>
            <h1 className="text-[40px] font-bold text-white font-lato">{text}</h1>
            <img src={image} alt="Banner" loading="lazy" />
        </div>
    );
}

export default Banner;
