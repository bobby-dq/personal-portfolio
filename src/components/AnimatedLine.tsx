// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

// Styles
import { StyledLine, StyledRedLine } from '../styles/reuseStyle';

interface IAnimatedLine {
    hover: boolean;
}

export const AnimatedLine: FunctionComponent = () => {
    const [element, view] = useInView();

    return (
        <StyledAnimatedLine ref={element}>
            <StyledRedLine 
                animate={{x: `${view ? '0%' : '-200%'}`}}
                transition={{duration: 0.5, delay: 0.33}}>
            </StyledRedLine>
            <StyledLine 
                animate={{x: `${view ? '100%' : '0%'}`}}
                transition={{duration: 0.5, delay: 0.25 }}>
            </StyledLine>
        </StyledAnimatedLine>
    );
}

export const AnimatedNavLine: FunctionComponent<IAnimatedLine> = (p) => {
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
