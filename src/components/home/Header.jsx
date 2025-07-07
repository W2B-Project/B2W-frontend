import { NavLink, Link } from "react-router-dom";
import Logo from "../global/Logo";
import profileImage from "../../assets/images/home/cca3d1cbd0af0cf081dd88cf66a24693.jpg";
import BellIcon from "../svg/company setup/BellIcon";
import SearchIcon from "../svg/company setup/SearchIcon";
import { CompanyProAssets } from "../../Company/assests/companyAssets";
import { useContext } from "react";
import { SetupContext } from "../../context/SetupContext";
import { setup } from "../../assets/images/setup/setupAssets";

const navLinks = [
    { to: "/home/posts", label: "Home" },
    { to: "/home/jobs", label: "Jobs" },
    { to: "/home/chats", label: "Chats" },
    { to: "/home/applied", label: "Applied" },
];
const navLinksCompany = [
    { to: "/home-Company/applications", label: "Home" },
    { to: "/home-Company/PostJob", label: "Post Job" },
    { to: "/home-Company/chats", label: "Chats" },
];




function Header({ setService, usertype = 'employee' }) {
    const {Pic}=useContext(SetupContext)
    const currList = usertype === 'company' ? navLinksCompany : navLinks
    const linkClass = ({ isActive }) =>
        `text-base font-bold border-b-4 rounded-[4px] transition-all ${isActive ? "text-primry_purble border-primry_purble" : "text-black border-transparent hover:text-primry_purble hover:border-primry_purble"
        }`;

    return (
        <header className="flex items-center justify-between py-3 shadow-sm fixed w-full bg-white px-6 z-10">
            <div className="w-16 h-16">
                <Logo logoColor="#7F00FF" />
            </div>
            <nav className="flex gap-8">
                {currList.map(({ to, label }) => (
                    <NavLink key={to} to={to} className={linkClass} onClick={() => setService('')}>
                        {label}
                    </NavLink>
                ))}
            </nav>
            <div className="flex items-center gap-4">
                <SearchIcon />
                <BellIcon />
                        <Link to={`${usertype === 'company' ?'/companyProfile':'/userProfile' }`}>
                            <img className="w-10 h-10 rounded-full border border-gray-300 shadow-sm" loading="lazy" src={Pic?Pic:setup.defImg} alt="user Profile" />
                        </Link>
            </div>
        </header>
    );
}

export default Header;
