// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';
import { motion, AnimationControls } from 'framer-motion';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// Components
import { PageIndicator } from './PageIndicator';

//Animations
import { useScroll } from '../styles/useScroll';
import { loadComponentAnimation } from '../styles/animations';

interface IPrologue {
    activeNavItem: INavItem
}

export const Prologue: FunctionComponent<IPrologue> = (p) => {
    
    const [element, controls] = useScroll(0.33);

    return (
        <StyledPrologue
            ref={element as (node?: Element | null | undefined) => void} 
            animate={controls as AnimationControls} variants={loadComponentAnimation} 
            initial="hidden">
            <PageIndicator activeNavItem={p.activeNavItem}></PageIndicator>
            <div className="content">
                <p>
                    Thank you for visiting my portfolio. A brief intro about me, 
                    I am a full stack developer that focuses on ASP.NET
                    and React / Typescript - but I will expand more on that in the 
                    following chapters. 
                </p>
                <p>
                    This portfolio is meant to be navigated like a book 
                    but feel free to skip ahead, each chapter are
                    independent of each other, so click any of the links in the side bar or nav-bar. 
                </p>
            
                <h1>Bobby Quilacio</h1>
            </div>
        </StyledPrologue>
    );
}   

const StyledPrologue = styled(motion.div)`
    padding-top: 10rem;
    min-height: 50vh;
    font-size: ${theme.text};
    font-family: ${theme.montserrat};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .content {
        flex: 1 1 66.67%;
        p, ul {
            padding-bottom: 2rem;
            font-size: 1.6rem;
        }
        h1 {
            font-family: ${theme.allura};
            font-weight: lighter;

        }
        a {
            display: flex;
            font-family: ${theme.playfair};
            font-weight: bold;
            text-decoration: underline;
            width: fit-content;
            transition: all 0.33s ease;

            &:hover {
                color: rgba(255, 0, 0, 1);
            }

        }
    }

    @media (max-width: 650px) {
        flex-direction: column;
    }
`;