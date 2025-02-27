import { Link } from "react-router-dom"
import Button from "../global/Button"
import succussImage from "../../assets/images/signup/succussImage.png"

function SuccesPage() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center">
            <img loading="lazy" src={succussImage} alt="succussImage" />
            <p className="text-gray-600  max-w-md text-xl md:text-2xl leading-6 md:leading-8 font-normal mt-7">Your password has been successfully changed.</p>
            <Link to="/">
                <Button btn_text="Okay" />
            </Link>
        </div>
    )
}

export default SuccesPage
