import { Images } from 'lucide-react'
import Button from '../../../global/Button'
import { useState, useEffect } from 'react'
function ProjectModal({ onClose, onSave, editMode = false, editData = null }) {
    const [form, setForm] = useState({ ProjectTitle: '', Description: '', Media: null })
    const [err, setErr] = useState(null)
    useEffect(() => {
        if (editData && editMode) {
            setForm(editData)
        }
    }, [editMode, editData])

    let submitHandler = (e) => {
        e.preventDefault()
        if (!form.Description || !form.Media || !form.ProjectTitle) {
            setErr("this field is required")
            return;
        }
        onSave(form)
        onClose()
    }

    const handleFileUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setForm({ ...form, Media: file })
        }
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
                    <header className="flex justify-between items-center text-lg font-bold"><p className="text-center m-auto w-1/2">{editMode ? `Edit Project` : `Add New Project`}</p> <p className="cursor-pointer" onClick={onClose}>✕</p></header>
                    {/* body of modal (form) */}
                    <form action="" onSubmit={submitHandler}>
                        <div className="my-3">
                            <label htmlFor='ProjectTitle'>Project Title</label>
                            <input type="text" value={form.ProjectTitle} name='ProjectTitle' onChange={changeHandler} className="w-full rounded-lg border-dark_gray mt-2 placeholder:text-dark_gray" />
                            {err && <p className="mt-1 text-sm text-red-500">{err}</p>}
                        </div>
                        <div className="my-3">
                            <label htmlFor='ProjectTitle'>Description</label>
                            <textarea type="text" value={form.Description} name='Description' rows={5} onChange={changeHandler} className="w-full rounded-lg border-dark_gray mt-2 placeholder:text-dark_gray" />
                            {err && <p className="mt-1 text-sm text-red-500">{err}</p>}
                        </div>
                        <div className="my-3">
                            <p>Media</p>
                            <input type="file" id='Project' hidden onChange={handleFileUpload} />
                            <label htmlFor="Project" >
                                <div className='w-full rounded-lg border-[1px] border-dark_gray mt-2 h-44 '>
                                    {
                                        form.Media ? (
                                            <img
                                                src={URL.createObjectURL(form.Media)}
                                                alt="preview"
                                                className="h-full object-contain rounded-lg m-auto p-1"
                                            />
                                        ) : (
                                            <div className='w-fit m-auto text-center py-16'>
                                                <Images color='gray' className='m-auto mb-2' />
                                                <p className='text-dark_gray'>Upload your image (JPEG, PNG only) by clicking here</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </label>
                            {err && <p className="mt-1 text-sm text-red-500">{err}</p>}
                        </div>
                        <Button btn_text={editMode ? 'Save' : 'Add'} marg={2} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProjectModal