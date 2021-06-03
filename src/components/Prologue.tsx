// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// Components
import { PageIndicator } from './PageIndicator';

interface IPrologue {
    activeNavItem: INavItem
}

export const Prologue: FunctionComponent<IPrologue> = (p) => {

    return (
        <StyledPrologue>
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
                    and this page serves as the prologue, and each 
                    chapter will expand  according to its title. However 
                    you’ll quickly find out that contents within each chapter 
                    are not laid-out like a traditional book.
                </p>
                <p>
                    That being said, feel free to skip ahead, each chapter are
                    independent of each other, so click any of the links in the side bar or nav-bar.
                </p>
                <p>I don't want to babble too much, so enjoy.</p>
                <h1>Bobby Quilacio</h1>
            </div>
        </StyledPrologue>
    );
}   

const StyledPrologue = styled.div`
    padding-top: 10rem;
    min-height: 100vh;
    font-size: ${theme.text};
    font-family: ${theme.montserrat};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .content {
        flex: 1 1 66.67%;
        p {
            padding-bottom: 2rem;
        }
        h1 {
            font-family: ${theme.allura};
            font-weight: lighter;

        }
    }
`;