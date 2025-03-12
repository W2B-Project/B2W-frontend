import userImage1 from "../../assets/images/home/user1.png";
import userImage2 from "../../assets/images/home/user2.png";
import userImage3 from "../../assets/images/home/user3.png";

const usersList = [
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

function PeopleItem() {
    return (
        <div className="grid grid-cols-1 gap-4">
            {usersList.map((user, index) => (
                <div key={index} className="flex items-center gap-4 py-4">
                    <img src={user.image} alt={user.userName} className="w-14 h-14 rounded-full" />
                    <div>
                        <h4 className="text-lg font-semibold">{user.userName}</h4>
                        <p className="text-sm text-gray-500">{user.userJobTitle}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PeopleItem;
