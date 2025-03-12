import { NavLink } from "react-router-dom"
import Logo from "../global/Logo"
import profileImage from "../../assets/images/home/cca3d1cbd0af0cf081dd88cf66a24693.jpg"
import BellIcon from "../svg/company setup/BellIcon"
import SearchIcon from "../svg/company setup/SearchIcon"

function Header() {
    return (
        <div className="flex items-center justify-between py-3 shadow-sm mb-3">
            <div className="w-16 h-16 home_logo">
                <Logo logoColor="#7F00FF" />
            </div>
            <div className="flex gap-8">
                <NavLink className="text-base font-bold hover:text-primry_purble border-b-4 rounded-[4px] border-transparent hover:border-primry_purble transition-all" to="/">Home</NavLink>
                <NavLink className="text-base font-bold hover:text-primry_purble border-b-4 rounded-[4px] border-transparent hover:border-primry_purble transition-all" to="/Jobs">Jobs</NavLink>
                <NavLink className="text-base font-bold hover:text-primry_purble border-b-4 rounded-[4px] border-transparent hover:border-primry_purble transition-all" to="/Chats">Chats</NavLink>
                <NavLink className="text-base font-bold hover:text-primry_purble border-b-4 rounded-[4px] border-transparent hover:border-primry_purble transition-all" to="/Applied">Applied</NavLink>
            </div>
            <div className="flex items-center gap-4">
                <SearchIcon />
                <BellIcon />
                <NavLink to="/Profile">
                    <img className="w-10 h-10 rounded-full" src={profileImage} alt="" />
                </NavLink>
            </div>
        </div>
    )
}

export default Header
