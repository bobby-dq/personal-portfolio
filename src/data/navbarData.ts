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
    url: string,
}

export const generateNotFoundData: () => INavItem = () => {
    const notFoundData: INavItem = {
        id: uuidv4(),
        title: "Not Found",
        subTitleOne: "You might be",
        subTitleTwo: "a little lost",
        index: "404",
        icon: prologueIcon,
        chapter: "Lost Chapter",
        url: "/Error404"
    }
    return notFoundData;
}

export const generateNavbarData:() => INavItem[] = () => {
    return [
        {
            id: uuidv4(),
            title: "OPENING",
            subTitleOne: "A brief",
            subTitleTwo: "context",
            index: "00",
            icon: prologueIcon,
            chapter:"Prologue",
            url: "/"
        },
        {
            id: uuidv4(),
            title: "ABOUT",
            subTitleOne: "A bit of an",
            subTitleTwo: "introduction",
            index: "01",
            icon: aboutIcon,
            chapter:"Chapter 01",
            url: "/about"
        },
        {
            id: uuidv4(),
            title: "WORKS",
            subTitleOne: "A quick",
            subTitleTwo: "show-and-tell",
            index: "02",
            icon: worksIcon,
            chapter:"Chapter 02",
            url: "/works"
        },
        {
            id: uuidv4(),
            title: "CONTACT",
            subTitleOne: "A short",
            subTitleTwo: "message to me",
            index: "03",
            icon: contactIcon,
            chapter:"Chapter 03",
            url: "/contact"
        },
        {
            id: uuidv4(),
            title: "RESUME",
            subTitleOne: "A professional",
            subTitleTwo: "summary",
            chapter: "Epilogue",
            index: "04",
            icon: resumeIcon,
            url: "/resume"
        },
    ]
}