// Packages
import { FunctionComponent } from 'react';
import { INavItem } from '../data/navbarData';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Components
import { NextPage } from '../components/NextPage';
import { ChapterTwo } from '../components/ChapterTwo';

// Animations
import { switchPageAnimation } from '../styles/animations';

interface IWorksPage {
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>,
    nextNavItem: INavItem,
}

export const WorksPage: FunctionComponent<IWorksPage> = (p) => {

    return (
        <StyledWorksPage variants={switchPageAnimation} initial="before" animate="after" exit="exit">
            <ChapterTwo activeNavItem={p.activeNavItem}></ChapterTwo>
            <NextPage nextNavItem={p.nextNavItem} setActiveNavItem={p.setActiveNavItem}/>
        </StyledWorksPage>
    );
}

const StyledWorksPage = styled(motion.div)`
    padding: 10rem 0rem;

    @media (max-width: 650px) {
        padding: 2rem 0rem;
    }
`;