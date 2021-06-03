// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

interface IPageIndicator { 
    activeNavItem: INavItem,
}

export const PageIndicator: FunctionComponent<IPageIndicator> = (p) => {

    return (
        <StyledPageIndicator>
            <h1>{p.activeNavItem.chapter}</h1>
            <p>{p.activeNavItem.subTitleOne} {p.activeNavItem.subTitleTwo}</p>
        </StyledPageIndicator>
        
    )
}

const StyledPageIndicator = styled.div`
    flex: 1 1 33.33%;
    h1 {
            font-size: ${theme.text};
            font-family: ${theme.playfair};
    }
    p {
        padding-top: 1rem;
    }
`;