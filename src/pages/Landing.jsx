import { Landingassets } from "../assets/images/landing/landing"
import Header from "../components/Landing/Header"
import Footer from "../components/Landing/Footer"
import Services from "../components/Landing/Services"
function Landing() {
    
    return (
        <>
            {/* header */}
            <Header/>
            {/* hero section */}
            <div className="bg-herobg bg-no-repeat">
                <div className={`w-9/12 m-auto flex justify-between pt-36 pb-10 `} >
                    <div className="py-12 ">
                        <p className="text-[40px] leading-tight w-10/12 font-lato font-bold">Welcome to <span className="text-primry_purble">Bridge to Work:</span> Empowering abilities and opening opportunities for everyone.</p>
                        <p className="text-[#66666E] text-lg mt-5 font-roboto" id="Services">Where skills meet opportunity for a brighter tomorrow.</p>
                    </div>
                    <div >
                        <img src={Landingassets.header} alt="hero image" width={"1000rem"} loading="lazy" />
                    </div>
                </div>
            </div>

            {/* serveies */}
            <Services/>

            {/* About us */}
            <div className="w-10/12 m-auto pb-3" >
                <p className="text-center font-lato py-5 font-bold text-4xl">About us</p>
                <div className="flex flex-row items-center justify-around">
                    <div className="w-1/3">
                        <p className="font-lato text-3xl font-bold text-primry_purble">Bridge to Work,</p>
                        <p className="text-3xl font-lato font-bold">An Inclusive Job Platform for People with Special needs</p>
                        <p className="mt-7 text-[#66666E] text-lg">Creating a link between job seekers and companies and building a community that brings together people with special needs</p>
                    </div>
                    <img src={Landingassets.about} alt="about" width={400} loading="lazy" />
                </div>
            </div>

            {/* footer */}
            <Footer/>
        </>
    )
}
export default Landing