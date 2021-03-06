// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';
import { Link } from 'react-router-dom';
import {  motion } from 'framer-motion';

// Components
import { PageHeader } from './PageHeader';
import { PageIndicator} from './PageIndicator';
import { WhiteTextHighlight } from './WhiteTextHighlight';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';

// //Animations
// import { useScroll } from '../styles/useScroll';
// import { loadComponentAnimation } from '../styles/animations';

interface IChapterOne {
    activeNavItem: INavItem
}

export const ChapterOne: FunctionComponent<IChapterOne> = (p) => {
    return (
        <StyledChapterOne>
            <PageIndicator activeNavItem={p.activeNavItem}/>
            <div className="content-wrapper">
                <div className="about-content">
                    <PageHeader title={p.activeNavItem.title}/>
                    <p>Hi, my name is Bobby Quilacio, a Computing Science student at the University of Alberta.
                    I started my development journey by teaching myself Python on May 2020.</p>
                    <p>I then moved on to working with  C# / ASP.NET and Typescript / React. 
                    I also started taking on freelance projects
                    to gain a better grasp of web development. I then founded <a href="https://www.himostudios.com" rel="noreferrer" target="_blank">HIMO | Web Studio</a> 
                    , to combine two of the things I am passionate about - development and photography. I then attended the University of Alberta on Fall 2021 to study 
                    Computing Science. </p> 
                    <p>Outside of school and coding,  I live a somewhat mediocre lifestyle
                    spiced with a little bit of photography, videography, and backpacking trips. When I am
                    not creating something, I go to the
                    gym (if and only if self-determination persists).</p>
                    <p>Here is a list of technologies/languages/libraries i work with:</p>
                    <ul>
                        <li><WhiteTextHighlight text="Javascript and Gatsby"></WhiteTextHighlight></li>
                        <li><WhiteTextHighlight text="Python and Django"></WhiteTextHighlight></li>
                        <li><WhiteTextHighlight text="TypeScript and React"></WhiteTextHighlight></li>
                        <li><WhiteTextHighlight text="C# and ASP.NET"></WhiteTextHighlight></li>
                        <li><WhiteTextHighlight text="HTML and CSS"></WhiteTextHighlight></li>
                        <li><WhiteTextHighlight text="Bootstrap and Tailwind"></WhiteTextHighlight></li>
                    </ul>
                    <p>I am always open to new and exciting opportunities, so if you think we can create something exciting together, please don't hesitate to 
                    to <Link to="/contact">contact</Link> me.</p>
                    
                </div>
            </div>
        </StyledChapterOne>
    )
}

const StyledChapterOne = styled(motion.div)`
    display: flex;
    min-height: 50vh;
    font-family: ${theme.montserrat};
    font-size: ${theme.text};

    .content-wrapper {
        flex: 1 1 66.67%;
    }

    .about-content{
        
        p {
            margin-top: 2rem;
            font-size: 1.6rem;
        }

        a {
            text-decoration: underline;
            transition: all 0.33s ease;
            &:hover {
                color: rgba(255, 0, 0, 1);
            }
        }
    }

    @media (max-width: 650px) {
        flex-direction: column;
    }
`;