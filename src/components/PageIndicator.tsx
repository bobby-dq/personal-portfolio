// Packages
import { url } from 'inspector';
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
            <div className="image-wrapper">
                <img src={p.activeNavItem.icon} alt={p.activeNavItem.title} />
            </div>
            <h1>{p.activeNavItem.chapter}</h1>
            <p>{p.activeNavItem.subTitleOne}<br/>{p.activeNavItem.subTitleTwo}</p>
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

    .image-wrapper {
        margin-top: 3rem;
        width: 100%;
        img {
            width: 10rem;
        }
    }
`;