// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';

// Styles
import { themeStyles as theme } from '../styles/globalStyle';
import { StyledLine } from '../styles/reuseStyle';

interface IPageHeader{
    title: string
}

export const PageHeader: FunctionComponent<IPageHeader> = (p) => {
    return (
        <StyledPageHeader>
            <h1>{p.title}</h1>
            <StyledLine></StyledLine>
        </StyledPageHeader>
    )
    
}

const StyledPageHeader = styled.div`
    h1 {
        word-wrap: break-word;
        font-family: ${theme.playfair};
        font-size: ${theme.pageHeader};
    }
`;