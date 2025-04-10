/* eslint-disable react/prop-types */
function Button({btn_text ,onHandleClick,marg=0,width}) {
    return (
    <button type="submit" onClick={onHandleClick} className={`p-2 bg-primry_purble my-${marg} ${width?width:'w-full'} rounded-2xl border-primry_purble border-2 text-white font-roboto`}>
        {btn_text}
    </button>
    )
}

export default Button
