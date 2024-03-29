// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';

// Components
import { SlidingMenuItem } from '../components/SlidingMenuItem';
import { Github } from '@styled-icons/bootstrap/';
import { Linkedin } from '@styled-icons/entypo-social';
import { Email } from '@styled-icons/material-sharp/';
import { INavItem } from '../data/navbarData';

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
                        key={i.id}
                        setOpenSlider={p.setOpenSlider}
                        activeNavItem={p.activeNavItem}
                        openSlider={p.openSlider}
                        setActiveNavItem={p.setActiveNavItem}
                        navItem={i}>    
                    </SlidingMenuItem>
                )}
            </div>
            <div className="socials-wrapper">
                <a className="social-link" target="_blank" rel="noreferrer" href="https://github.com/bobby-dq"><Github size="3rem" color="black"></Github></a>
                <a className="social-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/quilaciob/"><Linkedin size="3rem" color="black"></Linkedin></a>
                <a className="social-link" href="mailto: josh.quilacio@gmail.com"><Email size="3rem" color="black"></Email></a>
            </div>
            
        </StyledSlidingMenu>
    );
}

const StyledSlidingMenu = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background: ${theme.dirtyWhite};
    position: sticky;
    top: 0px;
    justify-content: space-between;

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

    @media (max-width: 650px) {
        padding-top: 6rem;

        .socials-wrapper {
            padding-left: 2rem;
        }

        .item-wrapper {
            padding-left: 2rem;
        }
    }



    
`;