// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';
import { StyledLine } from '../styles/reuseStyle';

export const Technologies: FunctionComponent = () => {

    return (
        <StyledTechnologies>
            <div className="header-title">
                <h1>Technologies</h1> 
                <StyledLine></StyledLine>
            </div>
            <div className="content">
                <div className="text-wrapper">
                    <p>Here is a list of technologies/languages/libraries i work with:</p>
                    <ul>
                        <li>+ Python and Django</li>
                        <li>+ C# and ASP.NET</li>
                        <li>+ TypeScript and React</li>
                        <li>+ HTML and CSS</li>
                        <li>+ Javascript</li>
                        <li>+ Bootstrap and Tailwind</li>
                    </ul>
                </div>
                <div className="grid-wrapper">

                </div>
            </div>
            
        </StyledTechnologies>
    )
}

const StyledTechnologies = styled.div`
    padding-top: 10rem;
    h1 {
        font-weight: 400;
    }
`;