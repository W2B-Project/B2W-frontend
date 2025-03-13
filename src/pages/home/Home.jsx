import { Outlet } from "react-router-dom";
import Header from "../../components/home/Header";
import ProfileMenu from "../../components/home/ProfileMenu";
import ServicesMenu from "../../components/home/ServicesMenu";
import PeopleList from "../../components/home/PeopleList";

function Home() {
    return (
        <div className="px-8 h-auto bg-[#f4f4f6]">
            <Header />
            <div className="flex justify-between gap-8">
                <ProfileMenu />
                <div className="flex flex-col gap-3 w-full">
                    <Outlet />
                </div>
                <div className="flex flex-col gap-3 w-1/3">
                    <ServicesMenu />
                    <PeopleList />
                </div>
            </div>
        </div>
    );
}

export default Home;
