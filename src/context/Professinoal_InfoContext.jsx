import { useEffect } from 'react'
import { createContext, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const InfoContext = createContext()

const InfoProvider = ({ children }) => {
    const [EducationList, setEducationList] = useState([])
    const [ExperienceList, setExperienceList] = useState([])
    const [showModalEdu, setShowModalEdu] = useState(false);
    const [showModalEx, setShowModalEx] = useState(false);
    const [editPage, setEditPage] = useState(false);
    const [type, setType] = useState('Education');
    const [skill, setSkill] = useState('')
    const [skillSet, setSkillSet] = useState([])

    const location = useLocation();

    useEffect(()=>{
        let path=location.pathname
        setEditPage(path.includes("edit"))
    },[location.pathname])

    const eduValue = {
        type, setType,EducationList, setEducationList,ExperienceList, setExperienceList,showModalEx, setShowModalEx, showModalEdu, setShowModalEdu, setEditPage, editPage,skill, setSkill,skillSet, setSkillSet
    }
    return (
        <InfoContext.Provider value={eduValue}>
            {children}
        </InfoContext.Provider>
    )
}

export default InfoProvider