import Header from "../../components/home/Header"
import { userprofileassets } from "../../assets/images/user Profile/userprofileAssets"
import ProfileCard from "../../components/UserProfile/ProfileCard"
import { Outlet,NavLink } from "react-router-dom"
import { Settings } from "lucide-react"
import { useNavigate } from "react-router-dom"
function UserProfile() {
    const navLinks = [
        { to: '/userProfile/posts', title: 'Posts' },
        { to: '/userProfile/Info', title: 'Professional Info' },
        { to: '/userProfile/Achievements', title: 'Achievements' },
        { to: '/userProfile/Saved', title: 'Saved' },
    ]
    const linkClass = ({ isActive }) =>
        `text-dark_gray font-bold border-b-4 rounded-[4px] transition-all  ${
            isActive ? "text-primry_purble border-primry_purble" : "border-transparent hover:text-primry_purble hover:border-primry_purble"
        }`;
    const navigate=useNavigate()
    return (
        <>
            <Header />
            <div className="px-8 h-auto pt-28 w-[99%] m-auto ">
                <div className="bg-[#f4f4f6] rounded-xl pb-5">
                    {/* cover image */}
                    <div className="relative">
                        <img src={userprofileassets.bg} alt="profile" className="w-full" />
                        <Settings color="white" className="absolute top-3 right-3 cursor-pointer" onClick={()=>navigate('/settings')} />
                    </div>
                    
                    <div className="flex gap-24">
                        <ProfileCard />
                        <div className="flex-auto pr-16">
                            <div className="py-8 flex gap-24">
                                {navLinks.map(({to,title})=>(
                                    <NavLink key={to} to={to} className={linkClass}>
                                        {title}
                                    </NavLink>
                                ))}
                            </div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile
