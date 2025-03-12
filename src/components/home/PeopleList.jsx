import PeopleItem from "./PeopleItem"

function PeopleList() {
    return (
        <div className="shadow p-5 rounded-xl">
            <h3 className="text-xl font-semibold mb-3">People</h3>
            <PeopleItem />
        </div>
    )
}

export default PeopleList
