import ProfileItem from "./ProfileItem"
import UserProfile from "./UserProfile"
import { FaBookmark, FaAccessibleIcon } from "react-icons/fa";
function ProfileMenu({setService}) {
    return (
        <div className="col-span-3 flex flex-col justify-between gap-4 h-max ">
            <UserProfile />
            <ProfileItem text="Saved Jobs" Icon={FaBookmark}  setService={setService}  />
            <ProfileItem text="Accessibility" Icon={FaAccessibleIcon}  setService={setService} />
        </div>
    )
}

export default ProfileMenu
