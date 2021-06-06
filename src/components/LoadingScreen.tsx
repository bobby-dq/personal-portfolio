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
                
                <motion.div variants={loadingTextAnimation} className="text bobby montserrat">Bobby Quilacio</motion.div>
                <motion.div variants={loadingTextAnimation} className="text bobby">Bobby</motion.div>
                <motion.div variants={loadingTextAnimation} className="text quilacio">Quilacio</motion.div>
                <motion.div variants={loadingTextAnimation} className="text montserrat quilacio">Quilacio</motion.div>
            
            </StyledLoadingScreen>
        
    );
}

const StyledLoadingScreen = styled(motion.div)`
    background: ${theme.dirtyWhite};
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    .text {
        color: ${theme.darkGray};
        font-size: ${theme.subHeader}
    }

    .quilacio {
        margin-left: 2rem;
    }

    .montserrat {
        font-family: ${theme.montserrat};
    }

`;