// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

// Components
import { SlidingMenuItem } from '../components/SlidingMenuItem'
import { Github, Discord } from '@styled-icons/bootstrap/'
import { Linkedin } from '@styled-icons/entypo-social';
import { Email } from '@styled-icons/material-sharp/';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// Images


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
            <div className="item-wrapper">
                {p.navbarData.map( i =>
                    <SlidingMenuItem
                        setOpenSlider={p.setOpenSlider}
                        activeNavItem={p.activeNavItem}
                        setActiveNavItem={p.setActiveNavItem}
                        navItem={i}>    
                    </SlidingMenuItem>
                )}
            </div>
            <div className="socials-wrapper">
                <a className="social-link" href="#"><Github size="3rem" color="black"></Github></a>
                <a className="social-link" href="#"><Discord size="3rem" color="black"></Discord></a>
                <a className="social-link" href="#"><Linkedin size="3rem" color="black"></Linkedin></a>
                <a className="social-link" href="#"><Email size="3rem" color="black"></Email></a>
            </div>
            
        </StyledSlidingMenu>
    );
}

const StyledSlidingMenu = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: ${theme.dirtyWhite};

    .item-wrapper {
        padding-left: 10rem;
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .socials-wrapper {
        margin: 5rem 0rem;
        padding-left: 10rem;
        display: flex;
        justify-content: flex-start

    }
    .social-link {
        margin-right: 2rem;
    }



    
`;