// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';

// Illustrations
import brandLogo from '../images/icons/logo-solid.png';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

export const Hero: FunctionComponent = () => {

    return (
        <StyledHero>
            <div className="text-wrapper">
                <div className="text text1"><p>Hello my name is,</p></div>
                <div className="text text2"><h1>Bobby Quilacio</h1></div>
                <div className="text text3"><p>and I am a</p></div>
                <div className="text text4"><h1>Full-Stack Developer</h1></div>
            </div>
        </StyledHero>
    );
}

const StyledHero = styled.div`
    min-height: 80vh;
    background:url(${brandLogo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left;
    font-family: ${theme.playfair};
    font-size: ${theme.text};
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .text-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 66.67%;
        margin-left: auto;
    }

    h1 {
        font-size: ${theme.subHeader};
        font-family: ${theme.montserrat};
    }

    .text3 {
        margin-top: 2.4rem;
    }
`;