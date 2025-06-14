import { Edit, Plus } from 'lucide-react'
import { useContext, useState } from 'react'
import FormModal from '../../Professional Info/global/FormModal'
import { InfoContext } from '../../../../context/Professinoal_InfoContext'
import { useNavigate } from 'react-router-dom'
import { userprofileassets } from '../../../../assets/images/user Profile/userprofileAssets'
function Millistons() {
    const { millistons, setMillistons, showModalMIL, setShowModalMIL } = useContext(InfoContext)
    const [editMode, setEditMode] = useState(false)
    const [editIndex, setEditIndex] = useState(null)
    const navigate = useNavigate()

    const handleEdit = (index) => {
        setEditMode(true)
        setEditIndex(index)
        setShowModalMIL(true)
    }
    const handleAdd = (index) => {
        setEditMode(false)
        setEditIndex(index)
        setShowModalMIL(true)
    }
    const handleSave = (data) => {
        if (editMode) {
            const updated = [...millistons]
            updated[editIndex] = data
            setMillistons(updated)
        }
        else {
            const dataImage = { ...data, image: RandomImage() }
            setMillistons([...millistons, dataImage])
        }
    }
    const MillistoneImages = [userprofileassets.millistone1, userprofileassets.millistone2, userprofileassets.millistone3]

    const RandomImage = () => {
        const randomIndex = Math.floor(Math.random() * MillistoneImages.length)
        console.log(randomIndex)
        return MillistoneImages[randomIndex]
    }

    return (
        <div>
            {/* header */}
            <div className='flex justify-between items-center'>
                <p className='text-xl font-lato font-bold'>Millstones TimeLine </p>
                <div className='flex gap-5 items-center'>
                    {millistons.length > 2 &&
                        <p
                            className='text-primry_purble border-b-2 border-b-primry_purble w-fit cursor-pointer'
                            onClick={() => navigate('/userProfile/Achievements/edit', {
                                state: {
                                    'type': 'millistone'
                                }
                            })}
                        >Show More</p>
                    }
                    <Plus className="cursor-pointer bg-[#E5CCFF] rounded-full p-1" color="#7F00FF" width={30} height={30} onClick={handleAdd} />
                </div>
            </div>
            <div className='bg-white rounded-lg my-5 min-h-52 p-2'>
                {
                    millistons.length !== 0 ?
                        millistons.slice(0, 2).map((mil, index) => (
                            <div key={index} className='flex justify-between items-center px-8'>
                                <div className="flex gap-5 items-center my-3">
                                    <div className="rounded-full bg-veryLight_purple w-16 h-16">
                                        <img src={mil.image} alt="" className='m-auto w-[55%] my-[10px]' />
                                    </div>
                                    <div>
                                        <p className="text-lg ">{mil.MillstoneTitle}</p>
                                        <p className="text-dark_gray">{mil.OrganizationNameMil}</p>
                                        <div className="flex gap-5 text-sm text-dark_gray">
                                            <p>{mil.FromMonth} {mil.FromYear}</p>
                                        </div>
                                    </div>
                                </div>
                                <Edit color='gray' className='cursor-pointer' onClick={() => handleEdit(index)} />
                            </div>
                        ))
                        : <p className='text-xl font-medium m-auto w-fit pt-20'>No Added Millistones Yet</p>
                }
            </div>

            {
                showModalMIL &&
                <FormModal type="millistone" editData=
                    {editMode ? millistons[editIndex] : null} editMode={editMode} onClose={() => setShowModalMIL(false)} onSave={handleSave} />
            }
        </div>
    )
}

export default Millistons