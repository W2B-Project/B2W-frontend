import PeopleItem from "./PeopleItem"
import userImage1 from "../../assets/images/home/user1.png";
import userImage2 from "../../assets/images/home/user2.png";
import userImage3 from "../../assets/images/home/user3.png";

export const usersList = [
    {
        image: userImage1,
        userName: "Murad Mohamed",
        userJobTitle: "Product Manager",
    },
    {
        image: userImage2,
        userName: "Elsie Cronin",
        userJobTitle: "Product Manager",
    },
    {
        image: userImage3,
        userName: "Darrell Steward",
        userJobTitle: "Marketing Coordinator",
    },
];
function PeopleList() {
    return (
        <div className="shadow p-5 rounded-xl bg-white">
            <h3 className="text-xl font-semibold mb-3">People</h3>
            <div className="grid grid-cols-1 gap-4">
                {usersList.map((user, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <PeopleItem user={user}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PeopleList
