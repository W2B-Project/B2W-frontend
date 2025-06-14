import { Link } from "react-router-dom"
import { csetup } from "../../assets/images/company setup/csetup"

function Footer() {
    return (
        <div className="flex items-center justify-between  flex-col px-6 w-full  bg-white rounded-[20px] py-4">
            <ul className="flex items-center justify-center gap-[70px] text-dark_gray">
                <li>
                    <Link
                        to="/about"
                        className="flex items-center text-base font-normal"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="/EditAccessability"
                        className="flex items-center text-base font-normal"
                    >
                        Services
                    </Link>
                </li>

                <li>
                    <Link
                        to="/EditAccessability"
                        className="flex items-center text-base font-normal"
                    >
                        More
                    </Link>
                </li>
            </ul>

            <div className="flex items-center justify-start  gap-1 mt-4">
                <img src={csetup.logo} alt="logo" className="w-5 h-5" />

                <p className="text-base font-normal text-dark_gray">
                    Copyright @ 2024 B2W Website.
                </p>
            </div>
        </div>
    )
}

export default Footer