

function PeopleItem({user}) {
    return (
        <div className="flex items-center gap-4 py-4">
            <img src={user.image} loading="lazy" alt={user.userName} className="w-14 h-14 rounded-full" />
            <div>
                <h4 className="text-lg font-semibold">{user.userName}</h4>
                <p className="text-sm text-gray-500">{user.userJobTitle}</p>
            </div>
        </div>
    );
}

export default PeopleItem;
