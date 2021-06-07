// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';
import { motion } from 'framer-motion';

// Components
import { ChapterOne } from '../components/ChapterOne';
import { NextPage } from '../components/NextPage';

// Animations 
import { switchPageAnimation } from '../styles/animations';

interface IAboutPage {
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>,
    nextNavItem: INavItem,
}


export const AboutPage: FunctionComponent<IAboutPage> = (p) => {

    return (
        <StyledAboutPage variants={switchPageAnimation} initial="before" animate="after" exit="exit">
            <ChapterOne activeNavItem={p.activeNavItem} />
            <NextPage nextNavItem={p.nextNavItem} setActiveNavItem={p.setActiveNavItem}></NextPage>
        </StyledAboutPage>
    );
};

const StyledAboutPage = styled(motion.div)`
    padding: 10rem 0rem;

    @media (max-width: 650px) {
        padding: 2rem 0rem;
    }
`;