// Packages
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { INavItem } from '../data/navbarData';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// Animations
import { switchPageAnimation } from '../styles/animations';

// Components
import { PageHeader } from '../components/PageHeader';
import { PageIndicator } from '../components/PageIndicator';

interface INotFoundPage {
    activeNavItem: INavItem,
}

export const NotFoundPage: FunctionComponent<INotFoundPage> = (p) => {
    return (
        <StyledNotFoundPage variants={switchPageAnimation} initial="before" animate="after" exit="exit">
            <PageIndicator activeNavItem={p.activeNavItem} />
            <div className="content-wrapper">
                <PageHeader title={p.activeNavItem.title} />    
                <h1>Error {p.activeNavItem.index}</h1>
                <Link to="/">Go Home</Link>
            </div>
            
        </StyledNotFoundPage>
    )
}

const StyledNotFoundPage = styled(motion.div)`
    display: flex;
    padding-top: 10rem;
    min-height: 80vh;
    font-family: ${theme.montserrat};
    font-size: ${theme.text};

    .content-wrapper {
        min-height: 50vh; 
        flex: 1 1 66.67%;
        h1 {
            padding: 2rem 0rem;
        }
    }

    a {
        font-family: ${theme.playfair};
        border: solid 3px ${theme.dirtyWhite};
        margin: 2rem 0rem;
        padding: 0.5rem 2rem;
        transition: all 0.33s ease;

        &:hover {     
            border: solid 3px rgba(255, 0, 0, 1);
            color: rgba(255, 0, 0, 1);
        }
    }

    @media(max-width: 650px) {
        flex-direction: column;
        padding-top: 2rem;
        justify-content: flex-start;
    }
`;