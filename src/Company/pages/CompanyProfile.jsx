import Header from "/src/components/home/Header"
import { CompanyProAssets } from "../assests/companyAssets"
import ProfileCardCompany from "../components/CompanyProfile/ProfileCardCompany"
import { Outlet, NavLink } from "react-router-dom"
import { Settings } from "lucide-react"
import { useNavigate } from "react-router-dom"
function CompanyProfile() {
    const navLinks = [
        { to: '/companyProfile/about', title: 'About' },
        { to: '/companyProfile/opendJobs', title: 'Opend Jobs' },
        { to: '/companyProfile/reviews', title: 'Reviews' },
        { to: '/companyProfile/people', title: 'People' },
    ]
    const linkClass = ({ isActive }) =>
        `text-dark_gray font-bold border-b-4 rounded-[4px] transition-all  ${isActive ? "text-primry_purble border-primry_purble" : "border-transparent hover:text-primry_purble hover:border-primry_purble"
        }`;
    const navigate = useNavigate()

    return (
        <>
            <Header usertype={'company'} />
            <div className="px-8 h-auto pt-28 w-[99%] m-auto ">
                <div className="bg-[#f4f4f6] rounded-xl pb-5">
                    {/* cover image */}
                    <div className="relative">
                        <img src={CompanyProAssets.bg} alt="profile" className="w-full" />
                        <Settings color="white" className="absolute top-3 right-3 cursor-pointer" onClick={() => navigate('/settings')} />
                    </div>

                    <div className="flex gap-24">
                        <ProfileCardCompany />
                        <div className="flex-auto pr-16">
                            <div className="py-8 flex gap-24">
                                {navLinks.map(({ to, title }) => (
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

export default CompanyProfile