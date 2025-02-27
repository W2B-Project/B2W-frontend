import { Link } from "react-router-dom";
import NotFoundImage from "../assets/images/404.png";
import Button from "../components/global/Button";

function Error() {
    return (
        <div className="h-screen flex flex-col justify-center items-center text-center w-1/3 m-auto">
            <img src={NotFoundImage} alt="Not Found" className="" loading="lazy" />
            <h1 className="text-5xl md:text-6xl leading-10 font-bold">
                Oops! <span className="text-primry_purble">Page not Found</span>
            </h1>
            <p className="text-gray-600 max-w-md text-xl leading-6  font-normal mt-7">
                The page you are looking for cannot be found. Take a break before trying again.
            </p>
            <Link to="/">
                <Button btn_text="Go To Home Page" />
            </Link>


        </div>
    );
}

export default Error;
