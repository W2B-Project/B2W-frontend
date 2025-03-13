import Button from "../global/Button"
import profileImage from "../../assets/images/home/cca3d1cbd0af0cf081dd88cf66a24693.jpg"
function UserProfile() {
    return (
            <div className="w-full h-[230px] shadow p-5 rounded-xl bg-white flex flex-col  justify-center items-center">
                <img className="w-20 h-20 rounded-full" loading="lazy" src={profileImage} alt="" />
                <h3 className="text-2xl font-bold">Alaa Mohamed</h3>
                <div className="">
                    <Button btn_text="Update profile" />
                </div>
            </div>
    )
}

export default UserProfile
