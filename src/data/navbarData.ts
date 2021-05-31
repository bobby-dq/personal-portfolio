import { v4 as uuidv4 } from 'uuid';

export interface INavItem {
    id: string
    title: string,
    subTitle: string,
    index: string,
}

export const generateNavbarData:() => INavItem[] = () => {
    return [
        {
            id: uuidv4(),
            title: "About",
            subTitle: "A bit of an introduction",
            index: "01"
        },
        {
            id: uuidv4(),
            title: "Works",
            subTitle: "A quick show-and-tell",
            index: "02"
        },
        {
            id: uuidv4(),
            title: "Contact",
            subTitle: "Write a short message to me",
            index: "03"
        },
        {
            id: uuidv4(),
            title: "Resume",
            subTitle: "A brief professional summary",
            index: "04"
        },
    ]
}