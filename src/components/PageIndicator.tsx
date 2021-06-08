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
            <div className="image-wrapper">
                <img src={p.activeNavItem.icon} alt={p.activeNavItem.title} />
            </div>
            <div className="text-wrapper">
                <h1>{p.activeNavItem.chapter}</h1>
                <p>{p.activeNavItem.subTitleOne} {p.activeNavItem.subTitleTwo}</p>
            </div>
            
        </StyledPageIndicator>
        
    )
}

const StyledPageIndicator = styled.div` 
    flex: 1 1 33.33%;

    .text-wrapper {
       h1 {
            font-size: ${theme.text};
            font-family: ${theme.playfair};
            word-wrap: break-word;
        }
        p {
            padding-top: 1rem;
            font-family: ${theme.montserrat};
        } 
    }
    

    .image-wrapper {
        margin-top: 3rem;
        width: fit-content;
        img {
            width: 20rem;
        }
    }

    @media (max-width: 650px) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: 5rem;

        .text-wrapper {
            padding-left: 3rem;
        }

        .image-wrapper {
            img {
                width: 10rem;
            }
        }
    }
`;