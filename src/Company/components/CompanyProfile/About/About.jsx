import AboutUs from './AboutUs'
import AccesabilityFeatures from './AccesabilityFeatures'

function About() {
    return (
        <>
        <div className='flex flex-col gap-4'>
            <AboutUs/>
            <AccesabilityFeatures/>
        </div>
        </>
    )
}

export default About