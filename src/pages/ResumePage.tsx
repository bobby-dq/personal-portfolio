// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem }  from '../data/navbarData';
import { motion } from 'framer-motion';

// Components
import { Epilogue } from '../components/Epilogue';
import { NextPage } from '../components/NextPage';

// Animations
import { switchPageAnimation } from '../styles/animations';

interface IResumePage {
    activeNavItem: INavItem,
    nextNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>,
}

export const ResumePage: FunctionComponent<IResumePage> = (p) => {

    return (
        <StyledResumePage variants={switchPageAnimation} initial="before" animate="after" exit="exit">
            <Epilogue activeNavItem={p.activeNavItem}/>
            <NextPage nextNavItem={p.nextNavItem} setActiveNavItem={p.setActiveNavItem} />
        </StyledResumePage>
    );
}

const StyledResumePage = styled(motion.div)`
    padding: 10rem 0rem;

    @media (max-width: 650px) {
        padding: 2rem 0rem;
    }
`;