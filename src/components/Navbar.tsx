// Pacakages
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Styles
import { themeStyles as theme} from '../styles/globalStyle';
import { StyledLine } from '../styles/reuseStyle';

// Components
import { NavItem } from './NavItem';
import { AnimatedLine } from './AnimatedLine';

interface INavbar {
    openSlider: boolean,
    setOpenSlider: React.Dispatch<React.SetStateAction<boolean>>,
    navbarData: INavItem[],
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>
}

export const Navbar: FunctionComponent<INavbar> = (p) => {

    const [hover, setHover] = useState(false);

    return (
        <StyledNavbar>
            <motion.div
            onHoverStart={() => setHover(!hover)}
            onHoverEnd={() => setHover(!hover)}>
                <Link to="/" className="logo-wrapper">
                    <AnimatedLine hover={hover} />
                    <h1>Bobby <br /> Quilacio</h1>
                </Link>  
            </motion.div>
            
            <ul className="nav-item-wrapper">
                {p.navbarData.map(i =>
                    <li ><Link to={`${i.url}`}>
                        <NavItem 
                            key={i.id} 
                            navItem={i} 
                            setActiveNavItem={p.setActiveNavItem} 
                            activeNavItem={p.activeNavItem}
                        />
                    </Link></li>
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

    @media (max-width: 650px) {
        .nav-item-wrapper {
            display: none;
        }

        .logo-wrapper {
            padding-top: 6rem;
        }
    }
`;