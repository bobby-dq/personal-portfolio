// Packages
import { v4 as uuidv4 } from 'uuid';

// Images
import aspBudgeting from '../images/workImages/asp-budgeting.jpg';
import babyTracker from '../images/workImages/babytracker.jpg';
import bonterraBuilt from '../images/workImages/bonterra-built.jpg';
import djangoBudgeting from '../images/workImages/django-budgeting.jpg';
import himo from '../images/workImages/himo.jpg';
import moebiusPlotter from '../images/workImages/moebius-plotter.jpg';
import moonCake from '../images/workImages/mooncake.jpg';
import personalPortfolio from '../images/workImages/personal-portfolio.jpg';
import sudokuBacktracker from '../images/workImages/sudoku-backtracker.jpg';
import teamGalo from '../images/workImages/team-galo.jpg';

export interface IWork {
    id: string,
    title: string, 
    description: string, 
    liveUrl?: string, 
    githubRepo?: string, 
    technologies: string[],
    photo: string
}

export const generateWorkData: () => IWork[] = () => {

    return [
        
        {
            id: uuidv4(),
            title: "Sudoku Backtracker",
            description: "Sudoku backtracker is an algorithm written in python to solve sudoku puzzles. Creating this algorithm was great in learning python syntax. It utilizes backtracking algorithm, which uses recursion at its core.",
            githubRepo: "https://github.com/bobby-dq/sudoku_backtracker",
            technologies: ["Python"],
            photo: sudokuBacktracker
        },
        {
            id: uuidv4(),
            title: "Möbius Plotter", 
            description: "Assisted a USRA project by creating a .NET application to generate a Merten's Conjencture graph, utilizing the Möbius function/algorithm. If Merten's Conjecture is proven to be true, it would be imply that Riemann's Hypothesis is also true - one of the famous unsolved mathematical phenomenons. The Möbius function takes a natural number and outputs 0 if it has repeated prime factors, 1 if it has an even number of non-repeated prime factors, and -1 if it has an odd number of non-repeated prime factors.",
            githubRepo: "https://github.com/bobby-dq/MoebiusPlotter",
            technologies: ["C#", ".NET", "ScottPlot"],
            photo: moebiusPlotter
        },
        {
            id: uuidv4(),
            title: "Team Galo BJJ",
            description: "The official website of Team Galo BJJ - a local Brazilian Jiu Jitsu gym in Edmonton. Created using GatsbyJS to maximize Search Engine Optimization, it also uses React tools and libraries such as React Router, Sass, Framer Motion, and GraphQL.",
            liveUrl: "https://teamgalobjj.ca/",
            technologies: ["GraphQL","JavaScript", "Gatsby", "React", "Sass", "Framer Motion"],
            photo: teamGalo
        },
        {
            id: uuidv4(),
            title: "Bonterra Built",
            description: "The official website of Bonterra Built - a local homebuilder in Edmonton. Created using GatsbyJS to maximize Search Engine Optimization, it also uses React tools and libraries such as React Router, Sass, Framer Motion, and GraphQL.",
            liveUrl: "https://www.bonterrabuilt.ca/",
            technologies: ["GraphQL","React", "Gatsby", "SASS", "JavaScript"],
            photo: bonterraBuilt
        },
        {
            id: uuidv4(),
            title: "HIMO | Web Studio",
            description: "The official website of HIMO | Web Studio - a web studio that I founded. It uses Gatsby to maximize its earch Engine Optimization and multiple react libraries such as React Router, Styled Components, Framer Motion, and GraphQL.",
            liveUrl: "https://www.himostudios.com",
            technologies: ["GraphQL","JavaScript", "Gatsby", "React", "Sass", "Framer Motion"],
            photo: himo
        },
        {
            id: uuidv4(),
            title: "Budgeting App (ASP.NET)",
            description: "Budgeting App is a ASP.NET Core MVC App that helps you track your personal finances, budgets, and expenses. It uses EF Core and SQL Server to manage the database and Tailwind CSS for styling. Authentication and Authorization is managed using ASP.NET Identity.",
            // liveUrl: "https://budgetingapp.azurewebsites.net/",
            githubRepo: "https://github.com/bobby-dq/BudgetingApp",
            technologies: ["C#", "ASP.NET", "SQL Server", "Tailwind", "EF Core", ],
            photo: aspBudgeting
        },
        {
            id: uuidv4(),
            title: "Budgeting App (Django)",
            description: "Personal Budgeting App is a CRUD Application built using Django and Bootsrap library for styling.",
            liveUrl: "https://personalbudgeting.herokuapp.com/",
            githubRepo: "https://github.com/bobby-dq/personal-budgeting-app",
            technologies: ["Python", "Django","Bootstrap"],
            photo: djangoBudgeting
        },
        {
            id: uuidv4(),
            title: "Personal Portfolio",
            description: "My personal portfolio is built using React and React Libraries such as Styled Components.",
            liveUrl: "/",
            githubRepo: "https://github.com/bobby-dq/personal-portfolio",
            technologies: ["TypeScript", "React", "Styled Components", "Framer Motion", ],
            photo: personalPortfolio
        },
        
        {
            id: uuidv4(),
            title: "MoonCake",
            description: "The website (in development stages, link will take you to prototype) of MoonCake - a local bakery. It will mainly use Gatsby as its main technology.",
            liveUrl: "https://www.figma.com/file/lYUqDsaax96AMQAPwi1Oux/MoonCake?node-id=0%3A1",
            technologies: ["GraphQL","JavaScript", "Gatsby", "React", "Sass"],
            photo: moonCake
        },

        {
            id: uuidv4(),
            title: "Baby Tracker",
            description: "Baby Tracker is a ASP.NET Core MVC App track your newborn's eating, sleeping habits, medication, and growth. It uses EF Core and SQL Server to manage the database and Tailwind CSS for styling. Authentication and Authorization is managed using ASP.NET Identity.",
            githubRepo: "https://github.com/bobby-dq/BabyTracker",
            technologies: ["C#", "ASP.NET", "SQL Server", "Tailwind", "EF Core", ],
            photo: babyTracker
        },
        
        
        
    ]
}
