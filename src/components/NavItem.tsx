// Packages
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// Components
import { AnimatedNavLine } from './AnimatedLine';

interface INavItemComponent {
    navItem: INavItem,
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>
}

export const NavItem: FunctionComponent<INavItemComponent> = (p) => {
    const url = useLocation().pathname;
    const [hover, setHover] = useState(false);

    return (
        <StyledNavItem 
            onClick={() => p.setActiveNavItem(p.navItem)} 
            onHoverStart={ () => setHover(!hover)}
            onHoverEnd={ () => setHover(!hover)}>
            <AnimatedNavLine hover={hover}></AnimatedNavLine>
            <div className={`${url === p.navItem.url ? 'active' : ''}`}>
                <p className="nav-item-title">{p.navItem.title}</p>
                <p>{p.navItem.subTitleOne}</p>
                <p>{p.navItem.subTitleTwo}</p>
                <p className="nav-item-index">{p.navItem.index}</p>
            </div>
            
        </StyledNavItem>
    );
} 

const StyledNavItem = styled(motion.div)`
    margin-left: 2rem;
    font-family: ${theme.montserrat};
    font-size: ${theme.smallText};
    width: 10rem;
    transition: all 0.33s ease;

    .nav-item-title {
        font-weight: bold;
        padding: 0.5rem 0rem 1rem 0rem;
    }

    .nav-item-index {
        font-family: ${theme.playfair};
        font-weight: bold;
        padding-top: 1rem;
        
    }

    .active {
        color: rgb(255, 0, 0);
    }
`;


