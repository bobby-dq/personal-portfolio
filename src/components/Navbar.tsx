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
    navbarData: INavItem[],
    activeNav: INavItem,
    setActiveNav: React.Dispatch<React.SetStateAction<INavItem>>
}

export const Navbar: FunctionComponent<INavbar> = (p) => {

    return (
        <StyledNavbar>
            <a href="#" className="logo-wrapper">
                <StyledLine></StyledLine>
                <p>Bobby <br /> Quilacio</p>
                <p className="index">00</p>
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
        font-size: ${theme.text};
        font-weight: bold;
        
        p {
            padding-top: 1rem;
        }

        .index {
            font-size: 1rem;
            font-family: ${theme.playfair};
            font-weight: bold;
        }
    }

    .nav-item-wrapper {
        display: flex;
    }
`;