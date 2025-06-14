import React from 'react'
import Access from "../../components/setup/Accessibility";
import Button from '../global/Button';
import { Navigate } from 'react-router-dom';
function Accessibility() {
    return (
        <div className='col-span-9 bg-white rounded-lg h-auto'>
            <div className='w-1/2 m-auto mt-10 py-5'>
                <Access />
                <Button btn_text={'Save'} />
            </div>

        </div>
    )
}

export default Accessibility