import { v4 as uuidv4 } from 'uuid';

interface IWork {
    id: string,
    title: string, 
    description: string, 
    liveUrl?: string, 
    githubRepo: string, 
    technologies: string[],
    photo?:string
}

export const generateWorkData: () => IWork[] = () => {

    return [
        {
            id: uuidv4(),
            title: "HIMO | Web Design Studios",
            description: "Web design app",
            liveUrl: "https://www.himostudios.com",
            githubRepo: "github.com",
            technologies: ["TypeScript", "React", "Styled Components", "Framer Motion", ],
            photo: "this is a string"
        },
        {
            id: uuidv4(),
            title: "Personal Budgeting App (ASP.NET)",
            description: "Web design app",
            liveUrl: "https://www.himostudios.com",
            githubRepo: "github.com",
            technologies: ["TypeScript", "React", "Styled Components", "Framer Motion", ],
            photo: "this is a string"
        },
        {
            id: uuidv4(),
            title: "BabyTracker",
            description: "Web design app",
            liveUrl: "https://www.himostudios.com",
            githubRepo: "github.com",
            technologies: ["TypeScript", "React", "Styled Components", "Framer Motion", ],
            photo: "this is a string"
        },
        {
            id: uuidv4(),
            title: "Sudoku Backtracker",
            description: "Web design app",
            liveUrl: "https://www.himostudios.com",
            githubRepo: "github.com",
            technologies: ["TypeScript", "React", "Styled Components", "Framer Motion", ],
            photo: "this is a string"
        },
        {
            id: uuidv4(),
            title: "Personal Budgeting App (Django)",
            description: "Web design app",
            liveUrl: "https://www.himostudios.com",
            githubRepo: "github.com",
            technologies: ["TypeScript", "React", "Styled Components", "Framer Motion", ],
            photo: "this is a string"
        },
        {
            id: uuidv4(),
            title: "Moebius Plotter",
            description: "Web design app",
            liveUrl: "https://www.himostudios.com",
            githubRepo: "github.com",
            technologies: ["TypeScript", "React", "Styled Components", "Framer Motion", ],
            photo: "this is a string"
        },
        {
            id: uuidv4(),
            title: "MoonCake",
            description: "Web design app",
            liveUrl: "https://www.himostudios.com",
            githubRepo: "github.com",
            technologies: ["TypeScript", "React", "Styled Components", "Framer Motion", ],
            photo: "this is a string"
        },
        {
            id: uuidv4(),
            title: "Bonterra Built",
            description: "Web design app",
            liveUrl: "https://www.himostudios.com",
            githubRepo: "github.com",
            technologies: ["TypeScript", "React", "Styled Components", "Framer Motion", ],
            photo: "this is a string"
        },
    ]
}
