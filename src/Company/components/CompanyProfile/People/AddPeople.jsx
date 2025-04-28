import People from "../../../../components/company setup/People"

function AddPeople() {
    return (
        <div>
            <p className="text-2xl font-semibold text-center font-lato my-5">Add People</p>
            <People edit={true}/>
        </div>
    )
}

export default AddPeople