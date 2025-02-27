import { assets } from '../../assets/icons/IconsAssets'
function Header(props) {
    return (
        <>
            <div className="w-10/12 m-auto grid grid-cols-3 justify-between items-center mt-10 font-roboto">
                <img src={assets.purplelogo} alt="logo" loading="lazy"  width={80} />
                <div className="flex gap-3 items-center ">
                    <img src={props.info.img} alt="progress 1" loading="lazy" width={60} />
                    <div className="text-sm ">
                        <p className="step text-gray-600">step {props.info.step}</p>
                        <p className="title">{props.info.title}</p>
                    </div>
                </div>
                
                <button className="text-primry_purble underline text-lg font-medium" onClick={props.next}>skip</button>
            </div>
        </>
    )
}

export default Header