import { useContext, useState } from 'react'
import { Edit, Plus } from 'lucide-react'
import { InfoContext } from '../../../../context/Professinoal_InfoContext'
import ProjectModal from './ProjectModal'

function Projects() {
    const { Projects, setProjects, showModalProj, setShowModalProj } = useContext(InfoContext)
    const [editMode, setEditMode] = useState(false)
    const [editIndex, setEditIndex] = useState(null)

    const handleEdit = (index) => {
        setEditMode(true)
        setEditIndex(index)
        setShowModalProj(true)
    }
    const handleAdd = () => {
        setEditMode(false)
        setEditIndex(null)
        setShowModalProj(true)
    }
    const handleSave = (data) => {
        if (editMode) {
            const updated = [...Projects]
            updated[editIndex] = data
            setProjects(updated)
        }
        else {
            setProjects([...Projects, data])
        }
    }

    return (
        <div className='min-h-20 w-[943px]'>
            {/* header */}
            <div className='flex justify-between items-center'>
                <p className='text-xl font-lato font-bold'>Projects </p>
                <Plus className="cursor-pointer bg-[#E5CCFF] rounded-full p-1" color="#7F00FF" width={30} height={30} onClick={handleAdd} />
                {/* <p className='text-primry_purble border-b-2 border-b-primry_purble w-fit '>Show More</p> */}
            </div>
            <div className='flex gap-5 my-5  m-auto overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-primry_purble scrollbar-track-transparent'>
                {
                    Projects?.length > 0 ?
                    Projects?.map((proj, index) => (
                            <div key={index} className='relative flex-shrink-0 flex flex-col gap-2 bg-white p-2 rounded-xl h-80 w-56 shadow-lg mb-5'>
                                <img src={URL.createObjectURL(proj.Media)} className='rounded-xl w-full h-[128px]' alt="" />
                                <p className='font-lato text-xl font-bold whitespace-normal cursor-default'>{proj.ProjectTitle}</p>
                                <div className='text-dark_gray whitespace-normal overflow-hidden break-words text-ellipsis line-clamp-6 cursor-default text-sm'>{proj.Description}</div>
                                <Edit className='absolute top-5 right-5 cursor-pointer' color='white' onClick={()=>handleEdit(index)}/>
                            </div>
                        ))
                        : <p className='text-xl font-medium m-auto w-fit py-10'>No Added Projects Yet</p>
                }
            </div>
            {
                showModalProj &&
                <ProjectModal 
                editData={editMode ? Projects[editIndex] : null} 
                editMode={editMode} 
                onClose={() => setShowModalProj(false)} 
                onSave={handleSave} />
            }
        </div>
    )
}

export default Projects