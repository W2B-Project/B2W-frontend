/* select year */
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

/* select month */
const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function SelectFromTo({changeHandler,fromorto,name}) {
    return (
        <div className="my-3">
            <label>{name}</label>
            <div className="flex gap-5">
                {
                    fromorto.map(data => (
                        <div key={data.name} className="w-full mt-2">
                            <select className="w-full rounded-lg text-dark_gray border-dark_gray" {...data} onChange={changeHandler}>
                                {data.name === 'FromYear'|| data.name==='ToYear' ?
                                    years.map(year => (
                                        <option key={year} value={year} >
                                            {year}
                                        </option>
                                    ))
                                    : months.map(month => (
                                        <option value={month} key={month}>{month}</option>
                                    ))
                                }
                            </select>
                        </div>
                    ))
                }
            </div>

        </div>

    )
}

export default SelectFromTo