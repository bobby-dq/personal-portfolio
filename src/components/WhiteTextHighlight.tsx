// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Styles
import {themeStyles as theme } from '../styles/globalStyle';

interface IWhiteTextHighlight {
    text: string,
}

export const WhiteTextHighlight: FunctionComponent<IWhiteTextHighlight> = (p) => {
    
    const [element, view] = useInView({threshold: 0.5});

    return (
        <StyledWhiteTextHighlight>
            <motion.span 
                ref={element} 
                animate={{width: `${view ? '100%' : '0%'}`}} 
                transition={{ duration: 0.33, delay: 0.1}} 
                className="white-box">
            </motion.span>
            <span className="text">{p.text}</span>       
        </StyledWhiteTextHighlight>
    );

}

const StyledWhiteTextHighlight = styled(motion.div)`
    font-size: ${theme.text};
    padding: 0.5 0.5rem 0.5rem 0.5rem;
    margin: 0.5rem 0.5rem 1.5rem 0rem;
    position: relative;
    height: ${theme.text};

    &:hover {
        .text {
            color: red;
        }
        
    }

    .text {
        position: absolute;
        color: ${theme.darkGray};
        left: 0%;
        top: 0%;
        transition: all 0.33s ease;
        font-family: ${theme.playfair};
        font-weight: bold;
        padding: 0rem 1rem;
        
    }

    .white-box {
        display: inline-block;
        height: 3.4rem;
        width: 0%;
        position: absolute;
        left: 0;
        top: 0;
        background: ${theme.dirtyWhite};
    }
`;