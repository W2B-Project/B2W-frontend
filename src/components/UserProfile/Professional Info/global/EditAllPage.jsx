import { Plus, Edit } from "lucide-react"
import { useState, useContext } from "react"
import { useLocation } from "react-router-dom"
import { InfoContext } from "../../../../context/Professinoal_InfoContext"
import FormModal from "../global/FormModal"

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
        setCertificate }
        = useContext(InfoContext)
    const [editIndex, setEditIndex] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const location = useLocation()

    const { type } = location.state
    const typeEX = type === 'Experience'
    const typeCertifecates = type === 'certificate'
    /* add new education or experience */
    const handleAdd = () => {
        setEditIndex(null)
        setEditMode(false)
        typeEX ? setShowModalEx(true) : typeCertifecates ? setModalCertificate(true) : setShowModalEdu(true)
    }

    /* edit exist education or experience */
    const handleEdit = (index) => {
        setEditIndex(index)
        setEditMode(true)
        typeEX ? setShowModalEx(true) : typeCertifecates ? setModalCertificate(true) : setShowModalEdu(true)
    }

    /* save added or updated experience or education */
    const handleSave = (data) => {
        if (editMode) {
            const updated = typeEX ? [...ExperienceList] : typeCertifecates ? [...certificate] : [...EducationList]
            updated[editIndex] = data
            typeEX ? setExperienceList(updated) : typeCertifecates ? setCertificate(updated) : setEducationList(updated)
        }
        else {
            typeEX ?
                setExperienceList([...ExperienceList, data])
                : typeCertifecates ?
                    setCertificate([...certificate, data])
                    : setEducationList([...EducationList, data])
        }
    }
    /* determine if its education or experience */
    const currentList = typeEX ? ExperienceList : typeCertifecates ? certificate : EducationList;
    const fields = typeEX
        ? { primary: 'CompanyName', secondary: 'JobTitle' }
        : typeCertifecates
            ? { primary: 'OrganizationName', secondary: 'CourseName' }
            : { primary: 'Faculty', secondary: 'University' }

    return (
        <>
            <div className="w-full px-10 bg-white rounded-lg min-h-52">
                <div className="flex justify-between items-center text-xl font-bold my-5">
                    <p className="w-1/2 m-auto text-center">{`Edit ${type}`}</p>
                    <Plus className="cursor-pointer bg-[#E5CCFF] rounded-full p-1" color="#7F00FF" onClick={handleAdd} />
                </div>
                {
                    currentList.length !== 0 ?
                        currentList.map((item, index) => (
                            <div key={index} className="flex justify-between items-center mb-5">
                                <div className="flex gap-5 items-center">
                                    <div className="rounded-xl bg-primry_purble w-16 h-16"></div>
                                    <div>
                                        <p className="text-lg ">{item[fields.primary]}</p>
                                        <p className="text-dark_gray">{item[fields.secondary]}</p>
                                        {
                                            type !== typeCertifecates &&
                                            <div className="flex gap-5 text-sm text-dark_gray">
                                                <p>{item.FromMonth} {item.FromYear}</p>
                                                <p>{item.ToMonth} {item.ToYear}</p>
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
                    (typeEX ? showModalEx : typeCertifecates ? modalCertificate : showModalEdu) &&
                        <FormModal
                            type={typeEX ? "Experience" : typeCertifecates ? 'certificate' : "Education"}
                            onClose={() =>
                                typeEX ?
                                    setShowModalEx(false)
                                    : typeCertifecates ?
                                        setModalCertificate(false)
                                        : setShowModalEdu(false)}
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