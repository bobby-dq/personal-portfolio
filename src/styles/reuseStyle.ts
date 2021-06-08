import styled from 'styled-components';
import { themeStyles as theme } from './globalStyle';
import { motion } from 'framer-motion';

export const StyledLine = styled(motion.div)`
    height: 0.33rem;
    width: 100%;
    background: ${theme.dirtyWhite};
`;

export const StyledRedLine = styled(motion.div)`
    height: 0.33rem;
    width: 100%;
    left: 0%;
    position: absolute;
    background: rgb(255, 0, 0);
`;
