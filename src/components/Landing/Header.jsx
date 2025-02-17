import { Link } from "react-router-dom"
import { useState } from "react"
import { Landingassets } from "../../assets/images/landing/landing"

function Header() {
    const [activeIndex, setActiveIndex] = useState(null)
    const texts = ["Home","Services","About Us","Contact Us"]
    return (
        <>
            <div className="border-gray-100 border-b-2 font-medium fixed w-full bg-white bg-opacity-75" >
                <div className="w-10/12 m-auto flex justify-between my-3 items-center" >
                    <img src={Landingassets.purplelogo} className="w-12 h-12" alt="logo" />
                    <div className="flex flex-row gap-5 items-start font-roboto">
                        {texts.map((text, index) => (
                            <a
                                href={`#${text}`}
                                key={index}
                                className={`cursor-pointer ${activeIndex === index ? "font-extrabold border-b-2 border-primry_purble text-primry_purble" : ""}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                {text}
                            </a>
                        ))
                        }
                    </div>
                    <div className="flex flex-row gap-5 items-start font-roboto">
                        <Link to='/signup' className="text-primry_purble border-2 border-primry_purble p-2 px-3 rounded-xl">Sign up</Link>
                        <Link to='/login' className="text-white rounded-xl p-2 px-4 bg-primry_purble border-2 border-primry_purble">Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header