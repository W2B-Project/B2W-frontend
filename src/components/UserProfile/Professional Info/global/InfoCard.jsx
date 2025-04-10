import { Edit } from "lucide-react"
import { useContext, useState } from "react"
import { InfoContext } from "../../../../context/Professinoal_InfoContext"

function InfoCard({ List }) {
    const { setShowModal } = useContext(InfoContext)
    const [editIndex, setEditIndex] = useState(null)
    const [editMode, setEditMode] = useState(false)
    const handleEdit = (index) => {
        setEditIndex(index)
        setEditMode(true)
        setShowModal(true)
    }

    return (
        <>
            {
                List.map((edu, index) => (
                    <div key={index} className="flex justify-between items-center mb-5">
                        <div className="flex gap-5 items-center">
                            <div className="rounded-xl bg-primry_purble w-16 h-16"></div>
                            <div>
                                <p className="text-lg ">{edu.Faculty}</p>
                                <p className="text-dark_gray">{edu.University}</p>
                                <div className="flex gap-5 text-sm text-dark_gray">
                                    <p>{edu.FromMonth} {edu.FromYear}</p>
                                    <p>{edu.ToMonth} {edu.ToYear}</p>
                                </div>
                            </div>
                        </div>
                        <Edit color="gray" className="cursor-pointer" onClick={() => handleEdit(index)} />
                    </div>
                ))
            }
        </>
    )
}

export default InfoCard