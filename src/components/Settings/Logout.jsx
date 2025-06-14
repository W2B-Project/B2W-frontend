import { userprofileassets } from "../../assets/images/user Profile/userprofileAssets"
import { useAuth } from "../../context/AuthContext"
import Button from "../global/Button"
import { useNavigate } from "react-router-dom"
function Logout() {
    const { logout } = useAuth()
    const navigate = useNavigate()
    return (
        <div>
            <div className="w-1/2 m-auto mt-24">
                <img src={userprofileassets.logout} alt="" className="m-auto w-1/3" />
                <p className="font-lato font-medium text-center text-lg my-5">Do you want to log out now? We’ll be here when you return!</p>
                <div className="flex gap-5 justify-center mt-5 w-3/4 m-auto">
                    <Button marg={5} btn_text={'Cancle'} bg={'bg-white text-primry_purble'} onHandleClick={() => navigate('/home')} />
                    <Button marg={5} btn_text={'Logout'} onHandleClick={logout} />

                </div>
            </div>
        </div>
    )
}

export default Logout