// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Illustrations
import brandLogo from '../images/icons/logo-solid.png';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

//Animations
import {  divWrapperAnimation, heroTextAnimation } from '../styles/animations';

export const Hero: FunctionComponent = () => {

    return (
        <StyledHero>
            <motion.div className="text-wrapper" variants={divWrapperAnimation}>
                <div className="text text1"><motion.p variants={heroTextAnimation}>Hello my name is</motion.p></div>
                <div className="text text2"><motion.h1 variants={heroTextAnimation}>Bobby</motion.h1></div>
                <div className="text text2"><motion.h1 variants={heroTextAnimation}>Quilacio</motion.h1></div>
                <div className="text text3"><motion.p variants={heroTextAnimation}>and I am a</motion.p></div>
                <div className="text text4"><motion.h1 variants={heroTextAnimation}>Developer</motion.h1></div>
            </motion.div>
        </StyledHero>
    );
}

const StyledHero = styled(motion.div)`
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

    .text {
        position: relative;
        overflow: hidden;
    }

    h1 {
        font-size: ${theme.pageHeader};
        font-family: ${theme.montserrat};
        transition: all ease 0.33s;
        &:hover {
            color:red;
        }
    }

    .text3 {
        margin-top: 2.4rem;
    }

    @media (max-width: 650px) {
        min-height: 50vh;
        align-items: flex-start;
        .text-wrapper {
            width: 100%;
        }

       

        
    }

    @media (max-width: 900px) {
         h1 {
            font-size: ${theme.subHeader}
        }
    }
`;