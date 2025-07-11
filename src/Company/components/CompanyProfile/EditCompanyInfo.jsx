import Header from "../../../components/home/Header"
import Form from "../../../components/company setup/Form"
function EditCompanyInfo() {
    return (
        <>
            <Header usertype="company"/>
            <div className=" pt-28 bg-[#f4f4f6]">
                <div className="w-[98%] m-auto pt-5  rounded-lg bg-white ">
                    <p className="my-7 text-2xl font-semibold text-center font-lato">Edit Company Information</p>
                    <div className="w-1/3 m-auto">
                        <Form btn_text={'Update'} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditCompanyInfo