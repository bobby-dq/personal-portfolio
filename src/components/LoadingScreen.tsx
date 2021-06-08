// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// Animations
import { loadingPageAnimation, loadingTextAnimation } from '../styles/animations';

export const LoadingScreen: FunctionComponent = () => {
    return (
            <StyledLoadingScreen variants={loadingPageAnimation} initial="before" animate="after">
                
                <div className="section section1"></div>
                <div className="section section1"></div>
                <div className="section section1"></div>
                <div className="section section1"></div>
                <div className="section section1"></div>
            
            </StyledLoadingScreen>
        
    );
}

const StyledLoadingScreen = styled(motion.div)`
   position: fixed;
   width: 100%;
   height: 100%;
   left: 0%;
   top: 0%;
   .section {
       width: 100%;
       background: ${theme.dirtyWhite}
   }

`;