import { NavLink,Link } from "react-router-dom";
import Logo from "../global/Logo";
import profileImage from "../../assets/images/home/cca3d1cbd0af0cf081dd88cf66a24693.jpg";
import BellIcon from "../svg/company setup/BellIcon";
import SearchIcon from "../svg/company setup/SearchIcon";

const navLinks = [
    { to: "/home/posts", label: "Home" },
    { to: "/home/jobs", label: "Jobs" },
    { to: "/home/chats", label: "Chats" },
    { to: "/home/applied", label: "Applied" },
];

function Header({setService}) {
    const linkClass = ({ isActive }) =>
        `text-base font-bold border-b-4 rounded-[4px] transition-all ${
            isActive ? "text-primry_purble border-primry_purble" : "text-black border-transparent hover:text-primry_purble hover:border-primry_purble"
        }`;

    return (
        <header className="flex items-center justify-between py-3 shadow-sm fixed w-full bg-white px-6">
            <div className="w-16 h-16">
                <Logo logoColor="#7F00FF" />
            </div>
            <nav className="flex gap-8">
                {navLinks.map(({ to, label }) => (
                    <NavLink key={to} to={to} className={linkClass} onClick={()=>setService('')}>
                        {label}
                    </NavLink>
                ))}
            </nav>
            <div className="flex items-center gap-4">
                <SearchIcon />
                <BellIcon />
                <Link to='/userProfile'>
                    <img className="w-10 h-10 rounded-full border border-gray-300 shadow-sm" loading="lazy" src={profileImage} alt="User Profile" />
                </Link>
            </div>
        </header>
    );
}

export default Header;
