import { useContext, useState } from "react"
import { setup } from "../../assets/images/setup/setupAssets"
import { SetupContext } from "../../context/SetupContext"
import { AddUserPic } from "../../Api_Calls/SetupServices"
import { useAuth } from "../../context/AuthContext"
function Form({ getnextstep, edit, editData }) {
    const { Pic, setPic } = useContext(SetupContext)
    const [PicID, setPicID] = useState()
    const { UserInfo, setUserInfo } = useContext(SetupContext)
    const { authUser } = useAuth()

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {
            const res = await AddUserPic(authUser.userId, file);
            setPicID(res.userId)
            setPic(`data:image/jpeg;base64,${res.image}`);
            console.log("Image uploaded successfully:", res);
        } catch (error) {
            console.error("Upload error:", error.response?.data || error.message);
        }
    };
    const picId = Pic && PicID === authUser.userId


    const handleChange = (e) => {
        setUserInfo({ ...UserInfo, [e.target.name]: e.target.value })
    }
    const formVald = UserInfo.firstName && UserInfo.lastName && UserInfo.email && UserInfo.gender && UserInfo.jobTitle ? true : false

    return (
        <>
            {/* image upload */}
            <input type="file" id="inputt" className="hidden w-fit" onChange={handleImageUpload} />
            <label htmlFor="inputt">
                <img src={picId ? Pic : setup.defImg} alt="upload image" loading="lazy" className="m-auto rounded-full h-28 w-28" />
            </label>
            {/* user info */}
            <div className="mt-5">
                <div className="flex justify-between mb-5 w-full">
                    <div className="flex flex-col gap-3">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={edit ? editData.firstName : UserInfo.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble w-full" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" value={edit ? editData.lastName : UserInfo.lastName} onChange={handleChange} placeholder="Last Name" className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble w-full" />
                    </div>
                </div>
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" value={edit ? editData.email : UserInfo.email} onChange={handleChange} placeholder="Email" className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble" />
                </div>
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="gender">gender</label>
                    <select name="gender" value={edit ? editData.gender : UserInfo.gender} onChange={handleChange} className=" text-dark_gray border-2 border-light_gray p-2 rounded-2xl focus:border-primry_purble">
                        <option value="Male" className="text-primry_purble">Male</option>
                        <option value="Female" className="text-primry_purble">Female</option>
                    </select>
                </div>
                <div className="flex flex-col gap-3 w-full mt-5">
                    <label htmlFor="jobTitle">Bio</label>
                    <textarea rows='4' value={edit ? editData.jobTitle : UserInfo.jobTitle} onChange={handleChange} name="jobTitle" placeholder="type here..." className="border-2 border-light_gray placeholder:text-dark_gray p-2 rounded-2xl focus:border-primry_purble" />
                </div>
            </div>

            {!edit &&
                <button type="submit"
                    onClick={() => { getnextstep(); console.log(UserInfo) }}
                    disabled={!formVald}
                    className={`p-2 w-full my-7 rounded-2xl ${formVald ? 'bg-primry_purble border-primry_purble' : 'bg-gray-300 border-gray-300'} border-2 text-white`}>
                    Next
                </button>
            }


        </>
    )
}

export default Form