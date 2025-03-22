import { Link } from "react-router-dom";

function ServiceItem({serviceImage, serviceName,setService,service }) {
    return (
        <div onClick={()=>{setService(serviceName)}}>
            <div className={`${serviceName===service && ' border-primry_purble border-2 shadow-lg shadow-[#8000ff62] '} cursor-pointer flex flex-col items-center justify-center p-2 rounded-lg bg-veryLight_purple text-primry_purble`}>
                <img src={serviceImage} alt={serviceName} loading="lazy" />
                <h3>{serviceName}</h3>
            </div>
        </div>
    );
}

export default ServiceItem;
