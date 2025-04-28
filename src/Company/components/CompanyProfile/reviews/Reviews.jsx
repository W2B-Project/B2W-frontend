import PeopleItem from "../../../../components/home/PeopleItem"
import { BsStarFill } from "react-icons/bs"
import { usersList } from "../../../../components/home/PeopleList"
function Reviews() {
    return (
        <>
            {usersList.map((user, index) => (
                <div key={index} className="mb-5 bg-white p-5 rounded-lg max-w-[995px]" >
                    <div className="flex justify-between items-center">
                        <PeopleItem user={user} />
                        <div className="flex gap-2">
                            <BsStarFill  className="w-5 h-5 text-yellow-300"/>
                            <BsStarFill  className="w-5 h-5 text-yellow-300"/>
                            <BsStarFill  className="w-5 h-5 text-yellow-300"/>
                            <BsStarFill  className="w-5 h-5 text-yellow-300"/>
                            <BsStarFill  className="w-5 h-5 text-yellow-300"/>
                        </div>
                    </div>
                    <div className="text-sm">Tenetur minima et nostrum dolorem amet minima ab omnis. Inventore maxime et. Laborum deleniti ratione et.
                    Odit sapiente facilis occaecati distinctio quam amet.Minima id hic in dicta eos quas. Blanditiis nesciunt eos.</div>
                </div>
            ))}
            
            
        </>
    )
}

export default Reviews