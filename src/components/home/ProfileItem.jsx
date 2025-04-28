import { Link } from "react-router-dom";

function ProfileItem({ text, Icon, setService }) {
  return (
    <div className="flex justify-between items-center shadow p-5 rounded-xl bg-white cursor-pointer" onClick={()=>setService(text)}>
        <h3 className="text-xl font-lato">{text}</h3>
        <Icon className="text-primry_purble w-6 h-6" /> 
    </div>
  );
}

export default ProfileItem;
