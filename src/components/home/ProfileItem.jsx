import { Link } from "react-router-dom";

function ProfileItem({ text, Icon, profileLink }) {
  return (
    <Link to={profileLink} className="flex justify-between items-center shadow p-5 rounded-xl bg-white">
        <h3 className="text-xl font-lato">{text}</h3>
        <Icon className="text-primry_purble w-6 h-6" /> 
    </Link>
  );
}

export default ProfileItem;
