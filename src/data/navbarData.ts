import { v4 as uuidv4 } from 'uuid';
import aboutIcon from '../images/navIcons/aboutIcon.png';
import worksIcon from '../images/navIcons/worksIcon.png';
import contactIcon from '../images/navIcons/contactIcon.png';
import resumeIcon from '../images/navIcons/resumeIcon.png';
import prologueIcon from '../images/navIcons/prologueIcon.png';

export interface INavItem {
    id: string
    title: string,
    subTitleOne: string,
    subTitleTwo: string,
    index: string,
    icon: string,
    chapter: string,
}

export const generateNavbarData:() => INavItem[] = () => {
    return [
        {
            id: uuidv4(),
            title: "Opening",
            subTitleOne: "A brief",
            subTitleTwo: "context",
            index: "00",
            icon: prologueIcon,
            chapter:"Prologue"
        },
        {
            id: uuidv4(),
            title: "About",
            subTitleOne: "A bit of an",
            subTitleTwo: "introduction",
            index: "01",
            icon: aboutIcon,
            chapter:"Chapter 01"
        },
        {
            id: uuidv4(),
            title: "Works",
            subTitleOne: "A quick",
            subTitleTwo: "show-and-tell",
            index: "02",
            icon: worksIcon,
            chapter:"Chapter 02"
        },
        {
            id: uuidv4(),
            title: "Contact",
            subTitleOne: "A short",
            subTitleTwo: "message to me",
            index: "03",
            icon: contactIcon,
            chapter:"Chapter 03"
        },
        {
            id: uuidv4(),
            title: "Resume",
            subTitleOne: "A professional",
            subTitleTwo: "summary",
            chapter: "Epilogue",
            index: "04",
            icon: resumeIcon
        },
    ]
}