import { Link } from "react-router-dom";

function ServiceItem({ serviceLink, serviceImage, serviceName }) {
    return (
        <div>
            <Link to={`/${serviceLink}`}  className="flex flex-col items-center justify-center p-2 rounded-lg bg-veryLight_purple">
                <img src={serviceImage} alt={serviceName} />
                <h3>{serviceName}</h3>
            </Link>
        </div>
    );
}

export default ServiceItem;
