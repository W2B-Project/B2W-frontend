/* eslint-disable react/prop-types */

function Wheelchair({color}) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill={`${color}`}>
                <path d="M40 6C36.71 6 34 8.71 34 12C34 15.29 36.71 18 40 18C43.29 18 46 15.29 46 12C46 8.71 43.29 6 40 6ZM40 10C41.126 10 42 10.876 42 12C42 13.124 41.124 14 40 14C38.876 14 38 13.124 38 12C38 10.876 38.876 10 40 10ZM29.062 15.562L21.874 16.376C21.2901 16.4445 20.729 16.6428 20.2317 16.9563C19.7344 17.2698 19.3135 17.6907 19 18.188L14 25.938L17.376 28.062L22.376 20.374L26.936 19.874L24 28.19C17.234 29.166 12 34.97 12 42.002C12 49.712 18.29 56.002 26 56.002C33.71 56.002 40 49.712 40 42.002C40 41.322 39.906 40.658 39.812 40.002H42.376L45.062 52.19L48.938 51.314L46.312 39.128C45.914 37.296 44.242 36 42.376 36H38.626C37.8209 34.3369 36.6946 32.8497 35.312 31.624L37.626 25.188C38.111 23.8343 38.0937 22.3513 37.5772 21.0093C37.0607 19.6672 36.0794 18.5553 34.812 17.876L31.44 16V16.062C30.72 15.68 29.868 15.468 29.062 15.562ZM31.062 20.376L32.938 21.376C33.828 21.852 34.218 22.868 33.874 23.812L31.874 29.312C30.703 28.7692 29.4626 28.391 28.188 28.188L31.062 20.376ZM26 32C31.546 32 36 36.454 36 42C36 47.546 31.546 52 26 52C20.454 52 16 47.546 16 42C16 36.454 20.454 32 26 32Z" fill={`${color}`} />
            </svg>
        </>
    )
}

export default Wheelchair