import { v4 as uuidv4 } from 'uuid';
import aboutIcon from '../images/navIcons/aboutIcon.png';
import worksIcon from '../images/navIcons/worksIcon.png';
import contactIcon from '../images/navIcons/contactIcon.png';
import expIcon from '../images/navIcons/expIcon.png';
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
            icon: aboutIcon,
            chapter:"Prologue",
            url: "/"
        },
        {
            id: uuidv4(),
            title: "WORK",
            subTitleOne: "A professional",
            subTitleTwo: "summary",
            index: "01",
            icon: expIcon,
            chapter:"Chapter 01",
            url: "/work"
        },
        {
            id: uuidv4(),
            title: "PROJECTS",
            subTitleOne: "A quick",
            subTitleTwo: "show-and-tell",
            index: "02",
            icon: worksIcon,
            chapter:"Chapter 02",
            url: "/projects"
        },
        {
            id: uuidv4(),
            title: "CONTACT",
            subTitleOne: "A short",
            subTitleTwo: "message",
            index: "03",
            icon: contactIcon,
            chapter:"Epilogue",
            url: "/contact"
        },
        // {
        //     id: uuidv4(),
        //     title: "RESUME",
        //     subTitleOne: "A professional",
        //     subTitleTwo: "summary",
        //     chapter: "Epilogue",
        //     index: "04",
        //     icon: resumeIcon,
        //     url: "/resume"
        // },
    ]
}