import { useEffect, useState } from "react"
import Button from "../../../global/Button"
import SelectFromTo from "./SelectFromTo"

function FormModal({ onClose, onSave, editMode = false, editData = null, type }) {

    /* form state */
    const [form, setForm] = useState({
        Faculty: "", Degree: "", University: ""               /* education */
        ,CompanyName: "", JobTitle: ""                        /* job experience */
        ,OrganizationName: "", CourseName: "",                /* certificates */
        OrganizationNameMil: '', MillstoneTitle: ''           /* millistones*/
        ,FromMonth: "", ToMonth: "", FromYear: "", ToYear: ""
    })
    const [err, setErr] = useState(null)
    
    /*to make it edit modal */
    useEffect(() => {
        if (editData && editMode) {
            setForm(editData)
        }
    }, [editMode, editData])

    /* form fields based on type: millistone, certificate, Education, experience */
    let formdata = {
        textFields:
            type === 'Education' ? [
                { name: "Faculty", value: form.Faculty, placeholder: 'Faculty' },
                { name: "Degree", value: form.Degree, placeholder: 'Degree' },
                { name: "University", value: form.University, placeholder: "University" },
            ]
                : type === 'certificate' ? [
                    { name: "OrganizationName", value: form.OrganizationName, placeholder: 'Organization Name' },
                    { name: "CourseName", value: form.CourseName, placeholder: 'Course Name' },
                ]
                    : type === 'millistone' ?
                        [
                            { name: "MillstoneTitle", value: form.MillstoneTitle, placeholder: 'Millstone Title' },
                            { name: "OrganizationNameMil", value: form.OrganizationNameMil, placeholder: 'Organization Name' },
                        ]
                        : [
                            { name: "CompanyName", value: form.CompanyName, placeholder: 'Company Name' },
                            { name: "JobTitle", value: form.JobTitle, placeholder: 'Job Title' },
                        ],
        selectList: {
            From: [
                { name: "FromMonth", value: form.FromMonth },
                { name: "FromYear", value: form.FromYear },
            ],
            To: [
                { name: "ToMonth", value: form.ToMonth },
                { name: "ToYear", value: form.ToYear },
            ]
        }
    }


    let submitHandler = (e) => {
        e.preventDefault()
        if (type === 'Education' ? !form.Faculty || !form.Degree || !form.University
            : type === 'certificate' ? !form.OrganizationName || !form.CourseName :
                type === 'millistone' ? !form.MillstoneTitle || !form.OrganizationNameMil :
                    !form.CompanyName || !form.JobTitle) {
            setErr("this field is required")
            return;
        }
        onSave(form)
        onClose()
    }

    let changeHandler = (e) => {
        let { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl p-6">
                    {/* header of modal */}
                    <header className="flex justify-between items-center text-lg font-bold"><p className="text-center m-auto w-1/2">{editMode ? `Edit ${type}` : `Add New ${type}`}</p> <p className="cursor-pointer" onClick={onClose}>✕</p></header>
                    {/* body of modal (form) */}
                    <form action="" onSubmit={submitHandler}>
                        {formdata.textFields.map(data => (
                            <div key={data.name} className="my-3">
                                <label htmlFor={data.name}>{data.placeholder}</label>
                                <input type="text" {...data} onChange={changeHandler} className="w-full rounded-lg border-dark_gray mt-2 placeholder:text-dark_gray" />
                                {err && <p className="mt-1 text-sm text-red-500">{err}</p>}
                            </div>
                        ))}
                        {
                            (type !== 'certificate' && type !== 'millistone') &&
                            <>
                                <SelectFromTo fromorto={formdata.selectList.From} name='From' changeHandler={changeHandler} />
                                <SelectFromTo fromorto={formdata.selectList.To} name='To' changeHandler={changeHandler} />
                            </>
                        }
                        {
                            type === 'millistone' &&
                            <SelectFromTo fromorto={formdata.selectList.From} name='Date' changeHandler={changeHandler} />
                        }
                        <Button btn_text={editMode ? 'Save' : 'Add'} marg={2} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormModal

/*     
    const {setCertificate,setMillistons,setExperienceList,setEducationList}=useContext(InfoContext)
    const typeEX = type === 'Experience'
    const typeCertifecates = type === 'certificate'
    const MilType = type === 'millistone'
    const SetCurrentFun = typeEX ? setExperienceList : typeCertifecates ? setCertificate : MilType ? setMillistons : setEducationList 
    
    {editMode?
        <div className="flex gap-5">
            <Button btn_text={'Delete'} marg={2} bg={'bg-red-500 text-white border-red-500'} width={'w-fit px-20'} />
            <Button btn_text={'Save'} marg={2} />
        </div>
        :<Button btn_text={'Add'} marg={2} onHandleClick={handleDelete}/>
    }
        const handleDelete = (id) => {
        SetCurrentFun(prev => prev.filter(cur => cur.id !== id))
    }

*/