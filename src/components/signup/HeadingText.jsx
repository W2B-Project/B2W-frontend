function HeadingText({mainText , subText}) {
    return (
        <div>
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
                {mainText}
            </h2>
            <h5 className="text-2xl text-center">{subText}</h5>
        </div>
    )
}

export default HeadingText
