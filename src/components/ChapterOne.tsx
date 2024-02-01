// Packages
import { FunctionComponent } from "react";
import styled from "styled-components";
import { INavItem } from "../data/navbarData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Components
import { PageHeader } from "./PageHeader";
import { PageIndicator } from "./PageIndicator";
import { WhiteTextHighlight } from "./WhiteTextHighlight";

// Styles
import { themeStyles as theme } from "../styles/globalStyle";
import { generateExperience } from "../data/experienceData";
import { ExperienceItem } from "./ExperienceItem";

// //Animations
// import { useScroll } from '../styles/useScroll';
// import { loadComponentAnimation } from '../styles/animations';

interface IChapterOne {
  activeNavItem: INavItem;
}

export const ChapterOne: FunctionComponent<IChapterOne> = (p) => {
  const expData = generateExperience();

  return (
    <StyledChapterOne>
      <PageIndicator activeNavItem={p.activeNavItem} />
      <div className="content-wrapper">
        <PageHeader title={p.activeNavItem.title}></PageHeader>
        <div className="experience-wrapper">
          {expData.map((w) => (
            <ExperienceItem expItem={w} />
          ))}
        </div>
      </div>
    </StyledChapterOne>
  );
};

const StyledChapterOne = styled(motion.div)`
  display: flex;
  min-height: 100vh;
  font-family: ${theme.montserrat};
  font-size: ${theme.text};

  .content-wrapper {
    flex: 1 1 66.67%;
  }

  .experience-wrapper {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
