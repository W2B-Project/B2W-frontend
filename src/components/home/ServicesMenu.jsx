import ServiceItem from "./ServiceItem";
import firstImage from "../../assets/images/home/ResumeReview.png";
import secondImage from "../../assets/images/home/chatbot.png";
import thirdImage from "../../assets/images/home/signify.png";

const services = [
    { link: "ResumeReview", image: firstImage, name: "Resume Reviewer" },
    { link: "ChatbotInterview", image: secondImage, name: "Chatbot Interview" },
    { link: "Signify", image: thirdImage, name: "Signify" }
];

function ServicesMenu() {
    return (
        <div className="shadow p-5 rounded-xl bg-white">
            <h3 className="text-xl font-semibold mb-3">Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {services.map(({ link, image, name }) => (
                    <ServiceItem key={link} serviceLink={link} serviceImage={image} serviceName={name} />
                ))}
            </div>
        </div>
    );
}

export default ServicesMenu;
