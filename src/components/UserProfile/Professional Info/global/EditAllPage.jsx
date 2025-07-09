import { Plus, Edit } from "lucide-react"
import { useState, useContext } from "react"
import { useLocation } from "react-router-dom"
import { InfoContext } from "../../../../context/Professinoal_InfoContext"
import FormModal from "../global/FormModal"
import { userprofileassets } from "../../../../assets/images/user Profile/userprofileAssets"
const MillistoneImages = [userprofileassets.millistone1, userprofileassets.millistone2, userprofileassets.millistone3]


function EditAllPage() {
    const {
        ExperienceList,
        setExperienceList,
        EducationList,
        setEducationList,
        showModalEx,
        setShowModalEx,
        showModalEdu,
        setShowModalEdu,
        setModalCertificate,
        modalCertificate,
        certificate,
        setCertificate,
        millistons,
        setMillistons,
        showModalMIL,
        setShowModalMIL
    }
        = useContext(InfoContext)
    const [editIndex, setEditIndex] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const location = useLocation()
    const { type } = location.state

    const RandomImage = () => {
        const randomIndex = Math.floor(Math.random() * MillistoneImages.length)
        return MillistoneImages[randomIndex]
    }

    const typeEX = type === 'Experience'
    const typeCertifecates = type === 'certificate'
    const MilType = type === 'millistone'
    /* determine if its education , experience , millistons ,certificate */
    const currentList = typeEX ? ExperienceList : typeCertifecates ? certificate : MilType ? millistons : EducationList;
    const ShowModal = typeEX ? showModalEx : typeCertifecates ? modalCertificate : MilType ? showModalMIL : showModalEdu;
    const SetShowModal = typeEX ? setShowModalEx : typeCertifecates ? setModalCertificate : MilType ? setShowModalMIL : setShowModalEdu;
    const SetCurrentFun = typeEX ? setExperienceList : typeCertifecates ? setCertificate : MilType ? setMillistons : setEducationList;

    /* add new education , experience , millistons ,certificate */
    const handleAdd = () => {
        setEditIndex(null)
        setEditMode(false)
        SetShowModal(true)
    }

    /* edit exist education , experience , millistons ,certificate */
    const handleEdit = (index) => {
        setEditIndex(index)
        setEditMode(true)
        SetShowModal(true)
    }

    /* save added or updated experience , education , millistons ,certificate */
    const handleSave = (data) => {
        if (editMode) {
            const updated = [...currentList]
            updated[editIndex] = data
            SetCurrentFun(updated)
        }
        else {
            const milData = { ...data, image: RandomImage() }
            MilType ?
                setMillistons([...millistons, milData])
                :SetCurrentFun([...currentList,data])
        }
    }
    /*fields to show*/
    const fields = typeEX
        ? { primary: 'CompanyName', secondary: 'JobTitle' }
        : typeCertifecates
            ? { primary: 'OrganizationName', secondary: 'CourseName' }
            : MilType ?
                { primary: 'MillstoneTitle', secondary: 'OrganizationNameMil' }
                : { primary: 'Faculty', secondary: 'University' }

    return (
        <>
            <div className="w-full px-10 bg-white rounded-lg min-h-52 py-3">
                <div className="flex justify-between items-center text-xl font-bold my-5">
                    <p className="w-1/2 m-auto text-center">{`Edit ${type}`}</p>
                    <Plus className="cursor-pointer bg-[#E5CCFF] rounded-full p-1" color="#7F00FF" onClick={handleAdd} width={30} height={30} />
                </div>
                {
                    currentList.length !== 0 ?
                        currentList.map((item, index) => (
                            <div key={index} className="flex justify-between items-center mb-5">
                                <div className="flex gap-5 items-center">
                                    {MilType ?
                                        <div className="rounded-full bg-veryLight_purple w-16 h-16">
                                            <img src={item.image} alt="" className='m-auto w-[55%] my-[10px]' />
                                        </div>
                                        :typeCertifecates? 
                                        <img src={userprofileassets.course} className="rounded-xl  w-16 h-16"/>
                                        :typeEX? <img src={userprofileassets.company} className="rounded-xl  w-16 h-16"/>
                                        : <img src={userprofileassets.uni} className="rounded-xl  w-16 h-16"/>
                                    }
                                    <div>
                                        <p className="text-lg ">{item[fields.primary]}</p>
                                        <p className="text-dark_gray">{item[fields.secondary]}</p>
                                        {
                                            (type !== typeCertifecates && type !== MilType) &&
                                            <div className="flex gap-5 text-sm text-dark_gray">
                                                <p>{item.FromMonth} {item.FromYear}</p>
                                                <p>{item.ToMonth} {item.ToYear}</p>
                                            </div>
                                        }
                                        {
                                            type === MilType &&
                                            <div className="flex gap-5 text-sm text-dark_gray">
                                                <p>{item.FromMonth} {item.FromYear}</p>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <Edit color="gray" className="cursor-pointer" onClick={() => handleEdit(index)} />
                            </div>
                        ))
                        : <p className="text-center my-16 bg-veryLight_purple p-2 rounded-xl w-3/4 m-auto text-2xl">No {type} to view , please add new one</p>
                }
                {
                    ShowModal &&
                    <FormModal
                        type={typeEX ? "Experience" : typeCertifecates ? 'certificate' : MilType ? 'millistone' : "Education"}
                        onClose={() =>SetShowModal(false)}
                        onSave={handleSave}
                        editMode={editMode}
                        editData=
                        {editMode ? currentList[editIndex] : null}
                    />
                }
            </div>
        </>
    )
}

export default EditAllPage