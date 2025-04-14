import Button from "../global/Button"
function Managepasswords() {
    return (
        <div >
            <div className="w-3/5 m-auto mt-28">
                <div>
                    <label htmlFor="oldPassword">Old Password</label>
                    <input type="password" className="w-full mt-2  rounded-lg border-gray-400 text-gray-400 " id="oldPassword" />
                </div>
                <p className="text-primry_purble border-b-2  border-b-primry_purble mt-1 w-fit text-sm">Forget Password?</p>
                <div className="my-5 mt-8">
                    <label htmlFor="oldPassword">New password</label>
                    <input type="password" className="w-full mt-2 rounded-lg  border-gray-400 text-gray-400 " id="oldPassword" />
                </div>
                <div>
                    <label htmlFor="oldPassword">Confirm new password</label>
                    <input type="password" className="w-full mt-2 rounded-lg  border-gray-400 text-gray-400 " id="oldPassword" />
                </div>
                <Button marg={8} btn_text={'Save'} />
            </div>
        </div>
    )
}

export default Managepasswords