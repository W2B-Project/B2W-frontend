/* eslint-disable react/prop-types */
function Button({ btn_text, onHandleClick, marg = 0, width, bg }) {
    return (
        <button type="submit" onClick={onHandleClick} className={`p-2 ${bg ? bg : 'bg-primry_purble text-white'} my-${marg} ${width ? width : 'w-full'} rounded-2xl border-primry_purble border-2  font-roboto`}>
            {btn_text}
        </button>
    )
}

export default Button
