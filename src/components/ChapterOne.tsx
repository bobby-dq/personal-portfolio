// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';
import { Link } from 'react-router-dom';

// Components
import { PageHeader } from './PageHeader';
import { PageIndicator} from './PageIndicator';


// Styles
import { themeStyles as theme } from '../styles/globalStyle';

interface IChapterOne {
    activeNavItem: INavItem
}

export const ChapterOne: FunctionComponent<IChapterOne> = (p) => {

    return (
        <StyledChapterOne>
            <PageIndicator activeNavItem={p.activeNavItem}/>
            <div className="content-wrapper">
                <div className="about-content">
                    <PageHeader title={p.activeNavItem.title} />
                    <p>Hi, my name is Bobby Quilacio and I am a full-stack developer.
                    I started my web development journey on May 2020 with 
                    Python / Django.</p>
                    <p>I then moved on to working with  C# / ASP.NET and Typescript / React. 
                    I also started taking on freelance projects (which are showcased
                    in the next chapter, alongside personal projects) 
                    to gain a better grasp of web development. </p>
                    <p>Outside of web development, I live a somewhat mediocre lifestyle
                    spiced with a little bit of photography and videography. When I am
                    not creating something, I like to read books, or go to the
                    gym (if and only if self-determination persists).</p>
                    <p>Here is a list of technologies/languages/libraries i work with:</p>
                    <ul>
                        <li>+ Python and Django</li>
                        <li>+ C# and ASP.NET</li>
                        <li>+ TypeScript and React</li>
                        <li>+ HTML and CSS</li>
                        <li>+ Javascript</li>
                        <li>+ Bootstrap and Tailwind</li>
                    </ul>
                    <p>If you think we create something together, don’t hesitate 
                    to <Link to="/contact">contact</Link> me.</p>
                    
                </div>
            </div>
        </StyledChapterOne>
    )
}

const StyledChapterOne = styled.div`
    display: flex;
    min-height: 100vh;
    font-family: ${theme.montserrat};
    font-size: ${theme.text};

    .content-wrapper {
        flex: 1 1 66.67%;
    }

    .about-content{
        
        p {
            margin-top: 2rem;
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