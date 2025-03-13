import ProfileItem from "./ProfileItem"
import UserProfile from "./UserProfile"
import { FaBookmark, FaAccessibleIcon } from "react-icons/fa";
function ProfileMenu() {
    return (
        <div className="flex flex-col justify-between gap-4 h-max w-1/3">
            <UserProfile />
            <ProfileItem text="Saved Jobs" Icon={FaBookmark}  profileLink="/savedjobs"  />
            <ProfileItem text="Accessibility" Icon={FaAccessibleIcon} profileLink="/accessibility" />
        </div>
    )
}

export default ProfileMenu
