// Packages
import { v4 as uuidv4 } from "uuid";

export interface IExperience {
  id: string;
  jobTitle: string;
  company: string;
  startDate?: string;
  endDate?: string;
  description: string;
}

export const generateExperience: () => IExperience[] = () => {
  return [
    {
      id: uuidv4(),
      jobTitle: "Software Developer Intern",
      company: "MMCI Safety Systems",
      startDate: "May 2023",
      endDate: "Present",
      description:
        "Engineered a full-stack web application integrating an external API, utilizing .NET, C#, DynamoDB, PostgreSQL, TypeScript, React/NextJS, and Material UI. Implemented secure JWT access tokens, orchestrated deployment using Docker containers, and established a CI/CD pipeline with Jenkins and GitHub Actions.",
    },
    {
      id: uuidv4(),
      jobTitle: "Software Engineer Co-op",
      company: "Personify",
      startDate: "May 2023",
      endDate: "Sept 2023",
      description:
        "Maintained and scaled an association/organization management full-stack web app with .NET, C#, SQL Server, TypeScript, Angular, and LESS CSS. Conducted rigorous component tests, developed unit tests, and actively participated in Kanban ceremonies using GitLab for version control.",
    },
    {
      id: uuidv4(),
      jobTitle: "Software Developer Intern",
      company: "Benevity",
      startDate: "May 2022",
      endDate: "Sept 2022",
      description:
        "Maintained and scaled a payment integration API and full-stack web app using .NET, C#, SQL Server, TypeScript, Angular, and CSS. Formulated comprehensive API tests, created unit tests, and actively engaged in agile scrum ceremonies. Conducted research, spikes, and used Git and Azure DevOps for version control.",
    },
    {
      id: uuidv4(),
      jobTitle: "Freelance Web Developer",
      company: "HIMO | Web Studio",
      startDate: "May 2021",
      endDate: "Aug 2022",
      description:
        "Managed a web studio specializing in responsive and modern web designs. Provided freelance web development services using various technologies based on project requirements.",
    },
  ];
};
