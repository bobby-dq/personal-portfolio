// Packages
import { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { IWork } from '../data/workData';
import { motion } from 'framer-motion';

// Packages
import { Github } from '@styled-icons/bootstrap/';
import { LinkExternal } from '@styled-icons/boxicons-regular/';
import { ChevronDown } from '@styled-icons/boxicons-regular';
import { ChevronUp } from '@styled-icons/boxicons-regular';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';
import { StyledLine } from  '../styles/reuseStyle';

interface IWorkItem {
    workItem: IWork
}

export const WorkItem: FunctionComponent<IWorkItem> = (p) => {

    const [showPhoto, setShowPhoto] = useState(false);

    return (
        <StyledWorkItem layout>
            <motion.div className="title" layout>
                <h1>{p.workItem.title}</h1>
                <div className="expand" onClick={() => {setShowPhoto(!showPhoto)}}>
                    <p >
                        {!showPhoto ? <p>Show Photo <ChevronDown color={theme.lightGray} size="3rem"/></p> : <p>Hide Photo <ChevronUp color={theme.lightGray} size="3rem"/></p> }
                    </p>
                </div>
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
                        <LinkExternal color={theme.dirtyWhite} size="3rem" />
                    </a>}
                    {p.workItem.githubRepo && <a className="github-repo" href={p.workItem.githubRepo} target="_blank" rel="noreferrer">
                        <Github color={theme.dirtyWhite} size="3rem" />
                    </a>}
                </div>
                
            </motion.div>
            <SLine></SLine>
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
        cursor: n-resize;
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
        font-size: ${theme.subHeader};
        font-weight: lighter;
        padding-bottom: 2rem;
    }

    p {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 2rem;
    }

    li {
        padding-right: 2rem;
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

const SLine = styled(StyledLine)`
    background: ${theme.lightGray};
`;