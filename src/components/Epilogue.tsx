// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { INavItem } from '../data/navbarData';
import { motion } from 'framer-motion';

// Components
import { PageHeader } from './PageHeader';
import { PageIndicator } from './PageIndicator';


// Styled
import { themeStyles as theme } from '../styles/globalStyle';

// //Animations
// import { useScroll } from '../styles/useScroll';
// import { loadComponentAnimation } from '../styles/animations';

// Data
import resume from '../data/BobbyQuilacioResume.pdf';

interface IEpilogue {
    activeNavItem: INavItem,
}

export const Epilogue: FunctionComponent<IEpilogue> = (p) => {

    return(
        <StyledEpilogue>
            <PageIndicator activeNavItem={p.activeNavItem}></PageIndicator>
            <div className="content-wrapper">
                <PageHeader title={p.activeNavItem.title}></PageHeader>
                <div className="body">
                    <p>You have reached the end. Thank you very much for taking the time checking out my portfolio. Click
                    the link to grab a copy of my professional resume. Again, thank you very much!</p>
                    <Link to={resume} target="_blank" download="BobbyQuilacioResume.pdf">Download</Link>
                </div>
            </div>
        </StyledEpilogue>
    );
}

const StyledEpilogue = styled(motion.div)`
    display: flex;
    min-height: 50vh;
    font-family: ${theme.montserrat};
    font-size: ${theme.text};

    .content-wrapper {
        flex: 1 1 66.67%;

        p {
            padding: 2rem 0rem 4rem 0rem;
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
    }

    @media (max-width: 650px) {
        flex-direction: column;
    }
`;