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
    const [certificate,setCertificate]=useState([])
    const [modalCertificate,setModalCertificate]=useState(false)
    const [cv,setCv]=useState(null)
    const [cvShowModal,setCVShowModal]=useState(false)
    const [millistons, setMillistons] = useState([])
    const [showModalMIL, setShowModalMIL] = useState(false)
    const [Projects,setProjects]=useState([])
    const [showModalProj, setShowModalProj] = useState(false)

    const location = useLocation();

    useEffect(()=>{
        let path=location.pathname
        setEditPage(path.includes("edit"))
    },[location.pathname])

    const eduValue = {
        type,
        setType,
        setEditPage,
        editPage,
        /* experience */
        ExperienceList,
        setExperienceList,
        showModalEx,
        setShowModalEx,
        /* education */
        EducationList,
        setEducationList,
        showModalEdu,
        setShowModalEdu, 
        /* skills */
        skill,
        setSkill,
        skillSet,
        setSkillSet,
        /* certificates */
        certificate,
        setCertificate,
        modalCertificate,
        setModalCertificate,
        /* cv */
        cvShowModal,
        setCVShowModal,
        cv,setCv,
        /* millistones */
        millistons,
        setMillistons,
        showModalMIL,
        setShowModalMIL,
        /* projects */
        showModalProj, 
        setShowModalProj,
        Projects,
        setProjects
    }
    return (
        <InfoContext.Provider value={eduValue}>
            {children}
        </InfoContext.Provider>
    )
}

export default InfoProvider