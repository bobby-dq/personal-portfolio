// Pacakages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

// Styles
import { themeStyles as theme} from '../styles/globalStyle';
import { StyledLine } from '../styles/reuseStyle';

// Components
import { NavItem } from './NavItem';

interface INavbar {
    openSlider: boolean,
    setOpenSlider: React.Dispatch<React.SetStateAction<boolean>>,
    navbarData: INavItem[],
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>
}

export const Navbar: FunctionComponent<INavbar> = (p) => {

    return (
        <StyledNavbar>
            <a href="#" className="logo-wrapper">
                <StyledLine></StyledLine>
                <h1>Bobby <br /> Quilacio</h1>
            </a>  
            <ul className="nav-item-wrapper">
                {p.navbarData.map(i =>
                    <li><a href="#"><NavItem navItem={i}/></a></li>
                )}
            </ul>
        </StyledNavbar>
    );
}

const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2rem 0rem;

    .logo-wrapper {
        font-family: ${theme.playfair};
        font-weight: bold;
        h1 {
            padding-top: 1rem;
            font-size: ${theme.text};
        }
    }

    .nav-item-wrapper {
        display: flex;
    }
`;