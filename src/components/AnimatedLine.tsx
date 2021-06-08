// Packages
import { FunctionComponent, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

// Styles
import { StyledLine, StyledRedLine } from '../styles/reuseStyle';

// Animation 
import { hoveredLineAnimation } from '../styles/animations';

interface IAnimatedLine {
    hover: boolean;
}

export const AnimatedLine: FunctionComponent<IAnimatedLine> = (p) => {
    const animate = useAnimation();
    return (
        <StyledAnimatedLine>
            <StyledRedLine 
                animate={{x: `${p.hover ? '0%' : '-200%'}`}}
                transition={{duration: 0.33}}>
            </StyledRedLine>
            <StyledLine 
                animate={{x: `${p.hover ? '100%' : '0%'}`}}>
            </StyledLine>
        </StyledAnimatedLine>
    );
}

const StyledAnimatedLine = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    position: relative;
    width: 100%;
`;
