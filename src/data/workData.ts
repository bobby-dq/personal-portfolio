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
            title: "Budgeting App (ASP.NET)",
            description: "Budgeting App is a ASP.NET Core MVC App that helps you track your personal finances, budgets, and expenses. It uses EF Core and SQL Server to manage the database and Tailwind CSS for styling. Authentication and Authorization is managed using ASP.NET Identity.",
            liveUrl: "https://personalbudgeting.azurewebsites.net/",
            githubRepo: "https://github.com/bobby-dq/BudgetingApp",
            technologies: ["C#", "ASP.NET", "SQL Server", "Tailwind", "EF Core", ],
            photo: aspBudgeting
        },
        {
            id: uuidv4(),
            title: "HIMO | Web Design Studios",
            description: "The official website of Himo Web Design Studios. It uses multiple React libraries such as React Router, Styled Components, and Framer Motion.",
            liveUrl: "https://www.himostudios.com",
            githubRepo: "https://github.com/bobby-dq/himo-studios-website",
            technologies: ["TypeScript", "React", "Styled Components", "Framer Motion", ],
            photo: himo
        },
        {
            id: uuidv4(),
            title: "Baby Tracker",
            description: "Baby Tracker is a ASP.NET Core MVC App track your newborn's eating, sleeping habits, medication, and growth. It uses EF Core and SQL Server to manage the database and Tailwind CSS for styling. Authentication and Authorization is managed using ASP.NET Identity.",
            githubRepo: "https://github.com/bobby-dq/BabyTracker",
            technologies: ["C#", "ASP.NET", "SQL Server", "Tailwind", "EF Core", ],
            photo: babyTracker
        },
        {
            id: uuidv4(),
            title: "Bonterra Built",
            description: "The website of Bonterra Built - a local custom home builder. This website is built using Gatsby JS.",
            liveUrl: "https://www.bonterrabuilt.ca/",
            technologies: ["React", "Gatsby", "SASS", "JavaScript"],
            photo: bonterraBuilt
        },
        {
            id: uuidv4(),
            title: "MoonCake",
            description: "The website (prototype stage) of MoonCake - a local bakery. This static website is built using CSS, HTML, SASS, and Javascript.",
            liveUrl: "http://moon-cake.s3-website.ca-central-1.amazonaws.com/",
            technologies: ["HTML", "CSS", "SASS", "JavaScript"],
            photo: moonCake
        },
        
        {
            id: uuidv4(),
            title: "Sudoku Backtracker",
            description: "Sudoku backtracker is an algorithm written in python to solve sudoku puzzles. Creating this algorithm was great in learning python syntax.",
            githubRepo: "https://github.com/bobby-dq/sudoku_backtracker",
            technologies: ["Python"],
            photo: sudokuBacktracker
        },
        {
            id: uuidv4(),
            title: "Moebius Plotter", 
            description: "Moebius Plotter is a .NET application that generates a graph that illustrates Merten's Conjecture. If Merten's Conjecture is proven to be true, it would be imply that Riemann's Hypothesis is also true - one of the famous unsolved mathematical phenomenons.",
            githubRepo: "https://github.com/bobby-dq/MoebiusPlotter",
            technologies: ["C#", ".NET", "ScottPlot"],
            photo: moebiusPlotter
        },
        {
            id: uuidv4(),
            title: "Budgeting App (Django)",
            description: "Personal Budgeting App is a CRUD Application built using Django.",
            liveUrl: "https://personalbudgeting.herokuapp.com/",
            githubRepo: "https://github.com/bobby-dq/personal-budgeting-app",
            technologies: ["Python", "Django"],
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
    ]
}
