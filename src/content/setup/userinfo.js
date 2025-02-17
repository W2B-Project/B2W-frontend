/* eslint-disable no-unused-vars */
import { setup } from "../../assets/images/setup/setupAssets"
let info
export default info = [
    {
        step: 1,
        title: 'Personal Information',
        img:setup.progress1
    },
    {
        step: 2,
        title: 'Job Type',
        question: 'What Type of Job Are You Interested In?',
        answers: ["Full-time", "Part-time", "Freelance", "Contract"],
        img:setup.progress2
    },
    {
        step: 3,
        title: 'Work Model',
        question: 'What working model do you prefer?',
        answers: ["On-site", "Remote", "Hybrid"],
        img:setup.progress3
    },
    {
        step: 4,
        title: 'Experience Level',
        question: 'What is Your Level in of Experience?',
        answers: ["Intern", "Joiner", "Mid-level", "Senior", "Lead"],
        img:setup.progress4
    },
    {
        step: 5,
        title: 'Job Title',
        question: 'What Job Title Are You Seeking?',
        answers: ["UI/UX designer", "Marketing", "Product Manager", "Developer", "Customer Support", "Quality Assurance", "Data Analyst", "Other"],
        img:setup.progress5
    },
    {
        step: 6,
        title: 'Accessibility Needs ',
        question: 'Select your type of disability to personalize your experience and job matches',
        answers: ["Physical Disabilities", "Sensory Disabilities", "Learning Disabilities", "Neurological Disabilities", "Developmental Disabilities", "Other"],
        img:setup.progress6
    },
    {
        step:7,
        title:"Accessibility settings",
        img:setup.progress7
    }

]