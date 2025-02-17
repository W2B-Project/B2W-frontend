import { setup } from "../../assets/images/setup/setupAssets"
function Form() {
    return (
        <>
                {/* image upload */}
                <input type="file" id="inputt" className="hidden" />
                <label htmlFor="inputt">
                    <img src={setup.addimg} alt="upload image" className="m-auto" width={100} />
                </label>
                {/* user info */}
                <div className="mt-5">
                    <div className="flex gap-7 mb-5">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" placeholder="first name" className="border-2 p-2 rounded-2xl focus:outline-primry_purble" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" placeholder="last name" className="border-2 p-2 rounded-2xl focus:outline-primry_purble" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full mt-5">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="email" placeholder="email" className="border-2 p-2 rounded-2xl focus:outline-primry_purble" />
                    </div>
                    <div className="flex flex-col gap-3 w-full mt-5">
                        <label htmlFor="gender">gender</label>
                        <select name="gender" className="border-2 p-2 rounded-2xl text-gray-400 focus:outline-primry_purble">
                            <option value="Male" className="text-primry_purble">Male</option>
                            <option value="Female" className="text-primry_purble">Female</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-3 w-full mt-5">
                        <label htmlFor="bio">Bio</label>
                        <textarea rows='4' name="bio" placeholder="type here..." className="border-2 p-2 focus:outline-primry_purble rounded-2xl" />
                    </div>
                </div>
        </>
    )
}

export default Form