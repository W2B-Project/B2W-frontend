import Logo from "../global/Logo";
import profileImage from "../../assets/images/home/cca3d1cbd0af0cf081dd88cf66a24693.jpg";
import BellIcon from "../svg/company setup/BellIcon";
import SearchIcon from "../svg/company setup/SearchIcon";
import { CompanyProAssets } from "../../Company/assests/companyAssets";

const navLinksCompany = [
  { id: 'home', label: 'Home' },
  { id: 'postjob', label: 'Post Job' },
  { id: 'chats', label: 'Chats' },
];

function Header({ setActiveSection, usertype = 'employee' }) {
  const currList = usertype === 'company' ? navLinksCompany : [];

  const linkClass = (active) =>
    `text-base font-bold border-b-4 rounded-[4px] transition-all ${
      active ? "text-primry_purble border-primry_purble" : "text-black border-transparent hover:text-primry_purble hover:border-primry_purble"
    }`;

  return (
    <header className="flex items-center justify-between py-3 shadow-sm fixed w-full bg-white px-6 z-10">
      <div className="w-16 h-16">
        <Logo logoColor="#7F00FF" />
      </div>

      <nav className="flex gap-8">
        {currList.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={linkClass(false)}
          >
            {label}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <SearchIcon />
        <BellIcon />
        <img
          className="w-10 h-10 rounded-full border border-gray-300 shadow-sm"
          loading="lazy"
          src={usertype === 'company' ? CompanyProAssets.profPho : profileImage}
          alt="user Profile"
        />
      </div>
    </header>
  );
}

export default Header;
