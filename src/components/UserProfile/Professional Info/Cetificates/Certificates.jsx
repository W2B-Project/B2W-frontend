import HeaderOf_info from "../../HeaderOf_info"
import { profileIcons } from "../../../../assets/icons/userProfile/useProfileIcons"
import { useContext } from "react"
import { InfoContext } from "../../../../context/Professinoal_InfoContext"
import { useNavigate } from "react-router-dom"
import FormModal from "../global/FormModal"
import { userprofileassets } from "../../../../assets/images/user Profile/userprofileAssets"
function Certificates() {
    const { certificate,
        setCertificate,
        modalCertificate,
        setModalCertificate, 
        setEditPage} = useContext(InfoContext)
    const navigate = useNavigate()
    return (
        <div>
            <div className="bg-white w-full rounded-lg">
                <div className="w-[95%] m-auto ">
                    <HeaderOf_info
                        icon={profileIcons.Certificates}
                        text=' Certificates & License'
                        available={certificate.length}
                        setEdit={() => {
                            setEditPage(true)
                            navigate('/userProfile/Info/edit', {
                                state: {
                                    'type': 'certificate'
                                }
                            })
                        }}
                        addModal={() => {
                            setModalCertificate(true)
                        }}
                    />
                    <div className="pb-5 ">
                        {
                            certificate.length !== 0 ?
                                certificate.map((cer, index) => (
                                    <div key={index}>
                                        <div className="flex gap-5 items-center my-5">
                                            <img src={userprofileassets.course} className="rounded-xl  w-16 h-16"/>
                                            <div>
                                                <p className="text-lg ">{cer.OrganizationName}</p>
                                                <p className="text-dark_gray">{cer.CourseName}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                : <p className="text-dark_gray text-[17px]">Please add any  Certificates or License you have</p>
                        }
                    </div>
                </div>
            </div>
            {
                modalCertificate &&
                <FormModal type="certificate" onClose={() => setModalCertificate(false)} onSave={(newcer) => setCertificate([...certificate, newcer])} />
            }
        </div>
    )
}

export default Certificates