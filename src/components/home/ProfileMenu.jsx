import ProfileItem from "./ProfileItem"
import UserProfile from "./UserProfile"
import { FaBookmark, FaAccessibleIcon } from "react-icons/fa";
function ProfileMenu() {
    return (
        <div className="col-span-3 flex flex-col justify-between gap-4 h-max ">
            <UserProfile />
            <ProfileItem text="Saved Jobs" Icon={FaBookmark}  profileLink="/savedjobs"  />
            <ProfileItem text="Accessibility" Icon={FaAccessibleIcon} profileLink="/accessibility" />
        </div>
    )
}

export default ProfileMenu
