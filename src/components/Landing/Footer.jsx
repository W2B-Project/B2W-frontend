import { assets } from "../../assets/icons/IconsAssets"
import { Landingassets } from "../../assets/images/landing/landing"

function Footer() {
    return (
        <>
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

export default Footer