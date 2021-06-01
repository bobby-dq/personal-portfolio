// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';
import { StyledLine } from '../styles/reuseStyle';

interface INavItemComponent {
    navItem: INavItem;
}

export const NavItem: FunctionComponent<INavItemComponent> = (props) => {

    return (
        <StyledNavItem>
            <StyledLine></StyledLine>
            <p className="nav-item-title">{props.navItem.title}</p>
            <p>{props.navItem.subTitleOne} <br/> {props.navItem.subTitleTwo}</p>
            <p className="nav-item-index">{props.navItem.index}</p>
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