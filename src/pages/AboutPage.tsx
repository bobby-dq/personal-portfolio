// Packages
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { INavItem } from '../data/navbarData';

// Components
import { ChapterOne } from '../components/ChapterOne';
import { NextPage } from '../components/NextPage';

interface IAboutPage {
    activeNavItem: INavItem,
    setActiveNavItem: React.Dispatch<React.SetStateAction<INavItem>>,
    nextNavItem: INavItem,
}


export const AboutPage: FunctionComponent<IAboutPage> = (p) => {

    return (
        <StyledAboutPage>
            <ChapterOne activeNavItem={p.activeNavItem} />
            <NextPage nextNavItem={p.nextNavItem} setActiveNavItem={p.setActiveNavItem}></NextPage>
        </StyledAboutPage>
    );
};

const StyledAboutPage = styled.div`
    padding-top: 10rem;
`;