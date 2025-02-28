
import { csetup } from "../../assets/images/company setup/csetup"
import Bag from "../../components/svg/company setup/Bag"
import Car from "../../components/svg/company setup/Car"
import Elevator from "../../components/svg/company setup/Elevator"
import Online from "../../components/svg/company setup/Online"
import Ramp from "../../components/svg/company setup/Ramp"
import Wheelchair from "../../components/svg/company setup/Wheelchair"

export const cinfo = [
    {
        step: 1,
        title: 'Company Information',
        img:csetup.prog1
    },
    {
        step: 2,
        title: 'Accessibility in the Workplace',
        desc:'What accessibility features does your company provide?',
        img:csetup.prog2
    },
    {
        step: 3,
        title: 'Add Employees',
        desc:'Could you please add employees via their accounts?',
        img:csetup.prog3
    },
]

export const accessibilityfeatures=[
    {
        img:<Wheelchair color='#E3E3E5'/>,
        title:'Wheelchair-accessible Workplace'
    },
    {
        img: <Car color='#E3E3E5'/>,
        title:'Parking for People with Disabilities'
    },
    {
        img:<Bag color='#E3E3E5'/>,
        title:'Flexible Work Hours'
    },
    {
        img:<Ramp color='#E3E3E5'/>,
        title:'Wheelchair Ramp Access'
    },
    {
        img:<Elevator color='#E3E3E5'/>,
        title:'Elevator Access'
    },
    {
        img:<Online color='#E3E3E5'/>,
        title:'Remote Work Option'
    },
] 