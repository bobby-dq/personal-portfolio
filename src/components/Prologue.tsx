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
                    I am a software/web developer, founder of <a className="in-text-link" href="https://www.himostudios.com" rel="noreferrer" target="_blank">HIMO | Web Studio,</a> and currently a Computing Science student at the University of Alberta - but I will expand more on that in the 
                    following chapters. I am always open to new and exciting opportunities, so if you think we can create something exciting together, please don't hesitate to contact me.
                </p>
                <p>
                    This portfolio is meant to be navigated like a book 
                    but feel free to skip ahead, each chapter are
                    independent of each other, so click any of the links in the side bar or nav-bar to navigate your way around. 
                </p>
                <p>Again, thank you very much for visiting my portfolio.</p>
            
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
        .in-text-link {
            display: inline-block;
            text-decoration: underline;
            transition: all 0.33s ease;
            font-weight: regular;
            &:hover {
                color: rgba(255, 0, 0, 1);
            }
        }
    }

    @media (max-width: 650px) {
        flex-direction: column;
    }
`;