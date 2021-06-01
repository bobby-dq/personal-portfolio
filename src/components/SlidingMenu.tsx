// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

// Components
import { SlidingMenuItem } from '../components/SlidingMenuItem'

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

interface ISlidingMenu {
    openSlider: boolean,
    setOpenSlider: React.Dispatch<React.SetStateAction<boolean>>,
    navbarData: INavItem[],
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>
}

export const SlidingMenu: FunctionComponent<ISlidingMenu> = (p) => {

    return (
        <StyledSlidingMenu>
            {p.navbarData.map( i =>
                <SlidingMenuItem
                    setOpenSlider={p.setOpenSlider}
                    activeNavItem={p.activeNavItem}
                    setActiveNavItem={p.setActiveNavItem}
                    navItem={i}>    
                </SlidingMenuItem>
            )}
        </StyledSlidingMenu>
    );
}

const StyledSlidingMenu = styled.div`
    display: flex;
    flex-direction: column;
    background: ${theme.dirtyWhite};
    width: 100%;
    min-height: 100vh;
`;