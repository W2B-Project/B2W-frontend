import { Outlet,NavLink } from "react-router-dom"
import Header from "../../components/home/Header"
import { Bell, Languages, LogOut, LockKeyhole} from "lucide-react";

function Settings() {
    const navLinks = [
        { to: '/settings/lang', title: 'Language',icon: <Languages />},        
        { to: '/settings/managepass', title: 'Manage passwords',icon:<LockKeyhole/> },
        { to: '/settings/notification', title: 'Notification settings',icon:<Bell /> },
        { to: '/settings/Logout', title: 'Logout',icon:<LogOut /> },

    ]
    const linkClass = ({ isActive }) =>
        `block text-dark_gray font-bold p-3 my-2 rounded-2xl transition-all  ${
            isActive ? "text-primry_purble bg-veryLight_purple" : "border-transparent "
        }`;
    return (
        <>
            <Header/>
            <div className="grid grid-cols-8 gap-5 px-8 pt-28 pb-5 bg-[#f4f4f6] min-h-screen h-auto">
                {/* main layout */}
                <div className="col-span-2 h-full bg-white rounded-xl">
                    <div className="px-8 text-center font-bold text-2xl font-lato pt-5 ">
                        <p>Settings</p>
                        <hr className="my-5"/>
                    </div>
                    <div className="px-8">
                    {navLinks.map(({to,title,icon})=>(
                                    <NavLink key={to} to={to} className={linkClass}>
                                        <div className="flex gap-3 items-center">
                                            {icon}
                                            <p>{title}</p>
                                        </div>
                                        
                                    </NavLink>
                                ))}
                    </div>
                </div>
                {/* changed layout */}
                <div className="col-span-6 h-full bg-white rounded-xl">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default Settings