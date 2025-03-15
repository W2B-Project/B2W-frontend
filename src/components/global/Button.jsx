/* eslint-disable react/prop-types */
function Button({btn_text ,onHandleClick,marg=0}) {
    console.log(marg)
    return (

    <button type="submit" onClick={onHandleClick} className={`p-2 bg-primry_purble w-full my-${marg} rounded-2xl border-primry_purble border-2 text-white font-roboto`}>
        {btn_text}
    </button>
    )
}

export default Button
