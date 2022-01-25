// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';
import { Link } from 'react-router-dom';
import { motion, AnimationControls } from 'framer-motion';

// Components
import { PageIndicator } from './PageIndicator';
import { WhiteTextHighlight } from './WhiteTextHighlight';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// Animations
import { useScroll } from '../styles/useScroll';
import { loadComponentAnimation } from '../styles/animations';

// Illustrations
import arrow from '../images/icons/Arrow.png'

interface INextPage {
    nextNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>
}

export const NextPage: FunctionComponent<INextPage> = (p) => {

    const [element, controls] = useScroll(0.33);

    return (
        
        <StyledNextPage
            ref={element as (node?: Element | null | undefined) => void} 
            animate={controls as AnimationControls} variants={loadComponentAnimation} 
            initial="hidden">
            <PageIndicator activeNavItem={p.nextNavItem}></PageIndicator>
            <div className="text-wrapper">
                <WhiteTextHighlight text={`Next Chapter`}></WhiteTextHighlight>
                <Link to={p.nextNavItem.url} onClick={() => p.setActiveNavItem(p.nextNavItem)}>
                    <h1>{p.nextNavItem.title}</h1>
                    <div className="image-wrapper" >
                        <img src={arrow} alt="Arrow" />
                    </div>
                </Link>
            </div>
        </StyledNextPage>
    )
}

const StyledNextPage = styled(motion.div)`
    min-height: 50vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 2.5rem;
    font-size: ${theme.text};
    font-family: ${theme.montserrat};
    position: relative;


    .text-wrapper {
        flex: 1 1 66.67%;
        display: flex;
        flex-direction: column;

        transition: all 0.33s ease;

        h1 {
            font-size: ${theme.text};
            font-weight: 400;
            transition: all 0.33s ease;             
            &:hover {
                color: rgba(255, 0, 0, 1);
            }
        }

        p {
            font-family: ${theme.playfair};
        }

        a {
            width: max-content;
        }

    }

    @media (max-width: 650px) {
        flex-direction: column;
    }
    
`;