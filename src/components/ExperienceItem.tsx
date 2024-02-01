// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Github } from '@styled-icons/bootstrap/';
import { LinkExternal } from '@styled-icons/boxicons-regular/';
import { ChevronDown } from '@styled-icons/boxicons-regular';
import { ChevronUp } from '@styled-icons/boxicons-regular';

// Components
import { AnimatedLine } from './AnimatedLine';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';
import { IExperience } from '../data/experienceData';
import { WhiteTextHighlight } from './WhiteTextHighlight';


interface IExperienceItem {
    expItem: IExperience
}

export const ExperienceItem: FunctionComponent<IExperienceItem> = (p) => {

    return (
        <StyledExperienceItem layout>
            <motion.div className="title" layout>
                <h1>{p.expItem.jobTitle} - {p.expItem.company}</h1>
            </motion.div>
            <motion.p className="date" layout>
                {p.expItem.startDate} - {p.expItem.endDate}
            </motion.p>
            <motion.p className="description" layout>
                {p.expItem.description}
            </motion.p>
            <AnimatedLine></AnimatedLine>
        </StyledExperienceItem>
    );
}


const StyledExperienceItem = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    font-size: ${theme.text};

    .expand {
        color: ${theme.lightGray};
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        cursor: pointer; 
    }

    h1 {
        font-family: ${theme.playfair};
        font-size: 2.5rem;
        font-weight: lighter;
    }

    .date {
        font-size: 1.6rem;
        margin-bottom: 2rem;
        color: red;
    }

    .description {
        padding-bottom: 1rem;
        font-weight: lighter;
        font-size: 1.6rem;
        margin-bottom: 2rem;
    }
`;
