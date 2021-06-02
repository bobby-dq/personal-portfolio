// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';
import { StyledLine } from '../styles/reuseStyle';

interface INavItemComponent {
    navItem: INavItem,
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>
}

export const NavItem: FunctionComponent<INavItemComponent> = (p) => {

    return (
        <StyledNavItem onClick={() => p.setActiveNavItem(p.navItem)}>
            <StyledLine></StyledLine>
            <p className="nav-item-title">{p.navItem.title}</p>
            <p>{p.navItem.subTitleOne} <br/> {p.navItem.subTitleTwo}</p>
            <p className="nav-item-index">{p.navItem.index}</p>
        </StyledNavItem>
    );
} 

const StyledNavItem = styled.div`
    margin-left: 5rem;
    font-family: ${theme.montserrat};
    font-size: ${theme.smallText};
    width: 10rem;

    p {
        padding-top: 1rem;
    }

    .nav-item-title {
        font-weight: bold;
    }

    .nav-item-index {
        font-family: ${theme.playfair};
        font-weight: bold;
    }
`;