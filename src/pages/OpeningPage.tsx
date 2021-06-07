// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';
import { motion } from 'framer-motion';

// Components
import { Hero } from '../components/Hero';
import { Prologue } from '../components/Prologue';
import { NextPage } from '../components/NextPage';

// Animations
import { switchPageAnimation } from '../styles/animations';

interface IOpeningPage {
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>,
    nextNavItem: INavItem,
}

export const OpeningPage: FunctionComponent<IOpeningPage> = (p) => {

    return (
        <StyledOpeningPage variants={switchPageAnimation} initial="before" animate="after" exit="exit">
            <Hero></Hero>
            <Prologue activeNavItem={p.activeNavItem}></Prologue>
            <NextPage setActiveNavItem={p.setActiveNavItem} nextNavItem={p.nextNavItem}/>
        </StyledOpeningPage>
    );
}

const StyledOpeningPage = styled(motion.div)`
    padding: 10rem 0rem;

    @media (max-width: 650px) {
        padding: 10rem 0rem 10rem 0rem; 
    }
`;