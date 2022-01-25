// Packages
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { IWork } from '../data/workData';
import { motion } from 'framer-motion';
import { Github } from '@styled-icons/bootstrap/';
import { LinkExternal } from '@styled-icons/boxicons-regular/';
import { ChevronDown } from '@styled-icons/boxicons-regular';
import { ChevronUp } from '@styled-icons/boxicons-regular';

// Components
import { AnimatedLine } from './AnimatedLine';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// //Animations
// import { useScroll } from '../styles/useScroll';
// import { loadComponentAnimation } from '../styles/animations';

interface IWorkItem {
    workItem: IWork
}

export const WorkItem: FunctionComponent<IWorkItem> = (p) => {

    const [showPhoto, setShowPhoto] = useState(false);

    return (
        <StyledWorkItem layout>
            <motion.div className="title" layout>
                <h1>{p.workItem.title}</h1>
            </motion.div>
            <motion.div className="details" layout>
                <motion.p layout>{p.workItem.description}</motion.p>
                <div className="image-wrapper" style={{display:`${showPhoto ? 'block' : 'none'}`}}>
                    <img src={p.workItem.photo} alt={p.workItem.title} />
                </div>
            </motion.div>
            <motion.ul className="technologies" layout>
                {p.workItem.technologies.map(t => <li>+ {t}</li>)}
            </motion.ul>
            <motion.div className="links" layout>
                <div className="external">
                    {p.workItem.liveUrl && <a className="live-url" href={p.workItem.liveUrl} target="_blank" rel="noreferrer">
                        <LinkExternal color="rgba(255, 0, 0, 1)" size="3rem" />
                    </a>}
                    {p.workItem.githubRepo && <a className="github-repo" href={p.workItem.githubRepo} target="_blank" rel="noreferrer">
                        <Github color="rgba(255, 0, 0, 1)" size="3rem" />
                    </a>}
                </div>
                
                <div className="expand" onClick={() => {setShowPhoto(!showPhoto)}}>   
                    {!showPhoto ? <p>Show Photo <ChevronDown color="rgba(255, 0, 0, 1)" size="3rem"/></p> : <p>Hide Photo <ChevronUp color="rgba(255, 0, 0, 1)" size="3rem"/></p> }
                </div>
                
            </motion.div>
            <AnimatedLine></AnimatedLine>
        </StyledWorkItem>
    );
}


const StyledWorkItem = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    font-size: ${theme.text};

    .title {
        display: flex;
        justify-content: space-between;
        align-content: center;
    }

    .expand {
        color: ${theme.lightGray};
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        cursor: pointer; 
    }

    .image-wrapper {
        transition: all 0.33s ease;     
        padding-bottom: 2rem;
        width: 100%;
        img {
            width: 100%
        }
    }

    h1 {
        font-family: ${theme.playfair};
        font-size: 3.6rem;
        font-weight: lighter;
        padding-bottom: 2rem;
    }

    p {
        padding-bottom: 2rem;
        font-weight: lighter;
        font-size: 1.6rem;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 2rem;
    }

    li {
        padding-right: 2rem;
        font-size: 1.6rem;
    }

    .links {
        display:flex;
        justify-content: space-between;
        margin-bottom: 2rem;

        .live-url {
            margin-right: 2rem;
        }
    }
`;
