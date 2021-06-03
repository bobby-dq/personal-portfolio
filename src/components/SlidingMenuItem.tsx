// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Link } from 'react-router-dom';

// Components
import { INavItem } from '../data/navbarData';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';
import { StyledLine as line } from '../styles/reuseStyle';

interface ISlidingMenuItem {
    setOpenSlider: React.Dispatch<React.SetStateAction<boolean>>,
    openSlider: boolean,
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>
    navItem: INavItem,
}

export const SlidingMenuItem: FunctionComponent<ISlidingMenuItem> = (p) => {
    const url = useLocation().pathname;

    return (
        <StyledSlidingMenuItem onClick={() => {p.setOpenSlider(!p.openSlider); p.setActiveNavItem(p.navItem)}} >
            <StyledLine></StyledLine>
            <Link to={`${p.navItem.url}`} className="item" style={{background: `${url === p.navItem.url ? 'rgba(255, 0, 0, 0.10)': ''}`}}>
                <div className="image-wrapper">
                    <img src={p.navItem.icon} alt={p.navItem.title} />
                    
                </div>
                <div className="text-wrapper"> 
                    <div className="index-wrapper">
                            <p>{p.navItem.index}</p>
                    </div>
                    <div className="title">
                        <p>{p.navItem.title}</p>
                    </div>
                    <div className="subtitle">
                        <p>{p.navItem.subTitleOne} {p.navItem.subTitleTwo}</p>
                    </div>
                </div>
            </Link>
        </StyledSlidingMenuItem>
    );
}

const StyledSlidingMenuItem = styled.div`
    color: ${theme.darkGray};
    display: flex;
    flex-direction: column;
    font-family: ${theme.montserrat};
    font-size: ${theme.text};
    padding: 1rem 5rem 0rem 0rem;

    .item {
        color: ${theme.darkGray};
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 1rem 1rem;
        padding: 1rem 1rem;
        transition: all 0.33s ease;
        z-index: 1;


        &:hover {
            color: ${theme.dirtyWhite};
            background: ${theme.darkGray};
            img {
                filter: invert(1)
            }
        }

        .image-wrapper {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            margin-right: 2rem;
            img {
                width: 10rem
            }
        }

        .text-wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            margin-left: 2rem;

            .title {
                font-size: 3.6rem;
                font-weight: bold;
            }
            .subtitle {
                font-size: ${theme.smallText};
            }

        }

        .index-wrapper {
            margin-top: 1.2rem; 
            display: flex;
            align-items: flex-start;
            font-family: ${theme.playfair};
            height: 100%;
        }

        
    }
`;

const StyledLine = styled(line)`
    background: ${theme.darkGray};
    height: 0.25rem;
`; 