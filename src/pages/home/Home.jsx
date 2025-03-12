import Header from "../../components/home/header"
import PeopleList from "../../components/home/PeopleList"
import ProfileMenu from "../../components/home/ProfileMenu"
import ServicesMenu from "../../components/home/ServicesMenu"


function Home() {
    return (
        <div className="px-8 h-screen bg-[#f4f4f6]">
            <Header />
            <div className="flex justify-between">
                <ProfileMenu />
                <div>main</div>
                <div className="flex flex-col gap-3">
                    <ServicesMenu />
                    <PeopleList />
                </div>
            </div>
        </div>
    )
}

export default Home
