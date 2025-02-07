import { Link } from "react-router-dom"
import { Landingassets } from "../assets/images/landing/landing"
import { assets } from "../assets/icons/IconsAssets"
import { useState } from "react"
function Landing() {
    const [activeIndex, setActiveIndex] = useState(null)
    const texts = ["Home","Services","About Us","Contact Us"]
    return (
        <>
            {/* header */}
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
            {/* hero section */}
            <div className="bg-herobg bg-no-repeat">
                <div className={`w-9/12 m-auto flex justify-between pt-36 pb-10 `} >
                    <div className="py-12 ">
                        <p className="text-[40px] leading-tight w-10/12 font-lato font-bold">Welcome to <span className="text-primry_purble">Bridge to Work:</span> Empowering abilities and opening opportunities for everyone.</p>
                        <p className="text-[#66666E] text-lg mt-5 font-roboto" id="Services">Where skills meet opportunity for a brighter tomorrow.</p>
                    </div>
                    <div className="">
                        <img src={Landingassets.header} alt="hero image" width={"1000rem"} />
                    </div>
                </div>
            </div>
                
            {/* serveies */}
            <div className="bg-[#f8f8f8] pb-5" >
                <p className="text-center font-lato py-5 font-bold text-4xl">Services</p>
                <div className=" w-4/6 ms-auto  bg-veryLight_purple rounded-s-full my-5">
                    <div className="w-3/4 m-auto flex flex-row items-center justify-end gap-10">
                        <p className="text-2xl w-1/2 font-lato font-medium">Have account showing your incredible skills and searching for jobs,people and companies</p>
                        <img src={Landingassets.service1} alt="service1" width={290} />
                    </div>
                </div>
                <div className=" w-4/6 bg-veryLight_purple rounded-e-full my-5">
                    <div className="w-3/4 m-auto flex flex-row items-center justify-start gap-10">
                        <img src={Landingassets.service2} alt="service2" width={290} />
                        <p className="text-2xl w-1/2 font-lato font-medium">Accsesability menu make you customize your view of app as you feel comfortable</p>
                    </div>
                </div>
                <div className=" w-4/6 ms-auto  bg-veryLight_purple rounded-s-full my-5">
                    <div className="w-3/4 m-auto flex flex-row items-center justify-end gap-10">
                        <p className="text-2xl w-1/2 font-lato font-medium">A positive community inspires you by seeing the life journeys of successful people.</p>
                        <img src={Landingassets.service3} alt="service3" width={290} />
                    </div>
                </div>
                <div className=" w-4/6 bg-veryLight_purple rounded-e-full my-5">
                    <div className="w-3/4 m-auto flex flex-row items-center justify-start gap-10">
                        <img src={Landingassets.service4} alt="service4" width={290} />
                        <p className="text-2xl w-1/2 font-lato font-medium" id="About Us">Ai features that help you in job searching process, in work environment and improving your skills</p>
                    </div>
                </div>
            </div>
            {/* About us */}
            <div className="w-10/12 m-auto pb-3" >
                <p className="text-center font-lato py-5 font-bold text-4xl">About us</p>
                <div className="flex flex-row items-center justify-around">
                    <div className="w-1/3">
                        <p className="font-lato text-3xl font-bold text-primry_purble">Bridge to Work,</p>
                        <p className="text-3xl font-lato font-bold">An Inclusive Job Platform for People with Special needs</p>
                        <p className="mt-7 text-[#66666E] text-lg">Creating a link between job seekers and companies and building a community that brings together people with special needs</p>
                    </div>
                    <img src={Landingassets.about} alt="about" width={400} />
                </div>
            </div>
            {/* footer */}
            <div className="bg-veryLight_purple">
                <div className="w-10/12 m-auto flex justify-between py-10">
                    <div className="flex flex-col gap-4">

                        <img src={Landingassets.purplelogo} alt="logo" width={100} />
                        <p className="text-dark_gray">Where Hope starts</p>
                        <div className="flex gap-2">
                            <img src={assets.google} alt="google" className="cursor-pointer" />
                            <img src={assets.apple} alt="apple" className="cursor-pointer"/>
                            <img src={assets.facebook} alt="facebook" className="cursor-pointer"/>
                        </div>
                        <p className="text-dark_gray">Copyright 2024 B2W Website. All Rights Reserved.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="font-bold mb-5">Pages</p>
                        <p className="text-dark_gray cursor-pointer">Home</p>
                        <p className="text-dark_gray cursor-pointer">Services</p>
                        <p className="text-dark_gray cursor-pointer">About Us</p>
                        <p className="text-dark_gray cursor-pointer">Contact Us</p>
                    </div>
                    <div className="flex flex-col gap-4 mb-5" id="Contact Us">
                        <p className="font-bold">Contact Us</p>
                        <div className="flex gap-3 cursor-pointer">
                            <img src={assets.mail} alt="mail" />
                            <p className="text-dark_gray">BridgeToWork1234@gmail.com</p>
                        </div>
                        <div className="flex gap-3 cursor-pointer">
                            <img src={assets.phone} alt="phone" />
                            <p className="text-dark_gray">000 000 000 000</p>
                        </div>
                        <div className="flex gap-3 cursor-pointer">
                            <img src={assets.location} alt="location" />
                            <p className="text-dark_gray">Egypt, Mansoura</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Landing