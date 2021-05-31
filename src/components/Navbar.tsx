// Pacakages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

// Styles
import { themeStyles as theme} from '../styles/globalStyle';

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
            <div className="logo-wrapper">

            </div>
            <ul className="nav-item-wrapper">
                {p.navbarData.map(i =>
                    <li><a href="#"><NavItem navItem={i}/></a></li>
                )}
            </ul>
            
        </StyledNavbar>
    );
}

const StyledNavbar = styled.div`

`;