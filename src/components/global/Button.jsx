function Button({btn_text ,onHandleClick}) {
    return (

    <button type="submit" onClick={onHandleClick} className="p-2 bg-primry_purble w-full my-7 rounded-2xl border-primry_purble border-2 text-white">
        {btn_text}
    </button>
    )
}

export default Button
