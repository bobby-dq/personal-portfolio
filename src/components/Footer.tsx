// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Github } from '@styled-icons/bootstrap/';
import { Linkedin } from '@styled-icons/entypo-social';
import { Email } from '@styled-icons/material-sharp/';
import { Discord } from '@styled-icons/fa-brands';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// Components
import { AnimatedLine } from './AnimatedLine';

export const Footer: FunctionComponent = () => {
    return (
        <StyledFooter>
            <AnimatedLine></AnimatedLine>

            <div className="social-wrapper top-social">
                <h1>Bobby Quilacio</h1>
            </div>
            <div className="social-wrapper">
                <a href="https://github.com/bobby-dq" target="_blank" rel="noreferrer" className="social">
                    <Github size="3rem" color="red" />
                    <p>bobby-dq</p>
                </a>
            </div>
            <div className="social-wrapper">
                <a href="https://www.linkedin.com/in/quilaciob/" target="_blank" rel="noreferrer" className="social">
                    <Linkedin size="3rem" color="red" />
                    <p>Bob Joshua Quilacio</p>
                </a>
            </div>
            <div className="social-wrapper">
                <a href="mailto: josh.quilacio@gmail.com" target="_blank" rel="noreferrer" className="social">
                    <Email size="3rem" color="red" />
                    <p>josh.quilacio@gmail.com</p>
                </a>
            </div>
            <div className="social-wrapper">
                <a href="https://discord.com/login" target="_blank" rel="noreferrer" className="social">
                    <Discord size="3rem" color="red" />
                    <p>bc0ii#4842</p>
                </a>
            </div>
            <div className="social-wrapper">
                <p>Copyright © 2022 - Bobby Quilacio. All Rights Reserved</p>
            </div>
        </StyledFooter>
        
    )
}

const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 50vh;
    justify-content: flex-start;

    padding-top: 5rem;

    h1 {
        margin-bottom: 2rem ;
        font-size: ${theme.subHeader};
    }

    .top-social {
        padding-top: 2rem;
    }
    .social {
        font-family: ${theme.montserrat};
        font-size: ${theme.text};  
        display: flex;
        margin-bottom: 2rem;
        align-items: center;
        transition: all 0.33s ease;
        cursor: pointer;

        &:hover {
            color: red;
        }
        p {
            margin-left: 3rem;

        }


    }
    p {
        font-size: 2.4rem;
        margin-bottom: 1rem;
    }
`;

