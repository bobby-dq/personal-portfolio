// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';
import { Link } from 'react-router-dom';

// Components
import { PageIndicator } from './PageIndicator';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// Illustrations
import arrow from '../images/icons/Arrow.png'

interface INextPage {
    nextNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>
}

export const NextPage: FunctionComponent<INextPage> = (p) => {
    return (
        <StyledNextPage>
            <PageIndicator activeNavItem={p.nextNavItem}></PageIndicator>
            <div className="text-wrapper">
                <p>Next Chapter</p>
                <Link to={p.nextNavItem.url} onClick={() => p.setActiveNavItem(p.nextNavItem)}>
                    <h1>{p.nextNavItem.title}</h1>
                    <div className="image-wrapper">
                        <img src={arrow} alt="Arrow" />
                    </div>
                </Link>
            </div>
        </StyledNextPage>
    )
}

const StyledNextPage = styled.div`
    min-height: 50vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 10rem;
    font-size: ${theme.text};
    font-family: ${theme.montserrat};

    .text-wrapper {
        flex: 1 1 66.67%;
        display: flex;
        flex-direction: column;

        transition: all 0.33s ease;

        &:hover {
            color: rgba(255, 0, 0, 1);
        }

        h1 {
            font-size: ${theme.subHeader};
            font-weight: 400;
        }

        p {
            font-family: ${theme.playfair};
        }

        a {
            width: fit-content;
        }

    }

    @media (max-width: 650px) {
        flex-direction: column-reverse;
    }
    
`;