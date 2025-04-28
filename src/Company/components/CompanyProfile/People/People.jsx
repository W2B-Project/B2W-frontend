import { XIcon } from "lucide-react"
import PeopleItem from "../../../../components/home/PeopleItem"
import { usersList } from "../../../../components/home/PeopleList"
import Button from "../../../../components/global/Button"
import { useContext } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { CompanyContext } from "../../../../context/CompanyInfoContext"
function People() {
    const { editPage, setEditPage } = useContext(CompanyContext)
    const navigate = useNavigate()
    const AddPeople = () => {
        setEditPage(true)
        navigate('/companyProfile/people/AddPeople')
    }
    return (
        <div className="bg-white rounded-lg p-5">
            {editPage ?
                <Outlet/>
                :<>
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-dark_gray">People({usersList.length})</p>
                        <Button btn_text={'+ Add People'} width={'w-[20%]'} onHandleClick={AddPeople} />
                    </div>

                    {usersList.length===0?
                    <p className="text-center text-2xl font-semibold my-10">No Added Employee Yet</p>
                    :usersList.map((user, index) => (
                        <div key={index} className="max-w-[995px]" >
                            <div className="flex justify-between items-center">
                                <PeopleItem user={user} />
                                <XIcon color="gray" className="cursor-pointer" />
                            </div>
                            <hr className="w-1/2 m-auto" />
                        </div>
                    ))}
                </>
            }
        </div>
    )
}

export default People