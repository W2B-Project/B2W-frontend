
import services from '../../content/landing/services'
function Services() {
    return (
        <>
            <div className="bg-[#f8f8f8] pb-5" >
                <p className="text-center font-lato py-5 font-bold text-4xl">Services</p>
                {services.map(serv => (
                    <div key={serv.alt} className={`w-4/6 ${serv.right ? 'ms-auto rounded-s-full':'rounded-e-full my-5'} bg-veryLight_purple `}>
                        <div className={`w-3/4 m-auto flex flex-row items-center ${serv.right ? 'justify-end' : 'justify-start'} gap-10`}>
                            {
                                serv.right ?
                                    <>
                                        <p className="text-2xl w-1/2 font-lato font-medium">{serv.text}</p>
                                        <img loading="lazy"  src={serv.img} alt={serv.alt} width={290} />
                                    </>
                                    : <>
                                        <img  loading="lazy" src={serv.img} alt={serv.alt} width={290} />
                                        <p className="text-2xl w-1/2 font-lato font-medium">{serv.text}</p>
                                    </>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Services