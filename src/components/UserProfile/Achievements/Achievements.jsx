import { Outlet } from 'react-router-dom'
import Millistons from './millistons/Millistons'
import Projects from './projects/Projects'
import { useContext } from 'react'
import { InfoContext } from '../../../context/Professinoal_InfoContext'

function Achievements() {
    const { editPage } = useContext(InfoContext)
    return (
        <>
            {editPage ?
                <Outlet />
                : <>
                    <Millistons />
                    <Projects />
                </>
            }


        </>
    )
}

export default Achievements