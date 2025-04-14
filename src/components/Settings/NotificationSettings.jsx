import { userprofileassets } from "../../assets/images/user Profile/userprofileAssets"
function NotificationSettings() {
    const notf = ['Allow', 'Not Allow']
    return (
        <>
            <div className="w-1/2 m-auto mt-24">
                <img src={userprofileassets.notification} alt="" className="m-auto w-1/3" />
                <p className="font-lato font-medium text-center text-lg my-5">Do you want to log out now? We’ll be here when you return!</p>
                <div className="flex gap-10 justify-center mt-5">
                    {
                        notf.map(n => (
                            <div key={n} className="flex gap-1 items-center">
                                <input type="radio" name="notification" className="border-2 border-primry_purble  checked:!bg-primry_purble"/>
                                <label className="text-gray-500">{n}</label>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default NotificationSettings