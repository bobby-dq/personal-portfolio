// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../images/icons/logo-solid-black.png'

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// Animations
import { loadingPageAnimation, loadingDivAnimation, heroTextAnimation } from '../styles/animations';

export const LoadingScreen: FunctionComponent = () => {
    return (
            <StyledLoadingScreen variants={loadingPageAnimation} initial="before" animate="after">
                
                <motion.div variants={loadingDivAnimation} className="section section1"></motion.div>
                <motion.div variants={loadingDivAnimation} className="section section2"><img src={logo} alt="Bobby Quilacio"></img></motion.div>
                <motion.div variants={loadingDivAnimation} className="section section3"><motion.h1 variants={heroTextAnimation}>Bobby Quilacio</motion.h1></motion.div>
                <motion.div variants={loadingDivAnimation} className="section section1"></motion.div>
            
            </StyledLoadingScreen>
        
    );
}

const StyledLoadingScreen = styled(motion.div)`
   position: fixed;
   width: 100%;
   height: 100%;
   left: 0%;
   top: 0%;
   z-index: 10;
   .section {
       width: 100%;
       height: 25vh;
       background: ${theme.darkGray};
   }

   .section2 {
       display: flex;
       align-items: center;
       justify-content: center;
       padding: 5rem;
       img {
           width: 20vh;
       }
    }

   .section3 {
        overflow: hidden;
        position: relative;
        h1 {
            font-family: ${theme.playfair};
            font-size: ${theme.subHeader};
            font-weight: bold;
            color: ${theme.darkGray};
            text-align: center;
        }
        
   }

`;