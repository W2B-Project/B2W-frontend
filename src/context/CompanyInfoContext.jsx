import { createContext, useState } from "react"

export const CompanyContext = createContext()

const CompanyInfoProvider = ({ children }) => {
    const [about,setAbout]=useState('')
    const [accsesability,setAccsesability]=useState([])
    const [editPage,setEditPage]=useState(false)

    const value={
        about,setAbout,
        accsesability,
        setAccsesability,
        editPage,setEditPage
    }
    return (
        <CompanyContext.Provider value={value}>
            {children}
        </CompanyContext.Provider>
    )
}

export default CompanyInfoProvider