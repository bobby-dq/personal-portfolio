import { v4 as uuidv4 } from 'uuid';

export interface INavItem {
    id: string
    title: string,
    subTitleOne: string,
    subTitleTwo: string,
    index: string,
}

export const generateNavbarData:() => INavItem[] = () => {
    return [
        {
            id: uuidv4(),
            title: "About",
            subTitleOne: "A bit of an",
            subTitleTwo: "introduction",
            index: "01"
        },
        {
            id: uuidv4(),
            title: "Works",
            subTitleOne: "A quick",
            subTitleTwo: "show-and-tell",
            index: "02"
        },
        {
            id: uuidv4(),
            title: "Contact",
            subTitleOne: "A short",
            subTitleTwo: "message to me",
            index: "03"
        },
        {
            id: uuidv4(),
            title: "Resume",
            subTitleOne: "A professional",
            subTitleTwo: "summary",
            index: "04"
        },
    ]
}