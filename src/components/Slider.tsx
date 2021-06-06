// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';
import { Link } from 'react-router-dom';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';
// Images
import logo from '../images/icons/logo-solid.png'

interface ISlider {
    openSlider: boolean,
    setOpenSlider: React.Dispatch<React.SetStateAction<boolean>>,
    activeNavItem: INavItem,
}

export const Slider: FunctionComponent<ISlider> = (p) => {

    return (
        <StyledSlider>
            <Link to="/" className="logo-wrapper">
                <img src={logo} alt="Bobby-Quilacio" />
            </Link>
            <div className="burger-wrapper" onClick={() => p.setOpenSlider(!p.openSlider)}>
                <div className="burger">
                    <div className="line line 1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div>
            </div>
            
            <div className="page-description">
                <p><span className="title">{p.activeNavItem.title} -</span> {p.activeNavItem.subTitleOne} {p.activeNavItem.subTitleTwo}</p>
            </div>
        </StyledSlider>
    );
}

const StyledSlider = styled.div`
    background: ${theme.dirtyWhite};
    color: ${theme.darkGray};
    width: 5rem;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    z-index: 2;
    transition: all 0.5s ease;

    &:hover {
        filter: invert(1);
    }

    .logo-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        height: 33.33%;
        img {
            height: 3.6rem;
            width: 3.6rem;
        }
    }

    .burger-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 33.33%;
        cursor: pointer;

        .burger {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 40%;
        }
        .line {
            background: ${theme.darkGray};
            height: 3.6rem;
            width: 0.2rem;
        }
    }

    

    .page-description {
        writing-mode: vertical-rl;
        text-orientation: sideways;
        transform: rotate(-180deg);
        font-family: ${theme.montserrat};
        font-size: ${theme.smallText};
        height: 33.33%;


        .title {
            font-family: ${theme.playfair};
            font-weight: bold;
        }
    }

    @media (max-width: 650px) {
        max-height: 5rem;
        width: 100%;
        flex-direction: row;
        position: fixed;
        top: 0px;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;

        .page-description {
            writing-mode: horizontal-tb;
            text-orientation: upright;
            transform: rotate(0deg);
        }

        .burger-wrapper, .logo-wrapper{
            height: 5rem;
            width: 10%;
        }

        .burger-wrapper {
            order: 3;
        }

        .burger {
            flex-direction: column;
            height: 40%;


            .line {
                height: 0.3rem;
                width: 3.6rem;
            }
        }

        .logo-wrapper {
            order: 1;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 0.5rem;
        }

        .page-description {
            width: 80%;
            order: 2;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 1rem;
        }
    }


`;