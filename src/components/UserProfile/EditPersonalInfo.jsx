import Button from "../global/Button"
import Form from "../setup/Form"

function EditPersonalInfo({onClose}) {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="relative bg-white rounded-lg shadow-lg w-full max-w-xl p-6">
                <header className="flex justify-between items-center text-lg font-bold mb-3"><p className="text-center m-auto w-1/2">Edit Personal Info</p> <p className="cursor-pointer" onClick={onClose}>✕</p></header>
                <div className="px-14">
                    <Form/>
                    <Button btn_text={'Update'} marg={5}/>
                </div>
                </div>
            </div>
        </>
    )
}

export default EditPersonalInfo